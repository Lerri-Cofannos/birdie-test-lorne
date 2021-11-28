# Birdie Developer Internship Test for François Lorne from the Paris Digital Lab

The app enables the user to access the database of Birdie, registering the cares
given to elderly patients. The idea is have a user-frindly display of the data
as to let the family members access the observations easily. Hence, my main focus
point has been the reformating of the raw data as to optimize the display of the
events and facilitate its reading.
This website has been done between Wednesday the 24th and Sunday the 28th of
November in the context of a recruitement developer test for an internship.

# Original features

Random names are given out to the patients to identify them, and it is being used
in the descriptions to replace the censored names.
The events are sorted by visit_id, with the most recent visits on top, but the
events in a chronological order.
On the tech side, there is a context provider, enabeling the storage of the data
of the patient currently selected. The same interface could have been done with
simple props, but it is not as simple.
I used extensively eslint and prettier, so the code should be as readable as it
can be.
To ensure compatibility to the data, none of the dimensions are hard-coded, thus
the app is perfectly scalable.

# Possible improvements

The main improvements that could have been made are

- the handling of the patients: we can switch from one to the other here,
  but in a practical usage, an authentification would have been appreciated.
- the filters on the shown data: every event is shown, but a specific caregiver
  might have wanted to see only its own observations, or only the summary for
  a type of event, or only those of a particular date.

# Things that didn't go as expected

As I had never done any tests before on any program, I coudn't start learning
from scratch and implement it in the timelapse left to finish the project.
I like to comment my code, but I didn't have much time to add this touch, and
the code is fairly straightforward.
The timeline design didn't cooperate, so the line doesn't go through all the
dots... I must be missing a point here.

# Techs

For the front-end, everything has been implemented with typescript and css. The
only non-trivial libraries used are axios and react-awesome-spinner.
As for the backend, I have used express, knex and mysql2.
