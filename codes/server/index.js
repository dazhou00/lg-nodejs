const http = require('http')

// 创建 web server
const server = http.createServer(function(req, res){
    // req 请求对象，包含请求信息
    // res 相应对象，用于对请求进行相应
    if( req.url === '/'){
        res.write('Hello Node.js')
        res.end()
    }

    if(req.url === '/api/course'){
        res.write((JSON.stringify([1,2,3])))
        res.end()
    }
})

server.listen(3000)
console.log('web server running ~')