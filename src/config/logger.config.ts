/* 
 transports property of A Winston  is the destination where Winston sends or stores your logs.

            Winston
                ↓
        Library that provides logging

            Logger
              ↓
        The thing you use to record logs

            Log
             ↓
        The actual information

            Transport
                 ↓
        Where the log is sent/stored

*/

import { format } from "node:path";
import winston from "winston";
import { getCorrelationId } from "../utils/helpers/request.helpers";


const logger = winston.createLogger({


    format: winston.format.combine( // format means how log look like

        winston.format.timestamp({format: "MM-DD-YYYY" }),//logs time stamp
        winston.format.json(),// //we want our logs in json fromat
        // define a custom print
        winston.format.printf(({ timestamp, level, message, ...data }) => {
            // console.log(timestamp);

                const output = {timestamp,level,correlationId:getCorrelationId(),message,data};
                // console.log(output);

                return JSON.stringify(output);
            }
         
        )
    ),
    transports:[ // it means where should log go or store in bottom it transfer to console means terminal
        new winston.transports.Console(),
        new winston.transports.File({filename:"logs/app.log"})


    ]

  
});

export default logger;