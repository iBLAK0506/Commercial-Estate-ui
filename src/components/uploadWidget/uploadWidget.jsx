import React from "react";
import "./uploadWidget.scss"; // We'll create this next

function UploadWidget({ onUploadSuccess }) {
  // This function will eventually open the real Cloudinary widget
  const handleUploadClick = () => {
    console.log("Upload button clicked!");
    // Placeholder: Simulate a successful upload after 2 seconds
    setTimeout(() => {
      const fakeUrls = ["/bg.png"]; // A fake image URL for testing
      onUploadSuccess(fakeUrls);
    }, 2000);
  };

  return (
    <button type="button" onClick={handleUploadClick} className="upload-button">
      Upload Images
    </button>
  );
}

export default UploadWidget;
