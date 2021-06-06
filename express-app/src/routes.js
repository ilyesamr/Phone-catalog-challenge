const Functions = require('./functions');
module.exports = (app) => {
    app.get('/phones', Functions.index)
};