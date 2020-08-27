import { useState } from "react";

export default function important(props) {
  return (
    <div className="border border-teal-700 rounded p-4 mx-2 my-6 bg-teal-300">
      <span className="text-xl text-teal-800 font-semibold uppercase">
        Problem {props.name ? "- " + props.name : ""}:
      </span>
      <div className="flex items-center pl-4">
        <span className="text-lg font-semibold text-teal-800 ">Instance -</span>
        <span className="text-lg align-middle inline-block pl-1 text-black">
          {props.instance}
        </span>
      </div>
      <div className="flex items-center pl-4">
        <span className="block text-lg font-semibold text-teal-800 ">
          Question -
        </span>
        <span className=" text-lg align-middle inline-block pl-1 text-black">
          {props.question}
        </span>
      </div>
    </div>
  );
}
