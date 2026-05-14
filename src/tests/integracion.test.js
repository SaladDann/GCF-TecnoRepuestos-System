const request = require('supertest');
const app = require('../app');

describe('Pruebas de Integración - API Tecno-Repuestos', () => {
    
    test('POST /api/productos debe registrar un producto y devolver JSON con status 201', async () => {
        const nuevoProducto = {
            nombre: "Bujía NGK de Iridio",
            stock_minimo: 20,
            precio_venta: 12.50
        };

        const response = await request(app)
            .post('/api/productos')
            .send(nuevoProducto);

        // 3.2 Verificación de Respuestas
        expect(response.statusCode).toBe(201); // Verifica código HTTP
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json')); // Verifica formato
        expect(response.body).toHaveProperty('id'); // Verifica estructura JSON
        expect(response.body.nombre).toBe(nuevoProducto.nombre);
    });
});
