# Part 1

## Overview

This is a webpage that displays a grid of information about a group of people.


## Usage

On initial page load, the full grid of people will be displayed in colored rectangles. Within each rectangle, the person's name, age, and category will be displayed. The color of the rectangle represents their priority.

Priorities are denoted by the following:
* 1: Orange
* 2: Green
* 3: Blue
* 4: Purple

Additionally, the following filters can be applied:
* Sort By: Select a sorting method from the dropdown.
    * Featured: No sort (default)
    * A-Z: Alphabetically ascending by name
    * Priority: The above listed priorities in ascending order
* Category: Unique list of categories from the full grid of people


## Deploy

Note: If port 8080 is not available, change `-p8080` in package.json to an available port.

```
cd PATH/TO/REPO/ROOT/DIR/
npm install
npm run serve-part1
```

After running `serve-part1`, you should see the following in the terminal:
```
Starting up http-server, serving part1/public/
Available on:
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```

Open a web browser and go to the address: `http://127.0.0.1:8080`. You should see the app.
