import axios from "axios";

export default axios.create({
  baseURL: "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json",
  headers: {
    "Content-type": "application/json"
  }
});
