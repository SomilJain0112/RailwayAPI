import User from "../models/user.js"

const handleSignup = async (req, res) => {
    try {
      const { username, email, password, role } = req.body;

      const existingUser = await User.findOne({ where: { email } });

      if (existingUser) {
        return res.status(400).json({ message: "User with this email already exists" });
      }

      const newUser = await User.create({ username, email, password, role });

      res.status(201).json({ message: "User created successfully", user: newUser });

    } catch (error) {
      console.error("Error in user signup:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

 const handleLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Compare passwords
      const isValidPassword = await user.comparePassword(password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Incorrect password" });
      }
  
      const token = await user.generateJWT();

      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      console.error("Error in user login:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  

export {handleLogin, handleSignup}