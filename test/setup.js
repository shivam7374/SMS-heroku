//setup testing environment before acquiring anything
process.env.NODE_ENV='testing'
const {db}=require('../src/db/models')
before(async ()=>{
    await db.sync()
})