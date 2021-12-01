# Birdie Developer Internship Test for François Lorne from the Paris Digital Lab

The app enables the user to access the database of Birdie, registering the cares
given to elderly patients. The idea is have a user-frindly display of the data
as to let the family members access the observations easily. Hence, my main focus
point has been the reformating of the raw data as to optimize the display of the
events and facilitate its reading.
The website can be accessed here: https://birdie-test-lorne.herokuapp.com/

# Techs

Frontend:

- Languages: Typescript, CSS, HTML
- Libraries: React, axios
- Packages: semantic-ui-react, react-awsome-spinners

Backend:

- Languages: Typescript
- Libraries: express, knex

# Original features

List of features that could make this website unique:

- Random names are given out to the patients to identify them, and it is being
  used in the observation descriptions to replace the censored names.
- The events are sorted by visit_id, with the most recent visits on top, but the
  events inside ordered in a chronological order.
- On the tech side, there is a context provider, keeping the selected patient
  accessible for any components. The same interface could have been done
  with simple props, but the piece of information being important for a given
  user, it could be reused in other pages if the site was to get more complex.
- I used extensively eslint and prettier, to ensure the readibility of the code.
- None of the dimensions are hard-coded, thus the app can adapt to the database
  if it were to be slightly modified.

# Possible improvements

The main improvements that could have been made are

- the handling of the patients: we can switch from one to the other here,
  but in production an authentification would have been appreciated.
- the filters on the shown data: there are few filters, and additional ones
  could have been appreciated, as a family member might have wanted to see the
  observations of a specific caregiver, or a more precise type of event.
- the fine-tuning of the display: as it is, all the events are approximately
  shown the same plain way, but some are begging to be put in a graph to see
  the evolution of their values.

# Things that didn't go as expected

The project being in the scope of a recruitement, all the ideas couldn't be
finished.

- As I had never done any tests before on any program, I didn't take the gamble
  to start learning from scratch and implement them in the timelapse left to
  finish the project.
- Commenting ones code is a good habit before sharing it, but I didn't have much
  time to got through the whole code again. However, as it is in typescript and
  react, I believe the code will speak for itself.
- I have only deployed websites twice, but with the help of camarades, and with
  VM and Docker, so deploying on heroku was a real challenge as I ran into issues
  and that the logs poorly helped. Thankfully I was given three more days to
  complete the deployment, which was successful by bypassing the cors by serving
  the build frontend directly in the backend.

# Directory tree

Here is the directory tree showing all of the files of interest (no git, no
eslint, no prettier, no vscode config, nor any node_modules). In the backend
there is the built frontend as only the backend is deployed on heroku.
.
├── README.md
├── backend
│ ├── **tests**
│ │ └── ping.spec.ts
│ ├── nodemon.json
│ ├── package.json
│ ├── public
│ │ ├── asset-manifest.json
│ │ ├── favicon.ico
│ │ ├── favicon.jpeg
│ │ ├── index.html
│ │ ├── manifest.json
│ │ ├── robots.txt
│ │ ├── static
│ │ │ ├── css
│ │ │ │ ├── main.6dfae6aa.chunk.css
│ │ │ │ └── main.6dfae6aa.chunk.css.map
│ │ │ └── js
│ │ │ ├── 2.bc60701c.chunk.js
│ │ │ ├── 2.bc60701c.chunk.js.LICENSE.txt
│ │ │ ├── 2.bc60701c.chunk.js.map
│ │ │ ├── 3.a08a2756.chunk.js
│ │ │ ├── 3.a08a2756.chunk.js.map
│ │ │ ├── main.9cd0778c.chunk.js
│ │ │ ├── main.9cd0778c.chunk.js.map
│ │ │ ├── runtime-main.036a7d5c.js
│ │ │ └── runtime-main.036a7d5c.js.map
│ │ └── warning.jpeg
│ ├── src
│ │ ├── application.ts
│ │ ├── controllers
│ │ │ ├── data.router.ts
│ │ │ └── ping.ts
│ │ ├── index.ts
│ │ └── services
│ │ ├── mysqlConnection.ts
│ │ └── types.ts
│ └── tsconfig.json
├── frontend
│ ├── README.md
│ ├── package.json
│ ├── public
│ │ ├── favicon.ico
│ │ ├── favicon.jpeg
│ │ ├── index.html
│ │ ├── manifest.json
│ │ ├── robots.txt
│ │ └── warning.jpeg
│ ├── src
│ │ ├── components
│ │ │ ├── App.css
│ │ │ ├── App.test.tsx
│ │ │ ├── App.tsx
│ │ │ ├── DataDisplay
│ │ │ │ ├── DataDisplay.css
│ │ │ │ ├── DataDisplay.tsx
│ │ │ │ └── index.tsx
│ │ │ ├── Footer
│ │ │ │ ├── Footer.css
│ │ │ │ ├── Footer.tsx
│ │ │ │ └── index.tsx
│ │ │ ├── Header
│ │ │ │ ├── Header.css
│ │ │ │ ├── Header.tsx
│ │ │ │ └── index.tsx
│ │ │ ├── Observation
│ │ │ │ ├── Observation.css
│ │ │ │ ├── Observation.tsx
│ │ │ │ └── index.tsx
│ │ │ └── Visit
│ │ │ ├── Visit.css
│ │ │ ├── Visit.tsx
│ │ │ └── index.tsx
│ │ ├── helpers
│ │ │ ├── displayer.tsx
│ │ │ └── types.tsx
│ │ ├── hooks
│ │ │ └── patientContext.tsx
│ │ ├── index.css
│ │ ├── index.tsx
│ │ ├── react-app-env.d.ts
│ │ ├── reportWebVitals.ts
│ │ ├── services
│ │ │ ├── getPatientEvents.tsx
│ │ │ └── getPatientList.tsx
│ │ └── setupTests.ts
│ └── tsconfig.json
└── init.README.md
