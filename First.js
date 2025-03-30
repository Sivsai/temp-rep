const http =require(`http`);
const server =http.createServer((req,res) =>{
    if (req.url ==='/'){
    res.end(`My first Server`)
    }
    if (req.url ==='/about'){
        res.end('This is about page')
    }
else{
    res.end(`
        <h1>Oops!</h1>
        <p>Page not found</p>
        <a href="/">Go back</a>
        `)
    }
})
server.listen(3000)
