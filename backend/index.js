const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const UserSchema = require("./schema/register");
const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  UserSchema.find()
    .then((user) => {
      return res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/create", (req, res) => {
  const NewUser = UserSchema(req.body);

  NewUser.save().then(() => {
    res.status(200).json({ sucess: "ok" });
  });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

//app.use('/',(req,res)=>{res.send("hello dev")})

app.listen(5000);
