import axios from "axios";
import * as constant from "../common/constants";
/**
 * Call two apies given in document
 */
const Api = {
  fetchHourlyData: async () => {
    const response = await axios.all(
      constant.endpoints.map((endpoint) => axios.get(endpoint))
    );
    return response;
  },
};

export default Api;
