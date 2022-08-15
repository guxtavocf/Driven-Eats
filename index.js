function SelecionarPrato(selecaoprato) {
    const seletor = document.querySelector(".seletor1 .borda")
    comidasjs = selecaoprato;
    precocomidas = comidasjs.querySelector(".precochtml").innerHTML
    titulocomidas = comidasjs.querySelector(".titulochtml").innerHTML
    if (seletor !== null) {
    seletor.classList.remove("borda")
    }
    selecaoprato.classList.add("borda")
    ativabotao()
}
function SelecionarBebida(selecaobebida) {
    const seletorjs2 = document.querySelector(".seletor2 .borda")
    bebidasjs = selecaobebida;
    precobebidas = bebidasjs.querySelector(".precobhtml").innerHTML
    titulobebidas = bebidasjs.querySelector(".titulobhtml").innerHTML
    if (seletorjs2 !== null) {
        seletorjs2.classList.remove("borda")
    }
    selecaobebida.classList.add("borda")
    ativabotao()
}
function SelecionarSobremesa(selecaodoces) {
    const seletorjs3 = document.querySelector(".seletor3 .borda ")
    sobremesajs = selecaodoces;
    precosobremesa = sobremesajs.querySelector(".precoshtml").innerHTML
    titulosobremesas = sobremesajs.querySelector(".tituloshtml").innerHTML
    if (seletorjs3 !== null) {
        seletorjs3.classList.remove("borda")
    }
    selecaodoces.classList.add("borda")
    ativabotao()
}

let comidasjs;
let bebidasjs;
let sobremesajs;
let precocomidas;
let precobebidas;
let precosobremesa;
let titulocomidas;
let titulobebidas;
let titulosobremesas;

function ativabotao() {
    if (comidasjs && bebidasjs && sobremesajs) {
         const finalizacao = document.querySelector(".rodapefinal")
         const finalizacaotexto = document.querySelector(".rodapefinal p")
         finalizacao.classList.add("botaoativado")

         const custocomida = Number(precocomidas.substr(3))
         const custobebida = Number(precobebidas.substr(3))
         const custosobremesa = Number(precosobremesa.substr(3))
         const custototal = custocomida + custobebida + custosobremesa;
         const mensagem = encodeURIComponent(
            `Olá, gostaria de fazer o pedido:
            - Prato: ${titulocomidas}
            - Bebida: ${titulobebidas}
            - Sobremesa: ${titulosobremesas}
            Total: ${custototal.toFixed(2)} `
         )
         finalizacaotexto.innerHTML=`<a href="https://wa.me/5551983149267?text=${mensagem}">Fechar pedido</a>`
    }
}
 
