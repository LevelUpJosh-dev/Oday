## Small Fast Measured

Hello, my name is Joshua Rei, I am Sr. Full Stack Developer with Red Van Workshop.

I am a passionate, creative individual with a drive to learn and create. Over the years.
I have spent time on many personal projects. Which I have been too afraid to expose in any 
public forum. So here goes nothing...

If you end up reading this, if nothing else. Thanks for your interest, whether it's in my 
- Project/s
- Articles (More to Come)
- Videos (More to Come)

### Your interest and time are appreciated. Everything I do is to educate myself and my peers.

Oday is a small, fast JS framework built on Deno. It quickly allows you to deploy an
extremely performant website using Deno and Deno deploy. It uses Bootstrap 5 as a toolkit for
creating templates and consistent experiences using class-based styling. Once you use the template, you are free to use
whatever modules can be included in Deno proper and some cross Deno/Browser modules.
Currently, Bootstrap is
the only dependency in the project. Because of the nature of Deno's dependency management, simply removing the Bootstrap inclusion is
all that is required to remove this dependency. Due to the nature of Oday, you could just remove that entry in the Oday.YAML data modal or toggle Resource enable flag. More on this later.

My goal was to design an architecture that was as close to pure JavaScript as I could make it. 

## Why? 

Deno feels like a natural transition in web and server-side JavaScript development. Continue to align and gain parity with modern browser and JavaScript standards. In doing so, the hope is we can create fluid, practical functionality that, in many cases, work in both server-side JavaScript and the V8 runtime.

# **WARNING**
This has been in development for all of 2-3 weeks, I plan to use it to build out some of my own personal proejcts.
This said if you want to fork this template and try it out you'll find all the info you need below.


### From the root of the package run the following command in your local terminal.

```JavaScript
deno run --allow-net --allow-read Oday.js
```
- Where are running Opine so we need --allow-net
- To build out our initial data modal we parse Oday.yaml so we need --allow-read

You could also add the --watch flag to the command, if you doing active development and don't
want to restart Deno on each change.

**Caveat Here** 
Due to how Deno and Deno Deploy run static until restarted or until a new deployment occurs.
Our YAML data modal is parsed on the initial deploy so the watcher currently won't see changes at that layer. 
TBD: Script to help the watcher notice the YAML changes and trigger the renew on the resource.

### Oday.yaml
This is the oday data modal, as long as it's valid YAML you can add it to the data modal and
acces it at window.Oday in the global project. This currently drives template classes, content, id, links, scripts etc.
This makes it easy to control content, look and feel of a given page once it's been created.

### Oday.js

This is where you base routes and your primary controller includes occur. We also
setup some global variables attched to our serverside window object.

### Templates.js

Central funnel for templates, takes in all template module exports from the various
pages and partials and exports those as one collection. These can then be included 
and deconstruted using standard ES module syntax.

### Views

Contains all your page and layout JS modules exports these return template literals populated
with data from the Oday data modal.

### Controllers

The controllers drive template configuration. They allow us to provide context to our current page render
as well as allow us to wrap partials and othe raddtional data / templates to create our complete page.
