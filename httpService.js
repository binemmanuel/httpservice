class HttpService {
	async post(url, data = null) {
		await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((response) => {
				this.responseText = response;
			});

		return this.responseText;
	}

	async get(url, data = null) {
		await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((response) => console.log(response));
	}
}

// Instantiate a HTTPService
const httpService = new HttpService();

// Make a Post Request
httpService
	.post("http://keke.api.binemmanuel.com/auth/login", {
		username: _username,
		password: _password,
	})
	.then((res) => console.log(res));
