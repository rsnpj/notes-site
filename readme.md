# Notes Site

This is a site for my university notes, written in MDX

You can find the markdown for all the lectures in the `notes` directory, and all the images in the `public` directory. When adding styles you can use [Tailwind CSS](https://tailwindcss.com/).

## Issues
There are some issues which as far as I can tell are pretty much out of my control. They exist in differences between the rendering of Firefox and Chrome. I don't have an Apple device so I have no idea how things look on Safari.

* Extra space at the end of code blocks on Firefox. This is resolved in the pull request in Tailwind CSS Typography [here](https://github.com/tailwindlabs/tailwindcss-typography/pull/41), just waiting on that

* Wide tables cause extra width on Chrome. This is a strange bug that doesn't appear on Firefox. Despite having overflow auto on the tables, there is whitespace where the table would otherwise be. 

* On Firefox mobile, when scrolling up, there is a tiny gap between the top of the navbar and the top of the viewport you can see the text scrolling through. I've seen this behaviour on other sites too, it's just a Firefox problem

## Workarounds

In the React components, newline characters need to be inserted manually until I work out how to fix this, so follow the example below

```js
<Definition name="Sequential Consistency">
{`- The interleaved sequence of operations meets the specification of a (single) correct copy of the contents  \n  
- The order of operations in the interleaving is consistent with the program order in which each individual process executed them`}
</Definition>
```
In addition, if you are using LaTeX, chances are you're going to be using backslashes, for example `\times`, sadly the backslashes get processed as escape characters, so you need to add `String.raw`, like this

```js
<Definition name="Separating Hyperplane">
{String.raw`
Let $S=\{(x_i,y_i)\}^m_{i=1} \in \mathbb{R}^d\times \{-1,+1\}$ be a training set. \n
By a hyperplane we mean a set of Hilbert space $H_{w,b}=\{x\in \mathbb{R}^d:w^Tx+b=0\}$ parametrised by $w\in \mathbb{R}^d$ and $b\in \mathbb{R}$. \n
We assume that the data are linearly separable, that is, there exist $w\in \mathbb{R}^d$ and $b\in \mathbb{R}$ such that $y_i(w^Tx_i+b)>0,i=1,..,m$. \n
In which case we call $H_{w,b}$ a separating hyperplane.
`}
</Definition>
```

 `\n`, gets fixed inside the component, but requires a space after the `\n` so that it doesn't also match things like `\not`. Not the most elegant solution I admit, I'll probably come up with a better way in the future.

## Conversion

When converting from LaTeX notes, the best tool to use is pandoc, passing the `latex+raw_tex` flag under `-f` will leave in anything that can't be converted, which is useful for custom environments. Passing the `markdown-smart` flag under `-t` will stop quotes being escaped etc, reducing the work to tidy things.

### webp
If you want to convert a folder full of PNGs to WEBP, the following command is useful

```shell
parallel -eta cwebp -q 80 {} -o {.}.webp ::: *.png && rm *.png  
```

## Algolia Docsearch

This site uses [Algolia Docsearch](https://docsearch.algolia.com/) for searching. To index the site, run the following command:

```shell
podman run -it --env-file=.env -e "CONFIG=$(cat config.json | jq -r tostring)" algolia/docsearch-scraper
```

Note `podman` is being used here as I run Fedora and so it is recommended to use this instead of Docker when using cgroup v2. On other machines simply replace `podman` with `docker` and it should just work.

This is also pulling in two files, `.env` and `config.json`, you can read about the full details of these [in the DocSearch documentation](https://docsearch.algolia.com/docs/run-your-own).

The short version is that `.env` should look as follows:

```
APPLICATION_ID=YOUR_APP_ID
API_KEY=YOUR_API_KEY
```

and `config.json` looks like this for my site

```json
{
  "index_name": "csnotes",
  "sitemap_urls": ["http://csnotes.me/sitemap.xml"],
  "stop_urls": [],
  "selectors": {
    "lvl0": ".prose h1",
    "lvl1": ".prose h2",
    "lvl2": ".prose h3",
    "lvl3": ".prose h4",
    "lvl4": ".prose h5",
    "lvl5": ".prose h6",
    "text": ".prose p, li"
  }
}
```

All my content is inside a `.prose` class, hence the `.prose` for each level and given there isn't a link tree to traverse the sitemap is used.