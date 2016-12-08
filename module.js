// module.js
var testbabel = {};
testbabel.addOne = function(x){
    x.map(item => item + 1);
}
testbabel.testAddOne = arg => arg + 1;
module.exports = testbabel;
