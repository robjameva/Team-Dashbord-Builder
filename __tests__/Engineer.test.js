const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    let rob;

    beforeEach(() => {
        rob = new Engineer('robert', 1, 'rob@gmail.com', 'robjameva')
    })

    describe('create new Engineer object', () => {

        it('should create a new Engineer object', () => {

            expect(rob.name).toBe('robert')
            expect(rob.id).toBe(1)
            expect(rob.email).toBe('rob@gmail.com')
            expect(rob.github).toBe('robjameva')
        })

        it('should gets Engineer github username', () => {
            expect(rob.getGithub()).toBe('robjameva')
        })

        it('should gets Engineer role', () => {
            expect(rob.getRole()).toBe('Engineer')
        })
    })
})
