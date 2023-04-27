import { PromiseModel } from "../12.0.6/interfaces/PromiseModel";

const apiURL: string = "http://localhost:3000/promise";

const data: Promise<Response> = fetch(apiURL);
const container: HTMLUListElement = document.querySelector("#prog-lang-list");

const new_content: HTMLInputElement = document.querySelector('#new-content');
const id_data_to_delete: HTMLInputElement = document.querySelector('#id-data-to-delete');

const add_btn: HTMLInputElement = document.querySelector('#add-btn');
const erase_btn: HTMLInputElement = document.querySelector('#erase-btn');

add_btn.addEventListener("click", () => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ desc: new_content.value })
  };
  fetch(apiURL, requestOptions)
  .then(response => { if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`); })
  .catch(error => { console.error(error); });
});

erase_btn.addEventListener("click", () => {
  fetch(`${apiURL}/${id_data_to_delete.value}`, { method: 'DELETE' })
  .then(response => { if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`); })
  .catch(error => { console.error(error); });
});

data.then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
}).then(langs => {
    const langsDesc = langs.map((lang: PromiseModel) => `<li>${lang.desc}</li>`).join("\n");
    if (container) container.innerHTML = langsDesc;
}).catch(error => { console.error(error); });