function assertEquals(expect, actual) {
    // check different data type
    if (typeof expect !== typeof actual && !Array.isArray(expect) && !Array.isArray(actual)) {
        throw new Error(`Expected type ${typeof expect} but found type ${typeof actual}`)
    } else if (Array.isArray(expect) && !Array.isArray(actual)) {
        throw new Error(`Expected type array but found type ${typeof actual}`)
    } else if (!Array.isArray(expect) && Array.isArray(actual)) {
        throw new Error(`Expected type ${typeof expect} but found type array`)
    }

    // check data type number
    if (typeof expect === 'number' && typeof actual === 'number') {
        if (expect === actual) {
            console.info('No error')
        } else {
            throw new Error(`Expected ${expect} but found ${actual}`)
        }
    }

    // check data type number
    if (typeof expect === 'string' && typeof actual === 'string') {
        if (expect === actual) {
            console.info('No error')
        } else {
            throw new Error(`Expected "${expect}" but found "${actual}"`)

        }
    }

    //check data type array
    if (Array.isArray(expect) && Array.isArray(actual)) {
        if (expect.length === actual.length) {
            for (let i = 0; i < expect.length; i++) {
                if (expect[i] !== actual[i]) {
                    throw new Error(`Expected "${expect[i]}" but found "${actual[i]}"`)
                }
            }
            console.info('No error')
        }
    } else if (expect.length !== actual.length) {
        throw new Error(`Expected array length ${expect.length} but found ${actual.length}`)
    }

}

module.exports = assertEquals