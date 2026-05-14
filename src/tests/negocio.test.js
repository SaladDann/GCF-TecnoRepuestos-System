const { verificarYRestarStock, calcularFacturacion } = require('../services/negocio');

describe('Pruebas Unitarias - Tecno-Repuestos S.A.', () => {

    // Pruebas para Stock
    describe('Control de Inventario', () => {
        test('Debe descontar el stock correctamente en una venta normal', () => {
            expect(verificarYRestarStock(20, 5)).toBe(15);
        });

        test('Debe lanzar un error si la venta es mayor al stock disponible', () => {
            expect(() => {
                verificarYRestarStock(5, 10);
            }).toThrow("Stock insuficiente para realizar la venta");
        });
    });

    // Pruebas para Facturación
    describe('Cálculos de Facturación', () => {
        test('Debe aplicar el 15% de IVA a un subtotal de $100', () => {
            expect(calcularFacturacion(100)).toBe(115.00);
        });

        test('Debe redondear correctamente a dos decimales', () => {
            // Debe ser 12.13
            expect(calcularFacturacion(10.55)).toBe(12.13);
        });
    });
});