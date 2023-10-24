import React from "react";

const Navigation = () => {
  return (
    <div
      id="navbar"
      className="fixed top-0 w-full h-[6%] text-white"
    >
      <div className="flex justify-center gap-8 mx-auto p-2">
        <div>+</div>
        <div>home</div>
        <div>profile</div>
      </div>
    </div>
  );
};

export default Navigation;
