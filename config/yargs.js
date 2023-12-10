
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    type: 'boolean',
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const estado={
    alias: 'e',
    desc: 'Muestra las tareas de acuerdo al estado'
}



const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('listar','Muestra todas las tareas de acuerdo al estado',{
        estado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}