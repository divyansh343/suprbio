const jwt = require('jsonwebtoken');
export default function authentication(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY_JWT);
    const userId = decodedToken.userId;
    if (!userId) {
      error: res.json('Invalid token!');
    }
    else {
      req.userObjectID = userId;
      next();
    }
  } catch {
    res.status(401).json({
      error: 'Invalid request!'
    });
  }
}