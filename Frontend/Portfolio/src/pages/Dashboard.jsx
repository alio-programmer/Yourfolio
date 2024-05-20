import React from "react";

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    window.location = "/";
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-slate-950 flex flex-col justify-center items-center">
      <div className=" w-[80%] h-[80%] text-black text-8xl flex items-center bg-gray-300">
        Dashboard
      </div>
      <button
        className="p-3 m-5 bg-green-500 rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
