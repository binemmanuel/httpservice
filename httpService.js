class HttpService {
  post(url, data = null) {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  get(url) {
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then((response) => response.json());
  }
}
