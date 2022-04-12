
// SE POPULA EL SELECT ANTES DE QUE CARGUE LA PAGINA
window.onload = () => {
    uploadList();
    populateProducts();

};
//FUNCION DE CARGA DE ARRAY AL LOCALSTORAGE
const uploadList= () =>{
    localStorage.setItem('productos', JSON.stringify(productos));
    console.log("carga en el storage");
   
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
    console.log("llamada funcion ladoven ", producto.molde);
    let loader= parseInt(((producto.golpes/producto.molde)*producto.tiempoHorneo)/32);
    return alert(loader+" moldes que debe cargar por columpio");
} 

// CALCULA CANTIDAD DE MOLDES QUE RECORRE LA LINEA
function moldcount(){
    let producto = getElementOfList()
    let countmold= parseInt(producto.golpes/producto.molde);
    return alert("deben pasar "+ countmold + " moldes por minuto");
   
}

// CALCULA LOS MIN. CON RESPECTOA  LOS KILOS DE BAJA
function masstime(){
    let producto = getElementOfList()
    mass=document.getElementById("baja").value;
    let totaldrop= parseInt(((mass*1000)/producto.peso)/producto.golpes);
    return alert("son: "+ totaldrop + " minutos de IPFM");
}

// IMPRIME LAS CARACTERISTICAS DEL PRODUCTO SELECCIONADO
const resumeProduct= () => {
let producto = getElementOfList()

const products = document.getElementById("productSelected");
for (let clave in producto){
    const p = document.createElement("p");
        p.innerText = `${clave}: ${producto[clave]}`;
        products.appendChild(p);
  }


}


