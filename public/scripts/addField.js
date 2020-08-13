//procurar botao
// quando clicar no botão executar uma ação
// duplicar os campos
// colocar na pagina

document.querySelector("#add-time")
.addEventListener('click', cloneField)


function cloneField(){

  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

  //limpar os campos
  const fields = newFieldContainer.querySelectorAll('input')

  fields.forEach(function(field){
    field.value = ""
    //console.log(field)

  })

  /*
  fields[0].value=""
  fields[1].value="" */

  //console.log(fields[0].value="")

  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}