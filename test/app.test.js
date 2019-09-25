'use strict';

// const sort = require('../app');
const app = require('../app');
// const expect = require('chai').expect;
const supertest = require('supertest');

// describe('Sort function', () => {
//   const arr = [4, 1, 3, 6];
//   it('Should return all original values',() => {
//     const answer = sort(arr);
//     expect(answer).to.include.members(arr);
//   });

//   it('sorts in ascending order', () => {
//     const answer = sort(arr);
//     expect(answer).to.deep.equal([1, 3, 4, 6]);
//   });

//   it('contains all original values', () => {
//     const answer = sort(arr);
//     expect(answer).to.have.members(arr);
//   });
// });

describe('Express app', () => {
  it('should return a message from GET /', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello Express');
  });

  //it should return an object

  //it's count key should return the number of unique  
  //characters

  //it should return a 400 error if the input is an empty
  //string 

});