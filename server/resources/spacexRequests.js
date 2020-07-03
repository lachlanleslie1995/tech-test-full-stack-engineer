const axios = require("axios");

const getCapsules = async () => {
  return axios.get("https://api.spacexdata.com/v3/capsules");
};

const getLandingPads = async (id) => {
  return axios.get(`https://api.spacexdata.com/v3/landpads/${id}`);
};

exports.getCapsules = getCapsules;
exports.getLandingPads = getLandingPads;
