import React, { useState } from "react";
import axios from "axios";
import { TemplatesDetails, TemplatesBio } from "../apis/Templates";
import Navbar from "./Navbar";

const Templates: React.FC = () => {

  return (
    <>
    <div className=" bg-slate-950 w-full  h-screen">
      <Navbar/>
      <div className="text-center p-12 text-white">
        <h1 className=" text-7xl">{TemplatesBio.title}</h1>
        <br />
        <span className=" text-2xl">{TemplatesBio.descp}</span>
      </div>
      <br />
      <br />
      <div className="flex flex-col lg:flex bg-slate-950 px-4 max-h-screen lg:flex-row shadow-md">
        <div className="w-1/2 text-2xl text-white font-sans">
          <h2 >{TemplatesDetails.title}</h2>
          <br />
          <span>{TemplatesDetails.descp}</span>
          <br />
          <br />
          <div className="flex flex-col lg:flex lg:flex-row">
            <button className="bg-slate-800 p-2 rounded-md">
              Buy now ₹1000
            </button>
            &nbsp;
            <a
              href="https://courses-db-one.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-slate-800 p-2 rounded-md">
                Live Preview
              </button>
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="http://res.cloudinary.com/dakddv1pm/image/upload/v1735661273/posts/b8fcxy4wdbocxwuaueyt.png"
            alt="Template Preview"
          />
        </div>
      </div>
    </div>
    </>

  );
};

export default Templates;
