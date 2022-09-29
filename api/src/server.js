const app = require('./app.js')
const port = 8080;

app.listen(port, () => {
    console.log(`Inventory API is running on port ${port}`)
})