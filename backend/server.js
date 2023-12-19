import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("hey there");
});

app.get("/api/jokes", (req, res) => {
  return res.send([
    { id: 1, title: "joke 1", content: "blah blah blah" },
    { id: 2, title: "joke 1", content: "blah blah blah" },
    { id: 3, title: "joke 1", content: "blah blah blah" },
    { id: 4, title: "joke 1", content: "blah blah blah" },
    { id: 5, title: "joke 1", content: "blah blah blah" },
    { id: 6, title: "joke 1", content: "blah blah blah" },
  ]);
});

app.listen(8000, (req, res) => {
  console.log(`server started successfully at 8000`);
});
