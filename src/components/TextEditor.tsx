import React from 'react';
import { CardTemplate } from '../types/card';

interface TextEditorProps {
  template: CardTemplate;
  onTextChange: (field: keyof CardTemplate['text'], value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ template, onTextChange }) => {
  const { text, textStyles } = template;
  
  return (
    <div className="space-y-4">
      {Object.entries(text).map(([key, value]) => {
        const fieldKey = key as keyof typeof text;
        const style = textStyles[fieldKey];
        
        // Only show editable fields (currently only the name field)
        if (fieldKey !== 'name') return null;

        return (
          <div key={fieldKey} className="space-y-2">
            <label 
              htmlFor={`text-${fieldKey}`} 
              className="block text-sm font-medium text-gray-200"
            >
              {style.label}
            </label>
            
            <input
              id={`text-${fieldKey}`}
              type="text"
              value={value}
              onChange={(e) => onTextChange(fieldKey, e.target.value.toUpperCase())}
              placeholder={style.placeholder}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              maxLength={20}
            />
            
            <p className="text-xs text-gray-400">
              {style.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TextEditor;