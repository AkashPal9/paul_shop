import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  // console.log(token,"token")
  // Set JWT as an HTTP-Only cookie
  // res.cookie("Authorization", token, { httpOnly: false, secure: false , sameSite: 'none', maxAge: 30 * 24 * 60 * 60 * 1000,  });
  // console.log("cookie", res.cookie);
  res.cookie('jwt', token,{
    maxAge: 30 * 24 * 60 * 60 * 1000, 
    httpsOnly: true,
    secure: true,
    sameSite: 'none' 
  });

};

export default generateToken;
