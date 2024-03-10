const { prisma } = require("../prisma/prisma-cilent");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * @route POST /api/user/login
 * @desс Login
 * @access Public
 */

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return res.status(400).json({ mesage: "Please, fill in the fields" });
  }

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  const isPasswordCorrect =
    user && (await bcrypt.compare(password, user.password));

  if (user && isPasswordCorrect) {
    res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.name,
    });
  } else {
    return res.status(400).json({ message: "Password incorrect" });
  }
};

const register = async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: "Please, fill in the fields" });
  }

  const registeredUser = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (registeredUser) {
    return res
      .status(400)
      .json({ message: "User with the same email already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassord = await bcrypt.hash(password, salt);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassord,
    },
  });

  const secret = process.env.JWT_SECRET;

  if (user && secret) {
    res.status(201).json({
      id: user.id,
      email: user.email,
      name,
      token: jwt.sign({ id: user.id }, secret, { expiresIn: "30d" }),
    });
  } else {
    return res.status(400).json({ message: "Failed to create user" });
  }
  //   catch {
  //   res.status(500).json({ message: 'Something went wrong' })
  // }
};

const current = async (req, res) => {
  return res.status(200).json(req.user);
};

module.exports = {
  login,
  register,
  current,
};
