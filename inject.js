let reg = /(clubic|softonic|downloadastro|soft32.fr|telecharger.com|malavida.com|telecharger.logiciel.net|portalux.com|sur-telecharger.com|soft-box.net|top-logiciels.com|softbian.com)/gi;

let elems = document.querySelectorAll('.rc>.r');
for (let e of elems) {
    if (e.innerText) {
        if (e.innerText.match(reg)) {
            console.log(e.innerText);
            e.classList.add("badthing");

            let warnEl = document.createElement("div");
            warnEl.classList.add("badthing-warn");
            e.prepend(warnEl);

            let warnTitle = document.createElement("div");
            warnTitle.classList.add("badthing-title");
            warnTitle.innerHTML = "This Website is Suspicious";
            warnEl.append(warnTitle);
        }
    }
}
