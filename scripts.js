// Get form elements
const form = document.querySelector("form")
const user_input = document.getElementById("new-item")
const submit_button = document.querySelector('button[type="submit"]')

const items_list = document.getElementById("items-list")
const all_remove_icons = document.querySelectorAll("li.item > img")

const error = document.querySelector("div.add-item > p")

// Call submit button events
form.onsubmit = (event) => {
    event.preventDefault()

    // Error managment
    if (user_input.value == "") {
        user_input.classList.add("error-border")
        error.classList.remove("hidden")
        
        submit_button.blur()
        
        user_input.addEventListener("keypress", () => {
            user_input.classList.remove("error-border")
            error.classList.add("hidden")
        })

        return
    } else {
        user_input.classList.remove("error-border")
        error.classList.add("hidden")
    }


    // Add typed input as a list item
    addItem(user_input.value)
    user_input.value = ""

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

    // Make new item's trash-bin icon able do call the deleteEvent() function when clicked
    deleteEvent(new_remove_img)
    

    // Insert new <li class="item"> in <ul role="list" id="items-list"> first position
    items_list.prepend(new_item)

    console.log("Adicionou :)")
}

// Make pre-made example item's trash-bin icon able to call the deleteEvent() function
all_remove_icons.forEach((selected_element) => {
    deleteEvent(selected_element)
    /* SELF NOTE: can be updated in future to work with actually saved inputs
      from own database */
})

// Remove item from list (ul#items-list) when clicked on it's respective trash-bin icon
function deleteEvent(selected_element) {
    selected_element.addEventListener("click", (event) => {
        const warning_box = document.getElementById("warning-wrapper")
        const warning_message = warning_box.querySelector("p")
        const removed_item = event.target.closest("li.item")
        const close_icon = document.getElementById("close-icon")

        // Display item's name on warning message
        warning_message.querySelector("span.removed").textContent = removed_item.querySelector("span").textContent

        // Display full warning message after item being removed
        warning_box.classList.remove("hidden")

        // Remove it from list
        removed_item.remove()

        // Close warning message when clicked on it's X icon
        close_icon.addEventListener("click", () => {
            warning_box.classList.add("hidden")
        })

        console.log("deletou :(")
    })
}
