import axios from 'axios';

const BASEURL = "api.openweathermap.org/data/2.5/weather?q={boston}";
const APIKEY = "4359d28132608b6736fa28e605d12ec8";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function (query) {
    return axios.get(BASEURL + "&appid=" + APIKEY);
  }
};