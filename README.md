# nice-api-template
This is a simple starting point template for express based backend API server using TYPESCRIPT

It supports the following
1. Exception handling for Http calls
2. Logging access and errors at present into /logs/access.log
3. Uses .env file for all environment vars
4. Has /src/common dir for common modules like error handling and logging above
5. Has /src/middleware dir to hold any middleware files like types of errors to handle etc.
6. It has a /src/module directory (this example has /src/items) which holds all module related files
   - src/items/dto will have the interfaces for the supported data types
   - src/items/router will have all the routes for the API
   - src/items/services will have the actual code for processing the route calls for the API
  
To RUN this barebone you need to do this
- Clone this repo
  Open a terminal window and run
  > npm install
- create a .env file in the main dir with one entry
  PORT=7000
- on the terminal window type
  > npm run dev
