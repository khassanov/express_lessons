//Подключаем express

const express = require('express');

//Создаем объект приложения
const app = express();

//Определяем обработчик для маршрута "/"
app.get("/", function(req, res){

    //Отправляем ответ
    res.send("<h1 align=center>Hello this is Express</h1>");
 
});

app.get("/about", function(req,res){
    res.send("<h1 align=center>About this site</h1>");
    });
app.get("/contacts", function(req, res){
    res.send("<h1 align=center>Contacts</h1>");
});

app.listen(3000);