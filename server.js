const { request } = require('express');

const app = require('express')();
const PORT = 8000;

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': "add name",
        'birthLocation': 'add location'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': "add name",
        'birthLocation': 'add location'
    },
    'dylan': {
        'age': 29,
        'birthName': "Dylan",
        'birthLocation': 'Dylan'
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/api/:rapperName', (req, res) => {
    const rapperName = req.params.rapperName.toLowerCase()
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    }
    else{
        res.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}, you better go catch it.`)
})
