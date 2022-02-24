if (document.querySelector("#addUserRegistrer")) {
  document.querySelector("#btn").addEventListener("click", function () {
    let nameRegistrer = document.querySelector("#nameRegistrer").value;
    let lastnameRegistrer = document.querySelector("#lastnameRegistrer").value;
    let nameUserRegistrer = document.querySelector("#nameUserRegistrer").value;
    let passwordUserRegistrer = document.querySelector("#passwordUserRegistrer").value;

    let body = {
      nameRegistrer,
      lastnameRegistrer,
      nameUserRegistrer,
      passwordUserRegistrer
    };

    let data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch("/registro", data)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        document.querySelector(
          "#addUserRegistrer"
        ).innerHTML += `<p>${resp.message}</p>`;
      });
  });
}
