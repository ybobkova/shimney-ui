# Shimney UI

## about

[Shimney is a collection of AMD packages for frontend components](https://github.com/webforge-labs/shimney-js). Shimney UI is going to be a bunch of complexer frontend components, that define AMD modules, framework adapters, templates and associated stylesheets or binary assets (images).
While **shimney** is used to maintain packages like:
  - cookie management
  - jquery
  - lodash
  - knockout
etc.

**shimney UI** should manage shimneys like:
  - bootstrap datepicker
  - autocomplete and typeahead
  - bootstrap components in general
  - navigation tree management (like nestable)
  - grid (like Psc.UI.GridTableEditor)
etc.  

You can see that the UI shimneys are more sophisticated and need more associated assets, like css less or images.

## how it works

As every [shimney package](https://github.com/webforge-labs/shimney-js) is installable with npm so is every shimney UI package. Just search on npm and then [install like every other shimney package](https://github.com/webforge-labs/shimney-js). You can use the [grunt-shimney-sweeper](https://github.com/webforge-labs/grunt-shimney-sweeper) to export your installed packages with all its assets and binaries to your web directory. Chain the sweepout command into your build and you'll have all your shimney and shimney-ui packages in one place. You can then optimize the modules with r.js and minimze/complie the css/less.

For example let's look at the datepicker shimney. The datepicker opens a small calendar popup on some text input field and lets you select a date. It then writes it to the input text field. This component is avaible for bootstrap or standalone for many other frameworks. It needs a datepicker.css and a jquery plugin file (datepicker.js) and some images. The shimney ui packager would write the information for the assets to the package.json wich is published to npm. So you would install the datepicker with npm and then run `sweepout` from the grunt-shimney-sweeper.
This would export your packages like this:

```
www
  assets
    img
      shimney-ui-datepicker
        back.png
        forward.png
    js
      shimney-ui-datepicker
        main.js     # this is the datepicker.js

      config.js     # includes all paths for shimneys and shimney UI packages
    css
      shimney-ui-datepicker
        datepicker.css

```
So that you'll only have to minimize all files in css to one and load the datepicker like this (with javascript):
```
require(['shimney-ui-datepicker'])
```

If the module has a knockout adapter you can use a custom binding to initiate the ui package:
```
<input type="text" name="startDate" value="" data-bind="shimney-ui-datepicker: startDate"
```
(this is just an example, please refer to the documentation of the shimney UI for details).
The knockout binding will be compiled into the main.js, when the shimney knockout package is installed. 

## development

[development guidelines](docs/development.md)

## License

All Licenses from shimney UI packages are individual.