const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs'); // Untuk menyimpan data ke file JSON
const app = express();

app.use(bodyParser.json());

// Endpoint untuk menerima webhook dari Saweria
app.post('/webhook-saweria', (req, res) => {
    const donation = req.body; // Data donasi dari Saweria
    saveDonation(donation);
    res.status(200).send('Webhook diterima');
});

// Endpoint untuk menerima IPN dari PayPal
app.post('/webhook-paypal', (req, res) => {
    const donation = req.body; // Data transaksi dari PayPal
    saveDonation(donation);
    res.status(200).send('IPN diterima');
});

// Simpan data donasi ke file JSON
function saveDonation(donation) {
    const dataFile = 'donations.json';
    const donations = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    donations.push(donation);
    fs.writeFileSync(dataFile, JSON.stringify(donations, null, 2));
}

app.listen(3000, () => {
    console.log('Server berjalan di port 3000');
});
