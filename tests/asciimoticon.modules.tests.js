/*jshint esversion:6*/

const expect = require('chai').expect;
const facesModule = require('../app').faces;

describe('faces module tests', () => {
    it('should allow users to load faces', () => {
        for (const faceID in facesModule) {
            const face = facesModule[faceID];
            const ascii = face.ascii;
            const words = face.words;
            expect(face).to.not.equal(null);
            expect(ascii).to.not.equal(null);
            expect(words).to.not.equal(null);
        }
    });
});
