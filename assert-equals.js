function assertEquals(expect, actual) {
    if (typeof expect !== typeof actual) {
        console.error(`Expected type ${typeof expect} but found type ${typeof actual}`)
        return
    }

    if (typeof expect === 'number' && typeof actual === 'number') {
        if (expect === actual) {
            console.info('No error')
        } else {
            console.error(`Expected ${expect} but found ${actual}`)
            return
        }
    }

    if (typeof expect === 'string' && typeof actual === 'string') {
        if (expect === actual) {
            console.info('No error')
        } else {
            console.error(`Expected "${expect}" but found "${actual}"`)
            return
        }
    }

    if (Array.isArray(expect) && Array.isArray(actual)) {
        if (expect.length === actual.length) {
            for (let i = 0; i < expect.length; i++) {
                if (expect[i] !== actual[i]) {
                    console.error(`Expected "${expect[i]}" but found "${actual[i]}"`)
                }
            }
            console.info('No error')
        }
    } else if (expect.length !== actual.length) {
        console.error(`Expected array length ${expect.length} but found ${actual.length}`)
    }
}

module.exports = assertEquals