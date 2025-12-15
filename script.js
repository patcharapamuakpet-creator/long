document.getElementById("confirmBtn").addEventListener("click", checkPass);

function checkPass() {
    const pass = document.getElementById("password").value;
    const correct = "141251";

    if (pass === correct) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("cardBox").style.display = "block";

        const music = document.getElementById("music");
        music.volume = 0.5;
        music.currentTime = 0;
        music.play();
    } else {
        alert("รหัสผ่านไม่ถูกต้อง ❌");
    }
}
