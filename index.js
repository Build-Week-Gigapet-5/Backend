const server = require("./api/server/server");
const host = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 6000;

server.listen(PORT, host, () => {
  console.log(`Server listening on port ${PORT}`);
});
