/**
 * Lógica de negocio para Tecno-Repuestos S.A.
 */
const verificarYRestarStock = (stockActual, cantidadAVender) => {
    if (cantidadAVender > stockActual) {
        throw new Error("Stock insuficiente para realizar la venta");
    }
    return stockActual - cantidadAVender;
};

const calcularFacturacion = (subtotal) => {
    const IVA_PORCENTAJE = 0.15;
    const total = subtotal * (1 + IVA_PORCENTAJE);
    return Math.round(total * 100) / 100; 
};

// Exportar funciones individuales
module.exports = { verificarYRestarStock, calcularFacturacion };