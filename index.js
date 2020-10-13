const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 80;

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });

    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "dist", "index.html"),
        "utf-8",
        (err, content) => {
          if (err) {
            throw err;
          }

          res.end(content);
        },
      );
    }
  }
});

app.listen(PORT);
