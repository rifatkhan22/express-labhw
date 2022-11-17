const express = require('express')
const app = express()


const fs = require("fs")
app.engine('madeline',(filePath,options,callback)=>{
    fs.readFile(filePath,(err,content)=>{
    if(err) return callback(err)
        const rendered = content.toString()
        .replace('#title#','<title>' + options.title + '</title>')
        .replace('#message#','<h1>' + options.message + '</h1>')
        .replace('#content#', '<div>' + options.content + '</div>')
        return callback(null,rendered)
    })
})
app.set('views','./views')
app.set('view engine', 'madeline')


app.get('/chicken', function(req, res) {
    res.send('<h1>I love chicken</h1>');
});
app.get('/home', function(req, res) {
    res.send('<h1>My name is Rifat Khan and a student at Per-scholas</h1>');
});
app.get('/nyc', function(req, res) {
    res.render('template', {title:'NYC', message:'One of the greatest cities in the world',content:'Birthplace of HipHop and Culture'})
});
app.get('/ronaldo', function(req, res){
    res.render('templateTwo', {title: 'Ronaldo', message:'SUWIE', content: 'greatest soccer player in the world' }, )
})
app.get('/kobe', function(req, res){
    res.render('templateTwo', {title: 'Kobe', message:'Mamba', content: 'One of the most skilled basketball players' }, )
})
app.get('/favsport/:fav1/:fav2', function(req, res){
    res.render('templateTwo', {title: 'Favorite Sports', message:'Sports have highly anticipated games', content: 'My favorite sports are' + ' ' + req.params.fav1 + ' and ' + req.params.fav2}, )
})
app.get('/pulisic', function(req, res){
    res.render('template', {title: 'Pulisic', message:'Captain America', content: 'Attacking Midfielder for Chelsea FC and a star on USMNT' }, )
})
app.get('/durant', function(req, res){
    res.render('templateTwo', {title: 'Durant', message:'Sniper', content: 'KD is an American professional player for the Nets' }, )
})
app.get('/ps5', function(req, res){
    res.render('template', {title: 'Playstation 5', message:'Best-selling Console in North America', content: 'Highly immersive gaming experience which innovative ps5 controller' }, )
})
app.get('/lebron', function(req, res){
    res.render('templateTwo', {title: 'The King', message:' Best basketball player of this generation ', content: 'Lebron James has always been an influence whether on the court or off the court' }, )
})

// Tell the app to listen on port 3000
app.listen(3000, function() {
console.log('Listening on port 3000');
});
