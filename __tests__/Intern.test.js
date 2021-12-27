const Intern = require('../lib/Intern');

describe('Intern', () => {
    let rob;

    beforeEach(() => {
        rob = new Intern('robert', 1, 'rob@gmail.com', 'Rowan')
    })

    describe('create new Intern object', () => {

        it('should create a new Intern object', () => {

            expect(rob.name).toBe('robert')
            expect(rob.id).toBe(1)
            expect(rob.email).toBe('rob@gmail.com')
            expect(rob.school).toBe('Rowan')
        })

        it('should gets Intern school', () => {
            expect(rob.getSchool()).toBe('Rowan')
        })

        it('should gets Intern role', () => {
            expect(rob.getRole()).toBe('Intern')
        })
    })
})
