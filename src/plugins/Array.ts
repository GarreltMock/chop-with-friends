export {}

declare global {
    interface Array<T> {
        readonly first: T | undefined
        readonly last: T | undefined
    }
    interface ReadonlyArray<T> {
        readonly first: T | undefined
        readonly last: T | undefined
    }
}

if (!Object.getOwnPropertyDescriptor(Array.prototype, 'first')) {
    Object.defineProperty(Array.prototype, 'first', {
        get: function () {
            return this[0]
        },
        enumerable: false,
        configurable: false,
    })
}

if (!Object.getOwnPropertyDescriptor(Array.prototype, 'last')) {
    Object.defineProperty(Array.prototype, 'last', {
        get: function () {
            return this[this.length - 1]
        },
        enumerable: false,
        configurable: false,
    })
}