/** @type {import('next').NextConfig} */
const {
	PHASE_DEVELOPMENT_SERVER,
	PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			reactStrictMode: true,
			swcMinify: true,
			images: {
				domains: [process.env.API_URL],
				domains: [process.env.API_URL],
				hostname: process.env.API_HOST,
			},
			env: {
				base_url: process.env.API_URL,
			},
			httpAgentOptions: {
				keepAlive: true,
			},
		};
	}

	return {
		reactStrictMode: true,
		swcMinify: true,
		images: {
			domains: [process.env.API_URL],
			domains: [process.env.API_URL],
			hostname: process.env.API_HOST,
		},
		env: {
			base_url: process.env.API_URL,
		},
		httpAgentOptions: {
			keepAlive: true,
		},
	};
};
