const resp = fetch("https://reqres.in/api/users?page=2");
console.log(resp);
resp
  .then((response) => response.json())
  .then((json) => {
    let content = document.getElementById("container");
    let htmlX = "";
    json.data.forEach((element) => {
      console.log(element);

      let htmlCard = `<div class="card" style="width: 300px;">
        
        <div class="card-body" style="width: 200px;">
                <img src=" ${element.avatar}"  alt="" width="200px" height="200px">
                <h5>Email: ${element.email}</h5>
                
                <button type="button" data-bs-toggle="modal" data-bs-target="#details" class="btn btn-info center" onclick="findById(${element.id})">Detalles</button>
                <br>
                <button type="button" data-bs-toggle="modal" data-bs-target="#details" class="btn btn-danger" onclick="DeleteById(${element.id})">Eliminar</button>
            </div>
        </div>
      </div> <br><br> <br> <br> </div>`;
      htmlX = htmlX + htmlCard;
    });
    content.innerHTML = htmlX;
  });

const findById = (id) => {
  fetch("https://reqres.in/api/users/" + id)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.data);
      document.getElementById("name").innerHTML = json.data.first_name;
      document.getElementById("last").innerHTML = json.data.last_name;
      document.getElementById("email").innerHTML = json.data.email;
      document.getElementById("avatar").src = json.data.avatar;
    });
};

const DeleteById = (id) => {
    fetch("https://reqres.in/api/users/2" + id)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        document.getElementById("name").innerHTML = json.data.first_name;
      document.getElementById("last").innerHTML = json.data.last_name;
      document.getElementById("email").innerHTML = json.data.email;
      document.getElementById("avatar").src = json.data.avatar;
      });
  };
