for (const el of document.querySelectorAll('code')) {
    const copy_el = document.createElement('button');
    copy_el.className = 'fa fa-clipboard copy-to-clipboard-btn link-btn';
    copy_el.title = 'Copy to clipboard';
    copy_el.onclick = function () {
        navigator.clipboard.writeText(el.innerText);
        copy_el.classList.remove('fa-clipboard');
        copy_el.classList.add('fa-check');
        setTimeout(() => {
            copy_el.classList.add('fa-clipboard');
            copy_el.classList.remove('fa-check');
        }, 300);
    };
    el.insertAdjacentElement('afterend', copy_el);
}
