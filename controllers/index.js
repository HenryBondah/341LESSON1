const awesomeFunction = (req, res, next) => {
    res.json ('Awesome person');
};

const secondFunction = (req, res, next) => {
    res.json ('I am able to do it.');
};

const thirdFunction = (req, res, next) => {
    res.json ('another one done.');
};

module.exports = {awesomeFunction, secondFunction, thirdFunction};  