export default function MyPre(props) {
	if (props.className === "language-mermaid") {
		return <div className="overflow-x-auto">{props.children}</div>;
	} else {
		return <pre {...props} />;
	}
}
