const {scoreSheet} = require('../db/model')

async function createScoreSheet(arrMarks,totalMarks){

    const theSheet = await scoreSheet.create({
        q1marks:arrMarks[0],
        q2marks:arrMarks[1],
        q3marks:arrMarks[2],
        q4marks:arrMarks[3],
        q5marks:arrMarks[4],
        q6marks:arrMarks[5],
        q7marks:arrMarks[6],
        q8marks:arrMarks[7],
        q9marks:arrMarks[8],
        q10marks:arrMarks[9],
        q11marks:arrMarks[10],
        q12marks:arrMarks[11],
        q13marks:arrMarks[12],
        q14marks:arrMarks[13],
        q15marks:arrMarks[14],
        q16marks:arrMarks[15],
        q17marks:arrMarks[16],
        q18marks:arrMarks[17],
        q19marks:arrMarks[18],
        q20marks:arrMarks[19],
        q21marks:arrMarks[20],
        q22marks:arrMarks[21],
        q23marks:arrMarks[22],
        q24marks:arrMarks[23],
        q25marks:arrMarks[24],
        q26marks:arrMarks[25],
        q27marks:arrMarks[26],
        q28marks:arrMarks[27],
        q29marks:arrMarks[28],
        q30marks:arrMarks[29],
        q31marks:arrMarks[30],
        q32marks:arrMarks[31],
        total:totalMarks
    })
    return theSheet
}

module.exports = {createScoreSheet}