export function addHTMLToBody(tagName: string, content: string, attrName?: string): void {
    const body = document.getElementsByTagName("body")[0];
    const HTMLContainer = document.createElement(tagName);
    HTMLContainer.innerHTML = content;
    if (attrName !== undefined) HTMLContainer.setAttribute(attrName, content);
    body.appendChild(HTMLContainer);
}