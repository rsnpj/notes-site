# Notes Site

This is a site for my university notes, written in MDX

You can find the markdown for all the lectures in the `notes` directory, and all the images in the `public` directory. When adding styles you can use [Tailwind CSS](https://tailwindcss.com/).

## Issues
There are some issues which as far as I can tell are pretty much out of my control. They exist in differences between the rendering of Firefox and Chrome. I don't have an Apple device so I have no idea how things look on Safari.

* Wide tables cause extra width on Chrome. This is a strange bug that doesn't appear on Firefox. Despite having overflow auto on the tables, there is whitespace where the table would otherwise be. 

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
