const URL = 'https://65140ff98e505cebc2eaa394.mockapi.io/Exmapl'
const phoneInput = document.getElementById('phone')
const headers = { 'Content-Type': 'application/json' }
phoneInput.addEventListener('input', function () {
	let input = this.value.replace(/\D/g, '')
	const inputLength = input.length
	let formattedInput = '+7'
	if (inputLength > 1) {
		formattedInput += ' (' + input.slice(1, 4)
	}
	if (inputLength > 4) {
		formattedInput += ') ' + input.slice(4, 7)
	}
	if (inputLength > 7) {
		formattedInput += '-' + input.slice(7, 9) + '-' + input.slice(9, 11)
	}
	this.value = formattedInput
})
//ajax не использовал раньше, умею через fetch и axios
function send() {
	let name = document.getElementById('name').value
	let phone = document.getElementById('phone').value
	let email = document.getElementById('email').value
	let message = document.getElementById('message').value

	let headers = {
		'Content-Type': 'application/json',
	}

	return fetch(URL, {
		method: 'POST',
		body: JSON.stringify({
			name: name,
			phone: phone,
			email: email,
			message: message,
		}),
		headers: headers,
	})
		.then(response => {
			if (response.ok) {
				alert('Данные отправлены!')
			} else {
				alert('Что-то пошло не так', response.status)
			}
			return response.json()
		})
		.then(data => {
			document.getElementById('name').value = ''
			document.getElementById('phone').value = ''
			document.getElementById('email').value = ''
			document.getElementById('message').value = ''
		})
		.catch(error => {
			console.error(error)
		})
}
