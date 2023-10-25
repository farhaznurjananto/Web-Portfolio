import React from "react";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

export const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group" style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
        <div className="overlay absolute top-0 left-0 w-full h-full bg-slate-800/0 hidden group-hover:flex group-hover:bg-slate-800/70 transition-all duration-1000">
          <div className="flex justify-center items-center w-full">
            <Link href={gitUrl} className="h-15 w-15 mr-2 border-2 rounded-full border-slate-400 hover:border-white group/link">
              <CodeBracketIcon className="h-10 w-10 text-slate-400 m-2 cursor-pointer group-hover/link:text-white" />
            </Link>
            <Link href={previewUrl} className="h-15 w-15 border-2 rounded-full border-slate-400 hover:border-white group/link">
              <EyeIcon className="h-10 w-10 text-slate-400 m-2 cursor-pointer group-hover/link:text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-slate-900 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
