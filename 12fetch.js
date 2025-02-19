const baseUrl = "https://jsonplaceholder.typicode.com";
// const endpoint = "/users";

const getUsers = () => {
  const url = `${baseUrl}/users`;
  //   const request = new Request(url, {
  //     method: "GET",
  //   });
  fetch(url, {
    method: "GET", // secara default menggunakan method GET
  })
    .then((response) => {
      //   console.log(response);
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON[0]);
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
};
// getUsers();
const getUsersAsync = async () => {
  try {
    const url = `${baseUrl}/users`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    const dataJSON = await response.json();
    console.log(dataJSON[0]);
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
// getUsersAsync();

const myFetch = (request) => {
  return fetch(request).then((response) => response.json());
  // .then(onFulfilled)
  // .catch(onError);
};
const request = new Request(`${baseUrl}/users`);
// myFetch(request)
//   .then((data) => {
//     console.log(data[1]);
//   })
//   .catch((err) => {
//     if (err instanceof Error) console.log(err.message);
//   });

const createPostAsync = async (body) => {
  try {
    const url = `${baseUrl}/posts`;
    const request = new Request(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(body),
    });
    const response = await fetch(request);
    if (!response.ok) throw new Error(response.statusText);
    const json = await response.json();
    console.log(json);
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
};
createPostAsync({
  title: "GG Jungler Win Game",
  author: "Denis",
});
