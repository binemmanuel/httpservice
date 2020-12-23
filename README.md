# httpservice

HTTPService is a Client Side component for making API calls or Sending Asynchronous request to a Server and returning a response to the Client.

# Example

```js
// Instantiate a HTTPService
const httpService = new HttpService();

// Make a Post Request
httpService
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(`Error: ${err.message}`));

// Make a Get Request
httpService
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => console.log(res))
  .catch((err) => console.log(`Error: ${err.message}`));
```
