const http = require("http");
//port
const PORT = process.env.PORT || 3000;
const app = require("./app");

const server = http.createServer(app);
server.listen(PORT, () => console.log(`Listening on ${PORT}`));
