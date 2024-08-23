const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // Route Handling
    if (req.url == '/') {
        res.write("This is the Home Page")
        res.end()
    }
    else if (req.url == '/about') {
        res.write('This is the About Page')
        res.end()
    }
    else if (req.url == '/contact') {
        res.write('This is the Contact Page')
        res.end()
    }
    // File Operations - WriteFile
    else if (req.url == '/file-write') {
        fs.writeFile('demo.text', 'hello world', (err) => {
            try {
                res.write('File created successfully')
                res.end()
            }
            catch (err) {
                res.write('File Create fail')
                res.end()
            }
        })

    }
    else {
        res.statusCode = 404
        res.write('Page not found')
        res.end()
    }
})

server.listen(5500, () => {
    console.log('server run successfully')
})