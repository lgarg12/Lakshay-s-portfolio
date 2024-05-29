import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { upload } from './utils/upload';
import connectDB from './config/DBConnection';

import userRouter from './routes/user.route';
import projectRouter from './routes/projects.route';
import contactRouter from './routes/contacts.route';


dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth',userRouter);
app.use('/project',projectRouter);
app.use('/contact',contactRouter);

connectDB();

app.post('/upload', upload.single('image'), (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send(`File uploaded successfully: ${req.file.filename}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
