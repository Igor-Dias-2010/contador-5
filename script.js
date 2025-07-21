let numero = parseInt(localStorage.getItem('contador')) || 0

function menos() {
    numero -= 1
    salvar()
    render()
}
function zero() {
    numero = 0
    salvar()
    render()
}
function mais() {
    numero += 1
    salvar()
    render()
}
function salvar() {
    localStorage.setItem('contador', numero)
}
function render() {
    document.querySelector('#result').innerHTML = numero
}
render()