let helpModal: HTMLElement | null = null

export function showToast(message: string) {
  const existingToast = document.querySelector(".toast")
  if (existingToast) {
    existingToast.remove()
  }

  const toast = document.createElement("div")
  toast.className = "toast"
  toast.textContent = message
  document.body.appendChild(toast)

  requestAnimationFrame(() => {
    toast.classList.add("show")
  })

  setTimeout(() => {
    toast.classList.remove("show")
    setTimeout(() => toast.remove(), 300)
  }, 3000)
}

export function showHelpModal() {
  if (helpModal) {
    helpModal.classList.add("open")
    return
  }

  helpModal = document.createElement("div")
  helpModal.className = "help-modal"
  helpModal.innerHTML = `
    <div class="help-modal-content">
      <button class="help-close" aria-label="Close help modal">&times;</button>
      <h2>Keyboard Shortcuts</h2>
      <div class="shortcuts-list">
        <div class="shortcut-item">
          <kbd>/</kbd>
          <span>Focus search</span>
        </div>
        <div class="shortcut-item">
          <kbd>?</kbd>
          <span>Show this help</span>
        </div>
        <div class="shortcut-item">
          <kbd>1-7</kbd>
          <span>Switch category</span>
        </div>
        <div class="shortcut-item">
          <kbd>Esc</kbd>
          <span>Close modal</span>
        </div>
      </div>
    </div>
  `
  document.body.appendChild(helpModal)
  requestAnimationFrame(() => {
    helpModal!.classList.add("open")
  })

  helpModal.querySelector(".help-close")?.addEventListener("click", closeHelpModal)
  helpModal.addEventListener("click", (e) => {
    if (e.target === helpModal) closeHelpModal()
  })
}

export function closeHelpModal() {
  if (helpModal) {
    helpModal.classList.remove("open")
  }
}
