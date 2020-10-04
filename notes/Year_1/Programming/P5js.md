---
title: JavaScript with p5.js
lecturer: Steven
---

## Client- and server- side

-   Recently JS is also used server-side: nodejs

-   Good JS engines in mobile browsers

-   JS often used for cross-platform App dev
    [Cordova](https://cordova.apache.org/)

-   Also for desktop applications with
    [electron](https://electronjs.org/) e.g. [atom](https://atom.io/)

-   Interpreted, not compiled: errors only happen at run-time

-   `console.log` is your friend.

---

## Hello world

-   Embed JavaScript in a web page

-   Use `script` tag

    ```html
    <html>
    	<script>
    		console.log("Hello World");
    	</script>
    </html>
    ```

---

## What just happened?

Nothing?

Looks the same as this

```html
<html>
	<script>
		8731747850][];[.]
	</script>
</html>
```

Use developer tools to see the console output and error

---

## Hello again

In the browser we can also use the `alert` function

```html
<html>
	<script>
		alert("Hello,World");
	</script>
	<html></html>
</html>
```

Can run in browser as file, not just with http

---

## Importing code

-   Link to external javascript code with `src` attribute

-   Usually placed in `head`

-   Can refer to files in same source

-   Can refer to external files via http

-   Content Delivery Networks (CDN)

    ```html
    <script>
    	src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js">
    </script>
    ```

---

## p5 minimal example

```html
<!DOCTYPE html>
<html>
	<head>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js"></script>
		<script type="application/javascript">
			function setup() {}

			function draw() {
				ellipse(50, 50, 80, 80);
			}
		</script>
	</head>
</html>
```

---

## More interesting p5 example

```html
<!DOCTYPE html>
<html>
	<head>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js"></script>
		<script type="application/javascript">
			function setup() {
				createCanvas(640, 480);
			}

			function draw() {
				background(0, 10);
				if (mouseIsPressed) {
					fill(0);
				} else {
					fill(255);
				}
				ellipse(mouseX, mouseY, 80, 80);
			}
		</script>
	</head>
</html>
```

---

## Using p5

-   p5 provides some (global) functions and variables

-   Details given at <https://p5js.org/reference/>

-   Tutorials at <https://p5js.org/learn/>

-   Nice example at <https://www.openprocessing.org/>
