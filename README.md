# OnTap
<a href="http://on-tap.herokuapp.com">onTap</a>
<br> Enter your location, and then enjoy!

  ### Team
  - [Emily Carson](https://github.com/emily-jane)
  - [Sivan Patel](https://github.com/sivanpatel)
  - [Richard Geoghegan](https://github.com/richgeog)
  - [Katya-yani Vas](https://github.com/Kyvyas)
  - [Brandon Graves](https://github.com/bgraves14)


### The Task
  During our two day hackathon, we built a pub-finding web app. Users can enter their location (by address or postcode), and find all the pubs local to them, along with their rating and links to their corresponding Yelp pages. The pubs are then displayed on a map.
### Our Approach
  We decided to create an one page application, which incorporates the Yelp and Google Maps APIs.

### Challenges
The Yelp API was difficult to implement. OAuth security tokens were needed to verify the API calls but it was unclear which ones were needed. An entire day was spent on getting this API to work, so time pressures were introduced which restricted our ability to test drive the development of this app.

### User Stories
````
As a regular pub goer
So that I can find new pubs
I would like to be able to search for a list of pubs local to me
````
````
As a regular pub goer
So that I know which pubs are nice to go to
I would like to be able to see the rating of the pub
````
````
As a regular pub goer
So that I know where the pub I want to go is
I would like to see the pubs displayed on a map
````

### Technologies used
 - Angular.js
 - Sinatra
 - Bootstrap
 - Google Maps API
 - Yelp API
 - Karma

### Any future features?
- Showing the relative prices of the individual pubs (£ for cheap ones, ££££ for expensive ones)
- An option to use current your location through your browser to find local pubs
- The ability to click pub icons on the map display to get info of the pub
- The ability to get directions to the pub from clicking the relevant icon on the map
- An option to search for something other than pubs (i.e. bars, clubs, cinemas)
