import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  //Append image file to form data
  formData.append("image", imageFile);

  try {
    const response = await axiosInstance.post(
      API_PATHS.IMAGE.UPLOAD_IMAGE,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Set header for file upload
        },
      }
    );
    return response.data; // Return response data
  } catch (error) {
    if (error.response) {
      console.error("Upload failed with response:", error.response.data);
    } else {
      console.error("Error uploading the image:", error.message);
    }
    throw error; // Để nó vẫn báo lỗi lên phía trên
  }
};

export default uploadImage;
