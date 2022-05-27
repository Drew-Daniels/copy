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
    const STRING = 'spam';
    const INTEGER = 1;
    const OBJECT = {};
    const ARRAY = [];
    it('returns the original STRING as promise', async () => {
        const testCopier = new Copier(STRING);
        const res = await testCopier.get();
        expect(res).toBe(STRING);
    });
    it('returns the original INTEGER as promise', async () => {
        const testCopier = new Copier(INTEGER);
        const res = await testCopier.get();
        expect(res).toBe(INTEGER);
    });
    it('returns the original OBJECT as a promise', async () => {
        const testCopier = new Copier(OBJECT);
        const res = await testCopier.get();
        expect(res).toBe(OBJECT);
    });
    it('returns the original ARRAY as a promise', async () => {
        const testCopier = new Copier(ARRAY);
        const res = await testCopier.get();
        expect(res).toBe(ARRAY);
    });
});

describe('delete()', () => {
    const testCopier = new Copier(0);
    it.todo('returns an Error object with the correct error message');
    it.todo('returns an Error message after 2 seconds');
});

describe('copy()', () => {
    const STRING = 'spam';
    const INTEGER = 1;
    const EMPTY_OBJECT = {};
    const FILLED_OBJECT = { a: 'b', c: { d: 'e', f: ['g', { h: 'i' }] } };
    const EMPTY_ARRAY = [];
    const FILLED_ARRAY = [[0, 1], {"spam": 5}];
    it('returns string primitive', () => {
        const testCopier = new Copier(STRING);
        const copyResult = testCopier.copy();
        const result = Object.is(copyResult, STRING);
        expect(result).toBe(true);
    });
    it('returns integer primitive', () => {
        const testCopier = new Copier(INTEGER);
        const copyResult = testCopier.copy();
        const result = Object.is(copyResult, INTEGER);
        expect(result).toBe(true);
    });
    it('returns a new copy of an empty object', () => {
        const testCopier = new Copier(EMPTY_OBJECT);
        const copyResult = testCopier.copy();
        const result = Object.is(copyResult, EMPTY_OBJECT);
        expect(result).toBe(false);
    });
    it('returns a deep copy of an object with multiple levels', () => {
        const testCopier = new Copier(FILLED_OBJECT);
        const copyResult = testCopier.copy();
        const result = Object.is(copyResult, FILLED_OBJECT);
        expect(result).toBe(false);
    });
    it('returns a new copy of an empty array', () => {
        const testCopier = new Copier(EMPTY_ARRAY);
        const copyResult = testCopier.copy();
        const result = Object.is(copyResult, EMPTY_ARRAY);
        expect(result).toBe(false);
    });
    it('returns a new copy of a non-empty array', () => {
        const testCopier = new Copier(FILLED_ARRAY);
        const copyResult = testCopier.copy();
        const result = Object.is(copyResult, FILLED_ARRAY);
        expect(result).toBe(false);
    });
});