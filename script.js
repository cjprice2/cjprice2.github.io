const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.section[role="tabpanel"]');

function activateTab(targetId) {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.target === targetId;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  panels.forEach((panel) => {
    panel.hidden = panel.id !== targetId;
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    activateTab(tab.dataset.target);
  });
});
