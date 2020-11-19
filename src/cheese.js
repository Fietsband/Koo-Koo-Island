function component() {
    const element = document.createElement('div');
    element.innerHTML = 'cheese';
    element.classList.add('red');
    return element;
}

document.body.appendChild(component());
