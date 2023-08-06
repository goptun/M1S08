export default function createOptions(selectElement, arrayOfOptions) {
  arrayOfOptions.forEach((element) => {
    let optionElement = document.createElement("option");
    optionElement.innerText = element;
    element = element
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    optionElement.setAttribute("value", element);
    selectElement.appendChild(optionElement);
  });
}
