const urls = Array.from({ length: 200 }, (_item, index) => `https://jsonplaceholder.typicode.com/todos/${index + 1}`);

const fetchResponse = async (urls) => {

  const responses = await Promise.all(urls.map(url => fetch(url)));
  const response = await Promise.all(responses.map(res => res.json()));
  return response;
}

fetchResponse(urls).then(resp => {
  console.log(resp);
})
