import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
    // Defined named parameters.
    static async request({ endpoint, data = {}, method = "get" }) {
    // console.debug("API Call:", endpoint, data, method);
      const url = `${BASE_URL}/${endpoint}`;
      const userData = JSON.parse(window.localStorage.getItem("userData") || null);
      const token = userData ? userData.token : null;
      const headers = { Authorization: `Bearer ${token}` };
      const params = (method === "get")
          ? data
          : {};
 
      try {
      // FIXED BUG
      // Deleted .data from request
        return await axios({ url, method, data, params, headers });
      } catch (err) {
        console.error("API Error:", err.response);
        // let message = err.response.data.error.message;
        // throw Array.isArray(message) ? message : [message];
      }
    }
 
   // Individual API routes

   /** request an endpoint. */
   // Defined getEndpoint.
    static async getEndpoint({ endpoint, data, method }) {
      try {
        let res = await this.request({ endpoint, data, method });
      return res.data;
      } catch (err) {
        console.error("API Error:", err.response);
      }
    }

    /** Defined companyJobReqs. */
    static async companyJobReqs(...args) {
      const reqs = args.map(async val => await this.request(val));
      return reqs;
    }
 
   /** Defined logIn. */
    static async logIn({endpoint, username, password}) {
      const reqs = await this.request({endpoint, method: "post", data: {username, password}});
      return reqs;
    }

  /** Defined signUp. */
    static async signUp({username, password, firstName, lastName, email}) {

      const reqs = await this.request(
            {
              endpoint: "auth/register",
              method: "post",
              data: {
                      username, password,
                      firstName, lastName,
                      email
                    }
            }
          );
      return reqs;
    }

    /** Defined getCompOrJob. */
    static async getCompOrJob(resource, isJob=false) {
      const endpoint = isJob ? `jobs/${resource}` : `companies/${resource}`;
      const reqs = await this.request({endpoint});
      return reqs;
    }

}

// Develop phase token ("testuser" / "password" on class)
//  JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//      "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//      "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
