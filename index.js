// import logIn from "./view/logIn.js";
// import signUp from "./view/signUp.js";
// import notFound from "./view/404.js";

// const init = () => {
//   const content = document.querySelector("#content");
//   content.appendChild(logIn());

//   window.addEventListener("hashchange", () => {
//     console.log(window.location.hash);

//     content.innerHTML = "";
//     switch (window.location.hash) {
//       case "#/": {
//         content.appendChild(logIn());
//         const btnlogIn = document.querySelector("#logIn");
//         console.log(btnlogIn);

//         btnlogIn.addEventListener("click", () => {
//           console.log("hola ya funciono");
//         });
//         return;
//       }
//       case "#/signUp":
//         return content.appendChild(signUp());
//       default:
//         content.appendChild(notFound);
//         break;
//     }
//   });
// };

// window.addEventListener("load", init);

// -----------------------------------------------

// para validar que ingrese un email de acuerdo a su sintaxis

// function validateEmail(email) {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }
