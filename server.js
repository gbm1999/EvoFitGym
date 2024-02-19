const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Define las rutas para servir tus archivos HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/conocenos', (req, res) => {
    res.sendFile(path.join(__dirname, 'conocenos.html'));
});

app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'contacto.html'));
});
app.get('/galeria-imagenes', (req, res) => {
    res.sendFile(path.join(__dirname, 'galeriaImagenes.html'));
});

app.get('/servicio', (req, res) => {
    res.sendFile(path.join(__dirname, 'servicios.html'));
});

app.get('/entrenamientos-personales', (req, res) => {
    res.sendFile(path.join(__dirname, 'servicio2.html'));
});

app.get('/asesoramiento-nutricional', (req, res) => {
    res.sendFile(path.join(__dirname, 'servicio1.html'));
});

app.get('/tarifa', (req, res) => {
    res.sendFile(path.join(__dirname, 'tarifa.html'));
});



// Configura el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
