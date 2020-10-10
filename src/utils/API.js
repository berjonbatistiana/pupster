import axios from "axios";
const DOGBREEDURL = "https://dog.ceo/api/breed/";
const RANDOMDOGURL = "https://dog.ceo/api/breeds/image/random";

export default {
  searchBreed: function(query) {
    return axios.get(DOGBREEDURL + query + '/images');
  },

  nextDog: function() {
    return axios.get(RANDOMDOGURL);
  }
};
