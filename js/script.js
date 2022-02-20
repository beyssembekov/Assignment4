alert("Welcome to the shop");


function soundClick() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'music1.mp3'; // Указываем путь к звуку "клика"
  audio.pause();
}
