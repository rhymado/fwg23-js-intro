// promise
// sebuah perwakilan nilai untuk nilai yang belum ada nilainya
// resolve: cb yang digunakan untuk menandakan keberhasilan
// reject: cb yang digunakan untuk menandakan kegagalan

const janjian = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false;
    if (success) {
      resolve("berhasil");
      return;
    }
    reject(new Error("Terjadi Kesalahan"));
  }, 1);
});

janjian
  .then((successMsg) => {
    console.log(`Janjian dipenuhi, ${successMsg}`);
  })
  .catch((errorMsg) => {
    console.log(`Janjian gagal, karena ${errorMsg.message}`);
  });

const getUser = new Promise((resolve, reject) => {
  const success = true;
  const user = {
    id: 1,
    name: "Alwi",
    age: 23,
    isMarried: true,
  };
  setTimeout(() => {
    if (success) return resolve(user);
    reject(new Error("Terjadi Kesalahan"));
  }, 1);
});

const getPostsFromUser = (userId) => {
  return new Promise((resolve, reject) => {
    if (userId !== 1) return reject(new Error("Terjadi Kesalahan"));
    const success = true;
    const posts = [
      {
        id: 1,
        title: "Cara menggunakan Blender 3D",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, harum!",
      },
      {
        id: 2,
        title: "Membuat hidup menjadi bahagia",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laudantium voluptatum nesciunt? Possimus molestiae est necessitatibus ad. Qui, perspiciatis quas.",
      },
    ];
    setTimeout(() => {
      if (success) return resolve(posts);
      reject(new Error("Terjadi Kesalahan"));
    }, 1);
  });
};

// getUser
//   .then((user) => {
//     const { id } = user;
//     if (typeof id === "string") throw new Error("id has wrong type");
//     return getPostsFromUser(id);
//   })
//   .then((posts) => {
//     posts.forEach((el) => {
//       const { title, content } = el;
//       console.log(`${title}
// ${content}`);
//     });
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

const getPostsFromUsersAsync = async function () {
  try {
    const user = await getUser;
    const { id } = user;
    if (typeof id === "string") throw new Error("id has wrong type");
    const posts = await getPostsFromUser(id);
    posts.forEach((el) => {
      const { title, content } = el;
      console.log(`${title}
${content}`);
    });
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("get user selesai");
  }
};
// getPostsFromUsersAsync();
