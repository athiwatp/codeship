/* global describe it  */
var num1 = 1
var num2 = 2
function sum (num1, num2) {
  return num1 + num2
}
// console.log(sum(num1, num2))
var assert = require('assert')
describe('sum function', function () {
  describe('sum()', function () {
    it('should return 3 when the value pass', function () {
      assert.equal(sum(num1, num2), 3)
    })
  })
})
