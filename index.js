
// SE POPULA EL SELECT ANTES DE QUE CARGUE LA PAGINA
window.onload = () => {
    populateProducts();

};


// SE POPULA EL SELECT DINAMICAMENTE CON PRODUCTOS PROVENIENTES DEL ARRAY EN ARRAY.JS
const populateProducts = () => {
    const products = document.getElementById("productList");
    productos.map(producto => {
        const option = document.createElement("option");
        option.value = producto.id;
        option.innerText = producto.nombre;
        products.appendChild(option);
    });
};

// SE LLAMA AL PRODUCTO SELECCIONADO DEL ARRAY Y SE GUARDA el OBJETO
function getElementOfList() {
    
    const valueList = document.getElementById("productList").value;
    const producto = productos.filter((producto) => producto.id==valueList)[0]; 
    return producto;
    
}

function loadoven() {
    let producto = getElementOfList()
    console.log("llamada funcion ladoven ", producto.molde);
    let loader= parseInt(((producto.golpes/producto.molde)*producto.tiempoHorneo)/32);
    return alert(loader+" Son los moldes que debe cargar");
} 

function moldcount(){
    let producto = getElementOfList()
    let countmold= parseInt(producto.golpes/producto.molde);
    return alert("deben pasar "+ countmold + " moldes por minuto");
   
}


function masstime(){
    let producto = getElementOfList()
    mass=document.getElementById("baja").value;
    let totaldrop= parseInt(((mass*1000)/producto.peso)/producto.golpes);
    return alert("son: "+ totaldrop + " minutos de IPFM");
}

const resumeProduct= () => {
let producto = getElementOfList()
for (const clave in producto) {
    console.log(`${clave}: ${producto[clave]}`);
  }
const products = document.getElementById("productSelected");
for (let clave in producto){
    const p = document.createElement("p");
        p.innerText = `${clave}: ${producto[clave]}`;
        products.appendChild(p);
  }


}


