/*
    hc-gate : hc-gate="<page_name>"
    hc-extension : hc-extension="<page_extension>"
*/

const build_url = (page, extension) => `${page}.${extension || 'html'}`;

document.addEventListener("click", e => {
    const btn = e.target.closest('[hc-gate]');
    if (!btn) return;

    e.preventDefault();

    const page = btn.getAttribute("hc-gate");
    const ext = btn.getAttribute("hc-extension");

    window.location.href = build_url(page, ext);
});