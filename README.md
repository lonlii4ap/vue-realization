# vue-realization
 implement the vue && webpack process use step by step

## 1.introduction
libs or frameworks
you call libs,and frameworks call you
vue belongs to the framework

## 2. mvc && mvvm
mvc: View => Controller => Model
mvvm: View <=> viewModel <=> Model

### 3.webpack
Webpack is a static module bundle of modern JavaScript applications. When webpack processes applications, it recursively builds a dependency graph that contains every module required by the application, and then packages all these modules into one or more bundles.
Using webpack as a front-end build tool

-Code conversion: typescript compiled into JavaScript, SCSS compiled into CSS, etc.

-File Optimization: compress JavaScript, CSS, HTML code, compress and merge pictures, etc.

-Code segmentation: extract the common code of multiple pages and the code of the first screen that does not need to be executed to load asynchronously.

-Module merging: there will be many modules and files in the project adopting modularization. It is necessary to build the function to merge the module classification into one file.

-Auto refresh: monitor the changes of local source code, and automatically rebuild and refresh the browser.

-Code verification: before the code is submitted to the warehouse, it needs to verify whether the code conforms to the specification and whether the unit test passes.

-Automatic release: after the code is updated, the release code on the outgoing line is automatically built and transmitted to the release system.

**There are two cores in the 'webback' application * *:

-1) module converter, which is used to convert the original content of the module into new content as required, and can load non JS modules

-2) extension, inject extension logic at a specific time in the webpack build process to change the build result or do what you want.

##3. Webback

###3.1 installation

```bash

npm init -y

npm install webpack webpack-cli --save-dev

` ` ` `
`Webpack 'supports 0 configuration by default, and configures' scripts' script

```json
"scripts": {
  "build": "webpack"
}
```
Execute 'NPM run build'. Node will be called by default_ The 'webback' command under modules /. Bin 'will internally call' webback cli 'to resolve user parameters for packaging. Default to ` SRC/ index.js `As an entry file.

We can find that the 'dist' directory has been generated. This directory is the result of final packaging. ` main.js `It can be directly referenced in HTML, and we will be prompted that the default 'mode' is' production '`