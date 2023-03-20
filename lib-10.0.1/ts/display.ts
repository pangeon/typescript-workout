// TODO: Not working good - fix it
export function showResult(xhr: XMLHttpRequest, url: string): any {
    xhr.open("GET", url);
    xhr.send();
    
    if(xhr.status != 200) {
        console.log(`Status code ${xhr.status}: ${xhr.statusText}`);
    } else {
        const response = JSON.parse(xhr.response);
        return response;
    }  
}

export function addHTMLToBody(tagName: string, content: string, attrName?: string): void {
    const body = document.getElementsByTagName("body")[0];
    const HTMLContainer = document.createElement(tagName);
    HTMLContainer.innerHTML = content;
    if (attrName !== undefined) HTMLContainer.setAttribute(attrName, content);
    body.appendChild(HTMLContainer);
}

export function clearResult() {
    console.log("No implemented yet");
}