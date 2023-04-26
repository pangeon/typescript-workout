import { PromiseModel } from "../12.0.6/interfaces/PromiseModel";

const data = fetch("http://localhost:3000/promise");
const container: HTMLUListElement = document.querySelector("#prog-lang-list");

const new_content: HTMLInputElement = document.querySelector('#new-content');
const id_data_to_delete: HTMLInputElement = document.querySelector('#id-data-to-delete');

const add_btn: HTMLInputElement = document.querySelector('#add-btn');
const erase_btn: HTMLInputElement = document.querySelector('#erase-btn');

add_btn.addEventListener("click", () => {
  console.log(new_content.value);
});

erase_btn.addEventListener("click", () => {
  console.log(id_data_to_delete.value);
});



data.then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
}).then(langs => {
    const langsDesc = langs.map((lang: PromiseModel) => `<li>${lang.desc}</li>`).join("\n");
    if (container) container.innerHTML = langsDesc;
}).catch(error => { console.error(error); });