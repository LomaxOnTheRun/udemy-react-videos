import axios from "axios";

const KEY = "AIzaSyDDfne13dzRXZGYl6IBOcfCFZhKzIrYVeE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
