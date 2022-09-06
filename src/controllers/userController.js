let users = require("../models/users");

const list = (id, ordenado) => {
  if (id) {
    return users.find((obj) => obj.id == id);
  }

  if (ordenado === "desc" || ordenado === "asc") {
    const users_temp = [...users];
    return users_temp.sort((a, b) => {
      if (a.id > b.id) {
        if (ordenado === "desc") return -1;
        if (ordenado === "asc") return 1;
      }

      if (a.id < b.id) {
        if (ordenado === "desc") return 1;
        if (ordenado === "asc") return -1;
      }
      return 0;
    });
  }

  return users;
};
const create = (data) => {
  data.id = Math.round(Math.random() * 1000);
  users.push(data);
};
const destroy = (id) => {

  users = users.filter((obj) => obj.id != id);

  return {
    success: true,
    message: "usuário com o id " + id + " removido",
    data: users,
  };
};

const update = (id, data) => {
  const user = users.find((obj) => obj.id == id);

  if (user) {
    user.nome = data.nome || user.nome;
    user.idade = data.idade ? Number(data.idade) : user.idade;

    return {
      success: true,
      message: "usuário com o id " + id + " atualizado",
      data: user,
    };
  }

  return {
    success: false,
    message: "não foi possível atualizar o usuário com o id " + id,
  };
};

module.exports = {
  list,
  create,
  destroy,
  update,
};
