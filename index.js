require('dotenv').config();
const express = require("express");
const mongo = require("mongoose");
const { userRouter } = require("./Router/user");
const { courseRouter } = require("./Router/course");
const { adminRouter } = require("./Router/admin");
const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);


async function main(){
    await mongo.connect(process.env.MONGO_URL);
    app.listen(3000);
    console.log("listening on port 3000");
}

main()

