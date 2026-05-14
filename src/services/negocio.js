/**
 * Lógica de negocio para Tecno-Repuestos S.A. Prueba
 */
const negocioService = {
    // Control de stock
    verificarYRestarStock: (stockActual, cantidadAVender) => {
        if (cantidadAVender > stockActual) {
            throw new Error("Stock insuficiente para realizar la venta");
        }
        return stockActual - cantidadAVender;
    },

    // Cálculo iva
    calcularFacturacion: (subtotal) => {
        const IVA_PORCENTAJE = 0.15;
        const total = subtotal * (1 + IVA_PORCENTAJE);
        return Math.round(total * 100) / 100; 
    }
};

module.exports = negocioService;