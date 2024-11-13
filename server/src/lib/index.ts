import { v2 as cloudinary } from "cloudinary";
import { ParsedEnvVariables } from "../config";

cloudinary.config({
  cloud_name: ParsedEnvVariables.CLOUDINARY_CLOUD_NAME,
  api_key: ParsedEnvVariables.CLOUDINARY_API_KEY,
  api_secret: ParsedEnvVariables.CLOUDINARY_API_SECRET,
});

export default cloudinary;
