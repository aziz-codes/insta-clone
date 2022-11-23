import React from "react";
import User from "../data/user.jpeg";
import { suggestions, tags } from "../data/dummy";
const MiniProfile = () => {
  return (
    <div className="flex flex-col max-w-xs w-96 z-0">
      <div className="flex flex-row justify-between mx-2 pb-4">
        <div className="flex flex-row gap-4 items-center">
          <img src={User} className="w-14 h-14 rounded-full" alt="avatar" />
          <div className="flex flex-col">
            <p className="text-xs font-bold">aziz-codes</p>
            <span className="text-xs text-gray-400">Aziz</span>
          </div>
        </div>
        <button className="text-sky-500 text-xs font-semibold">switch</button>
      </div>
      <div className="flex flex-row justify-between mx-2 ">
        <h4 className="text-sm text-gray-400 font-semibold tracking-tight">
          Suggestions For You
        </h4>
        <button className="text-black text-xs tracking-tight font-semibold">
          See All
        </button>
      </div>
      <br />
      {suggestions.map((item, index) => (
        <div className="flex flex-row justify-between mx-2 p-1" key={index}>
          <div className="flex flex-row gap-3">
            <img src={item.image} className="h-7 w-7 rounded-full" alt="avt" />
            <div className="flex flex-col">
              <p className="text-xs font-medium">
                {item.username.toString().replace(" ", "")}
              </p>
              <p className="text-xs text-gray-400 tracking-tighter">
                {item.text}
              </p>
            </div>
          </div>
          <button className="text-[10px] text-sky-500 font-semibold">
            Follow
          </button>
        </div>
      ))}
      <div className="flex flex-row gap-2 mx-4 mt-3 max-w-xs w-96 flex-wrap">
        {tags.map((tag, i) => (
          <p className="text-xs text-gray-300 " key={i}>
            {tag.toString().concat(".")}
          </p>
        ))}
      </div>
      <h4 className="text-sm text-gray-400 tracking-tight mt-4">
        &copy; 2022 Instagram 2.0 by{" "}
        <a
          href="https:www.github.com/aziz-codes"
          className="hover:text-sky-500"
          target="_blank"
          rel="noreferrer"
        >
          azizcodes
        </a>
      </h4>
    </div>
  );
};

export default MiniProfile;