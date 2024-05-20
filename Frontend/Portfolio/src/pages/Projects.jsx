import React, { useState } from "react";
import Hello from "../components/Hello";
import Image from "../assets/3c9b3d1ad96c3c01bb7ddf5808abcb49.gif";

const Projects = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Clone app rawg.io",
      description:
        "jsd fuogs dhufg h dsu iof hiosd hfii osd hiofhido sfhi odsh  fios hiofh sdio fhiosdfho isdhfio dshofs hdofy",
      img: Image,
      checkout: "https://example.com/",
    },
    {
      id: 2,
      title: "Clone app rawg.io",
      description:
        "jsd fuogs dhufg h dsu iof hiosd hfii osd hiofhido sfhi odsh  fios hiofh sdio fhiosdfho isdhfio dshofs hdofy",
      img: Image,
      checkout: "https://example.com/",
    },
    {
      id: 3,
      title: "Clone app rawg.io",
      description:
        "jsd fuogs dhufg h dsu iof hiosd hfii osd hiofhido sfhi odsh  fios hiofh sdio fhiosdfho isdhfio dshofs hdofy",
      img: Image,
      checkout: "https://example.com/",
    },
    {
      id: 4,
      title: "Clone app rawg.io",
      description:
        "jsd fuogs dhufg h dsu iof hiosd hfii osd hiofhido sfhi odsh  fios hiofh sdio fhiosdfho isdhfio dshofs hdofy",
      img: Image,
      checkout: "https://example.com/",
    },
  ]);
  return (
    <div className=" w-[100vw] h-[100vh] bg-slate-950 flex flex-col justify-center items-center child:m-5">
      <div className="flex flex-col justify-center items-center text-white text-8xl">
        <h1>Projects</h1>
      </div>
      <div className="w-[90%] h-[60%] grid grid-cols-4 bg-white rounded-md">
        {data.map((item, i) => (
          <ul key={i} className="w-[100%] h-[100%]">
            <Hello
              id={item.id}
              title={item.title}
              img={item.img}
              description={item.description}
              checkout={item.checkout}
            />
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Projects;
