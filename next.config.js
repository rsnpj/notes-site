module.exports = {
	webpack: (config, { isServer }) => {
		if (isServer) {
			require("./sitemap_generator");
		}

		return config;
	},
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({});
