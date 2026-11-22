/* Acme Coffee: a "Copy link" button on every section heading */
function addCopyButtons() {
  document.querySelectorAll('#content h2[id]').forEach((heading) => {
    if (heading.querySelector('.copy-link')) return;
    const button = document.createElement('button');
    button.className = 'copy-link';
    button.textContent = 'Copy link';
    button.style.cssText = 'margin-left:12px;padding:2px 10px;font-size:13px;font-weight:500;border:1px solid #6F4E37;border-radius:9999px;color:#6F4E37;vertical-align:middle;';
    button.addEventListener('click', (event) => {
      event.preventDefault();
      navigator.clipboard.writeText(location.origin + location.pathname + '#' + heading.id);
      button.textContent = 'Copied!';
      setTimeout(() => { button.textContent = 'Copy link'; }, 1500);
    });
    heading.append(button);
  });
}
addCopyButtons();
window.addEventListener('mintlify:navigate', addCopyButtons);
