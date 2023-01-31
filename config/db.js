import mongoose from "mongoose";
import dotenv from "dotenv";
import exec from "child_process";
import path from "path";
const __dirname = path.resolve();
const data = exec.exec 
dotenv.config()
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    const conn = await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected:${conn}`);
  } catch (error) {
    console.error(error);
  }
};


console.log(__dirname);
const backupDirPath = path.join(__dirname , "database-backup");



let cmd = `mongodump --forceTableScan --out=${backupDirPath} --uri=${process.env.DATABASE_URI}`;

const dbAutoBackUp = () => {
  let filePath = backupDirPath + `/db-back-up-schedule/companies.bson`;
  data(cmd, (error, stdout, stderr) => {
    console.log([cmd, error, backupDirPath]);
  });
};

// dbAutoBackUp();

export default connectDB;