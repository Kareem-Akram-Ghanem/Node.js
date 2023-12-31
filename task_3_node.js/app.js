
const express = require ("express")
const app = express ()
const port = process.env.port || 3000

const helmet = require("helmet")


app.set("view engine" , 'hbs')

/////////////////////////////////////////
// public علشان اعرفه مسار ال 
const path = require("path")
const publicDirectory = path.join(__dirname , "./public")
app.use(express.static(publicDirectory))


// header علشان اعرفه مسار ال 

var hbs = require("hbs")
// const { default: helmet } = require("helmet")
const partialsPath = path.join(__dirname , "./partials")
hbs.registerPartials(partialsPath)




app.get('/' , (req , res)=>{
    res.render('index' , {
        title: " Home ",
        desc: "this is my home page in my website",
        image1: "images/trainer-1.jpg",
        image2 : "images/trainer-2.jpg",
        image3: "images/trainer-3.jpg",
        button : "click here"
    }) 
})

app.get('/team1' , (req , res)=>{
    res.render('team1' , {
        title: " Team1 ",
        image1 : "images/trainer-1.jpg",
        name1 : "karim Elsayed",
        city1 : "mansoura",
        age   : 20 ,
        image2 : "images/trainer-2.jpg",
        name2 : "Aya Abdelaziz",
        city2 : "Alex",
        image3 : "images/trainer-3.jpg",
        name3 : "Mohamwd Ahmed",
        city3 : "mansoura",
        button : "see more"
    }) 
})

app.get('/team2' , (req , res)=>{
    res.render('team2' , {
        title: " team2 ",
        image1 : "images/trainer-1.jpg",
        name1 : "karim Elsayed",
        city1 : "mansoura",
        age   : 20 ,
        image2 : "images/trainer-2.jpg",
        name2 : "Aya Abdelaziz",
        city2 : "Alex",
        image3 : "images/trainer-3.jpg",
        name3 : "Mohamwd Ahmed",
        city3 : "mansoura",
        button : "see more"
    }) 
})

app.get('/team3' , (req , res)=>{
    res.render('team3' , {
        title: " Team3 ",
        image1 : "images/trainer-1.jpg",
        name1 : "karim Elsayed",
        city1 : "mansoura",
        age   : 20 ,
        image2 : "images/trainer-2.jpg",
        name2 : "Aya Abdelaziz",
        city2 : "Alex",
        image3 : "images/trainer-3.jpg",
        name3 : "Mohamwd Ahmed",
        city3 : "mansoura",
        button : "see more"
    }) 
})

app.get('/team4' , (req , res)=>{
    res.render('team4' , {
        title: " Team4 ",
        image1 : "images/trainer-1.jpg",
        name1 : "karim Elsayed",
        city1 : "mansoura",
        age   : 20 ,
        image2 : "images/trainer-2.jpg",
        name2 : "Aya Abdelaziz",
        city2 : "Alex",
        image3 : "images/trainer-3.jpg",
        name3 : "Mohamwd Ahmed",
        city3 : "mansoura",
        button : "see more"
    }) 
})

































// any page i not have
app.get('*' , (req,res)=>{
    res.send('iam karim and the page not found')
})

///////////////////////////////////////




app.use(helmet());

app.listen(port , ()=>{
    console.log(`server started on port ${port}`)
})



