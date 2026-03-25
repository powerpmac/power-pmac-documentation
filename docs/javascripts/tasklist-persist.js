function initTaskPersistence() {
  const boxes = Array.from(
    document.querySelectorAll("li.task-list-item input[type='checkbox']")
  );

  boxes.forEach((cb, i) => {
    if (cb.dataset.persistBound === "1") return;

    const li = cb.closest("li");
    const label = li ? li.textContent.trim() : `item-${i}`;
    const key = `task:${location.pathname}:${i}:${label}`;

    const saved = localStorage.getItem(key);
    if (saved !== null) cb.checked = saved === "1";

    cb.addEventListener("change", () => {
      localStorage.setItem(key, cb.checked ? "1" : "0");
    });

    cb.dataset.persistBound = "1";
  });
}

if (window.document$ && typeof window.document$.subscribe === "function") {
  window.document$.subscribe(initTaskPersistence);
} else {
  document.addEventListener("DOMContentLoaded", initTaskPersistence);
}
