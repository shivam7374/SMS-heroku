const{expect}=require('chai')
const{
    createAnonUser,
    getUserById,
    getUserByUsername
}=require('../../src/controllers/users.js')

describe('controllers/users',()=>{

    let createduser=null
    it('should create unknown users',async()=>{
        createduser=await createAnonUser()
        expect(createduser).to.have.property('username')
        expect(createduser.id).to.be.a('number')

    })
    it('should find user by userid',async()=>{
        let founduser=await getUserById(createduser.id)
        expect(founduser.username).to.equal(createduser.username)
    })
    it('should find user by username',async()=>{

        let founduser=await getUserByUsername(createduser.username)
        expect(founduser.id).to.equal(createduser.id)
    })
})