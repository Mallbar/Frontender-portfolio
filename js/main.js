const btnDarkMode = document.querySelector('.dark-mode-btn')

// Checking the dark theme in user's system
if (
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
	btnDarkMode.classList.add('dark-mode-btn--active')
	document.body.classList.add('dark')
}

// Checking the dark theme in local storage
if (localStorage.getItem('darkMode') === 'dark') {
	btnDarkMode.classList.add('dark-mode-btn--active')
	document.body.classList.add('dark')
} else if (localStorage.getItem('darkMode') === 'light') {
	btnDarkMode.classList.remove('dark-mode-btn--active')
	document.body.classList.remove('dark')
}

// If the user's system settings has been changed
window
	.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', event => {
		const newColorScheme = event.matches ? 'dark' : 'light'

		if (newColorScheme === 'dark') {
			btnDarkMode.classList.add('dark-mode-btn--active')
			document.body.classList.add('dark')
			localStorage.setItem('darkMode', 'dark')
		} else {
			btnDarkMode.classList.remove('dark-mode-btn--active')
			document.body.classList.remove('dark')
			localStorage.setItem('darkMode', 'light')
		}
	})

// Turn on dark mode by clicking the button
btnDarkMode.onclick = function () {
	btnDarkMode.classList.toggle('dark-mode-btn--active')
	const isDark = document.body.classList.toggle('dark')

	localStorage.setItem('darkMode', isDark ? 'dark' : 'light')
}
