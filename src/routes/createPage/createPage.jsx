import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../lib/apiClient";
import UploadWidget from "../../components/uploadWidget/UploadWidget.jsx";
import "./createPage.scss"; // Corrected stylesheet import

function CreatePage() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const res = await apiClient.post("/properties", {
        title: data.title,
        price: parseInt(data.price),
        address: data.address,
        city: data.city,
        beds: parseInt(data.beds),
        baths: parseInt(data.baths),
        description: data.description,
        images: images,
        // Add any other fields from your form here
      });
      // Navigate to the newly created property's page
      navigate("/properties/" + res.data.item._id);
    } catch (err) {
      console.error(err);
      setError("Failed to create post. Please fill all fields correctly.");
    }
  };

  return (
    <div className="createPage">
      <div className="formContainer">
        <div className="wrapper">
          <h1>Add New Post</h1>
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" required />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" required />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" required />
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" required />
            </div>
            <div className="item">
              <label htmlFor="beds">Bedroom Number</label>
              <input min={1} id="beds" name="beds" type="number" required />
            </div>
            <div className="item">
              <label htmlFor="baths">Bathroom Number</label>
              <input min={1} id="baths" name="baths" type="number" required />
            </div>
            <div className="item description">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description"></textarea>
            </div>
            <button className="sendButton">Add Post</button>
            {error && <span className="error-message">{error}</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        <h3>Upload Images</h3>
        <UploadWidget
          onUploadSuccess={(uploadedUrls) => setImages(uploadedUrls)}
        />
        <div className="image-previews">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Preview ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
