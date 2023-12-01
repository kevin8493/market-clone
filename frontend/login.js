const form = document.querySelector("#login-form");

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "post",
    body: formData,
  });
  const data = await res.json();
  const accessToken = data.access_token;
  window.localStorage.setItem("token", accessToken);
  alert("로그인되었습니다.");

  window.location.pathname = "/carriot.html";

  //   const btn = document.createElement("button");
  //   btn.innerText = "상품 가져오기";
  //   btn.addEventListener("click", async () => {
  //     const res = await fetch("/items", {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //   });
  //   infoDiv.appendChild(btn);

  //   if (res.status === 200) {
  //     alert("로그인에 성공했습니다");
  //     window.location.pathname = "/carriot.html";
  //   } else if (res.status === 401) {
  //     alert("id 혹은 password가 틀렸습니다");
  //   }

  // if (data === "200") {
  //   div.innerText = "회원가입에 성공했습니다";
  //   div.style.color = "blue";
  //   window.location.pathname = "/login.html";
  // }
};

form.addEventListener("submit", handleSubmit);
