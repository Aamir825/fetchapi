// fetch data
let display = document.getElementById("data");
let userArray = [];
let Todos = async () => {
  let request = await fetch("https://api.github.com/users");
  let response = await request.json();
  console.log(response);

  // let  todos = response.filter((item, index) =>  index < 20 && item.completed == true);
  let data = "";
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
        display.appendChild(list)
  });
//   display.innerHTML = data;

};
console.log(userArray, "Muhammad")

// Search filter
let search = document.getElementById("input-data");
search.addEventListener('input', (e)=>{
    let val = e.target.value;
    console.log(val);
    userArray.filter((curr)=>{
        if(curr.innerText.toLowerCase().includes(val.toLowerCase())){
            curr.classList.remove("hide");
        }else{
            curr.classList.add("hide");
        }
    })
})


Todos();
