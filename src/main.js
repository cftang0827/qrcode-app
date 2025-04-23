import QRCode from "qrcode";

const input = document.getElementById("textInput");
const qrcodeEl = document.getElementById("qrcode");
const button = document.getElementById("convert")
const showText = document.getElementById("showText")

button.addEventListener("click", () => {
  const text = input.value;
  QRCode.toCanvas(text, { width: 256 }, (err, canvas) => {
    if (err) {
      console.error(err);
      alert(err)
      return;
    }
    qrcodeEl.innerHTML = ""; // 清空之前的 QR Code
    qrcodeEl.appendChild(canvas); // 顯示新的
    showText.innerText = text
  });
});
