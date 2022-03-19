
    /*
    let tmold=document.querySelector("mold").value;
    let blow=document.getElementById("blow").value;
    let time=document.getElementById("time").value;
*/


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







/*

const moldeHornoPan = (tmold,golpes,tiempo) => {
    result = ((golpes/tiempo)/tmold)*32;
    return result;
};





if(typem=="barrilito"){
function loadoven(){
    
}


    tmolde=4;
}
else(typem=="molde chico"){
    tmolde=5;
} 


else{
    alert("ingrese dato valido");
}
console.log(tmolde)
console.log("molde horno pan "+ moldeHornoPan)


function getOptions() {
    var x = document.getElementById("mySelect");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
        txt = txt + " " + x.options[i].text;
    }
    
}
*/
