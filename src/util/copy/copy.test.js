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

describe('Data Type Acceptance', () => {
    const STRING = 'spam';
    const INTEGER = 1;
    const OBJECT = {};
    const ARRAY = [];
    const BOOLEAN = true;
    test('string => SUCCESS', () => {
        expect(() => new Copier(STRING)).not.toThrow();
    });
    test('integer => SUCCESS', () => {
        expect(() => new Copier(INTEGER)).not.toThrow();
    });
    test('object => SUCCESS', () => {
        expect(() => new Copier(OBJECT)).not.toThrow();
    });
    test('array => SUCCESS', () => {
        expect(() => new Copier(ARRAY)).not.toThrow();
    });
    test('boolean => ERROR', () => {
        expect(() => new Copier(BOOLEAN)).toThrow();
    });
})

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