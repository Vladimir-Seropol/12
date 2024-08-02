const userList = document.querySelector('#userList');
const sortById = document.querySelector("#sortById"); 


let users = []; 

async function fetchUsers() {
  let resp = await fetch('https://jsonplaceholder.typicode.com/comments');
  users = await resp.json(); 
  users = users.splice(0, 10);
  renderUsers(users); 
}




fetchUsers();

function renderUsers(users) {
  userList.textContent = ''; 
  users.forEach(user => {

    const listItem = document.createElement('div');
    userList.appendChild(listItem);

    const idItem = document.createElement('h3');
    idItem.innerHTML = `id: ${user.id} `
    listItem.appendChild(idItem);

    const titleItem = document.createElement('h3');
    titleItem.innerHTML = user.name;
    listItem.appendChild(titleItem);

    const emailItem = document.createElement('p');
    emailItem.innerHTML = `email: ${user.email} `
    listItem.appendChild(emailItem);

    const websiteItem = document.createElement('h4');
    websiteItem.innerHTML =  user.body;
    listItem.appendChild(websiteItem);

  });
}



sortById.addEventListener("click", toggleSort);

let isAscending;

function toggleSort() {
	const sortArryUser = [...users].sort((a, b) => isAscending ? a.id - b.id : b.id - a.id);
	renderUsers(sortArryUser);

	isAscending = !isAscending;
}

