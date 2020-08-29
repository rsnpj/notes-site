import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="icon" href="/favicon.ico" type="image/x-icon" />
					<link
						rel="shortcut icon"
						href="/favicon.ico"
						type="image/x-icon"
					/>
					<script
						async
						src="https://www.googletagmanager.com/gtag/js?id=UA-156072112-2"
					></script>
					<script>
						window.dataLayer = window.dataLayer || []; function
						gtag(){dataLayer.push(arguments)}
						gtag({"js"}, new Date()); gtag({"config"},
						{"UA-156072112-2"});
					</script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
