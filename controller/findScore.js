const {scoreSheet} = require('../db/model')

async function theScores(){
    const allScores = await scoreSheet.findAll()
    return allScores
}

module.exports={theScores}