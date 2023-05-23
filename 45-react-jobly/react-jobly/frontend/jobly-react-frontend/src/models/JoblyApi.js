import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
    // the token for interactive with the API will be stored here.
    static token;
    // Defined named parameters.
    static async request({ endpoint, data = {}, method = "get" }) {
    // console.debug("API Call:", endpoint, data, method);
    console.log("ENDPOINT", endpoint, data, method);
    const url = `${BASE_URL}/${endpoint}`;
    // console.log("URL FINISHED", url, data);
    // "Content-Type": "application/json"
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};
 
    try {
      // FIXED BUG
      // deleted .data from request
      return await axios({ url, method, data, params, headers });
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
   }
 
   // Individual API routes

   /** request an endpoint. */
   // Defined getCompany.
    static async getEndpoint({ endpoint, data, method }) {
      let res = await this.request({ endpoint, data, method });
      return res.data;
    }

    /** request multiple endpoints. */
    static async companyJobReqs(...args) {
      const reqs = args.map(async val => await this.request(val));
      return reqs;
    }
 
   /** authenticate. */
   static async logIn({endpoint, username, password}) {
    console.log(endpoint, username, password);
    const reqs = await this.request({endpoint, method: "post", data: {username, password}});
    return reqs;
  }

  /** setToken. */
  static async setToken(token) {
    this.token = token;
  }
 
}

// for now, put token ("testuser" / "password" on class)
//  JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//      "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//      "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
