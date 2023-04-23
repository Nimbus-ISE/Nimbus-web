# Nimbus Travel Planner

Nimbus Travel Planner is a web application that empowers users to effortlessly plan their travel itineraries for Bangkok, Thailand. The application offers a comprehensive search engine for various destinations in Bangkok and enables users to view detailed information and reviews for each location. Our advanced algorithm generates personalized itineraries for each user based on their preferences and travel dates. With Nimbus Travel Planner, planning a perfect trip to Bangkok has never been easier.

## Features

- Search for locations by tags or by name
- View detailed information about each location
- Generate customized travel plans from user's preferences and dates
- Further customize the generated travel plans with alternative places
- Save the generated travel plans for easy reference or edit them later

## Technologies Used

- Next.js for the frontend and the backend
- TailwindCSS for styling components
- MaterialUI for premade components
- PostgreSQL hosted on AWS for the database
- Auth0 for authentication and user management
- Google's Directions API for routing information
- MapBox API for rendering the map
- Storybook for developing and testing isolated React components
- Postgres.js for querying data from database
- Redis for caching access tokens
- Various other libraries and tools for styling, testing, and deployment

### Environment Variables

The following environment variables are required to run Nimbus Travel Planner:

- `AUTH0_SECRET`: the Auth0 secret key
- `AUTH0_BASE_URL`: the Auth0 base url
- `AUTH0_ISSUER_BASE_URL`: the Auth0 tenant url
- `AUTH0_CLIENT_ID`: the Auth0 client ID
- `AUTH0_CLIENT_SECRET`: the Auth0 client secret
- `AUTH0_SCOPE`: the Auth0 scope
- `DB_CONN`: the connection string for connecting to a postgresql database
- `AUTH0_MANAGEMENT_CLIENT_ID`: the ID of the Auth0 management client
- `AUTH0_MANAGEMENT_CLIENT_SECRET`: the secret key of the Auth0 management client
- `REDIS_PW`: the password of the redis database
- `REDIS_HOST`: the host url of the redis database
- `ALGO_API_IP`: the IP of the algorithm instance
- `ALGO_API_PORT`: the port of the algorithm
- `MAPBOX_ACESS_TOKEN`= the Mapbox API Access token
- `DIRECTIONS_API_KEY`= the Google directions API key
