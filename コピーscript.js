document.addEventListener("DOMContentLoaded", function() {
    const headerImage = document.querySelector(".toplogo");
    const menu = document.querySelector(".hamburger-menu");

    // スマホ・タブレットサイズ (768px以下) の場合のみスクロールイベントを適用
    const isMobileOrTablet = window.matchMedia("(max-width: 768px)").matches;

    if (headerImage && menu && isMobileOrTablet) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > headerImage.clientHeight) {
                menu.style.display = "block"; // スクロールでメニュー表示
            } else {
                menu.style.display = "none"; // 画像が見えている間は非表示
            }
        });
    } else {
        console.error("必要な要素が見つからない、または画面サイズが適していません。");
    }
});





let nav = document.querySelector("#navArea");
let btn = document.querySelector(".hamburger-menu");
let mask = document.querySelector("#mask");

btn.onclick = () => {
    nav.classList.toggle("open");
}

mask.onclick = () => {
    nav.classList.toggle("open");
}
