function getJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("joke").innerHTML = data.value;
      });
  }
  getJoke();
  document.getElementById("btn").addEventListener("click", getJoke);