const router = require("express").Router();
const { Notes } = require("../Models/Notes");
const { User } = require("../Models/user");
const multer = require("multer");

router.post("/", async (req, res) => {
  try {
    const note = await new Notes({ ...req.body.memory }).save();
    const Found = req.body.user.email;
    await User.findOneAndUpdate(
      { email: Found },
      {
        $push: { memories: note },
      }
    );

    res.status(200).send({ message: "Note Created Succesfully", Found });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const note = await Notes.find();

    return res.status(200).json({
      success: true,
      count: note.length,
      data: note,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});
module.exports = router;
