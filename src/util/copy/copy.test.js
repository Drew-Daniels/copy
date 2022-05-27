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
    const BOOLEAN = true;
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

});

describe('copy()', () => {

});