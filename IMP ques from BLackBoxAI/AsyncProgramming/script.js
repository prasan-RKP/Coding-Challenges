// Q.1) Q1: Implement a function that fetches multiple URLs concurrently with timeout

/*
async function fetchWithTimeout(urls, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  console.log(timeoutId, controller);
  try {
    const responses = await Promise.all(
      urls.map(url => fetch(url, { signal: controller.signal }))
    );
    return responses;
  } finally {
    clearTimeout(timeoutId);
  }
}

let urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
  "https://jsonplaceholder.typicode.com/posts/4",
];

fetchWithTimeout(urls, 4000)
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(data => console.log(data))
  .catch(err => console.error("Failed:", err));


  */

// Q.2) Create a retry mechanism for async function with exponential backoff.

async function fetchWithRetry(url, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return await res.json();
    } catch (error) {
      if (attempt === maxRetries) {
        throw new Error(`Failed after ${maxRetries} retries: ${error.message}`);
      }

     // Exponential backoff: 1s, 2s, 4s...
      const delay = 1000 * Math.pow(2, attempt - 1);
      await new Promise((res) => setTimeout(res, delay));
    }
  }
}
