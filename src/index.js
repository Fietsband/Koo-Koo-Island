function component() {
    const element = document.createElement('div');
    element.innerHTML = 'test123';
    return element;
}

document.body.appendChild(component());
