const handleSubmitForm = (event) => {
  event.preventDefault();
  fetch("/items", {
    method: "POST",
    body: new FormData(form),
  });
};

const form = document.getElementById("write-form").addEventListener("submit");
