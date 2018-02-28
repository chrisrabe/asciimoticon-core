/*jshint esversion:6*/

const expect = require('chai').expect;
const themesModule = require('../app').themes;
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

describe('themes module tests', () => {
    it('should allow users to load themed faces', () => {
        for (const theme in themesModule) {
            const faces = themesModule[theme];
            expect(faces).to.not.equal(null);
        }
    });
});
