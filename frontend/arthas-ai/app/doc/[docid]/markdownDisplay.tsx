// MarkdownDisplay.js
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownDisplay = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/markdown.md')
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => {
        console.error('Error loading Markdown file:', error);
      });
  }, []);

  return (
    <div className='h-full overflow-y-auto custom-scroll '>
      <ReactMarkdown 
      remarkPlugins={[remarkGfm]} 
      className="!whitespace-normal px-4 markdown"
      >
        {content}
       </ReactMarkdown>
    </div>
  );
};

export default MarkdownDisplay;