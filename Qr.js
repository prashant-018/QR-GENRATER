let imgBox = document.getElementById("imgBox");
let qrText = document.getElementById("qrText");

function generateQr() {
    if (qrText.value.length > 0) {
        let qrImage = imgBox.querySelector("img");
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error"); // Add the error class to show shake animation
        setTimeout(() => {
            qrText.classList.remove("error"); // Remove the error class after the animation
        }, 1000);
    }
}
