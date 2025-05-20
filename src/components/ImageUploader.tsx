import React, { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (imageDataUrl: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.match('image.*')) {
      alert('Please select an image file');
      return;
    }

    const reader = new FileReader();
    
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreviewUrl(result);
      onImageUpload(result);
    };
    
    reader.readAsDataURL(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const clearImage = () => {
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    onImageUpload('');
  };

  return (
    <div className="w-full">
      {previewUrl ? (
        <div className="relative border border-gray-700 rounded-lg overflow-hidden bg-gray-900">
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="w-full h-48 object-contain"
          />
          <button
            onClick={clearImage}
            className="absolute top-2 right-2 bg-gray-800 p-1.5 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
            aria-label="Remove image"
          >
            <X size={18} className="text-gray-200" />
          </button>
          <p className="text-center py-2 text-sm text-gray-400">Click the X to remove or choose another logo</p>
        </div>
      ) : (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive 
              ? "border-purple-500 bg-purple-500/10" 
              : "border-gray-700 hover:border-purple-400 hover:bg-gray-800/50"
          }`}
        >
          <Upload className="mx-auto mb-4 text-gray-400" />
          <p className="mb-2 text-gray-300">Drag and drop your logo here</p>
          <p className="mb-4 text-sm text-gray-500">or</p>
          <button
            onClick={handleButtonClick}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg py-2 px-4 font-medium transition-colors shadow-lg"
          >
            Choose File
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;