// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

/* jsdoc으로 에러를 어떻게 사전에 방지할 수 있는지 살펴보는 예제
  @property로 속성을 정의한 후 
  response.address.city 이런식으로 점(.)을 누르면 속성을 정의한 
  이름들이 보이게 된다. (stree, city ...)
*/

/**
 * @typeof {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {string} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response) {
  response.address.cit;
});

function startApp() {
  fetchUser()
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
