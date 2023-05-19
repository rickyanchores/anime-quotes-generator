let result = document.querySelector(".result");
let btn = document.querySelector(".btn");

const fetchData = async () => {
  const url = "https://anime-quotes1.p.rapidapi.com/api/quotes/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bc22f11f37mshcbe9e742a1ed8cap1c4dbcjsna5ccd20c55bc",
      "X-RapidAPI-Host": "anime-quotes1.p.rapidapi.com"
    }
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

const renderData = async () => {
  let data = await fetchData();
  let content = `<h3>${data[0].anime}</h3>
              <h3>${data[0].character}</h3>
                <h2>${data[0].quote}</h2>`;
  result.innerHTML = content;
};

btn.addEventListener("click", () => {
  renderData();
  console.log("click");
});
