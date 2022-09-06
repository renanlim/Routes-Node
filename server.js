const userController = require("./src/controllers/userController");
// Math.round(Math.random()*1000)
// userController.create({nome:"Matheus", idade:28})
// userController.create({nome:"Exemplo", idade:25})
// userController.create({nome:"Renan", idade:23})
// userController.create({nome:"Renan", idade:29})

// const users = require("./src/models/users")

// const user1 = users.filter((obj)=> {return obj.idade > 25})
// const user2 = users.find((obj)=> {return obj.idade == 28})

// console.log(user1)
// console.log(user2)

const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("API LOCAL");
});
app.use('/', require("./src/routes/usersRoute"));

app.listen(7000, ()=>{
    console.log("Servidor rodando na porta ", 7000);
})




