function designate(a){
    document.getElementById("display").value+=a;
}
function del(){
    var w= document.getElementById("display").value;
    document.getElementById("display").value=w.substring(0,w.length-1);
}
function equal(){
    var w=document.getElementById("display").value;
    var x=eval(w);
 document.getElementById("display").value=x;
}
function ac(){
    document.getElementById("display").value="";
}