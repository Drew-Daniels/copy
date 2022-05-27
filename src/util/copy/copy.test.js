import Copier from './copy';

describe('# args', () => {
    test('0 args => SUCCESS', () => {
        expect(()  => new Copier()).not.toThrow();
    });
    test('1 arg => SUCCESS', () => {
        expect(() => new Copier(0)).not.toThrow();
    });
    test('2 args => ERROR', () => {
        expect(() => new Copier(0, 0)).toThrow();
    });
});

describe('get()', () => {
    test.todo('Returns a promise');
    test.todo('string => SUCCESS');
    test.todo('integer => SUCCESS');
    test.todo('object => SUCCESS');
    test.todo('array => SUCCESS');
});

describe('delete()', () => {

});

describe('copy()', () => {

});