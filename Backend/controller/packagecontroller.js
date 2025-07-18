import packageModel from '../schema/PackageSchema.js';
import cloudinary from '../cloudinary/cloudinary.js';

const addPackage = async (req, res) => {
  try {
    const {
      _id,
      name,
      visitingPlaces,
      includes,
      hotel,
      price,
      duration,
      description,
      MoreDetail
    } = req.body;

    const uploadToCloudinary = async (file) => {
      if (file && file.path) {
        const result = await cloudinary.uploader.upload(file.path, {
          resource_type: 'image'
        });
        return result.secure_url;
      }
      return '';
    };

    const mainImageUrl = await uploadToCloudinary(req.files.find(f => f.fieldname === 'image'));
    const subImageUrls = await Promise.all(
      ['subImage1', 'subImage2', 'subImage3', 'subImage4'].map(fieldname =>
        uploadToCloudinary(req.files.find(f => f.fieldname === fieldname))
      )
    );

    const includesWithImages = await Promise.all(
      (Array.isArray(includes) ? includes : [includes]).map(async (include, index) => {
        const file = req.files.find(
          (f) => f.fieldname === `includes[${index}][image]`
        );
        return {
          name: include.name,
          image: await uploadToCloudinary(file)
        };
      })
    );

    const newPackage = new packageModel({
      _id,
      name,
      subImage: subImageUrls,
      visitingPlaces: visitingPlaces.split(','),
      includes: includesWithImages,
      hotel: hotel.split(','),
      price: Number(price),
      duration,
      image: mainImageUrl,
      description,
      MoreDetail
    });

    await newPackage.save();
    res.json({ success: true, message: 'Package added successfully' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listPackages = async (req, res) => {
  try {
    const packages = await packageModel.find({});
    res.json({ success: true, packages });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const removePackage = async (req, res) => {
  try {
    const { id } = req.body;
    await packageModel.findByIdAndDelete(id);
    res.json({ success: true, message: 'Package removed' });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const singlePackage = async (req, res) => {
  try {
    const { packageId } = req.body;
    const pack = await packageModel.findById(packageId);
    res.json({ success: true, package: pack });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addPackage, listPackages, removePackage, singlePackage };
