// var database = firebase.database();

// $(document).ready(function() {
//   $(".sign-up-button").click(signUpClick);
//   $(".sign-in-button").click(signInClick);
// });

// function signUpClick(event) {
//   event.preventDefault();

//   let name = $(".sign-up-name").val();
//   let birthday = $(".sign-up-birthday").val();
//   let gender = $(".sign-up-gender").val();
//   let state = $(".sign-up-state").val();
//   let city = $(".sign-up-city").val();
//   let email = $(".sign-up-email").val();
//   let password = $(".sign-up-password").val();

//   createUser(name, birthday, gender, state, city, email, password);
// }

// function signInClick(event) {
//   event.preventDefault();

//   var email = $(".sign-in-email").val();
//   var password = $(".sign-in-password").val();

//   loginUserAuth(email, password);
// }

// function createUser(name, birthday, gender, state, city, email, password) {
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then(function(response) {
//       if (response.operationType === "signIn") {
//         var userId = response.user.uid;

//         createUserInDB(userId, name, birthday, gender, state, city, email);
//         signInRedirect(userId);
//       }
//     })
//     .catch(function(error) { handleError(error); });
// }

// function loginUserAuth(email, password) {
//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(function(response) {
//       if (response.operationType === "signIn") {
//         var userId = response.user.uid;
//         sessionStorage["USER_ID"] = userId;
//         signInRedirect(userId);
//       }
//     })
//     .catch(function(error) { handleError(error); });
// }

// function createUserInDB(id, name, birthday, gender, state, city, email) {
//   database.ref('users/' + id).set({
//     name: name,
//     birthday: birthday,
//     gender: gender,
//     state: state,
//     city: city,
//     email: email,
//     picture: 'images/avatar.png'
//   });
// }

// function signInRedirect(userId) {
//   window.location = '../index.html';
// }

// function handleError(error) {
//   alert(error.message);
//   console.log(error.code, error.message);
// }

// function Liststate(){
//   let state = $(".sign-up-state");
//   return state;
// }

// function ListCity(){
//   let city = $(".sign-up-city").val();
// }

function getStateCityonApi() {
  let estado = "";
  const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
  fetch(url)
    .then(resp => resp.json())
    .then(resp => resp.forEach(element => {
      console.log(element.nome);
      console.log(element.id);
      estado = `<option value="${element.id}">${element.nome}</option>`
      $(".sign-up-state").append(estado);
    })
    );
}

getStateCityonApi();

