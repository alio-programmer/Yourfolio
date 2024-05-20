import { React, useState } from "react";
import Projectsadmin from "../components/Projectsadmin";

const Addproject = () => {
  const [projectdat, setprojectdat] = useState({
    project_name: "",
    project_img: "",
    project_description: "",
    project_url: "",
  });
  const handlechange = ({ currentTarget: input }) => {
    setprojectdat({ ...projectdat, [input.name]: input.value });
  };
  const handlesubmit = (e) => {};
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className=" w-[50%] h-[100%] bg-slate-950 flex flex-col justify-center items-center">
        <h1 className="text-white flex justify-center items-center text-4xl">
          Addproject
        </h1>
        <div className=" w-[100%] h-[70%] grid grid-cols-2 sm:grid-col-1 place-items-center child:p-3">
          <Projectsadmin />
        </div>
      </div>
      <div>
        <form action="" method="post" onSubmit={handlesubmit}></form>
      </div>
    </div>
  );
};

export default Addproject;
