class Usuario{
    constructor(nombre, edad, mail, tareas){
        this.nombre = nombre;
        this.edad = edad;
        this.mail = mail;
        this.tareas = tareas;
    }

    agregarTarea(tarea) {
        this.tareas.push(tarea);
        console.log(`Tarea "${tarea}" agregada`);
    }
        
    listarTareas() {
        console.log(`Las tareas de ${this.nombre} son:`);
        this.tareas.forEach((tarea, i) => {
            console.log(`${i + 1}. ${tarea}`);
        });
    }

    eliminarTarea(tarea) {
        const tareaIndex = this.tareas.findIndex((t) => t === tarea);
        if (tareaIndex !== -1) {
            this.tareas.splice(tareaIndex, 1);
            console.log(`Tarea "${tarea}" eliminada`);
        } else {
            console.log(`Error: tarea "${tarea}" no encontrada`);
        }
    }
}

function listarTodasLasTareas() {
    console.log('--- Listado de todas las tareas ---');

    [usuario1, usuario2].forEach(usuario => {
        console.log(`Tareas de ${usuario.nombre}:`);

    if (usuario.tareas.length === 0) {
        console.log(`No hay tareas para ${usuario.nombre}`);
    } else {
        usuario.tareas.forEach((tarea, i) => {
            console.log(`${i + 1}. ${tarea}`);
        });
    }

    console.log('\n');
    });
}

// ---------- Pruebas ------------ //

const usuario1 = new Usuario('Lucas', 21, 'lucasg.ridolfi@gmail.com', [
    'Ir al trabajo', 
    'Entrenar'
])
const usuario2 = new Usuario('Ramiro', 22, 'ramybohe@hotmail.com', [
    'Ir a la cancha', 
    'Pasear al perro'
])

usuario1.listarTareas();
usuario2.listarTareas();
usuario1.agregarTarea('Ir a comprar');
usuario2.agregarTarea('Dormir la siesta');
usuario1.listarTareas();
usuario2.listarTareas();
usuario1.eliminarTarea('Ir a comer'); // Tarea no existente
usuario2.eliminarTarea('Ir a la cancha');
usuario1.listarTareas();
usuario2.listarTareas();
listarTodasLasTareas();