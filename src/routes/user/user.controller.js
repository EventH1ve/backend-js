const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcryptjs');



exports.signUp = async (req, res) => {
    try {
        const userDate = req.body;
        const password = userDate.password
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await prisma.user.create({
            data: {
                name: userDate.name,
                email: userDate.email,
                password: hashedPassword,
                gender: userDate.gender,
                phoneNumber: userDate.phoneNumber,
                type: userDate.type
            }
        })
        return res.status(201).json(newUser)
    }
    catch (err) {
        return res.status(500).json({ error: err })
    }
}

exports.signIn = async (req, res) => {
  const userDate = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        name: userDate.userName,
      },
    });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }
    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(userDate.password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }
    // Password is correct, you can store user data in the session or use JWT for authentication
    return res.status(200).json({ message: 'Authentication successful.' });
  } catch (err) {
    return res.status(500).json({ message: 'Error while signing in.' });
  }
};


