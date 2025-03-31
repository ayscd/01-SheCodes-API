function displayInfo(response) {
    let mainInfo = document.querySelector("#main-info");
    let button = document.querySelector("#button");

    mainInfo.innerHTML = response.data.answer;
    button.innerHTML = "Nice!"
}


function handleInfo(event) {
    event.preventDefault();

    let apiKey = "do8ae0f5a33a8b61b41f1t1ed44678b4";
    let prompt = "Who was the first ever female president? Please, be polite, and make your answer direct.";
    let context = "You are a history teacher, whose favorite study field is women and their legacy.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log(apiUrl);
    axios.get(apiUrl).then(displayInfo);
}

let button = document.querySelector("#button");
button.addEventListener("click", handleInfo);

