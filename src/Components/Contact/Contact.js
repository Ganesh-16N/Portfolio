import React from 'react';
import { RiGithubFill, RiLinkedinFill, RiMailFill, RiTwitterFill } from 'react-icons/ri';


const Contact = () => {
  return ( 
    <div className="bg-black text-white py-10">
     <h2 className="text-3xl font-semibold text-center my-8">Contact Me</h2>
      <div className="flex items-center justify-center space-x-6">
        <a href="https://www.linkedin.com/in/ganesh-nagargoje-3a5238231/" className=" text-3xl " target="_blank" rel="noopener noreferrer">
          <RiLinkedinFill className="contact-icon" />
        </a>
        <a href="https://twitter.com/ganunagargoje16" className="text-3xl " target="_blank" rel="noopener noreferrer">
          <RiTwitterFill className="contact-icon" />
        </a>
        <a href="mailto:ganesh.nagargoje045@gmail.com" className="text-3xl ">
          <RiMailFill className="contact-icon" />
        </a>
        <a href="https://github.com/Ganesh-16N" className="text-3xl " target="_blank" rel="noopener noreferrer">
          <RiGithubFill className="contact-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
