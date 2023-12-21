const express = require('express');
const app = express();
const cors = require("cors")
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/api/data', (req, res) => {
    res.json({ message: 'Dados do backend!' });
});
app.listen(port, () => {
    console.log(`Servidor Express rodando em http://localhost:${port}`);
});