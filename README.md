# Front end developer course
---
#### Project - Restaurant Reviews

## Project Overview

For the **Restaurant Reviews** project, I incrementally convert a static webpage to a responsive on different sized displays and accessible for screen reader. I also add a service worker to provide offline experience for users.

### Specification

I have been provided the code for a restaurant reviews website. The code had a lot of issues. It was barely usable on a desktop browser, much less a mobile device. It also didn’t include any standard accessibility features, and it didn’t work offline at all. I have updated the code to resolve these issues while still maintaining the included functionality.

### How to run?

Just open it on [GitHub pages](https://evgeniit.github.io/mws-restaurant-stage-1/).

### How to use source code and implement new features?

1. Use GitHub [repository](https://github.com/EvgeniiT/mws-restaurant-stage-1.git) to get source code.

2. Start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

3. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.

4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Dependecies

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. 
