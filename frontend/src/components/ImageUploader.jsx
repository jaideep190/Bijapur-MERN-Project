import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadImage } from '../slices/imageSlice';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async () => {
      const imageData = new FormData();
      imageData.append('image', file);

      dispatch(uploadImage(imageData));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
};

export default ImageUploader;
