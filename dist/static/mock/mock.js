

const list = require('./list.json');
const footer = require('./footer.json');
const tip = require('./tip.json');
module.exports = () => {
    return {
        // 相当于 提供了 localhost:3000/list -> list
        list: list,
        footer:footer,
        tip:tip
    }
}