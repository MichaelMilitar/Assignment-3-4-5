// 1) Select the section with an id of container without using querySelector.

document.getElementById("container");

// 2) Select the section with an id of container using querySelector.

document.querySelector("#container")

// 3) Select all of the list items with a class of "second".

    let elements = document.querySelectorAll("li.second");
    for (let i= 0; i < elements.length; i++) {
        console.log(elements[i])
}

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.

document.querySelector("ol .third");

// 5) Give the section with an id of container the text "Hello!".

let changecon = document.querySelector("#container");
changecon.innerText = "Hello";

// 6) Add the class main to the div with a class of footer.

let footer = document.querySelectorAll(".footer");
footer.forEach(div => {
    if (div.classList.contains("footer"))
        div.classList.add("main")
});

// 7) Remove the class main on the div with a class of footer.

let footer = document.querySelector(".footer");
footer.classList.remove(" main");

// 8) Create a new li element.

var newLi = document.createElement("li");

// 9) Give the li the text "four".

newLi.innerText = "four"

// 10) Append the li to the ul element.

let li = document.querySelector("ul");
li.appendChild(newLi);

// 11) Loop over all of the lis inside the ol tag and give them a background color of "green".

let inli = document.querySelectorAll("ol li");
for(var i = 0; i < inli.length; i++){
    inli[i].style.backgroundColor = "green";
}

// 12) Remove the div with a class of footer.

let footer = document.querySelector(".footer");
footer.remove();