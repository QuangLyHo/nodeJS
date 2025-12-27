import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { handleGet, handlePost, handleNews } from './handlers/routeHandlers.js'

const PORT = 8000

const __dirname = import.meta.dirname
console.log(__dirname)
const server = http.createServer(async (req, res) => {
    if (req.url === '/api') {
        //add route for a GET request
        if (req.method === 'GET') {
            return await handleGet(res)
        }
        //add route for a POST request to '/api'
        else if (req.method === 'POST') {
            handlePost(req, res)
        }
    }
    else if (req.url === "/api/news") {
        return await handleNews(req, res)
    }
    else if (!req.url.startsWith('/api')) {
        return await serveStatic(req, res, __dirname)
    }
})

server.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})