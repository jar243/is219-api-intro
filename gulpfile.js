const nodemon = require("nodemon")

function startServer() {
  nodemon({
    script: "src/server.js",
    ext: "js",
    env: {
      NODE_ENV: "dev",
      SERVER_HOST: "127.0.0.1",
      SERVER_PORT: 8080,
      MYSQL_HOST: "127.0.0.1",
      MYSQL_PORT: 3307,
    },
    ignore: ["./node_modules/**"],
  })
}

exports.startServer = startServer
