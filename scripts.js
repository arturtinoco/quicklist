// Get form elements
const form = document.querySelector("form")
const user_input = document.getElementById("new-item")
const submit_button = document.querySelector('button[type="submit"]')
const items_list = document.getElementById("items-list")
const item = document.getElementsByClassName("item")
const checkbox = document.querySelector('input[type="checkbox"]')
const remove_button = document.querySelector("li > img")

// Call submit button events
form.onsubmit = (event) => {
    event.preventDefault()

    addItem(user_input.value)

    // Unfocus button after use
    submit_button.blur()
}

// Insert new item on top of the list
function addItem(name) {
    // <li class="item"></li>
    const new_item = document.createElement("li")
    new_item.classList.add("item")
    
    // <input type="checkbox">
    const new_checkbox = document.createElement("input")
    new_checkbox.setAttribute("type", "checkbox")
    new_item.append(new_checkbox)

    // <span> user_input.value </span>
    const new_name = document.createElement("span")
    new_name.textContent = name
    new_item.append(new_name)

    // <img src="./..." alt="...">
    const new_remove_img = document.createElement("img")
    new_remove_img.setAttribute("src", "./assets/icons/trash-bin.svg")
    new_remove_img.setAttribute("alt", "Ícone de lata de lixo")
    new_item.append(new_remove_img)

    // Insert new <li class="item"> in <ul role="list" id="items-list"> first position
    items_list.prepend(new_item)
}