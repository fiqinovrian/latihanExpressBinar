const express = require('express');
const app = express()

const longger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}
app.use(longger);

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/products', (req, res) => {
    res.json([
        "Apple",
        "Redmi",
        "One Plus One"
    ])
});

app.get('/orders', (req, res) => {
    res.json([
        {
            Id: 1,
            paod: false,
            user_id: 1
        },
        {
            id: 2,
            paid: false,
            user_id: 2
        },
    ])
});

app.get('/users', (req, res) => {
    res.send([
        {
            nama: "fiqi",
            ttl: "Ptk, 2 Juni 2022",
            jk: "Laki - Laki"
        },
        {
            nama: "novrian",
            ttl: "Ptk, 11 Agustus 2022",
            jk: "Laki - Laki"
        }
    ])
});

app.listen(3000, () => {
    console.log("Server nyala")
});