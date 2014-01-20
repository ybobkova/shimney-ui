# Development Guidelines

## How to create a new Shimney UI package

Unfortunately shimney packages need a manifest. Here is some smaller example for an older version of bootstrap.

```json
{
  "name": "twitter-bootstrap",
  "version": "2.3.1",
  "packageJSON": {
    "description": "Sleek, intuitive, and powerful front-end framework for faster and easier web development.",
    "keywords": ["bootstrap", "css"],
    "homepage": "http://twbs.github.com/bootstrap/",
    "author": "Twitter Inc.",
    "repository": {
      "type": "git",
      "url": "https://github.com/twbs/bootstrap.git"
    },
    "bugs": {
      "url": "https://github.com/twbs/bootstrap/issues"
    },
    "licenses": [{
      "type": "Apache-2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0"
    }]
  },

  "assets": {
    "css": ["css/bootstrap.css", "css/bootstrap-responsive.css"],
    "img": ["img/glyphicons-halflings.png", "img/glyphicons-halflings-white.png"]
  }
}
```

But don't worry we do not plan to publish those manifests. They are just some not-yet-compiled package.json. The shimney management tool uses this manifest to create a package.json that allows to publish the shimney on npm.  
All files provided in assets will be exported from the grunt-shimney-sweeper with the sweepout command. Make sure you'll list ALL relevant files here and be sure to add new (we'll maybe provide a grunt task for keeping it up to date).  
Provide the name in lowercase and only with dashes.  

## How to release / register as a shimney

Use shimney to release you're ui-package

