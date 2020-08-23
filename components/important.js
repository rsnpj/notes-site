import remark from "remark";
import html from "remark-html";
import { useState } from "react";

export default function important(props) {
  const [Important, setImportant] = useState("Important");
  if (Important === "Important") {
    try {
      remark()
        .use(html)
        .process(props.children, function (err, file) {
          setImportant(file);
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="border border-red-700 rounded p-4 mx-2 my-6 bg-red-300">
      <span className="block text-xl font-semibold text-red-800 uppercase leading-tight">
        Important
      </span>
      <div
        className="text-black"
        dangerouslySetInnerHTML={{ __html: Important }}
      />
    </div>
  );
}
