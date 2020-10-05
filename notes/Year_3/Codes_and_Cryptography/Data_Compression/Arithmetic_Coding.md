---
title: Arithmetic Coding
lecturer: Max
---

## Limitation of Huffman Coding

Consider a source with a heavily imbalanced distribution, for example with a = 0.99 and b = 0.01. Suppose we want to encode the sequence

$$
m = aaaaaaaaaa
$$

Then we would require 10 bits (the length of the message), but if we calculate the probability of that 10 character sequence we get

$$
p(m)=p(a)^{10}\approx 0.904
$$

So if we were to compute the Huffman code based on all $2^10$ possible sequenced, m would be encoded as just one bit.

The main limitation of Huffman is that codewords are only defined for symbols, not messages.

Arithmetic coding offers a way of working at the sequence level, assigning a particular tag to any sequence, without working out all the tags for all sequences of the same length

Suppose $X=\{a_1...a_n\}$ with respective probabilities $p_1,...,p_n$. We want to encode the message $m=a_{i_1}...a_{i_k}$. The output of the arithmetic encoder will be a number in the range [0,1) that uniquely describes m

<Important>

A square bracket includes the end point, but a round one excludes it

</Important>

<Example>

Let $X=\{a_1,a_2,a_3\}$ with probabilities:

-   $p_1=0.4$
-   $p_2=0.5$
-   $p_3=0.1$

The interval $[0,1)$ is subdivided among three symbols as

-   $a_1 = [0,0.4)$
-   $a_2 = [0.4,0.9)$
-   $a_3 = [0.9,1)$

The interval is then recursively subdivided in the same fashion, for example $a_1$ is subdivided into

-   $a_1a_1=[0,0.16)$
-   $a_1a_2=[0.16,0.36)$
-   $a_1a_3=[0.36,0.4)$

The decoding is performed by iteratively performing splits and choosing the interval where the code belongs. For example if we send $c=0.36$ the decoder finds that $c\in[0,0.4)$ so $m_1=a_1$ then $c\in[0.36,0.4)$ so $m_2=a_2$

</Example>

For each symbol processed, the current interval gets smaller and requires more bits to express it, but the final output is a single number for the whole sequence, which is not simply the concatenation of the codewords for its symbols.

<Example>

In this example, we are compressing the string SWISS$\sqcup$MISS

| Character x | Frequency | Probability | Range [L(x),R(x)) |
| ----------- | --------- | ----------- | ----------------- |
| S           | 5         | 0.5         | [0.5,1.0)         |
| W           | 1         | 0.1         | [0.4,0.5)         |
| I           | 2         | 0.2         | [0.2,0.4)         |
| M           | 1         | 0.1         | [0.1,0.2)         |
| $\sqcup$    | 1         | 0.1         | [0.1,0.2)         |

The encoding process begins by defining two variables _Low_ and _High_ and setting them to 0 and 1 respectively. They define an interval $[Low, High)$. As symbols are input and processed, the values _High_ and _Low_ are moved closer together. As the symbol x is being input and processed, _Low_ and _High_ are updated according to

$$
High \rightarrow Low + (High - Low)H(x)
$$

$$
Low \rightarrow Low + (High - Low)L(x)
$$

| x        | L(x) | H(x) | _Low_      | _High_   |
| -------- | ---- | ---- | ---------- | -------- |
|          |      |      | 0          | 1        |
| S        | 0.5  | 1.0  | 0.5        | 1.0      |
| W        | 0.4  | 0.5  | 0.70       | 0.75     |
| I        | 0.2  | 0.4  | 0.71       | 0.72     |
| S        | 0.5  | 1.0  | 0.715      | 0.72     |
| S        | 0.5  | 1.0  | 0.7175     | 0.72     |
| $\sqcup$ | 0.0  | 0.1  | 0.7175     | 0.71775  |
| M        | 0.1  | 0.2  | 0.717525   | 0.717550 |
| I        | 0.2  | 0.4  | 0.717530   | 0.717535 |
| S        | 0.5  | 1.0  | 0.7175325  | 0.717535 |
| S        | 0.5  | 1.0  | 0.71753375 | 0.717535 |

</Example>
