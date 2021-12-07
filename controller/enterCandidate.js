const {candidates} = require('../db/model')

async function createCandidate(cName,cPhone,cEmail){
    const createCandidate = await candidates.create({
        name:cName,
        phoneNo:cPhone,
        email:cEmail
    })
    return createCandidate
}
module.exports = {createCandidate}