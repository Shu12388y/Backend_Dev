const {v2} =require('cloudinary');
const fs=require('fs');


// config the cloudinary server 
v2.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});


// make  a function to upload the file to cloudinary server
const uploadFile=async(filepath)=>{
try {
    if(!filepath) return null;

    const response = await v2.uploader.upload(filepath,{
        resource_type:'auto',
    })
    console.log('file uploaded successfully',response.url)
    return response
} catch (error) {
    fs.unlinkSync(filepath)
    console.error(error)
}
}