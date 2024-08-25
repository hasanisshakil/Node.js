// Import required modules
const http = require('http');
const fs = require('fs');

// Creating server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Home Page
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the Home Page');
        res.end();

    } else if (req.url === '/about') {
        // About Page
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the About Page');
        res.end();

    } else if (req.url === '/contact') {
        // Contact Page
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the Contact Page');
        res.end();

    } else if (req.url === '/file-write') {
        // File Write Operation
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Error writing file');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('File written successfully');
                res.end();
            }
        });

    } else {
        // Handle 404 - Page Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Page Not Found');
        res.end();
    }
});

// Listen on port 5500
server.listen(5500, () => {
    console.log('Server is listening on port 5500');
});