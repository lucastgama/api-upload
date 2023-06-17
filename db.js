const { default: mongoose } = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.USER_LOGIN}:${process.env.USER_PASSWORD}@cluster0.27jdn76.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log("conectado");
}

main().catch((err) => {
  console.error(err);
});

module.exports = main;
