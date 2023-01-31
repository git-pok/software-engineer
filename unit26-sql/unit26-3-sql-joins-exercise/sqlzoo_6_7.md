# TUTORIAL 6 JOIN
1. The first example shows the goal scored by a player
with the last name 'Bender'. The * says to list all the
columns in the table - a shorter way of saying matchid,
teamid, player, gtime. Modify it to show the matchid and
player name for all goals scored by Germany. To identify
German players, check for: teamid = 'GER'.
- SELECT matchid, player FROM goal WHERE teamid = 'GER';

2. Show id, stadium, team1, team2 for just game 1012.
- SELECT id, stadium, team1, team2 FROM game WHERE id = 1012;

3. Modify it to show the player, teamid, stadium and mdate for every German goal.
- SELECT player, teamid, stadium, mdate
    - FROM game JOIN goal ON game.id = goal.matchid WHERE goal.teamid = 'GER';

4. Show the team1, team2 and player for every goal scored by
a player called Mario player LIKE 'Mario%'.
- SELECT team1, team2, player
    - FROM goal JOIN game ON goal.matchid = game.id WHERE goal.player LIKE 'Mario%';

5. Show player, teamid, coach, gtime for all goals scored in
the first 10 minutes gtime<=10.
- SELECT player, teamid, coach, gtime
    - FROM goal JOIN eteam ON goal.teamid = eteam.id WHERE goal.gtime <= 10;

6. List the dates of the matches and the name of the team in
which 'Fernando Santos' was the team1 coach.
- SELECT mdate, teamname
    - FROM game JOIN eteam ON game.team1 = eteam.id
        - WHERE eteam.coach = 'Fernando Santos';

7. List the player for every goal scored in a game
where the stadium was 'National Stadium, Warsaw'.
- SELECT player FROM game JOIN goal ON game.id = goal.matchid
    - WHERE game.stadium = 'National Stadium, Warsaw';

# TUTORIAL 7 More JOIN Operations
1. List the films where the yr is 1962 [Show id, title].
- SELECT id, title FROM movie WHERE yr = 1962;

2. Give year of 'Citizen Kane'.
- SELECT yr FROM movie WHERE title =  'Citizen Kane';

3. List all of the Star Trek movies, include the id,
title and yr (all of these movies include the words
Star Trek in the title). Order results by year.
- SELECT id, title, yr FROM movie WHERE title LIKE  '%Star Trek%';

4. What id number does the actor 'Glenn Close' have?
- SELECT id FROM actor WHERE name = 'Glenn Close';

5. What is the id of the film 'Casablanca'?
- SELECT id FROM movie WHERE title = 'Casablanca';

6. Obtain the cast list for 'Casablanca'.
Use movieid=11768, (or whatever value you got from the previous question).
- SELECT name FROM actor JOIN casting ON actor.id = casting.actorid
    - AND casting.movieid = 27;

7. Obtain the cast list for the film 'Alien'.
- SELECT name FROM actor JOIN casting ON actor.id = casting.actorid
    - AND casting.movieid = 35;

8. List the films in which 'Harrison Ford' has appeared.
- SELECT title FROM actor JOIN casting ON actor.id = casting.actorid
    - AND casting.actorid = 6 JOIN movie ON casting.movieid = movie.id;

9. List the films where 'Harrison Ford' has appeared -
but not in the starring role. [Note: the ord field of casting
gives the position of the actor. If ord=1 then this
actor is in the starring role].
- SELECT title FROM actor JOIN casting ON actor.id = casting.actorid
    - AND casting.actorid = 6 JOIN movie ON casting.movieid = movie.id AND ord != 1;

10. List the films together with the leading star for all 1962 films.
- SELECT title, name FROM actor JOIN casting ON actor.id = casting.actorid
    - JOIN movie ON casting.movieid = movie.id AND movie.yr = 1962 AND ord = 1;

