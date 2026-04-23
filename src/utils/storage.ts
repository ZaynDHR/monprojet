import { store } from '../state/store'

const THEME_KEY = "devhub_theme"

export function loadTheme() {
  const saved = localStorage.getItem(THEME_KEY)
  if (saved === "dark") {
    document.documentElement.setAttribute("data-theme", "dark")
  } else {
    document.documentElement.setAttribute("data-theme", "light")
  }
}

export function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark"
  document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark")
  localStorage.setItem(THEME_KEY, isDark ? "light" : "dark")
}

const BOOKMARKS_KEY = "devhub_bookmarks"

export function loadBookmarks() {
  const saved = localStorage.getItem(BOOKMARKS_KEY)
  if (saved) {
    store.bookmarks = JSON.parse(saved)
  }
}

export function saveBookmarks() {
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(store.bookmarks))
}

const RATINGS_KEY = "devhub_ratings"

export function loadRatings() {
  const saved = localStorage.getItem(RATINGS_KEY)
  if (saved) {
    store.ratings = JSON.parse(saved)
  }
}

export function saveRatings() {
  localStorage.setItem(RATINGS_KEY, JSON.stringify(store.ratings))
}

const VISITS_KEY = "devhub_visits"

export function loadVisitCounts() {
  const saved = localStorage.getItem(VISITS_KEY)
  if (saved) {
    store.visitCounts = JSON.parse(saved)
  }
}

export function saveVisitCounts() {
  localStorage.setItem(VISITS_KEY, JSON.stringify(store.visitCounts))
}

const SUBMITTED_KEY = "devhub_submitted"

export function loadSubmittedResources() {
  const saved = localStorage.getItem(SUBMITTED_KEY)
  if (saved) {
    store.submittedResources = JSON.parse(saved)
  }
}

export function saveSubmittedResources() {
  localStorage.setItem(SUBMITTED_KEY, JSON.stringify(store.submittedResources))
}
