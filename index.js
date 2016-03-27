/* global describe it assert */
function sum (num1, num2) {
  return num1 + num2
}
console.log(sum(num1, num2))
var assert = require('assert')
describe('sum function', function () {
  describe('sum()', function () {
    it('should return 3 when the value pass', function () {
      assert.equal(sum(1, 2), 3)
    })
  })
})
