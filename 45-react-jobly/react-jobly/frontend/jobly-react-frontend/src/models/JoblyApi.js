import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
    // the token for interactive with the API will be stored here.
    // static classToken;
    // t = classToken ? classToken : null;
    // static userData;
    // Defined named parameters.
    static async request({ endpoint, data = {}, method = "get" }) {
    // console.debug("API Call:", endpoint, data, method);
      console.log("REQUEST ENDPOINT", endpoint, data, method);
      const url = `${BASE_URL}/${endpoint}`;
      console.log("URL FINISHED", url, data);
    // "Content-Type": "application/json"
      const userData = JSON.parse(window.localStorage.getItem("userData") || null);
      const token = userData ? userData.token : null;
      const headers = { Authorization: `Bearer ${token}` };
      console.log("HEADER", headers);
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
 
   /** logIn. */
    static async logIn({endpoint, username, password}) {
      console.log(endpoint, username, password);
      const reqs = await this.request({endpoint, method: "post", data: {username, password}});
      return reqs;
    }

  /** signUp. */
    static async signUp({username, password, firstName, lastName, email}) {
      console.log("JAPI", username, password, firstName, lastName, email);
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

    /** getCompany. */
    // static async getCompany(resource) {
    //   console.log("GET CO END", resource);
    //   const endpoint = `companies/${resource}`
    //   const reqs = await this.request({endpoint});
    //   return reqs;
    // }

    /** getJob. */
    // static async getJob(resource) {
    //   console.log("GET CO END", resource);
    //   const endpoint = `jobs/${resource}`
    //   const reqs = await this.request({endpoint});
    //   return reqs;
    // }

    /** getCompOrJob. */
    static async getCompOrJob(resource, isJob=false) {
      console.log("GET CO END", resource);
      const endpoint = isJob ? `jobs/${resource}` : `companies/${resource}`;
      const reqs = await this.request({endpoint});
      return reqs;
    }

    /** reqProtectedRoute. */
    // static async reqProtectedRoute(resource, cred) {
    //   console.log("reqProtectedRoute", resource, cred);
    //   const endpoint = resource;
    //   const reqs = await this.request({endpoint});
    //   return reqs;
    // }

}

// for now, put token ("testuser" / "password" on class)
//  JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//      "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//      "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
