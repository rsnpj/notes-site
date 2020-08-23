import remark from "remark";
import html from "remark-html";
import { useState } from "react";

export default function definition(props) {
  const [defin, setDefin] = useState("Definition");
  if (defin === "Definition") {
    try {
      remark()
        .use(html)
        .process(props.children, function (err, file) {
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
