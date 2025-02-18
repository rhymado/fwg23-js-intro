function doInMs(ms = 1000) {
  if (typeof ms !== "number") return;
  setTimeout(() => {
    console.log(`Hello World, ${ms}`);
  }, ms);
}

// doInMs(2000);
// doInMs(4000);
// doInMs(1000);
// doInMs(5500);
// doInMs(3000);

function doInMsWithCb(delay = 1000, cb) {
  if (typeof delay !== "number") return;
  if (!(cb instanceof Function)) return;
  const start = Date.now();
  setTimeout(() => {
    console.log(`Hello World, ${delay}`);
    cb(start);
  }, delay);
  console.log("doInMs finished");
}

const callback = (startTime) => {
  console.log(`Process Time: ${Date.now() - startTime}ms`);
};
// doInMsWithCb(2000, callback);
// doInMsWithCb(undefined, (startTime) => {
//   console.log(`Process Time: ${Date.now() - startTime}ms`);
// });
// doInMsWithCb(500, () => {
//   console.log("Process Finished");
// });

// Callback Hell / Pyramid of Doom
// apabila suatu callback bergantung pada hasil dari callback lain

const ShowUserPage = (permission = false, cb) => {
  if (typeof permission !== "boolean") return;
  if (!(cb instanceof Function)) return;
  if (!permission) return;
  cb(permission);
};
const getUser = (permit, cb) => {
  if (typeof permit !== "boolean") return;
  if (!permit) return;
  const user = {
    id: 1,
    name: "Alwi",
    age: 23,
    isMarried: true,
  };
  setTimeout(() => {
    cb(user);
  }, 1000);
};
const getPostFromUser = (user, cb) => {
  if (!(user instanceof Object)) return;
  if (!(cb instanceof Function)) return;
  if (!user.hasOwnProperty("id")) return;
  const { id } = user;
  console.log("post");
  setTimeout(() => {
    console.log(`userId = ${id}`);
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
    cb(posts);
  }, 1500);
};
const getCommentFromPost = (posts) => {
  if (!(posts instanceof Array)) return;
  if (posts.length === 0) return;
  posts.forEach((el) => {
    console.log(
      `${el.title}
        ${el.content}`
    );
  });
};

ShowUserPage(true, (permission) => {
  getUser(permission, (user) => {
    getPostFromUser(user, (posts) => {
      getCommentFromPost(posts);
    });
  });
});
