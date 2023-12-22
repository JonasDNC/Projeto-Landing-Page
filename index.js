var SetaEsquerda=window.document.getElementById("setaesquerda")
var SetaDiteira=window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")

function RolarParaDireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    SetaDiteira.style ="display:none"
    SetaEsquerda.style ="display:flex"
}

function RolarParaEsquerda() {
    Leonardo.style ="display:flex"
    Bruna.style ="display:none"
    SetaDiteira.style ="display:flex"
    SetaEsquerda.style ="display:none" 
}