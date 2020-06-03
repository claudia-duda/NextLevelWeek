//city = document.querySelector("select[name=uf]");
//city.addEventListener("change", getCities) 

function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]");
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
        for(const state of states) {
            ufSelect.innerHTML+= `<option value="${state.id}">${state.nome}</option>`
        }
        
    })
}
function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("select[name=state]")
    
    const ufValue = event.target.value

    const indexState = event.target.selectedIndex
    stateInput.value = event.target.options[indexState].text
     
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33|35/municipios`

    fetch(url)
    .then(res => res.json())
    .then(cities => {
        for(const city of cities) {
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }
        citySelect.disabled = false        
    } )
    
}
populateUFs()

changeUF =document.querySelector("select[name=uf]")
changeUF.addEventListener('change', getCities)