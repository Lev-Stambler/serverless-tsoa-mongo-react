# API Readme

## TSOA Serverless Original Readme

Integrates the awesome [TSOA framework](https://github.com/lukeautry/tsoa) with Serverless for building sweet APIs in
Lambda with no cold starts and lots of strongly typed goodness!

<https://rosacksoftwaresolutions.com/2017/03/20/serverless-monolithic-apis-and-tsoa/>

## Run Locally

Make sure you have Serverless installed globally (`npm install -g serverless`) (use `sudo` if needed) and install the dependencies (`npm install`), then you can:

`npm run start` - This runs the TSOA pipeline, then builds the typescript using [Serverless Webpack](https://github.com/elastic-coders/serverless-webpack) and serves it using [Serverless Offline](https://github.com/dherault/serverless-offline)!

`npm run debug` - Same as start, but launches with the debugger available for connection on port 5858.  There's a launch.json for VSCode available that should allow you to just connect.

**Things to keep in mind**:
- Running locally should have hot reloading. Hot reloading should work for all files __except for the files in the controllers folder__. You must rerun the script to get TSOA to recompile the routes
- The code within **controllers** sets up all the routing with express and TSOA. No business logic should be done here. Please read up on [Swagger](https://swagger.io/docs/specification/2-0/what-is-swagger/) and [Tsoa](https://github.com/lukeautry/tsoa#readme)
## Developments

### Repo structure
- The code within **framework** can be mostly left alone for now. Once more comfortable with the repository, feel free to check it out and play around.
- The code within **services** should handle all the business logic
- The code within **models** should contain only interfaces for the models used with the db
- The code within **types** should contain the non-model types and interfaces used
- The code within **repositories** should only contain the code to handle connection with Mongo 

## Deploy to AWS

`npm run deploy-dev` - Deploys everything out to AWS to play around with.  Obviously, **this may cost you money**.  You'll need to run this twice if you want to play with the
swagger - `npm run fix-swagger` will tweak the swagger.json appropriately, but only after it's been deployed once and we can get the ServiceEndpoint from the CloudFormation outputs.  (I'd love a better way to do this if anyone has any ideas.)

## Swagger UI

I don't have Swagger UI set up in the project, mostly because I really don't want to handle serving real HTML/JS assets (at least for now).  If you want to play around with your API once you've got it up and running locally, just go to <http://petstore.swagger.io?url=http://localhost:3000/swagger.json>.