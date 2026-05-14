const express = require('express');
const app = express();
app.use(express.json());

// Endpoint de prueba para Tecno-Repuestos
app.post('/api/productos', (req, res) => {
    const { nombre, stock_minimo, precio_venta } = req.body;
    
    // Simulación de creación exitosa
    res.status(201).json({
        id: 101,
        nombre,
        stock_minimo,
        precio_venta
    });
});

module.exports = app;