const assertEquals = require('./assert-equals')

describe('assertEquals', () => {
  describe('when expected and actual are the same', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals('abc', 'abc')).not.toThrow()
      expect(() => assertEquals('1', '1')).not.toThrow()
      expect(() => assertEquals(1, 1)).not.toThrow()
      expect(() => assertEquals([1, 2, 3], [1, 2, 3])).not.toThrow()
    })
  })

  describe('when expected and actual are different', () => {
    it('returns with throwing an error', () => {
      expect(() => assertEquals('1', '2')).toThrow(Error)
      expect(() => assertEquals(1, '2')).toThrow(Error)
      expect(() => assertEquals(2, 3)).toThrow(Error)
      expect(() => assertEquals([1, 2], [1, 3])).toThrow(Error)
      expect(() => assertEquals([1, 2], 2).toThrow(Error))
      expect(() => assertEquals([1, 2], '2').toThrow(Error))
      expect(() => assertEquals({ name: 'abby' }, '2').toThrow(Error))

    })
  })
})