//your code here
const list = document.getElementById("list")
const prevBtn = document.getElementById("load_prev")
const nextBtn = document.getElementById("load_next")
let pageNumberHere = 1;
const pageNo = document.querySelector("span")

const fetchList = async (pageNumberHere) =>{
	const res = await fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`
);
	pageNo.textContent = pageNumberHere;
	const data = await res.json();
	data.map(item => {
		list.innerHTML += `<li>${item.title}</li>`
	})
}
fetchList(pageNumberHere);

prevBtn.addEventListener("click", () =>{
	pageNumberHere = pageNumberHere - 1;
	if(pageNumberHere < 0){
		pageNumberHere = 0;
	}
	list.innerHTML = '';
	fetchList(pageNumberHere);
})
nextBtn.addEventListener("click", () =>{
	pageNumberHere= pageNumberHere + 1;
	list.innerHTML = '';
	fetchList(pageNumberHere);
})
