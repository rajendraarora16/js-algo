const fetchResp = (apiURL) => {
    return fetch(apiURL).then(resp => {
      if (!resp.ok) {
        throw new Error("API error:", resp);
      }
      return resp.json();
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log("error: ", error);
      return error;
    })
  } 
  
  const apiURL = "https://jsonplaceholder.typicode.com/posts/1";
  fetchResp(apiURL);
  
  module.exports = {
    fetchResp
  }
  