
// SE POPULA EL SELECT ANTES DE QUE CARGUE LA PAGINA
window.onload = () => {
    uploadList();
    populateProducts();

};
//FUNCION DE CARGA DE ARRAY AL LOCALSTORAGE
const uploadList= () =>{
    localStorage.setItem('productos', JSON.stringify(productos));
<<<<<<< HEAD
=======
    console.log("carga en el storage");
>>>>>>> 6a0d852835faf48d72edc0183a1c9019d80e309e
   
}

//SE GUARDA LISTA DEL STORAGE EN UNA CONSTANTE
const productosStorage= JSON.parse(localStorage.getItem('productos'));

// SE POPULA EL SELECT DINAMICAMENTE CON PRODUCTOS PROVENIENTES DEL ARRAY EN ARRAY.JS
const populateProducts = () => {
    const products = document.getElementById("productList");
    productosStorage.map(producto => {
        const option = document.createElement("option");
        option.value = producto.id;
        option.innerText = producto.nombre;
        products.appendChild(option);
    });
};

// SE LLAMA AL PRODUCTO SELECCIONADO DEL ARRAY Y SE GUARDA el OBJETO
function getElementOfList() {
<<<<<<< HEAD
    
    const valueList = document.getElementById("productList").value;
    const producto = productosStorage.filter((producto) => producto.id==valueList)[0]; 
    return producto;
    
}

// CALCULA LA CANTIDAD DE MOLDES POR COLUMPIO
function loadoven() {
    let producto = getElementOfList()
    let loader= parseInt(((producto.golpes/producto.molde)*producto.tiempoHorneo)/32);
    return Swal.fire({ 
        text:`deben cargar ${loader} moldes por columpio`,
        icon: "success",
    })
    
=======
    
    const valueList = document.getElementById("productList").value;
    const producto = productosStorage.filter((producto) => producto.id==valueList)[0]; 
    return producto;
    
}

// CALCULA LA CANTIDAD DE MOLDES POR COLUMPIO
function loadoven() {
    let producto = getElementOfList()
    console.log("llamada funcion ladoven ", producto.molde);
    let loader= parseInt(((producto.golpes/producto.molde)*producto.tiempoHorneo)/32);
    return alert(loader+" moldes que debe cargar por columpio");
>>>>>>> 6a0d852835faf48d72edc0183a1c9019d80e309e
} 

// CALCULA CANTIDAD DE MOLDES QUE RECORRE LA LINEA
function moldcount(){
    let producto = getElementOfList()
    let countmold= parseInt(producto.golpes/producto.molde);
<<<<<<< HEAD
    return Swal.fire({ 
        text:`deben pasar ${countmold} moldes por minuto`,
        icon: "success",
    })
=======
    return alert("deben pasar "+ countmold + " moldes por minuto");
>>>>>>> 6a0d852835faf48d72edc0183a1c9019d80e309e
   
}

// CALCULA LOS MIN. CON RESPECTOA  LOS KILOS DE BAJA
function masstime(){
    let producto = getElementOfList()
    mass=document.getElementById("baja").value;
    let totaldrop= parseInt(((mass*1000)/producto.peso)/producto.golpes);
<<<<<<< HEAD
    return Swal.fire({ 
        text:`son ${totaldrop} minutos de IPFM`,
        icon: "success",

    })
}

// IMPRIME LAS CARACTERISTICAS DEL PRODUCTO SELECCIONADO  PISANDO EL PRODUCT
const resumeProduct= () => {
let producto = getElementOfList()
const products = document.getElementById("productSelected");
document.getElementById("productSelected").innerHTML = "";

=======
    return alert("son: "+ totaldrop + " minutos de IPFM");
}

// IMPRIME LAS CARACTERISTICAS DEL PRODUCTO SELECCIONADO
const resumeProduct= () => {
let producto = getElementOfList()

const products = document.getElementById("productSelected");
>>>>>>> 6a0d852835faf48d72edc0183a1c9019d80e309e
for (let clave in producto){
    const p = document.createElement("p");
        p.innerText = `${clave}: ${producto[clave]}`;
        products.appendChild(p);
  }


}

<<<<<<< HEAD
=======

>>>>>>> 6a0d852835faf48d72edc0183a1c9019d80e309e
