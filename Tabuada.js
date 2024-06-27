function Tabuada() {
    var num = document.getElementById('numero');
    var mult = document.getElementById('multiplicador');
    var res = document.getElementById('resposta');
    if(num.value.length == 0 || mult.value.length == 0){
        window.alert('Confira os dados digitados!')
    } else {
    var n = Number(num.value);
    var m = Number(mult.value);
    var x = 0;
    var r = '';
    var botao = document.getElementById('botao');
    res.innerHTML = `A TABUADA DO ${n} É: <br>`; 
        do{
            r = n*x;
            res.innerHTML += `${n} x ${x} = ${r} <br>`;
            x++;
        } while (x<=m)
    
   }   
}