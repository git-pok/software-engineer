# React Jobly App
In this sprint, you’ll create a React front end for the Jobly backend.

## Step Zero: Setup
The backend for this will be our solution to the express-jobly exercise.

You can find this in the starter code.

Use this instead of the backend you built for jobly — ours is feature-complete with what the front-end will need.

Create a new React project.

It may help to take a few minutes to look over the backend to remind yourself of the most important routes.

Start up the backend. We have it starting on port 3001, so you can run the React front end on 3000.

## Step One: Design Component Hierarchy
It will help you first get a sense of how this app should work.

We have a demo running at http://joelburton-jobly.surge.sh. Take a tour and note the features.

Please register as a new user to explore the site.

## Step Two: Make an API Helper
Many of the components will need to talk to the backend (the company detail page will need to load data about the company, for example).

Make a single JoblyAPI class, which will have helper methods for centralizing this information.

## Step Three: Make Your Routes File
Look at the working demo to see the routes you’ll need:
- /
    - Homepage — just a simple welcome message
- /companies
    - List all companies
- /companies/apple
    - View details of this company
- /jobs
    - List all jobs
- /login
    - Login/signup
- /signup
    - Signup form
- /profile
    - Edit profile page

Make your routes file that allows you to navigate a skeleton of your site. Make simple placeholder components for each of the feature areas.

Make a navigation component to be the top-of-window navigation bar, linking to these different sections.

When you work on authentication later, you need to add more things here. But for now, you should be able to browse around the site and see your placeholder components.

## Step Four: Companies & Company Detail
Flesh out your components for showing detail on a company, showing the list of all companies, and showing simple info about a company on the list (we called these CompanyDetail, CompanyList, and CompanyCard, respectively —but you might have used different names).

Make your companies list have a search box, which filters companies to those matching the search (remember: there’s a backend endpoint for this!). Do this filtering in the backend — not by loading all companies and filtering in the front end!

## Step Five: Jobs
Similarly, flesh out the page that lists all jobs, and the “job card”, which shows info on a single job. You can use this component on both the list-all-jobs page as well as the show-detail-on-a-company page.

Don’t worry about the “apply” button for now — you’ll add that later, when there’s authentication for the app.

## Step Six: Current User
This step is tricky. Go slowly and test your work carefully.

Add features where users can log in, sign up, and log out. This should use the backend routes design for authentication and registration.

When the user logs in or registers, retrieve information about that user and keep track of it somewhere easily reached elsewhere in the application.

Things to do:
Make forms for logging in and signing up

In the navigation, show links to the login and signup forms if a user is not currently logged in.

If someone is logged in, show their username in the navigation, along with a way to log out.

Have the homepage show different messages if the user is logged in or out.

When you get a token from the login and register processes, store that token on the JoblyApi class, instead of always using the hardcoded test one. You should also store the token in state high up in your hierarchy; this will let use use an effect to watch for changes to that token to kick off a process of loading the information about the new user.

Think carefully about where functionality should go, and keep your components as simple as you can. For example, in the LoginForm component, its better design that this doesn’t handle directly all of the parts of logging in (authenticating via API, managing the current user state, etc). The logic should be more centrally organized, in the App component or a specialized component.

## Step Seven: Using localStorage and Protecting Routes
If the user refreshes their page or closes the browser window, they’ll lose their token. Find a way to add localStorage to your application so instead of keeping the token in simple state, it can be stored in localStorage. This way, when the page is loaded, it can first look for it there.

### Protecting Routes
Once React knows whether or not there’s a current user, you can start protecting certain views! Next, make sure that on the front-end, you need to be logged in if you want to access the companies page, the jobs page, or a company details page.

## Step Eight: Profile Page
Add a feature where the logged-in user can edit their profile. Make sure that when a user saves changes here, those are reflected elsewhere in the app.

## Step Nine: Job Applications
A user should be able to apply for jobs (there’s already a backend endpoint for this!).

On the job info (both on the jobs page, as well as the company detail page), add a button to apply for a job. This should change if this is a job the user has already applied to.

## Step Ten: Deploy your Application
We’re going to use Heroku to deploy our backend and Surge to deploy our frontend!