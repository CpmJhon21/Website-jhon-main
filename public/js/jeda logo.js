// Jeda untuk menampilkan splash screen setelah 10 detik
setTimeout(() => {
    const splash = document.getElementById('splash');
    splash.classList.add('visible'); // Tampilkan splash screen
}, 500000); // Jeda 10 detik

// Jeda untuk menghilangkan splash screen setelah 40 detik dari saat muncul
setTimeout(() => {
    const splash = document.getElementById('splash');
    splash.classList.remove('visible'); // Sembunyikan splash screen
    splash.classList.add('hidden');    // Pastikan tidak muncul lagi
}, 10000); // 50 detik (10 detik untuk muncul + 40 detik aktif)
