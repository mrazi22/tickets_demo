const express = require('express')
const userRoutes = require('./routes/UserRoutes')
const orderRoutes = require('./routes/OrdersRoute')
const ProductRoutes = require('./routes/productsRoutes')
const cors = require('cors')

require('dotenv').config()
require('./helpers/init_mongodb')

const app = express()

app.use(express.json())
app.use(cors(
    {
        origin:'http://localhost:3000'
    }
))


app.use('/user',userRoutes)
app.use('/products',ProductRoutes)
app.use('/order',orderRoutes)






const port = 4000

app.listen(port, () => {
    console.log(` app listening on port ${port}`)
})
