const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, '46ctenc$kFrP&TaFBN@beTtk6gC6oxjnNyA$iKPA');
       const userId = decodedToken.userId;
       req.auth = {
           userId: userId
       };
       next(); 
   } catch(error) {
       res.status(401).json({ error });
   }
};