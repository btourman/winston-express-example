const winston = require('winston');
const { combine, timestamp, json, errors } = winston.format;

const logger = winston.createLogger({
    defaultMeta: {
    service: 'my-service',
    },
  level: 'info',
  format: combine(errors({ stack: true }), timestamp(), json()),
  transports: [new winston.transports.Console()],
});

module.exports = logger