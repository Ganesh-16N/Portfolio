// MobileAppCard.js

import React from 'react';


const MobileAppCard = ({ id, title, image, description, viewLink, codeLink }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gray-800 pt-4">
        <div className='flex justify-center'>
      <img className="w-44" src={image} alt={title}  />
        </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="mb-2">{"Mobile Application"}</div>
        <p className="text-gray-400 text-base">
          {description.map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </p>
      </div>
      <div className="px-6 py-4">
       {viewLink && <a
          href={viewLink}
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          View
        </a>}
      {codeLink &&  <a
          href={codeLink}
          className="inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Code
        </a>}
      </div>
    </div>
  );
};

export default MobileAppCard;
