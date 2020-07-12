function MainContent(props) {
  return (
    <div className=" z-0 sm:flex-1 bg-white main-content p-4">
      {props.children}
    </div>
  );
}

export default MainContent;
