const route = require('express').Router()
const {createCandidate} = require('../../controller/enterCandidate')

route.post('/',async (req, res) => {
    const {data} = req.body
    if(data.theName===' '||data.theEmail===' '||data.thePhone==='0987654321'){
        res.status(200).send({
            message:'Need all details to proceed '
        })
    }
    else{
        const theCandidate = createCandidate(data.theName,data.thePhone,data.theEmail)
        res.status(201).send('ok')
    }
})

module.exports = route
