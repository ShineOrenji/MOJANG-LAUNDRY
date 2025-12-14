// Floating Checkout Button
document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.getElementById('floatingCheckoutBtn');
    const scrollThreshold = 300; // Muncul setelah scroll 300px ke bawah
    
    // Function untuk menampilkan/menyembunyikan button
    function toggleCheckoutButton() {
        if (window.scrollY > scrollThreshold) {
            checkoutBtn.classList.add('show');
        } else {
            checkoutBtn.classList.remove('show');
        }
    }
    
    // Event listener untuk scroll
    window.addEventListener('scroll', toggleCheckoutButton);
    
    // Panggil sekali saat halaman load
    toggleCheckoutButton();
    
    // Aksi saat tombol diklik
    checkoutBtn.addEventListener('click', function() {
        // Scroll ke bagian kontak untuk pemesanan
        document.getElementById('kontak').scrollIntoView({
            behavior: 'smooth'
        });
        
        // window.open('https://wa.me/6287776498864?text=Halo%20Mojang%20Laundry,%20saya%20ingin%20pesan%20layanan', '_blank');
        
        alert('Masih dalam tahap pengembangan');
    });
});