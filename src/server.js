const express = require("express")
const mysql = require("mysql")

const app = express()

app.use(express.static("docs"))

app.get("/api/trees", function (req, res) {
  const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || "127.0.0.1",
    port: process.env.MYSQL_PORT || 3307,
    user: "root",
    password: "123",
    database: "is219ApiIntro",
  })

  connection.connect()

  connection.query("SELECT * FROM trees", function (err, rows, fields) {
    if (err) throw err
    res.json({ data: rows })
  })

  connection.end()
})

app.set("ip", process.env.SERVER_HOST || "127.0.0.1")
app.set("port", process.env.SERVER_PORT || 8080)

app.listen(app.get("port"), function () {
  console.log("Node server started on %s ...", app.get("port"))
})
