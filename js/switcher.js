// DOM Queries:
const pageContent = document.querySelector(".page-content")
const themeSwitchBox = document.querySelector(".switch-box")

// Gets the stored theme from the browser's storage (if it exists):
let themeMode = localStorage.getItem("calcTheme")

// Looks to see if the user is changing the theme:
themeSwitchBox.addEventListener("change", event => {
  changeTheme(event.target.value)
})

// Function for changing the page's theme:
const changeTheme = theme => {
  switch (theme) {
    case "1":
      if (pageContent.classList.contains("theme-2")) {
        pageContent.classList.remove("theme-2")
      } else if (pageContent.classList.contains("theme-3")) {
        pageContent.classList.remove("theme-3")
      }

      localStorage.setItem("calcTheme", theme)
      document.forms["switch-box"]["theme-1"].checked = true
      break
    case "2":
      if (pageContent.classList.contains("theme-3")) {
        pageContent.classList.remove("theme-3")
      }
      pageContent.classList.add("theme-2")

      localStorage.setItem("calcTheme", theme)
      document.forms["switch-box"]["theme-2"].checked = true
      break
    case "3":
      if (pageContent.classList.contains("theme-2")) {
        pageContent.classList.remove("theme-2")
      }
      pageContent.classList.add("theme-3")

      localStorage.setItem("calcTheme", theme)
      document.forms["switch-box"]["theme-3"].checked = true
      break

    default:
      break
  }
}

// Changes the theme upon loading the page (and fetching the stored theme):
changeTheme(themeMode)
