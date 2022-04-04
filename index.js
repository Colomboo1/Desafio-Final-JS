
function loadoven() {
    
    let tmold=Number(prompt("el molde tiene 4 cavidades o 5?"));
    let blow=Number(prompt("a cuantos golpes va la divisora?"));
    let time=Number(prompt("cuanto es el tiempo de horneo"));
    let loader= parseInt(((blow/tmold)*time)/32);
    console.log(tmold,blow,time)
    return (
        alert(loader+" Son los moldes que debe cargar")
    )   
} 

function moldcount(){
    
    let tmold=Number(prompt("el molde tiene 4 cavidades o 5?"));
    let blow=Number(prompt("a cuantos golpes va la divisora?"));
    let countmold= parseInt(blow/tmold);
    return (
        alert("deben pasar "+ countmold + " moldes por minuto")
    )    
}


function masstime(){
    let mass=Number(prompt("cuantos kilos de baja?"));
    let blow=Number(prompt("a cuantos golpes va la divisora?"));
    let product=Number(prompt("a cuanto pesa el producto?"));
    let totaldrop= parseInt(((mass*1000)/product)/blow);
    return (
        alert("son: "+ totaldrop + " minutos de IPFM")
    )
}

const resumeProducts = () => {
const nombres= productos.map((name) =>name.nombre);
console.log(nombres);
//alert(` Los productos para elegir son: \n ${nombres} `)
}

// Recibo por parámetro el array
function productListByHTML(productos) {
    // contenedor asignado
    let contenedor = document.getElementById("mold");
  
    // Recorremos el array y por cada item para el option
    for (const producto of productos) {
      // contenedor individual
      let option = document.createElement("option");
  
      option.innerHTML = `<option value=${produto.mold}>${prodcuto.name}</option>`;
  
      //agregamos al contenedor  desde el HTML
      contenedor.appendChild(option);
    }
  }


const productos=[
    Mesa335={
        nombre:"Pan de Mesa Lactal 335g",
        molde:5,
        peso:335,
        conTapa:false,
        tiempoHorneo:20,
        tiempoEnf:60,
        golpes:112,
        rebanadas:10,
        marca:"Lactal"

    },
    Salvado350={
        nombre:"Salvado chico Lactal 350g",
        molde:5,
        peso:410,
        conTapa:false,
        tiempoHorneo:20,
        tiempoEnf:60,
        golpes:100,
        rebanadas:10,
        marca:"Lactal"

    },	
    SemillasLactal={
        nombre:"Pan semillas Lactal 370g",
        molde:5,
        peso:410,
        conTapa:false,
        tiempoHorneo:20,
        tiempoEnf:60,
        golpes:100,
        rebanadas:10,
        marca:"Lactal"

    },	
    LacteoChico={
        nombre:"Pan lacteo chico Fargo 470g ",
        molde:5,
        peso:515,
        conTapa:true,
        tiempoHorneo:20,
        tiempoEnf:60,
        golpes:90,
        rebanadas:10,
        marca:"fargo"

    },	
    RusticoBriosh={
        nombre:"Pan Rustico Briosh 500g",
        molde:5,
        peso:570,
        conTapa:false,
        tiempoHorneo:20,
        tiempoEnf:60,
        golpes:82,
        rebanadas:10,
        marca:"briosh"

    },	
    Liviano={
        nombre:"Pan liviano Bimbo 400g",
        molde:5,
        peso:465,
        conTapa:true,
        tiempoHorneo:20,
        tiempoEnf:60,
        golpes:98,
        rebanadas:10,
        marca:"bimbo"

    },	
    PanBlanco={
        nombre:"Pan blanco bimbo 320g",
        molde:4,
        peso:360,
        conTapa:false,
        tiempoHorneo:19,
        tiempoEnf:60,
        golpes:93,
        rebanadas:10,
        marca:"fargo"
    }, 
    SalvadoF={ 
        nombre:"Pan de salvadp Fargo 350g",
        molde:4,
        peso:415,
        conTapa:false,
        tiempoHorneo:19,
        tiempoEnf:60,
        golpes:93,
        rebanadas:10,
        marca:"fargo"
    }, 	
    DobleIntegral={
        nombre:"Pan doble integral fargo 440g",
        molde:4,
        peso:510,
        conTapa:false,
        tiempoHorneo:21,
        tiempoEnf:60,
        golpes:84,
        rebanadas:10,
        marca:"fargo"
    },
    MixCereal={
        nombre:"Pan mixcereal fargo 430g",
        molde:4,
        peso:495,
        conTapa:false,
        tiempoHorneo:21,
        tiempoEnf:60,
        golpes:84,
        rebanadas:10,
        marca:"fargo"
    },
    Lino={
        nombre:"Pan de lino bimbo 350g",
        molde:4,
        peso:435,
        conTapa:false,
        tiempoHorneo:19,
        tiempoEnf:60,
        golpes:93,
        rebanadas:10,
        marca:"bimbo"
    },
    Integral={
        nombre:"Pan integral bimbo 320g",
        molde:4,
        peso:415,
        conTapa:false,
        tiempoHorneo:19,
        tiempoEnf:60,
        golpes:93,
        rebanadas:10,
        marca:"bimbo"
    },
    ArtesanoSemilas={
        nombre:"Artesano semillas bimbo 400g",
        molde:4,
        peso:460,
        conTapa:false,
        tiempoHorneo:23,
        tiempoEnf:60,
        golpes:77,
        rebanadas:10,
        marca:"bimbo"
    },
    Artesano={
        nombre:"Artesano bimbo 400g",
        molde:4,
        peso:450,
        conTapa:false,
        tiempoHorneo:23,
        tiempoEnf:60,
        golpes:77,
        rebanadas:10,
        marca:"bimbo"
    }
]
