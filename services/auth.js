const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET = process.env.SECRET;

// const verifyUser = (token) => {
//     try {
//       const decoded = jwt.verify(token, JWT_SECRET);
//       return decoded;
//     } catch (error) {
//       return false;
//     }
//   }
//   exports.verifyUser = verifyUser;

//   function  generate_token (data ={}){
    
//         Jwt.sign({data}, secret, {expiresIn: '12hrs'}, function(err, token)
        
exports.isAuthenticated = async function(req, res, next) {
  // const fullToken = req.headers['authorization'];
  console.log(req.headers['authorization'])
  if (typeof req.headers['authorization'] !== undefined){
    const bearerToken = req.headers['authorization'].split(" ");
    const finalToken = bearerToken[1];

    req.token = finalToken;

  const decoded = await jwt.verify(req.token, JWT_SECRET)
  req.user = decoded
  console.log(decoded)
  next()

  
  
  // then((decoded) => {
  //    req.user = decoded.data;
  //       next()
  //   }).catch((error) => {
  //       return res.status(401).json({message: "Cannot access route. Unauthorized"})
  //   })
     }
  else{
    res.status(401).send('Sorry you are Unauthorized')
  }

  
  
  }


const generateToken = (user) => {
    try {
        const token = jwt.sign({ id: user.id, email: user.email, role:user.role }, JWT_SECRET, { expiresIn: '12hrs' });
        return token;
    } catch (error) {
        return false
    }
  }

  exports.generateToken = generateToken;

