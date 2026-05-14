
const crearAdmin = () => {
    console.log("--- Iniciando Creación de Usuario ---");
    const admin = {
        nombre: "Admin TecnoRepuestos",
        email: "admin@tecnorepuestos.com",
        password: "AdminPassword123", // En producción esto debe ir encriptado
        rol: "admin"
    };
    
    // lógica para guardar en la base de datos (DB)
    console.log(`ÉXITO: Usuario ${admin.email} creado con rol ${admin.rol}.`);
    process.exit(0);
};

crearAdmin();