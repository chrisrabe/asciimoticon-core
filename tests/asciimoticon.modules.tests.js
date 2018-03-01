/*jshint esversion:6*/

const expect = require('chai').expect;
const facesModule = require('../app').faces;
const partsModule = require('../app').parts;
const themesModule = require('../app').themes;

describe('themes module tests', () => {
    it('should allow users to load themed faces', () => {
        for (const theme in themesModule) {
            const faces = themesModule[theme];
            expect(faces).to.not.equal(null);
        }
    });
});


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

describe('parts module tests', () => {
    it('should allow users to retrieve the eye components', () => {
        const eyes = partsModule.eyes;
        expect(eyes.length).to.be.greaterThan(0);
        for (const eye of eyes) {
            expect(eye).to.not.equal(null);
        }
    });

    it('should allow users to retrieve the mouth components', () => {
        const mouth = partsModule.mouth;
        expect(mouth.length).to.be.greaterThan(0);
        for (const m of mouth) {
            expect(m).to.not.equal(null);
        }
    });

    it('should allow users to retrieve the arm components', () => {
        const arms = partsModule.arms;
        expect(arms.length).to.be.greaterThan(0);
        for (const m of arms) {
            expect(m).to.not.equal(null);
        }
    });

    it('should allow users to retrieve the cheek components', () => {
        const cheeks = partsModule.cheeks;
        expect(cheeks.length).to.be.greaterThan(0);
        for (const m of cheeks) {
            expect(m).to.not.equal(null);
        }
    });

    it('should allow the users to retrieve the face components', () => {
        const faces = partsModule.face;
        expect(faces.length).to.be.greaterThan(0);
        for (const m of faces) {
            expect(m).to.not.equal(null);
        }
    });

    it('should allow the users to retrieve the otehr components', () => {
        const others = partsModule.other;
        expect(others.length).to.be.greaterThan(0);
        for (const m of others) {
            expect(m).to.not.equal(null);
        }
    });

    it('should allow users to retrieve the weapon components', () => {
        const weapons = partsModule.weapon;
        expect(weapons.length).to.be.greaterThan(0);
        for (const m of weapons) {
            expect(m).to.not.equal(null);
        }
    });

    it('should allow the users to retrieve the wing components', () => {
        const wings = partsModule.wings;
        expect(wings.length).to.be.greaterThan(0);
        for (const m of wings) {
            expect(m).to.not.equal(null);
        }
    });

});
