// ? Crear la estructura de datos

let id = 1;

class User {
  constructor(id, name, email, website) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.website = website;
  }
}

class Repository {
  constructor() {
    this.users = [];
  }

  createUser({ id, name, email, website }) {
    const newUser = new User(id, name, email, website);
    this.users.push(newUser);
  }

  getAllUsers() {
    return this.users;
  }
}

// ? Interactuar con el DOM y la estructura de datos que creamos

const repository = new Repository();

const btnAddUser = document.getElementById("btnAddUser");

// * Mapear usuarios
const mapUsers = (user) => {
  const cardUser = document.createElement("div");
  cardUser.innerHTML = `
    <p>${user.id}</p>
    <p>${user.name}</p>
    <p>${user.email}</p>
    <p>${user.website}</p>
    `;

  cardUser.style.border = "solid 1px #3A3335";
  cardUser.style.width = "200px";
  cardUser.style.margin = "1em";
  cardUser.style.paddingLeft = "1em";

  return cardUser;
};

// * Renderizando usuarios

const renderUsers = () => {
  // console.log(repository.getAllUsers());
  const containersUsers = document.getElementById("containersUsers");
  containersUsers.innerHTML = "";
  const users = repository.getAllUsers();

  const allUsers = users.map(mapUsers);

  allUsers.forEach((card) => containersUsers.appendChild(card));
};

// * Creamos el usuario en nuestra estructura de datos

const getUsers = (data) => {
  id++;
  repository.createUser(data);
  renderUsers();
};

// * Hacemos una solicitud HTTP de tipo GET para obtener los usuarios
const addUser = () => {
  if (id > 10) return alert("Máximo de usuarios alcanzado");
  $.get(`https://jsonplaceholder.typicode.com/users/${id}`, getUsers);
};

btnAddUser.addEventListener("click", addUser);
