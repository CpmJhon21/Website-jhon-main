var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000;
var { color } = require('./lib/color.js');

var mainrouter = require('./routes/main'),
    apirouter = require('./routes/api');

var app = express();
app.enable('trust proxy');
app.set("json spaces", 2);
app.use(cors());
app.use(secure);
app.use(express.static("public")); // Menyediakan file statis
app.use(express.json()); // Menangani request JSON

// Waktu server dimulai
const startTime = Date.now();

// Endpoint status server
app.get('/server/status', (req, res) => {
    const uptime = Math.floor((Date.now() - startTime) / 1000); // Uptime dalam detik
    res.json({
        status: 'Online',
        uptime: `${uptime} detik`
    });
});

// Gunakan router utama
app.use('/', mainrouter);
app.use('/api', apirouter);

// Menjalankan server
app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT, 'green'));
});

module.exports = app;
