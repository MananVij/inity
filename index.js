const form = document.querySelector("form");
const url = 'http://localhost:3000/';
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  fetch(`${url}subscribe`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => {
        console.log(response)
      console.log(`thanks ${name}`);
    })
    .catch((e) => {
      console.log(e);
    });
});
