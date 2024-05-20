import React from "react";

const Hello = (props) => {
  return (
    <li className=" grid h-[100%] p-5 place-items-center text-black">
      <a
        href={props.checkout}
        target="_blank"
        className="h-full w-full grid place-items-center"
      >
        <div className=" flex flex-col justify-center items-center child:m-3 h-[90%] w-[90%] bg-gray-300 shadow-md rounded-lg hover:scale-105 shadow-black p-3">
          <p>{props.title}</p>
          <img
            src={props.img}
            alt="sample image"
            className="h-[150px] w-[150px] rounded-full"
          />
          <p>{props.description}</p>
        </div>
      </a>
    </li>
  );
};

export default Hello;
