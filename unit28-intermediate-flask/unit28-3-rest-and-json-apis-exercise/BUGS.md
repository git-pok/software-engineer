# Test Database Bug
The test database uri will not take effect. The uri changes
and the engine url changes, but the changes still
effect the production database.

The problem seems to be that nothing reinitializes
the uri. The flask sqlalchemy docs say once an app is
initialized the database is not able to be reconfigured.
This seems to be the problem because I am able to
change the uri but it never takes effect.

### Attributes Explore
I used dir to see attributes for db and app.
I found functions and props that allow me to change
engine urls and uris, but nothing works. Maybe
there is a function that allows me to connect to a
different uri.

### Bind Explore
I used sqlalchemy binds, but there is no way to
access the binds from the test classes.

### OS Library Explore
I have not finished this fix, but I need to find
where the uri is set on the os. The prop for
sqlalchemy's uri variable does not exist.
I have to read the docs on os to further explore it,
but it doesn't seem to reinitialize the database.

### App Explore
When running tests, the app runs then the test file runs.
Therefore, the prod database will be registered
once the test file is run and this makes it hard
to register a test database afterwards.

### Quick Fix 1
Have prod and test database
configurations in app file, with test
db commented out when not testing and prod
db commented out when testing. This with the
other explores show that the app only
reads the change when the app originally
registers.

### Quick Fix 2
Set uri based off of command line arguments.
This works for running files on PC.