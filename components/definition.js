import remark from "remark";
import html from "remark-html";
import { useState } from "react";
import math from "../lib/remark-math";

export default function definition(props) {
  const [defin, setDefin] = useState("Definition");
  const newchild = props.children.replace(/\\n/g, "\n");
  if (defin === "Definition") {
    try {
      remark()
        .use(math)
        .use(html)
        .process(newchild, function (err, file) {
          setDefin(file);
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="border border-gray-400 rounded p-4 mx-2 my-6">
      <span className="block text-2xl font-semibold text-black">
        {props.name}
      </span>
      <div dangerouslySetInnerHTML={{ __html: defin }} />
    </div>
  );
}
