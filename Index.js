const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./DB/Connection");

dotenv.config();


connectDB();

const app = express();

const port = process.env.PORT || 2000;

app.use(express.json());

app.use("/api/users", require("./Routes/userRoute"));
app.use("/api/books", require("./Routes/bookRoute"));

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
