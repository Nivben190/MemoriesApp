const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      process.env.DB ||
        "mongodb+srv://niveben20:Nivben22@cluster0.g2ynwob.mongodb.net/?retryWrites=true&w=majority",
      connectionParams
    );
    console.log("connected to mongo");
  } catch (error) {
    console.log(error);
    console.log("could not connect to mongo");
  }
};
