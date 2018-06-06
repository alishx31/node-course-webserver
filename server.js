const express =require('express');
const hbs=require('hbs');

const port= process.env.PORT || 3000;
var app =express();

app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.use((req,res)=>{
    
res.render('maintanence.hbs',{
    title: 'page is under maintanence proceess visit back soon',


});
});

// app.get('/', (req, res)=>{
// //res.send('<h1>Hello Express</h1>');
// res.send({
//     name:'Andrew',
//     likes: [
        
//         'Biking',
//         'cities'
//     ]
// });
// });

app.get('/', (req,res)=>{
res.render('home.hbs',{

    pageTitle: 'HOME Page' ,
    MessageHome: 'home page render successfully'
});
});
app.get('/about', (req,res)=>{
res.render('About.hbs',{
    pagetiTLE:'About Page',
    
});
});

hbs.registerHelper('getCurrentYear', ()=>{
return new Date().getFullYear();
});

app.get('/bad',(req, res)=>{
res.send({
name:'alex',
address:'chabahil',
errorMessage:'unable to handle req'
});
});




app.listen(port, ()=>{
    console.log(`server is up in ${port}`);
});