const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("#btn").addEventListener("click", showElements);

function showElements() {
  returnBread(bc);
  document.querySelector("#btn").removeEventListener("click", showElements);
}

function returnBread(array) {
  array.forEach((element) => {
    if (element.name === bc[bc.length - 1].name) {
      console.log("lastchild virker");
      document.querySelector("ul").innerHTML += `<li>${element.name}</li>`;
    } else {
      document.querySelector(
        "ul"
      ).innerHTML += `<li><a href="${element.link}">${element.name} </a></li> <li>/</li>`;
    }
  });
}
