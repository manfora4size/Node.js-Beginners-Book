var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers")

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

aaaa
console.log("test git");
console.log("test2 git");
server.start(router.route, handle);
