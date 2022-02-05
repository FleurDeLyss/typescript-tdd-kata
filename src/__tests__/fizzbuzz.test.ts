import fizzbuzz from "../fizzbuzz";

describe('FizzBuzz tdd test', () => {
    let expected: string[];
    beforeAll(async () => {
        expected = ['0','1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz'];
	})
    it('Test fizzbuzz 3', async () => {
        let result = fizzbuzz(3);
        expect(result[0]).toEqual(expected[0]);
        expect(result[1]).toEqual(expected[1]);
        expect(result[2]).toEqual(expected[2]);
    });
    it('Test fizzbuzz 5', async () => {
        let result = fizzbuzz(5);
        expect(result[0]).toEqual(expected[0]);
        expect(result[1]).toEqual(expected[1]);
        expect(result[2]).toEqual(expected[2]);
        expect(result[3]).toEqual(expected[3]);
        expect(result[3]).toEqual(expected[4]);
    });
    it('Test fizzbuzz 15', async () => {
        let result = fizzbuzz(15);
        expect(result[0]).toEqual(expected[0]);
        expect(result[1]).toEqual(expected[1]);
        expect(result[2]).toEqual(expected[2]);
        expect(result[3]).toEqual(expected[3]);
        expect(result[14]).toEqual(expected[14]);
    });
    it('Test fizzbuzz 15', async () => {
        let result = fizzbuzz(0);
        expect(result.length).toBe(0);
    });
});