import React, { useState, useRef, useEffect } from 'react';
import { Download, Upload } from 'lucide-react';
import ImageUploader from './ImageUploader';
import CardPreview from './CardPreview';
import TextEditor from './TextEditor';
import { CardTemplate } from '../types/card';
import { defaultTemplate } from '../data/cardTemplates';

const CardDesigner: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [template, setTemplate] = useState<CardTemplate>(defaultTemplate);
  const [isGenerating, setIsGenerating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = (imageDataUrl: string) => {
    setImage(imageDataUrl);
  };

  const handleTextChange = (field: keyof CardTemplate['text'], value: string) => {
    setTemplate(prev => ({
      ...prev,
      text: {
        ...prev.text,
        [field]: value
      }
    }));
  };

  const downloadCard = async () => {
    if (!cardRef.current) return;
    
    try {
      setIsGenerating(true);
      
      const htmlToImage = await import('html-to-image');
      
      const dataUrl = await htmlToImage.toPng(cardRef.current, {
        quality: 0.95,
        pixelRatio: 2
      });
      
      const link = document.createElement('a');
      link.download = 'sbt-card.png';
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
      {/* Card Preview Section */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-6">
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Preview</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-[400px]">
            <CardPreview 
              ref={cardRef}
              template={template} 
              image={image} 
            />
          </div>
        </div>
        
        {!image && (
          <div className="mt-4 text-center text-gray-400">
            <Upload className="mx-auto mb-2 text-gray-500" />
            <p>Upload a logo to customize your card</p>
          </div>
        )}
      </div>

      {/* Controls Section */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-6">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">Upload Logo</h2>
            <ImageUploader onImageUpload={handleImageUpload} />
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-6">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">Customize Card</h2>
            <TextEditor template={template} onTextChange={handleTextChange} />
          </div>
          
          <button
            onClick={downloadCard}
            disabled={!image || isGenerating}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-600 text-white rounded-lg py-3 px-6 font-medium transition-all duration-200 disabled:cursor-not-allowed shadow-lg disabled:shadow-none"
          >
            {isGenerating ? (
              <>Generating...</>
            ) : (
              <>
                <Download size={20} />
                Download Card
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDesigner;