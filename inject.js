/* Will be changed later, if i even continue? */
const reg = /(clubic|softonic|downloadastro|soft32\.fr|telecharger\.com|malavida\.com|telecharger\.logiciel\.net|portalux\.com|sur-telecharger\.com|soft-box\.net|top-logiciels\.com|softbian\.com|inneka\.com|uptodown\.com|toucharger\.com|freedownloadmanager\.org|telecharger360\.com|download\.cnet\.com)/gi;

const elems = document.querySelectorAll('.rc>.r');
for (let e of elems) {
    if (e.innerText && e.innerText.match(reg)) {
        e.classList.add("badsite");

        let warnEl = document.createElement("div");
        warnEl.classList.add("badsite-warn");
        e.prepend(warnEl);

        let warnTitle = document.createElement("div");
        warnTitle.classList.add("badsite-tooltip");
        warnTitle.innerHTML = "This website is suspicious";
        warnEl.append(warnTitle);
    }
}
