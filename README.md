# Image search layer

## User Stories
* I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
* I can paginate through the responses by adding a ?offset=2 parameter to the URL.
* I can get a list of the most recently submitted search strings.

## Examples of search:

[http://rvg-image-search.herokuapp.com/search/dogs](http://rvg-image-search.herokuapp.com/search/dogs)

This is will search for results that relative to 'dogs'

## Retrieve last queries

[http://rvg-image-search.herokuapp.com/latest/searchs](http://rvg-image-search.herokuapp.com/latest/searchs)
