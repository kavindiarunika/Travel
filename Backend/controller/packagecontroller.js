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

    // Access uploaded files (array: image1, image2, image3, image4)
    const subImage1 = req.files.subImage1 && req.files.subImage1[0];
    const subImage2 = req.files.subImage2 && req.files.subImage2[0];
    const subImage3 = req.files.subImage3 && req.files.subImage3[0];
    const subImage4 = req.files.subImage4 && req.files.subImage4[0];

    const subImages = [subImage1, subImage2, subImage3, subImage4].filter(Boolean);

    const subImageUrls = await Promise.all(
      subImages.map(async (img) => {
        const result = await cloudinary.uploader.upload(img.path, {
          resource_type: 'image'
        });
        return result.secure_url;
      })
    );

    
    const mainImage = req.files.image && req.files.image[0];
    const mainImageUrl = mainImage
      ? (await cloudinary.uploader.upload(mainImage.path)).secure_url
      : '';

   

    const newPackage = new packageModel({
      _id,
      name,
      subImage: subImageUrls,
      visitingPlaces: visitingPlaces.split(','),
      includes,
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
