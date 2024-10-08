//Selecciona os elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount") //Elemento tem id
const expense = document.getElementById("expense") //Elemento tem id despesa
const category = document.getElementById("category") //Elemento tem id despesa

//Seleciona os elementos da lista
const expenseList = document.querySelector("ul")


amount.oninput = () => {
  //Estou recebendo o valor do input tirando as letras e...
  let value = amount.value.replace(/\D/g, "")

  //Transforma o valor em centavos para funcionar a conversão do valor certinho
  //Exemplo 150 / 100 = 1.5 que é equivalente R$1,50
  value = Number(value) / 100

  //Devolvendo apenas os numeros
  amount.value = formatCurrencyBRL(value)
}

//Formata no padrão brasileiro BRL
function formatCurrencyBRL(value){
  value = value.toLocaleString("pt-BR",{
    style: "currency",
    currency: "BRL",
  }) 

  return value
}

//Criar o evento de formulario
//Captura o evento de submit do formulario para obter os valores
form.onsubmit = (event) => {
  //previne o carregamento padrão de recarregar a pagina
  event.preventDefault()

  //Cria um novo objeto com os detalhes da pesquisa
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value, // Estou pegando do próprio input o valor
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,//pegando apenas a opção selecionada
    amount: amount.value,
    created_at: new Date(),

  }

  //console.log(newExpense)
  expenseAdd(newExpense)
}

function expenseAdd(newExpense){
  try {
    //Cria o elemento li para adicionar o item na lista ul
    const expenseItem = document.createElement("li")
    expenseItem.classList.add("expense")

    //Cria o icone da categoria
    const expenseIcon = document.createElement("img")
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
    expenseIcon.setAttribute("alt", newExpense.category_name)

    //Adiciona as informações no item
    expenseItem.append(expenseIcon)
    expenseList.append(expenseItem)

  } catch (error) {
    alert("Não foi possivel atualizar a lista de despesas")
    console.log(error)
  }
}