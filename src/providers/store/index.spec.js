import { Store } from ".";

describe('Store Provider', () =>{
    const store = new Store();

    afterEach(() => {
        store.clear();
    })

    describe('SET ITEM', () => {
        test('should set item in store', () => {
            store.set('test', 'test');
            const resp = store.get('test');
            expect(resp).toBe('test');
        })
    })

    describe('GET ITEM', () => {
        test('should get item from store when it is present', () => {
            store.set('test', 'test');
            const resp = store.get('test');
            expect(resp).toBe('test');
        })
    
        test('should return null when given item not present', () => {
            const resp = store.get('test');
            expect(resp).toBe(null);
        })
    })

    describe('DELETE ITEM', () => {
        test('should delete item from store when it is present', () => {
            store.set('test', 'test');
            store.del('test');
            const resp = store.get('test');
            expect(resp).toBe(null);
        })
    
        test('should delete item from store when not present', () => {
            store.del('test');
            const resp = store.get('test');
            expect(resp).toBe(null);
        })
    })

    describe('CLEAR STORE', () => {
        test('should clear store when not empty', () => {
            store.set('test', 'test');
            store.clear();
            const resp = store.get('test');
            expect(resp).toBe(null);
        })

        test('should clear store when empty', () => {
            store.clear();
            const resp = store.get('test');
            expect(resp).toBe(null);
        })
    })
})
