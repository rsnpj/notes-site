export default function MyPre(props) {
	if (props.className === "language-mermaid") {
		return <div>{props.children}</div>;
	} else {
		return <pre {...props} />;
	}
}
