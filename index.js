const express = require('express')
const uuid = require('uuid')
const port = 3000
const app = express()
app.use(express.json())


const orders = []

const checkOrderId = (request, response, next) => {
    const { id } = request.params

    const index = orders.findIndex(order => order.id === id)

    if (index < 0) {

        return response.status(404).json({error:'Order not Found.'})

    }

    request.orderIndex = index
    request.orderId = id

    next()

}

const checkMethodUrl = (request, response, next) => {

    const method = request.method
    const url = request.url

    console.log(`The Method used in this request was ${method}, at the adress ${url}`)

    next()
}

app.post('/orders', checkMethodUrl, (request, response) => {

    const {order, clientName, price, status } = request.body

    const orderPush = { id: uuid.v4(), order, clientName, price, status }

    orders.push(orderPush)

    return response.status(201).json(orderPush)

})

app.get('/orders', checkMethodUrl, (request, response) => {

    return response.status(201).json(orders)
})

app.put('/orders/:id', checkOrderId, checkMethodUrl, (request, response) => {
    const id = request.orderId
    const { order, clientName, price, status } = request.body
    const index = request.orderIndex

    const updatedOrder = {id, order, clientName, price, status}

    orders[index] = updatedOrder
    return response.json(updatedOrder)

})

app.delete('/orders/:id', checkOrderId, checkMethodUrl, (request, response) => {

    const index = request.orderIndex


    orders.splice(index, 1)

    return response.status(204).json({message:'Order Deleted.'})
})

app.get('/orders/:id', checkOrderId, checkMethodUrl, (request, response) => {

    const index = request.orderIndex

    return response.status(201).json(orders[index])

    
})

app.patch('/orders/:id', checkOrderId, checkMethodUrl, (request, response) => {
    const index = request.orderIndex

    orders[index].status = "Ready-to-Go"

    return response.status(201).json(orders[index])


})


app.listen(port, () => {
    console.log(`✔ The server has started on Port ${port}. ✔`)
})