# Notes Site

This is a site for my university notes, written in MDX

You can find the markdown for all the lectures in the `notes` directory, and all the images in the `public` directory. When adding styles you can use [Tailwind CSS](https://tailwindcss.com/).

## Issues
There are some issues which as far as I can tell are pretty much out of my control. They exist in differences between the rendering of Firefox and Chrome. I don't have an Apple device so I have no idea how things look on Safari.

* Extra space at the end of code blocks on Firefox. This is resolved in the pull request in Tailwind CSS Typography [here](https://github.com/tailwindlabs/tailwindcss-typography/pull/41), just waiting on that

* Wide tables cause extra width on Chrome. This is a strange bug that doesn't appear on Firefox. Despite having overflow auto on the tables, there is whitespace where the table should be. 
