onload = () => {
  document.body.classList.remove("container");
};

alert("haloo selamat datang, ada hadiah nihh buat kamu");

// Buat fungsi untuk meminta nama
function mintaNama() {
  return prompt(
    "input nama panggilan yang ayang kamu buat, nanti ada sesuatu yang baka keluar:)"
  );
}

// Fungsi untuk memeriksa apakah nama valid
function cekNama(nama) {
  // Misalnya, kita hanya memeriksa apakah nama memiliki panjang lebih dari 0
  return nama.length > 0;
}

// Fungsi utama
function main() {
  let nama = mintaNama(); // Meminta nama pertama kali

  // Selama nama tidak valid, terus minta ulang nama
  while (!cekNama(nama)) {
    alert("Nama nya ga bener nih. masukkin nama yang bener yaa");
    nama = mintaNama(); // Meminta nama kembali
  }

  // Setelah mendapat nama yang valid
  alert("yeayy ini bunga buat ayang" + nama + "❤️❤️❤️❤️");
}

// Panggil fungsi utama
main();

