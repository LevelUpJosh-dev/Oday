## Small Fast Measured

Oday is a small but powerful JS framework built on Deno to quickly deploy an
extremely performant website using Deno and deno deploy. It uses Bootstrap and
jQuery currently because it was easy to import and I use it in my professional
career. But you could modify anything like that within template very easily as
it's all just CDN or ES module URL imports.

My goal was to design a architecture that was all JavaScript files. While we do
work with HTML and CSS in a raw string form this project is 100% JS driven in
terms of files.

### From the root of the package run the following command in your local terminal.

```JavaScript
deno run --allow-net --allow-read index.js
```

You could also add the --watch command if you doing active development and don't
want to restart the runtime for each change.

### index.js

This is where you base routes and your primary controller includes happen
specifically data from the request into a controller module and then back and
send on the response.

### templates.js

Central module takes in all page, layout or other template Js files and then
exports them as a complete template bundle which can be deconstructed.

### styles.js

Simple module exports functions which return template literals of raw style
strings I plan to adjust this in some form as working with CSS in raw string in
editor is blah.

### /views

Contains all your pages and layout JS files modules that export functions that
reutnr template strings of HTML.

### /controllers

Handle the wrapper process of wrapping a layout around the individual pieces of
the template and then populate and combine those into the finished raw html page
string.

Page Data Driven by JSON serverside. ESModules thoughtout async/await syntax for
processing file data during module processing. simple express like route
functionality.

## Desktop Lighthouse OOTB

![odayLighthouseOotbDesktop](https://user-images.githubusercontent.com/23381860/173934171-1b4990c8-63d3-486b-96c2-1b129a68d6c3.png)

## Mobile Lighthouse OOTB

![odayLighthouseOotbMobile](https://user-images.githubusercontent.com/23381860/173934172-7aca42c4-fff6-40f7-8875-1767a23ec3d4.png)

## Lighthouse Reports

- [odayMobileTimeframe.pdf](https://github.com/RedVanJosh/Oday/files/8922298/odayMobileTimeframe.pdf)
- [odayMobile.pdf](https://github.com/RedVanJosh/Oday/files/8922301/odayMobile.pdf)
- [odayDesktop.pdf](https://github.com/RedVanJosh/Oday/files/8922302/odayDesktop.pdf)

## Page Size Results

![chrome_19vC8a78vN](https://user-images.githubusercontent.com/23381860/174160817-79f58ae6-bc71-4448-8ac7-b8ef9b8924a5.png)
