let input = document.getElementById("input");
let btn = document.getElementById("btn");

btn.addEventListener("click", onClick);

async function onClick() {
    let val = input.value;

    try {
        const response = await fetch(`http://numbersapi.com/${val}/trivia`);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.text();
        console.log(json);
        let para = document.getElementById('info')
        para.innerText = json
    } catch (error) {
        console.error(error.message);
    }
}
