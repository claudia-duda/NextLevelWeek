const express = require("express")
const server = express()

server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express:server,
    noCache:true
})



///routes
server.get("/", (req,res) => {

    return res.render("index.html", { title:"Cadastre o seu ponto de coleta"})
})
server.get("/create-point", (req,res) => {
    return res.render("create-point.html")
})
server.get("/search", (req,res) => {
    return res.render("search-results.html")
})
//start server
server.listen(3000)