import React from "react";

export const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected ? "text-white border-yellow-400" : "text-slate-600 border-slate-600 hover:text-white hover:border-white";
  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`} onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;
