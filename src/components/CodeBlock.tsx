import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
  description?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language, 
  title, 
  description 
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="bg-blue rounded-xl p-6 my-6 shadow-lg w-full" style={{ marginLeft: '0px' }}>
      {title && (
        <div className="flex items-center justify-between mb-0.5">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button
            onClick={copyToClipboard}
            className="text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
          >
            {copied ? 'Kopyalandı' : 'Kopyala'}
          </button>
        </div>
      )}
      
      {description && (
        <p className=" mb-4 text-sm text-white">{description}</p>
      )}
      
      <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto">
        <code className={`language-${language} text-pink text-sm`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
