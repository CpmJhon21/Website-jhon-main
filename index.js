const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

// Endpoint untuk mengecek status server secara detail
router.get('/server/status', async (req, res) => {
    try {
        // Daftar server yang akan dicek
        const servers = [
            { name: 'Server 1', url: 'https://cpm-jhon.my.id' }    
        ];

        let totalServers = servers.length;
        let onlineCount = 0;
        let offlineCount = 0;
        let noResponseCount = 0;

        // Mengecek status setiap server
        const statusPromises = servers.map(async (server) => {
            try {
                const response = await fetch(server.url, { method: 'HEAD', timeout: 5000 });
                if (response.ok) {
                    onlineCount++;
                    return { name: server.name, status: 'Online' };
                } else {
                    offlineCount++;
                    return { name: server.name, status: 'Offline' };
                }
            } catch (error) {
                noResponseCount++;
                return { name: server.name, status: 'Tidak bisa mendapat respons' };
            }
        });

        const results = await Promise.all(statusPromises);

        // Mengembalikan respons dengan status server
        res.json({
            status: true,
            message: 'Cek status server berhasil',
            totalServers,
            online: onlineCount,
            offline: offlineCount,
            noResponse: noResponseCount,
            servers: results
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Terjadi kesalahan dalam mengecek status server',
            error: error.message
        });
    }
});

// Endpoint tambahan untuk mendapatkan ringkasan status server
router.get('/server/status/summary', (req, res) => {
    res.json({ 
        status: 'Ringkasan status server tersedia', 
        timestamp: new Date().toISOString() 
    });
});

module.exports = router;
