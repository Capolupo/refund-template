//Selecciona os elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount") //Elemento tem id
const expense = document.getElementById("expense") //Elemento tem id despesa
const category = document.getElementById("category") //Elemento tem id despesa

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
form.onsubmit = (event) => {
  event.preventDefault()
}