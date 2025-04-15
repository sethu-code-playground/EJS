import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs')
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  var firstNameLength = req.body.fName.length;
  var lastNameLength = req.body.lName.length;
  var count = firstNameLength + lastNameLength;
  // console.log(firstNameLength);
  // console.log(lastNameLength);
  // console.log(count);
  res.render('index.ejs', {
    noOfLetters: count,
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
