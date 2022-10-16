// url = "https://swapi.dev/api/people/?search=${q}";

let id;

async function getData() {
    let q = document.getElementById("input").value;

    let url = `https://swapi.dev/api/people/?search=${q}`;

    let res = await fetch(url);

    let data = await res.json();
    // console.log(data.results)
    appendtodiv(data.results);
}

function appendtodiv(result) {
    let div = document.getElementById("container");
    div.innerHTML = null;
    let q = document.getElementById("input").value;
    if (q == "") {
        div.innerHTML = null;
    }
    else {
        result.forEach(function (el) {
            let Character = document.createElement("p");
            Character.innerText = el.name;
            let d = document.createElement("div");
            d.id = "bgcolor"
            d.append(Character);
            div.append(d);
        })
    }
}

async function debouncefun(func, delay) {
    if (id) {
        clearTimeout(id);
    }

    id = setTimeout(function () {
        func();
    }, delay)
}

window.addEventListener("load", debouncefun(playSong, 500));
function playSong() {
    song.play();
}