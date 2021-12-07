const route = require('express').Router()
const ExcelJS = require('exceljs')
const {theScores} = require('../../controller/findScore')
const path = require('path')

route.get('/',async (req, res)=>{
    req.header('Access-Control-Allow-Origin',' http://localhost:4536')
    req.header('pragma', 'no-cache')
  req.header('sec-fetch-site', 'cross-site')
  req.header('sec-fetch-mode', 'no-cors')
  req.header('sec-fetch-dest', 'empty')
  req.header('connection', 'close')
  
    console.log(req.headers)
    //console.log(res.headers)
    const scores = await theScores()
    const options = {
        root:path.join('../../')
    }
    //console.log(scores[0].dataValues)
    res.sendFile('scores.xlsx',options)
    
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet('AllScores')
    worksheet.columns = [
        { header: 'Id', key: 'id', width: 2 },
        {header: 'Q1', key: 'q1marks', width: 5},
        {header: 'Q2', key: 'q2marks', width: 5},
        {header: 'Q3', key: 'q3marks', width: 5},
        {header: 'Q4', key: 'q4marks', width: 5},
        {header: 'Q5', key: 'q5marks', width: 5},
        {header: 'Q6', key: 'q6marks', width: 5},
        {header: 'Q7', key: 'q7marks', width: 5},
        {header: 'Q8', key: 'q8marks', width: 5},
        {header: 'Q9', key: 'q9marks', width: 5},
        {header: 'Q10', key: 'q10marks', width: 5},
        {header: 'Q11', key: 'q11marks', width: 5},
        {header: 'Q12', key: 'q12marks', width: 5},
        {header: 'Q13', key: 'q13marks', width: 5},
        {header: 'Q14', key: 'q14marks', width: 5},
        {header: 'Q15', key: 'q15marks', width: 5},
        {header: 'Q16', key: 'q16marks', width: 5},
        {header: 'Q17', key: 'q17marks', width: 5},
        {header: 'Q18', key: 'q18marks', width: 5},
        {header: 'Q19', key: 'q19marks', width: 5},
        {header: 'Q20', key: 'q20marks', width: 5},
        {header: 'Q21', key: 'q21marks', width: 5},
        {header: 'Q22', key: 'q22marks', width: 5},
        {header: 'Q23', key: 'q23marks', width: 5},
        {header: 'Q24', key: 'q24marks', width: 5},
        {header: 'Q25', key: 'q25marks', width: 5},
        {header: 'Q26', key: 'q26marks', width: 5},
        {header: 'Q27', key: 'q27marks', width: 5},
        {header: 'Q28', key: 'q28marks', width: 5},
        {header: 'Q29', key: 'q29marks', width: 5},
        {header: 'Q30', key: 'q30marks', width: 5},
        {header: 'Q31', key: 'q31marks', width: 5},
        {header: 'Q32', key: 'q32marks', width: 5},
        {header:'Total',key:'total',width:10}
    ]
    
        //worksheet.columns.push({header: `Q${k+1}`, key: `q${k+1}`, width: 5})
    
    //worksheet.columns.push({header:'Total',key:'total',width:15})

    for(let t=0;t<scores.length;t++){
        
        worksheet.addRow(scores[t].dataValues)
    }
    worksheet.getRow(1).eachCell((cell)=>{
        cell.font = {bold:true,italic:true}
    }) 
    const score = await workbook.xlsx.writeFile('scores.xlsx')
    /* const paths = `${path}/${scores.slsx}` */
    //res.send('ok')
}
)

module.exports = route