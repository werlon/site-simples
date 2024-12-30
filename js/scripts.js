function eventos(){
   
    const botaoSim = document.querySelector('#botaoSim');
    const botaoNao = document.querySelector('#botaoNao');
    const botaoSim2 = document.querySelector('#botaoSim2');
    const aviso = document.querySelector('#aviso');

    botaoSim.onmouseover = function(){
        botaoSim2.setAttribute('class','mvisible');
        this.setAttribute('class','mhidden');
    };
    
    botaoSim2.onmouseover = function(){
        botaoSim.setAttribute('class','mvisible');
        this.setAttribute('class','mhidden');
    };

    botaoNao.onclick = ()=> aviso.innerHTML  = '<p>Parabéns, descobriu o Brasil</p>';

}
