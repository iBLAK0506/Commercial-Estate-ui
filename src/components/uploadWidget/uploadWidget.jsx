import { useEffect, useRef } from "react";
import "./uploadWidget.scss";

function UploadWidget({ onUploadSuccess }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  // This runs once when the component mounts to create the widget instance
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dzgjmb2ye", // <-- PASTE YOUR CLOUD NAME HERE
        uploadPreset: "estate-upload", // <-- PASTE YOUR UPLOAD PRESET HERE
        multiple: true, // Allow multiple image uploads
        folder: "estate_properties", // Optional: organize uploads in a folder on Cloudinary
      },
      function (error, result) {
        // This function is called after an upload action
        if (!error && result.event === "success") {
          console.log(result.info.secure_url);

          // Send all the successful image URLs back to the CreatePage component
          onUploadSuccess([result.info.secure_url]);
        }
      }
    );
  }, [onUploadSuccess]);

  return (
    <button
      type="button"
      onClick={() => widgetRef.current.open()}
      className="upload-button"
    >
      Upload Images
    </button>
  );
}

export default UploadWidget;
