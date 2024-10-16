// Gets form elements
const form = document.querySelector("form")
const user_input = document.getElementById("new-item")
const input_button = document.querySelector('button[type="submit"]')
const items_list = document.getElementById("items-list")
const item = document.getElementsByClassName("item")
const checkbox = document.querySelector('input[type="checkbox"]')
const item_name = document.querySelector("span")
const remove_button = document.querySelector("li > svg")//maybe div > img


form.onsubmit = (event) => {
    event.preventDefault()

    addItem(user_input.value)

    input_button.blur()
}

function addItem(name) {
    const new_item = document.createElement("li")
    new_item.setAttribute("class", "item")
    
    const new_checkbox = document.createElement("input")
    new_checkbox.setAttribute("type", "checkbox")
    new_item.append(new_checkbox)

    const new_name = document.createElement("span")
    new_name.textContent = name
    new_item.append(new_name)

    const new_remove_img = document.createElement("img")
    new_remove_img.setAttribute("src", "./assets/icons/trash-bin.svg")
    new_remove_img.setAttribute("alt", "Ícone de lata de lixo")
    new_item.append(new_remove_img)

    items_list.prepend(new_item)
}