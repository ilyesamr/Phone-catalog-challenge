const fs = require('fs');
module.exports = {
    index(req, res) {
        let phones = JSON.parse(fs.readFileSync('./src/phones.json'));
        res.send(phones);
    },
};
