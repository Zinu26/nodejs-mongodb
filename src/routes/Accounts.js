const express = require('express')
const router = express.Router()

const CreateService = require('../services/Create')
const RetrieveService = require('../services/Retrieve')
const UpdateService = require('../services/Update')
const DeleteService = require('../services/Delete')

router.post('/create', async (req, res) => {
    const { username, password } = req.body
    
    const result = await CreateService(username, password)

    if(result){
        res
            .status(200)
            .send({
                status: result,
                message: 'Successfully Created'
            })
    } else {
        res
            .status(500)
            .send({
                status: result,
                message: "Creation Failed"
            })
    }
})


router.post('/retrieve', async (req, res) => {

    const result = await RetrieveService()

    if(result){
        res
            .status(200)
            .send(result)
    } else {
        res
            .status(500)
            .send({
                status: result,
                message: "Retrieve Failed"
            })
    }
})


router.post('/update', async (req, res) => {
    const { _id, set } = req.body
    
    const result = await UpdateService( _id, set )

    if(result){
        res
            .status(200)
            .send({
                status: result,
                message: 'Successfully Updated'
            })
    } else {
        res
            .status(500)
            .send({
                status: result,
                message: "Update Failed"
            })
            
    }
})


router.post('/delete', async (req, res) => {
    const { _id } = req.body
    
    const result = await DeleteService(_id)

    if(result){
        res
            .status(200)
            .send({
                status: result,
                message: 'Successfully Deleted'
            })
    } else {
        res
            .status(500)
            .send({
                status: result,
                message: "Deletion Failed"
            })
    }
})

module.exports = router