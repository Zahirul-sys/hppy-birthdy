const content = document.getElementById("content");

function showMessage() {
  content.innerHTML = "Selamat Hari Jadi!!!<br><br>Kau memang terbaik! Aku bersyukur sangat kita kawan. Harap kau capai semua impian kau!";
}

function showImage() {
  content.innerHTML = '<img src="gambar.jpg" alt="Birthday" style="width:100%">';
}

function showGame() {
  content.innerHTML = '<iframe src="tetris.html" width="100%" height="250px" style="border:none;"></iframe>';
}
