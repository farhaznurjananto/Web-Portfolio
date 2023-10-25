import React from "react";

export const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white pb-1 bg-gradient-to-r from-red-500 to-yellow-500" : "text-slate-200";
  return (
    <button onClick={selectTab}>
      <div className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        <p className="bg-black">{children}</p>
      </div>
    </button>
  );
};

export default TabButton;
