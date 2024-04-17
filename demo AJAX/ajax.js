// ? Crear la estructura de datos

// let id = 1;

// class User {
//   constructor(id, name, email, website) {
//     this.id = id;
//     this.name = name;
//     this.email = email;
//     this.website = website;
//   }
// }

// class Repository {
//   constructor() {
//     this.users = [];
//   }

//   createUser({ id, name, email, website }) {
//     const newUser = new User(id, name, email, website);
//     this.users.push(newUser);
//   }

//   getAllUsers() {
//     return this.users;
//   }
// }

// // ? Interactuar con el DOM y la estructura de datos que creamos

// const repository = new Repository();

// const btnAddUser = document.getElementById("btnAddUser");

// // * Mapear usuarios
// const mapUsers = (user) => {
//   const cardUser = document.createElement("div");
//   cardUser.innerHTML = `
//     <p>${user.id}</p>
//     <p>${user.name}</p>
//     <p>${user.email}</p>
//     <p>${user.website}</p>
//     `;

//   cardUser.style.border = "solid 1px #3A3335";
//   cardUser.style.width = "200px";
//   cardUser.style.margin = "1em";
//   cardUser.style.paddingLeft = "1em";

//   return cardUser;
// };

// // * Renderizando usuarios

// const renderUsers = () => {
//   // console.log(repository.getAllUsers());
//   const containersUsers = document.getElementById("containersUsers");
//   containersUsers.innerHTML = "";
//   const users = repository.getAllUsers();

//   const allUsers = users.map(mapUsers);

//   allUsers.forEach((card) => containersUsers.appendChild(card));
// };

// // * Creamos el usuario en nuestra estructura de datos

// const getUsers = (data) => {
//   id++;
//   repository.createUser(data);
//   renderUsers();
// };

const addUserButton = document.getElementById("addUserButton")
let i=1;

class User{
    constructor(id, name, username, email){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    };
};

class Repository {
    constructor(){
        this.user=[];
    }
    createUser({id, name, username, email}){
        const newUser = new User(id, name, username, email)
        this.user.push(newUser)
    }
};

const repository = new Repository();
const refresh = () => {
    const userContainer = document.getElementById("userContainer");
    userContainer.innerHTML = "";
    
    const user = repository.user; // trae a todos los usuarios 

    const htmlUser = user.map((user) => {
        const name = document.createElement("h3");
        const email = document.createElement("p");

        name.innerHTML = user.name;
        email.innerHTML = user.email;

        const card = document.createElement("div");
        card.appendChild(name);
        card.appendChild(email);

        return card;
    });
    htmlUser.forEach(card =>{
        userContainer.appendChild(card);
    });
};

const addUser = () => {
    if(i>10) return alert("No hay mas usuarios")
    $.get(`https://jsonplaceholder.typicode.com/users/${i}`, (data, status) => {
        console.log(data);
        i++;
        repository.createUser(data);
        refresh();
    });
}

addUserButton.addEventListener("click", addUser);
   




