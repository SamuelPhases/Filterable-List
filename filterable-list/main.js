// let filterValue = document.getElementById("filtervalue");
// filterValue.addEventListener("keyup", pickname());

// function pickname() {
//   let filterInputValue = document.getElementById("filtervalue").value;
//   console.log(filterInputValue);
// }

let filterInput = document.getElementById("filtervalue");

filterInput.addEventListener("keyup", pickNames);

function pickNames() {
  let filterInputValue = document
    .getElementById("filtervalue")
    .value.toUpperCase();
  //   console.log(filterInputValue);
  //   console.log(12);
  // Check if it matches

  let nameList = document.querySelectorAll(".collection-content");
  nameList.forEach(item => {
    let fullList = item.getElementsByTagName("a")[0];
    if (fullList.innerHTML.toUpperCase().indexOf(filterInputValue) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
