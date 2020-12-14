# httpservice
HTTPService is a Client Side component for making API calls or Sending Asynchronous request to a Server and returning a response to the Client.

# Example

```
// Instantiate a HTTPService
const httpService = new HttpService();

// Make a Post Request
httpService
	.post("http://keke.api.binemmanuel.com/auth/login", {
		username: _username,
		password: _password,
	})
	.then((res) => console.log(res));
```
