// import months from "./notes/data";
// months.forEach((element) => {});
var myList = [];
import("./notes/data.json").then((module) => {
  myList += module["default"];
  import("./notes/" + module["default"] + "/data.json").then(
    (module) => (myList += module["default"])
  );
});
// console.log(months);
function HomePage() {
  return <div>Welcome to Next.js! {myList}</div>;
}

export default HomePage;
