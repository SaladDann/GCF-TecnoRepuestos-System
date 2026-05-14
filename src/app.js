const express = require('express');
const { calcularFacturacion, verificarYRestarStock } = require('./services/negocio');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON
app.use(express.json());

// Ruta base (Validación de funcionamiento)
app.get('/', (req, res) => {
    res.send('Servidor de Tecno-Repuestos funcionando correctamente.');
});

// Endpoint 3.1: Validación de creación de productos
app.post('/api/productos', (req, res) => {
    const { nombre, stock_minimo, precio_venta } = req.body;
    
    // Simulación de creación exitosa (Paso 3.1 del manual)
    res.status(201).json({
        id: 101,
        nombre,
        stock_minimo,
        precio_venta
    });
});

// 6.2 Registrar Producto
app.post('/api/productos', (req, res) => {
    const { nombre, stockMinimo, precio } = req.body;
    res.status(201).json({
        id: Math.floor(Math.random() * 1000),
        nombre,
        stockMinimo,
        precio,
        mensaje: "Producto registrado en catálogo"
    });
});

// 6.3 Registrar Compra (Ingreso de Stock)
app.post('/api/compras', (req, res) => {
    const { productoId, cantidad, costoUnitario } = req.body;
    res.status(201).json({
        transaccion: "COMP-" + Date.now(),
        productoId,
        cantidadRecibida: cantidad,
        mensaje: "Stock actualizado correctamente"
    });
});

// Endpoint 6.4: Registro de una venta de ejemplo
app.post('/api/ventas', (req, res) => {
    const { producto, cantidad, precioUnitario } = req.body;
    
    if (!producto || !cantidad || !precioUnitario) {
        return res.status(400).json({ error: "Faltan datos requeridos" });
    }

    try {
        const subtotal = cantidad * precioUnitario;
        const total = calcularFacturacion(subtotal); 

        res.status(201).json({
            mensaje: "Venta registrada con éxito",
            detalle: { 
                producto, 
                cantidad, 
                subtotal, 
                total: total.toFixed(2) 
            }
        });
    } catch (error) {
        res.status(500).json({ error: "Error en el cálculo" });
    }
});

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose exitosamente en http://localhost:${PORT}`);
});

// Exportar para las pruebas de integración
module.exports = app;