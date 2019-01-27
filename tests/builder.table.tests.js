const expect = require('chai').expect;
const builder = require('../app').builder;

describe('reversed table tests' , () => {

    /**
     * Builds a table that maps the alphabet and numbers to the opposite counterpart.
     */
    const buildLocalTable = () => {
        const mapToOpposite = (str, callback) => {
            for(let i = 0; i < str.length; i++) {
                const opposite = str.length - 1 - i;
                callback(str.charAt(i), str.charAt(opposite));
            }
        };
        const result = {};
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        mapToOpposite(alphabet, (key, value) => {
            result[key] = value;
            result[key.toUpperCase()] = value.toUpperCase();
        });
        mapToOpposite(numbers, (key, value) => {
            result[key] = value;
        });
        return result;
    };

   it('should create a reversed table', () => {
       const output = builder.createReversedTable();
       const expected = buildLocalTable();
       expect(output).to.not.equal(null);
       expect(Object.keys(output).length).to.equal(Object.keys(expected).length);
       Object.keys(output).forEach(key => {
            expect(output[key]).to.equal(expected[key]);
       });
   });

   it('should return reversed table if input is null', () => {
       const input = null;
       const output = builder.createReversedTable(input);
       const expected = buildLocalTable();
       expect(output).to.not.equal(null);
       expect(Object.keys(output).length).to.equal(Object.keys(expected).length);
       Object.keys(output).forEach(key => {
           expect(output[key]).to.equal(expected[key]);
       });
   });

   it('should throw an error if the input is non-alphanumeric', () => {
       const input = '+-/.,';
       const output = builder.createReversedTable;
       const expected = 'Argument is not alphanumeric.';
       expect(output.bind(output, input)).to.throw(expected);
   });

   it('should create a mapping with no duplicates', () => {
      const input = 'aaaabbbbccccddddd';
      const expected = {a: 'd', b: 'c', c: 'b', d: 'a', A: 'D', B: 'C', C: 'B', D: 'A'};
      const output = builder.createReversedTable(input);
      expect(output).to.not.equal(null);
      expect(Object.keys(output).length).to.equal(Object.keys(expected).length);
      Object.keys(output).forEach(key => {
         expect(output[key]).to.equal(expected[key]);
      });
   });
});
