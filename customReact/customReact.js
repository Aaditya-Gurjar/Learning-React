function customRender(reactElement, mainContainer) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.prop.href);
  domElement.setAttribute("target", reactElement.prop.target);
  mainContainer.appendChild(domElement);
}

const reactElement = {
  type: "a",
  prop: {
    href: "google.com",
    target: "_blank",
  },
  children: "Click me to Visit Google",
};

const mainContainer = document.getElementById("root");
customRender(reactElement, mainContainer);
