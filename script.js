// fetch data
let display = document.getElementById("data");
let userArray = [];
let response = [];

// get response from server
let Users = async () => {
  let request = await fetch("https://api.github.com/users");
  response = await request.json();
  console.log(response);
  DisplayData();
};
console.log(response, "response");

// Display data
let DisplayData = () => {
  response.map((elem, index) => {
    let list = document.createElement("li");
    userArray.push(list);
    list.innerHTML = `
        <div class='box'>
          <div class="box-img">
          <img src=${elem.avatar_url}>
          </div>
          <div class="box-data">
          <h1>${elem.login}</h1>
          <p>${elem.html_url}</p>
          </div>
        </div>
        `;
    display.appendChild(list);
  });
  //   display.innerHTML = data;
}
// let  todos = response.filter((item, index) =>  index < 20 && item.completed == true);};
console.log(userArray, "Muhammad");


// Search filter on 
let search = document.getElementById("input-data");
search.addEventListener("input", (e) => {
  let val = e.target.value;
  console.log(val);
  userArray.filter((curr) => {
    if (curr.innerText.toLowerCase().includes(val.toLowerCase())) {
      curr.classList.remove("hide");
    } else {
      curr.classList.add("hide");
    }
  });
});

Users();
