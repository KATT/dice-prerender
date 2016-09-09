const prerender = require('prerender');

const {
	PORT = 3001,
	PRERENDER_NUM_WORKERS = 1,
	PRERENDER_NUM_ITERATIONS = 1,
} = process.env;

const server = prerender({
  workers: PRERENDER_NUM_WORKERS,
  iterations: PRERENDER_NUM_ITERATIONS,
  port: PORT,
});


server.use(prerender.sendPrerenderHeader());
// server.use(prerender.basicAuth());
// server.use(prerender.whitelist());
server.use(prerender.blacklist());
// server.use(prerender.logger());
// server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());
server.use(prerender.inMemoryHtmlCache());
// server.use(prerender.s3HtmlCache());

server.start();
