interface PromiseModel {
    id?: number;
    desc: string;
}

function fetchClient(url: string) {
    return function (resource: string) {
        return function (method: 'GET' | 'POST' | 'PUT' | 'DELETE') {
            return function (body?: PromiseModel): Promise<Response> {
                return fetch(`${url}/${resource}`, {
                    body: body && JSON.stringify(body),
                    headers: {'Content-Type': 'application/json'},
                    method,
                });
            }
        }
    }
}

const api = fetchClient('http://localhost:3000');
const resource = api('promise');
const getAction = resource('GET');
const postAction = resource('POST');

function deleteItem(id: number): void {
    const resource = api(`promise/${id}`);
    resource('DELETE')().then(loadItems);
}

function loadItems(): void {
    getAction().then(function (res) {
        return res.json().then(renderList);
    });
}

function saveItem(): void {
    const input = document.getElementById('promise-input') as HTMLInputElement;
    if (input.value) {
        postAction({ desc: input.value }).then(loadItems);
        input.value = '';
    }
}

function renderList(data: PromiseModel[]): void {
    const table = document.getElementById('promise-table');
    if (table) {
        table.innerHTML = '';
        let tr = document.createElement('tr');
        
        ['Promise', 'Delete'].forEach(function(label) {
            const th = document.createElement('th');
            th.innerText = label;
            tr.appendChild(th);
        });

        table.appendChild(tr);
        data.forEach(function(element) {
            table.appendChild(renderRow(element));
        });
    }
}

function renderRow(element: PromiseModel): HTMLTableRowElement {
    const tr = document.createElement('tr');
    const tdLeft = document.createElement('td');
    tdLeft.innerHTML = element.desc;
    tr.appendChild(tdLeft);

    const tdRight = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Remove';
    deleteBtn.onclick = function() { 
        deleteItem(element.id!); 
    }
    tdRight.appendChild(deleteBtn);
    tr.appendChild(tdRight);
    return tr
}

document.getElementById('promise-save')?.addEventListener('click', saveItem);
loadItems();
