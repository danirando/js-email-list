const randomEmail = "https://flynn.boolean.careers/exercises/api/random/mail";

const listEl = document.querySelector(".list-unstyled");

const refreshButton = document.querySelector(".btn");

const generateRandomEmail = () => {
  axios.get(randomEmail).then((response) => {
    const email = response.data.response;
    console.log(email);
    listEl.innerHTML += `<li class="list-group-item list-group-item-success">${email}<span class="badge bg-primary rounded-pill ms-3">New</span></li>`;
  });
};

for (i = 0; i < 10; i++) {
  generateRandomEmail();
}

refreshButton.addEventListener("click", function () {
  listEl.innerHTML = "";
  for (i = 0; i < 10; i++) {
    generateRandomEmail();
  }
});
