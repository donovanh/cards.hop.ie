export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.4D7DwxC1.js","app":"_app/immutable/entry/app.CcDndwe_.js","imports":["_app/immutable/entry/start.4D7DwxC1.js","_app/immutable/chunks/entry.fv-YT9qa.js","_app/immutable/chunks/runtime.XEpCCKGk.js","_app/immutable/chunks/index-client.BPse69oA.js","_app/immutable/entry/app.CcDndwe_.js","_app/immutable/chunks/runtime.XEpCCKGk.js","_app/immutable/chunks/render.BbuIci7E.js","_app/immutable/chunks/disclose-version.Cq3NdLxz.js","_app/immutable/chunks/props.-BdiYs83.js","_app/immutable/chunks/index-client.BPse69oA.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
