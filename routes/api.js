router.get('/server/status', async (req, res) => {
    try {
        // Contoh pengecekan status server
        const servers = [
            { name: 'Server 1', url: 'https://cpm-jhon.my.id' }
        ];

        const statusPromises = servers.map(async (server) => {
            try {
                const response = await fetch(server.url, { method: 'HEAD', timeout: 5000 });
                return { name: server.name, status: response.ok ? 'Online' : 'Offline' };
            } catch (error) {
                return { name: server.name, status: 'Tidak bisa mendapat respons' };
            }
        });

        const results = await Promise.all(statusPromises);

        res.json({
            status: true,
            message: 'Cek status server berhasil',
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

// Endpoint tambahan untuk mengecek server secara langsung
router.get('/server/status/detail', async (req, res) => {
    const os = require('os');
    res.json({
        status: true,
        message: 'Server sedang berjalan dengan baik',
        uptime: process.uptime() + ' detik',
        memoryUsage: {
            rss: (process.memoryUsage().rss / 1024 / 1024).toFixed(2) + ' MB',
            heapTotal: (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2) + ' MB',
            heapUsed: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB'
        },
        cpuUsage: process.cpuUsage(),
        loadAverage: os.loadavg(),
        totalMemory: (os.totalmem() / 1024 / 1024).toFixed(2) + ' MB',
        freeMemory: (os.freemem() / 1024 / 1024).toFixed(2) + ' MB',
        cpuCores: os.cpus().length,
        platform: os.platform(),
        arch: os.arch()
    });
});
