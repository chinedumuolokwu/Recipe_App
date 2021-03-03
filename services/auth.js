const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET = process.env.SECRET;

const verifyUser = (token) => {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      return decoded;
    } catch (error) {
      return false;
    }
  }
  exports.verifyUser = verifyUser;

//   function  generate_token (data ={}){
    
//         Jwt.sign({data}, secret, {expiresIn: '12hrs'}, function(err, token)
        

const generateToken = (user) => {
    try {
        const token = jwt.sign({ id: user.id, email: user.email, role:user.role }, JWT_SECRET, { expiresIn: '12hrs' });
        return token;
    } catch (error) {
        return false
    }
  }

  exports.generateToken = generateToken;

