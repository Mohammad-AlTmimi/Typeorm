import express from 'express';

const validateJob = (req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const values = ['fullName' , "password"];
  const user = req.body;
  const errorList = values.map(key => !user[key] && `${key} is Required!`).filter(Boolean);

  if (errorList.length) {
    console.log("hi")
    res.status(400);
  } else {
    next();
  }
}



export {
  validateJob
}