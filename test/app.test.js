const sort = require('../app');
const expect = require('chai').expect;


describe('Sort function', () => {
  const arr = [4, 1, 3, 6];
  it('Should return all original values',() => {
    const answer = sort(arr);
    expect(answer).to.include.members(arr);
  });

  it('sorts in ascending order', () => {
    const answer = sort(arr);
    expect(answer).to.deep.equal([1, 3, 4, 6]);
  });

  it('contains all original values', () => {
    const answer = sort(arr);
    expect(answer).to.have.members(arr);
  });
});

