import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";  // Import toastify

function Onrent() {
    const [formData, setFormData] = useState({
        toolName: "",
        location: "",
        price: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent form from resetting or reloading page

        const data = new FormData();
        data.append("toolName", formData.toolName);
        data.append("location", formData.location);
        data.append("price", formData.price);
        data.append("image", formData.image);

        try {
            const response = await axios.post("https://farmease-dxu4.onrender.com/api/upload", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            // Show success notification using Toastify
            toast.success("Upload successful!");
            console.log("✅ Upload success:", response.data);

            // Optionally reset form after successful submission
            setFormData({
                toolName: "",
                location: "",
                price: "",
                image: null,
            });
        } catch (error) {
            // Show error notification using Toastify
            toast.error("Upload failed! Please try again.");
            console.error("❌ Upload failed:", error);
        }
    };

    return (
        <div>
            <h2>Upload Tool for Rent</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="toolName"
                    placeholder="Tool Name"
                    value={formData.toolName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default Onrent;
