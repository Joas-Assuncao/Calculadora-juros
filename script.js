const calcularComposto = document.querySelector('#calcularComposto');

calcularComposto.addEventListener('click', () => {
    let aporteMensal = document.querySelector('#aporteMensal');
    let jurosMensaisCompostos = document.querySelector('#jurosMensaisCompostos');
    let mesesInvestidos = document.querySelector('#mesesInvestidos');
    let resultado = document.querySelector('#resultadoComposto');
    
    if(aporteMensal.value.length === 0 || jurosMensaisCompostos.value.length === 0 || mesesInvestidos.value.length === 0) {
        alert('É necessário completar todos os dados');
    } 

    else {
        aporteMensal = Number(aporteMensal.value);
        jurosMensaisCompostos = (Number(jurosMensaisCompostos.value)) / 100; 
        mesesInvestidos = Number(mesesInvestidos.value);

        let contaFinal = Math.round(((aporteMensal * (Math.pow(1 + jurosMensaisCompostos, mesesInvestidos) - 1)) / jurosMensaisCompostos) * 100) / 100;
        let dinheiro = contaFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        resultado.innerHTML = `O valor futuro da aplicação será de: ${ dinheiro }`;
        resultado.style.textDecoration = 'underline';
    }
})



const calcularSimples = document.querySelector('#calcularSimples');

calcularSimples.addEventListener('click', () => {
    let valorInvestido = document.querySelector('#valorInvestido');
    let jurosMensaisSimples = document.querySelector('#jurosMensaisSimples');
    let tempoInvestimento = document.querySelector('#tempoInvestimento');
    let resultado = document.querySelector('#resultadoSimples');

    if(valorInvestido.value.length === 0 || jurosMensaisSimples.value.length === 0 || tempoInvestimento.value.length === 0) {
        alert('É necessário completar todos os dados');
    } else {
        valorInvestido = Number(valorInvestido.value);
        jurosMensaisSimples = Number(jurosMensaisSimples.value) / 100;
        tempoInvestimento = Number(tempoInvestimento.value);
        
        let contaFinal = valorInvestido + (valorInvestido * jurosMensaisSimples * tempoInvestimento);
        let dinheiro = contaFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        
        resultado.innerHTML = `O valor futuro da aplicação será de: ${ dinheiro }`;
        resultado.style.textDecoration = 'underline';
    }
})