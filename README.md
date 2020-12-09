# Cars

 ## Coding Challenge
As an extension to our architectural design discussion, we'd like to implement a very basic api
and microservice for finding and listing information about "cars" in our application.
For this exercise, please set up two node services (preferably using docker): 1 to serve as the
internal API and 1 to be the service used by the API.

### API
Using Express (or comparable framework), we'd like to see a small application accept two http
requests:
1. GET: /cars
2. GET /cars/{id}
The ​"/cars"​ endpoint should accept the request. It should then make its own request to the
actual service (below). From there it should receive a data payload and format the data back to
the originator in a JSON format.
The ​"/cars/{id}" ​endpoint should accept the request and expect a string for the {id}. It should
then make its own request to the actual service. From there it should receive a data payload for
the car (with the matching {id}) and form the data back to the originator in a JSON format.
We can assume that this is an internal API that has already been authenticated and authorized
and do not need to worry about security in that sense.

### Service
We understand this is a take-home exercise and not a production application. For this service,
we'd like for it to receive a request from the ​API​ above and return data when appropriate. A
sample fixture has been included. Valid requests would be for the corresponding ​API ​endpoints
above.

### Tests
Please include some documentation for user testing. Unit and Integration tests would also be
encouraged.
