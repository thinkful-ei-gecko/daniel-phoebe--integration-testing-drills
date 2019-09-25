const { expect } = require('chai');
const supertest = require('supertest');
const count = require('../count');

describe('count', () => {
  //Invalid or missing string
  it('should return an from /frequency if no string is passed', () => {
    return supertest(count)
      .get('/frequency')
      .query()
      .expect(400, 'Invalid request');
  });

  //Valid string
  it('should return a response from /frequency if valid string is passed', () => {
    return supertest(count)
      .get('/frequency')
      .query({ s: 'aabbccdddd' })
      .expect(200);
  });

  //return an object that includes count, average, highest
  it('should return an object with keys: count, average, and highest', () => {
    return supertest(count)
      .get('/frequency')
      .query({ s: 'aabbccdddd' })
      .then(res => {
        expect(Object.keys(res.body)).to.include.members([
          'unique',
          'average',
          'highest'
        ]);
      });
  });

  //Counts the unique characters in the string.
  it('should return the number of unique characters in the string', () => {
    return supertest(count)
      .get('/frequency')
      .query({ s: 'abbccc' })
      .then(res => {
        expect(res.body.unique).to.equal(3);
      });
  });

  //it should return the character with the highest frequency
  it('should return the character with the highest frequency', () => {
    return supertest(count)
      .get('/frequency')
      .query({ s: 'abbccc' })
      .then(res => {
        expect(res.body.highest).to.equal('c');
      });
  });

  //it should return the number of occuences of each character
  it('should return the number of occurences for each character', () => {
    return supertest(count)
      .get('/frequency')
      .query({ s: 'abbccc' })
      .then(res => {
        expect(res.body.a).to.equal(1);
        expect(res.body.b).to.equal(2);
        expect(res.body.c).to.equal(3);
      });
  });

  //It should be case insensitive
  it('should return an accurate count regardless of case', () => {
    return supertest(count)
      .get('/frequency')
      .query({ s: 'AbbcCc' })
      .then(res => {
        expect(res.body.a).to.equal(1);
        expect(res.body.b).to.equal(2);
        expect(res.body.c).to.equal(3);
      });
  });
});
