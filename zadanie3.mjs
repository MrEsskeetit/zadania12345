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
    const filePath = path.join(__dirname, fileName);

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("Plik nie istnieje.");
            return;
        }

        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);

        readStream.on('error', (error) => {
            res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("Wystąpil bląd podczas odczytu pliku.");
        });
    });
}).listen(PORT, () => {
    console.log(`Serwer nasluchuje na http://localhost:${PORT}`);
});