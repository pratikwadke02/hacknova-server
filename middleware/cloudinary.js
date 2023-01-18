const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET,
});

const cloudinaryUploadImage = async (fileToUpload) => {
	try {
		const data = await cloudinary.uploader.upload(fileToUpload, {
			resource_type: 'auto',
		});
		return {
			url: data?.secure_url,
		};
	} catch (error) {
        console.log(error);
		return error;
	}
};

module.exports = {cloudinaryUploadImage};