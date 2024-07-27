require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000 || process.env.port
app.use(express.json())
const db = require('./connection')
app.use(cors())
app.post('/insertData',async (req, res)=>{
    try {
        const {lat, lng} = req.body
        const query = await db(`Insert into coords_data ( lat, lng) values('${lat}', '${lng}')`)
        res.json({message:"Success!"}).status(200)
        console.log(lng)
    } catch (error) {
        console.log(error)
        res.json({message:"Error!"})
    }

})
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})