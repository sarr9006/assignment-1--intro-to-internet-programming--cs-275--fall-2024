window.onload = () => {
    let output = document.getElementById(`output`);
    let content = ``;
    let counter = 1;

    let input = window.prompt(`Insert a number here`);
    input = parseInt(input, 10);
    console.log(typeof input);
    if (input < 2) {
        alert(`Integers less than 2 are not allowed. Please try again.`)
    } else if (isNaN(input) === true) {
        alert(`Input invalid. Please try again.`)
    }

    let myNewArray = new Array(input);
    console.log(`the size of my new array is ${myNewArray.length}`);

    content = `<table>`;
    for (let i = 0; i < myNewArray.length; i++) {
        content += `<tr>`;
        for (let j = 0; j < myNewArray.length; j++) {
            content += `<td>${counter++}</td>`;            
        }
        content += '</tr>'
    }
    content += `</table>`;
    output.innerHTML = content;
}
