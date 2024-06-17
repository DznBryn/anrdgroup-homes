// esbuild.config.js
const esbuild = require('esbuild');

esbuild
	.build({
		entryPoints: ['app/root.tsx'],
		bundle: true,
		outfile: 'out.js',
		external: ['@fortawesome/fontawesome-svg-core'],
	})
	.catch(() => process.exit(1));
