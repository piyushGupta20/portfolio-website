import React from "react";
import "./style.css";
import { UilTwitterAlt,UilGithubAlt,UilInstagram } from '@iconscout/react-unicons'

function ContactMe() {
  return (
    <div className=" bg-slate-600">
      <br />
      <br />
      <br />
      <center>
        <h2 className="text-xl font-bold">Contact Me</h2>
      </center>
      <div className=" border-4  rounded m-20 p-6">
        <p className=" flex flex-row justify-around mx-auto w-screen-md">
          <a href="https://twitter.com/Piyush__gupta_" className="text-2xl rounded-full p-6 bg-gradient-to-r from-cyan-500 to-blue-500 "> <UilTwitterAlt size="3.5rem"/></a>
          <a href="https://github.com/piyushGupta20" className="text-2xl rounded-full p-6 bg-black"><UilGithubAlt size="3.5rem"/></a> 
          <a href="https://www.instagram.com/piyushgupta_18/" className="text-2xl rounded-full p-6 instagram"><UilInstagram size="3.5rem"/></a> 
        </p>
      </div>
      <br />
    </div>
  );
}

export default ContactMe;
