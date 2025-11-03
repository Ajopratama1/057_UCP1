const express = require('express');
const app = express();
const port = 3001;
const db = require('./models');
app.use(express.json());
app.use(express.urlencoded({ 
    extended: false 
}));

app.listen(port, () => {
  console.log(`Server strated on port 3001`);
})

db.sequelize.sync()
    .then((result) => {
        app.listen(3001, () => {
            console.log('Server started');
        });
    })
    .catch((err) => {
        console.log(err);
    });

    app.post('/Buku', async (req, res) => {
        const data = req.body;
        try{
            const Buku = await db.Buku.create(data);
            res.send(Buku);
        } catch (err) {
            res.send(err);  
        }
    });

    app.get('/Buku', async (req, res) => {
        try {
            const Bukus =  await db.Buku.findAll();
            res.send(Bukus);
        } catch (err) {
            res.send(err);
        }
    });

    app.put('/Buku/:id', async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        try {
            const Buku = await db.Buku.findByPk(id);
            if (!Buku) {
                return res.status(404).send({ message: 'Buku tidak ditemukan' });
            } 
            await Buku.update(data);
            res.send({ message: 'Buku berhasil diupdate', Buku });
        } catch (err) {
            res.status(500).send(err);
        }   
    });

    app.delete('/Buku/:id', async (req, res) => {
        const id = req.params.id;
        try {
            const Buku = await db.Buku.findByPk(id);
            if (!Buku) {
                return res.status(404).send({ message: 'Buku tidak ditemukan' });
            }
            await Buku.destroy();
            res.send({ message: 'Buku berhasil dihapus' });
        } catch (err) {
            res.status(500).send(err);
        }
    });
