import http from 'http';
import url from 'url';
import fs from 'fs';
import path from 'path';

const PORT = 3000;

http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const queryParams = parsedUrl.query;
    const fileName = queryParams.file;

    if (!fileName) {
        res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Brak parametru 'file' w zapytaniu.");
        return;
    }
})