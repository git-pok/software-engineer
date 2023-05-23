import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
   // the token for interactive with the API will be stored here.
    static token;

   static async request({ endpoint, data = {}, method = "get" }) {
    // console.debug("API Call:", endpoint, data, method);
    // console.log("ENDPOINT", endpoint, data, method);
    const url = `${BASE_URL}/${endpoint}`;
    console.log("URL FINISHED", url, data);
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
 
   /** Get details on a company by handle. */
 
   static async getCompany({ endpoint, data, method }) {
      console.log("getCompany", endpoint, data, method);
      let res = await this.request({ endpoint, data, method });
      return res.data;
   }
 
   // obviously, you'll add a lot here ...
 
}

// for now, put token ("testuser" / "password" on class)
 JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
