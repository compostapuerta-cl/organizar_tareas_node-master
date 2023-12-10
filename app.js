const argv=require('./config/yargs').argv;
const colors=require('colors/safe');
const porHacer=require('./por-hacer/por-hacer');
//console.log(argv);

let comando=argv._[0];

switch(comando){
    case "crear":
        let tarea=porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":

        let listado=porHacer.getListado(argv.estado);
        let i=1;
        console.log(colors.green("\n=============Por Hacer============="));
        for (let tarea of listado){
            console.log("\n\t"+colors.red(i+") ")+tarea.descripcion);
            console.log("\t Estado:",colors.yellow(tarea.completado));
            i++;
        }
        console.log(colors.green("\n==================================="));

        break;
    case "actualizar":
        
        let actualizado=porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(actualizado);
        break;
    case "borrar":
        let borrado=porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;    
    default:
        console.log("Comando no reconocido");
        break;
}