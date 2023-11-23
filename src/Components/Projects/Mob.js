// MainComponent.js

import React from 'react';
import MobileAppCard from './MobileAppCard';
import mobileApp1 from "./Photos/mobileApp1.jpeg"; // Replace with the actual path
import mobileApp2 from "./Photos/mobileApp2.jpeg"; // Replace with the actual path

const Mob = () => {

  const projects = [
    {
      id: "TicTacToe",
      title: "Tic Tac Toe",
      image: mobileApp2,
      description: ["Crafted an engaging React Native Tic Tac Toe game application for Android, featuring a user-friendly interface."],
    //   viewLink: "https://github.com/Ganesh-16N/TicTacToe",
      codeLink: "https://github.com/Ganesh-16N/TicTacToe",
    },
    {
      id: "PasswordGenerator",
      title: "Password Generator",
      image: mobileApp1,
      description: ["Created a secure Android password generator app using React Native, offering customizable complexity settings to empower users in creating robust and unique passwords, thereby enhancing digital security"],
    //   viewLink: "http://www.google.com",
      codeLink: "https://github.com/Ganesh-16N/passwordGenerator",
    },
  ];

  return (
    <>
      {projects.map((project) => (
        <MobileAppCard key={project.id} {...project} />
      ))}
    </>
  );
};

export default Mob;
