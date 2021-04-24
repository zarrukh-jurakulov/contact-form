let Name = localStorage.getItem(storedItem)
let Email = localStorage.getItem(storedItem)
let Message = localStorage.getItem(storedItem)

function sendButton() {
 let item1 = document.getElementById("nameInput").value;
 localStorage.setItem("Name", item1);
 let item2 = document.getElementById("emailInput").value;
 localStorage.setItem("Email", item2);
 let item3 = document.getElementById("messageInput").value;
 localStorage.setItem("Message", item3);
}




function resetButton() {
 document.getElementById('nameInput').value = "";
 document.getElementById('emailInput').value = "";
 document.getElementById('messageInput').value = "";
 location.reload();
}