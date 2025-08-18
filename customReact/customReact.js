
function customRender(reactElement, mainComponent) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', 'reactElement.props.href')

    mainComponent.appendChild(domElement);
    */


    // looping Structure
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for(const prop in reactElement.props)
    {
        if(prop === 'children') continue;
        domElement.setAttribute('prop', reactElement.props[prop])
    }

    mainComponent.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children: 'click me to visit google'
}


const mainComponent = document.querySelector('#root');

customRender(reactElement, mainComponent);

