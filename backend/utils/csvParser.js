const fs = require('fs');
const csv = require('csv-parser');

function csvParser(filepath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filepath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}

module.exports = csvParser;
