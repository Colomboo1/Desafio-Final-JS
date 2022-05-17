// SE POPULA EL SELECT ANTES DE QUE CARGUE LA PAGINA
window.onload = () => {
    uploadList();
    getweather();
    populateProducts();
};

//FUNCION DE CARGA DE ARRAY AL LOCALSTORAGE
const uploadList= () =>{
    localStorage.setItem('productos', JSON.stringify(productos)); 
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
} 

// CALCULA CANTIDAD DE MOLDES QUE RECORRE LA LINEA
function moldcount(){
    let producto = getElementOfList()
    let countmold= parseInt(producto.golpes/producto.molde);
    return Swal.fire({ 
        text:`deben pasar ${countmold} moldes por minuto`,
        icon: "success",
    })  
}

// CALCULA LOS MIN. CON RESPECTO A LOS KILOS DE BAJA
function masstime(){
    let producto = getElementOfList()
    mass=document.getElementById("baja").value;
    let totaldrop= parseInt(((mass*1000)/producto.peso)/producto.golpes);
    return Swal.fire({ 
        text:`son ${totaldrop} minutos de IPFM`,
        icon: "success",
    })
}

// IMPRIME LAS CARACTERISTICAS DEL PRODUCTO SELECCIONADO PISANDO EL PRODUCTO ANTERIOR
const resumeProduct= () => {
let producto = getElementOfList()
const products = document.getElementById("productSelected");
document.getElementById("productSelected").innerHTML = "";
for (let clave in producto){
    const p = document.createElement("p");
        p.innerText = `${clave}: ${producto[clave]}`;
        products.appendChild(p);
  }


}

