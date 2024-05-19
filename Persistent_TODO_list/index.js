let items_array = [];
const items = document.getElementById("items")
const input = document.getElementById("item_input")
const storage_key = "items";

function renderItems(){
    items.innerHTML = null ;

    for (const [Idx, item] of Object.entries(items_array)){
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = `- ${item}`;
        
        const button = document.createElement("button")
        button.style.marginTop = "10px"
        button.textContent = "Delete"
        button.onclick = () => removeItem(Idx)

        container.appendChild(text)
        container.appendChild(button)

        items.appendChild(container)
    }
}

function loadItems(){
    const oldItems = localStorage.getItem(storage_key)
    if (oldItems) {
        items_array = JSON.parse(oldItems)
    }
    renderItems()
}

function saveItems(){
    const string_items = JSON.stringify(items_array);
    localStorage.setItem(storage_key, string_items)
}

function removeItem(Idx){
    items_array.splice(Idx,1)
    renderItems()
    saveItems()
}

function addItem(){
    const value = input.value;
    if (!value) {
        alert("Please write an item before clicking.")
        return 
    }
    items_array.push(value)
    renderItems()
    input.value="";
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)