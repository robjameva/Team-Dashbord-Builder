const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('create new object', () => {

        let rob;

        beforeEach(() => {
            rob = new Employee('robert', 1, 'rob@gmail.com')
        })

        it('should create a new employee object', () => {

            expect(rob.name).toBe('robert')
            expect(rob.id).toBe(1)
            expect(rob.email).toBe('rob@gmail.com')
        })

        it('should gets employee name', () => {
            expect(rob.getName()).toBe('robert')
        })

        it('should gets employee ID', () => {
            expect(rob.getId()).toBe(1)
        })

        it('should gets employee email', () => {
            expect(rob.getEmail()).toBe('rob@gmail.com')
        })

        it('should gets employee role', () => {
            expect(rob.getRole()).toBe('Employee')
        })
    })
})
