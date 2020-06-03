//city = document.querySelector("select[name=uf]");
//city.addEventListener("change", getCities) 

function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]");
   
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    
    .then( res => res.json() )
    .then( states => {
        for(const state of states) {
            ufSelect.innerHTML+= `<option value="${state.id}">${state.nome}</option>`
        }
        
    })
}
populateUFs()
function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")
    
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
     
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true
 

    fetch(url)
    .then( res => res.json())
    .then( cities => {

        for(const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false        
    } )
    
}


changeUF =document.querySelector("select[name=uf]")
changeUF.addEventListener('change', getCities)



const itenstoCollect = document.querySelectorAll(".items-grid li")
const collectedItems =  document.querySelector("input[name=items]")
let selectedItems = []

for(const item of itenstoCollect){
    item.addEventListener("click", handleSelectItem)
}


function handleSelectItem(event){
    const itemLi = event.target 
    //add and remove class
    itemLi.classList.toggle("selected")
    const itemId = itemLi.dataset.id

    const alreadySelected = selectedItems.findIndex(item => item === itemId)
    
    if(alreadySelected >= 0){
        const filteredItems = selectedItems.filter( item => item != itemId)
        selectedItens = filteredItems
    }else{
        selectedItems.push(itemId)
    }
    collectedItems.value = selectedItems
    
}