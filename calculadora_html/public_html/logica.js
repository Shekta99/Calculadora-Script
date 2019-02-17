/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function pintar(num){
    document.getElementById("panta").value=document.getElementById("panta").value+num;
}
function calcular(){
    document.getElementById("panta").value=eval(document.getElementById("panta").value);
}
function borrar(){
    document.getElementById("panta").value="";
}