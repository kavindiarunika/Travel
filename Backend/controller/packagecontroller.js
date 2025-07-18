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

    const uploadedFiles = req.files;

    const subImage1 = uploadedFiles.find(file => file.fieldname === 'subImage1');
    const subImage2 = uploadedFiles.find(file => file.fieldname === 'subImage2');
    const subImage3 = uploadedFiles.find(file => file.fieldname === 'subImage3');
    const subImage4 = uploadedFiles.find(file => file.fieldname === 'subImage4');
    const mainImage = uploadedFiles.find(file => file.fieldname === 'image');

    const subImages = [subImage1, subImage2, subImage3, subImage4].filter(Boolean);

    const subImageUrls = await Promise.all(
      subImages.map(async (img) => {
        const result = await cloudinary.uploader.upload(img.path, {
          resource_type: 'image'
        });
        return result.secure_url;
      })
    );

    const mainImageUrl = mainImage
      ? (await cloudinary.uploader.upload(mainImage.path)).secure_url
      : '';

    const includesWithImages = await Promise.all(
      (Array.isArray(includes) ? includes : [includes]).map(async (include, index) => {
        const file = uploadedFiles.find(
          (file) => file.fieldname === `includes[${index}][image]`
        );
        const imageUrl = file
          ? (await cloudinary.uploader.upload(file.path)).secure_url
          : '';
        return {
          name: include.name,
          image: imageUrl
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
