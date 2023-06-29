import morgan from "morgan";
//import path from "path";
import fs from "fs";

const accessLogStream = fs.createWriteStream('./logs/access.log', { flags: 'a' });
export const morganLogger = morgan('combined', {stream: accessLogStream });

