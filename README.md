# nl-app-node

## start:

`npm install`
`npm run dev`

### Architecture

```sh
src
    ├── app.js          app entry point
    ├── /api            controller layer: api routes
    ├── /config         config settings, env variables
    ├── /services       service layer: business logic
    ├── /models         data access layer: database models
    ├── /scripts        miscellaneous NPM scripts
    ├── /subscribers    async event handlers
    └── /test           test suites
```

More about architecure [Configuration Reference](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development).
