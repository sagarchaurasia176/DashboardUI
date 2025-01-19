const fs = require('fs');

// Path to your service account JSON file
const filePath = './service-account.json';

// Read the file content
const jsonContent = fs.readFileSync(filePath, 'utf8');

// Encode the content to Base64
const base64Encoded = Buffer.from(jsonContent).toString('base64');

// Print the Base64 string or write it to a file
console.log(base64Encoded);

// Optional: Save the encoded string to a file
fs.writeFileSync('./service-account-base64.txt', base64Encoded);
