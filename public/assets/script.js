const button = document.querySelector('#btn');

button.addEventListener('click', function () {
	let username = document.querySelector('#username').value;
	let email = document.querySelector('#email').value;
	let password = document.querySelector('#password').value;

	fetch('/register', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			username,
			email,
			password,
		}),
	});
});
