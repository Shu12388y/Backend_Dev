const {v2} =require('cloudinary');
const fs=require('fs');

          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});



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