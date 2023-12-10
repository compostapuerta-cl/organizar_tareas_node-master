const fs=require("fs");
const colors=require("colors");

let listadoPorHacer=[];

const guardarDB=()=>{
    let data=JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data,(err)=>{
        if(err) throw new Error('No se pudo grabar',err);
    })
}

const cargarDB=()=>{  
    try{

        listadoPorHacer=require('../db/data.json');

    }catch(error){

        listadoPorHacer=[];
        
    }
}

const crear=(descripcion)=>{
    cargarDB();
    let porHacer={
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado=(estado)=>{

    cargarDB();

    let listaFiltrada;

    switch(estado){

        case "true":
        
            listaFiltrada=listadoPorHacer.filter(estado=>estado.completado===true);
            break;

        case "false":

            listaFiltrada=listadoPorHacer.filter(estado=>estado.completado===false);
            break;

        default:

            listaFiltrada=listadoPorHacer; 
            break; 

    }
    return listaFiltrada;
}

const actualizar =(descripcion, completado=true)=>{

    cargarDB();
  
    let index=0;

    for(let lista of listadoPorHacer){
        if(lista.descripcion===descripcion){
            break;
        }
        index++;
    }
    if(index!=listadoPorHacer.length){

        listadoPorHacer[index].completado=completado;
        guardarDB();
        return "Tarea actualizada correctamente".cyan;

    }else{

        return "No se encontró esa tarea en la base de datos...".red;

    }

}

const borrar=(descripcion)=>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea=>tarea.descripcion===descripcion);
    if(index!=-1){
        listadoPorHacer.splice(index,1);
        guardarDB();
        return "Tarea borrada correctamente".cyan;
    }
    else{
        return "No se encontró esa tarea en la base de datos...".red;
    }
   
}



module.exports={
    crear,
    getListado,
    actualizar,
    borrar   
}