//Eg of the axios
let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    // console.log("button is clicked");
    let fact = await getFacts();
    // console.log(fact);
    let result = document.querySelector("#result");
    result.innerText = await fact;
});

async function getFacts() {
    try {
        let res = await axios.get(url); //axios.get helps to parse the json directly
        return res.data.fact;
    } catch (e) {
        console.log(e);
        return "No fact found";
    }
}
