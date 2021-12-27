const Manager = require('../lib//Manager');

describe('Manager', () => {
    let rob;

    beforeEach(() => {
        rob = new Manager('robert', 1, 'rob@gmail.com', 100)
    })

    describe('create new Manager object', () => {

        it('should create a new Manager object', () => {

            expect(rob.name).toBe('robert')
            expect(rob.id).toBe(1)
            expect(rob.email).toBe('rob@gmail.com')
            expect(rob.officeNumber).toBe(100)
        })


        it('should gets Manager role', () => {
            expect(rob.getRole()).toBe('Manager')
        })
    })
})
