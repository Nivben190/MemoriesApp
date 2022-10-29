//user controller with Login and Register functions

const { User, validate } = require("../Models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

module.exports = {
  register: async (req, res) => {
    try {
      const { error } = validate(req.body);
      if (error)
        return res.status(400).send({ message: error.details[0].message });

      const isUserLogin = await User.findOne({ email: req.body.email });
      if (isUserLogin)
        return res
          .status(409)
          .send({ message: "User with given email already exist" });
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashPassword = await bcrypt.hash(req.body.password, salt);

      const registeredUser = await new User({
        ...req.body,
        password: hashPassword,
      }).save();
      res
        .status(200)
        .send({ message: "User Created Succesfully", registeredUser });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { error } = validateLogin(req.body);
      if (error)
        return res.status(400).send({ message: error.details[0].message });
      const loginUser = await User.findOne({ email: req.body.email });
      if (!loginUser)
        return res.status(400).send({ message: "Invalid Email or Password" });
      const validPassword = await bcrypt.compare(
        req.body.password,
        loginUser.password
      );
      if (!validPassword)
        return res.status(400).send({ message: "Invalid Email or Password" });
      const token = loginUser.generateAuthToken();
      res.status(200).send({ data: token, message: "Logged in Succesfuly" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
};
const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};
