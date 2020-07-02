const axios = require("axios");

const getCapsules = async () => {
  return axios.get("https://api.spacexdata.com/v3/capsules");
  //     axios.get("https://api.spacexdata.com/v3/capsules").then((response) => {
  //     return JSON.stringify(response.data);
  //   });
};

exports.getCapsules = getCapsules;
