const uniqueString = require("unique-string");

const generateGuid = guideLength => uniqueString().substring(0, guideLength);

export { generateGuid };
