const delay = (callback, ms) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(callback());
        }, ms);
    });
};

module.exports = delay;
