const User = require("../models/user");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(200).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({message:"Please provide email and password",isError:"Y"});
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({message:"Invalid Credentials",isError:"Y"});
  }
  // compare password
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    return res.json({message:"Invalid Credentials",isError:"Y"});
  }

  const token = user.createJWT();
  res.status(200).json({ user: { name: user.name }, token });
};

module.exports = {
  register,
  login,
};
