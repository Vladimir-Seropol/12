


const catalogList = document.querySelector("#catalogList");
const buttonUp = document.querySelector("#buttonUp");
const buttonDown = document.querySelector("#buttonDown");
const price = document.querySelector('#price');


let catalog = [];



async function fetchCatalog() {

	let resp = await fetch('./json/catalog.json');
	catalog = await resp.json();
	renderCatalog(catalog);
}
fetchCatalog();
function renderCatalog(catalogArray) {

	catalogList.textContent = '';
	catalogArray.forEach(catalog => {

		const catalogHtml = `
         <tr>
          <th>${catalog.id}</th>
          <td>${catalog.name}</td>
          <td>${catalog.price}</td>
			 <td>${catalog.description}</td>
			 <td>${catalog.images}</td>
        </tr>`;
		catalogList.insertAdjacentHTML('beforeend', catalogHtml);
	});
}

catalogList.textContent = '';

buttonUp.addEventListener("click", function () {

	const sortArryCatalog = [...catalog].sort((a, b) => a.price - b.price);
	renderCatalog(sortArryCatalog);
});

buttonDown.addEventListener("click", function () {

	const sortArryCatalog = [...catalog].sort((a, b) => b.price - a.price);
	renderCatalog(sortArryCatalog);
});





price.addEventListener("click", toggleSort);

let isAscending;

function toggleSort() {

	const sortArryCatalog = [...catalog].sort((a, b) => isAscending ? a.price - b.price : b.price - a.price);
	renderCatalog(sortArryCatalog);

	isAscending = !isAscending;
}









