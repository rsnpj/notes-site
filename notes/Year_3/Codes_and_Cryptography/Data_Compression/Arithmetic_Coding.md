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

So if we were to compute the Huffman code based on all $2^{10}$ possible sequenced, m would be encoded as just one bit.

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

The decoding is performed by iteratively performing splits and choosing the interval where the code belongs. For example if we send $c=0.36$ the decoder finds that $c\in[0,0.4)$ so $m_1=a_1$ then $c\in[0.36,0.4)$ so $m_2=a_3$

</Example>

For each symbol processed, the current interval gets smaller and requires more bits to express it, but the final output is a single number for the whole sequence, which is not simply the concatenation of the codewords for its symbols.

<Example>

In this example, we are compressing the string SWISS␣MISS

| Character x | Frequency | Probability | Range [L(x),H(x)) |
| ----------- | --------- | ----------- | ----------------- |
| S           | 5         | 0.5         | [0.5,1.0)         |
| W           | 1         | 0.1         | [0.4,0.5)         |
| I           | 2         | 0.2         | [0.2,0.4)         |
| M           | 1         | 0.1         | [0.1,0.2)         |
| ␣           | 1         | 0.1         | [0.1,0.2)         |

The encoding process begins by defining two variables _Low_ and _High_ and setting them to 0 and 1 respectively. They define an interval $[Low, High)$. As symbols are input and processed, the values _High_ and _Low_ are moved closer together. As the symbol x is being input and processed, _Low_ and _High_ are updated according to

$$
High \rightarrow Low + (High - Low)H(x)
$$

$$
Low \rightarrow Low + (High - Low)L(x)
$$

Note here high and low are updated simultaneously, so the new _High_ value doesn't get used in the calculation of the new _Low_ value

| x   | L(x) | H(x) | _Low_      | _High_   |
| --- | ---- | ---- | ---------- | -------- |
|     |      |      | 0          | 1        |
| S   | 0.5  | 1.0  | 0.5        | 1.0      |
| W   | 0.4  | 0.5  | 0.70       | 0.75     |
| I   | 0.2  | 0.4  | 0.71       | 0.72     |
| S   | 0.5  | 1.0  | 0.715      | 0.72     |
| S   | 0.5  | 1.0  | 0.7175     | 0.72     |
| ␣   | 0.0  | 0.1  | 0.7175     | 0.71775  |
| M   | 0.1  | 0.2  | 0.717525   | 0.717550 |
| I   | 0.2  | 0.4  | 0.717530   | 0.717535 |
| S   | 0.5  | 1.0  | 0.7175325  | 0.717535 |
| S   | 0.5  | 1.0  | 0.71753375 | 0.717535 |

The final code is the final value of _Low_, 0.71753375 of which only the eight digits 71753375 need to be written. Any value in the [low, high) interval can be sent and it would still work though. The frequency values also need to be sent in order to reconstruct the high and low values.

The decoder first inputs the symbols and their range, and reconstructs the table of frequencies and probabilities. It then inputs the rest of the code. The first digit is 7, so then number is $0.7\in [0.5,1)$. This means that the first symbol is S. It carries on, updating the code number to remove the effect of the character it just input, so after the character $x$, it performs the update

$$
C\leftarrow \dfrac{C-L(x)}{H(x)-L(x)}
$$

The decoder carries on until $C=0$, in which case there should be a way to make it stop

| x        | L(x) | H(x) | C          |
| -------- | ---- | ---- | ---------- |
|          |      |      | 0.71753375 |
| S        | 0.5  | 1.0  | 0.4350675  |
| W        | 0.4  | 0.5  | 0.350675   |
| I        | 0.2  | 0.4  | 0.753375   |
| S        | 0.5  | 1.0  | 0.50675    |
| S        | 0.5  | 1.0  | 0.0135     |
| $\sqcup$ | 0.0  | 0.1  | 0.135      |
| M        | 0.1  | 0.2  | 0.35       |
| I        | 0.2  | 0.4  | 0.75       |
| S        | 0.5  | 1.0  | 0.5        |
| S        | 0.5  | 1.0  | 0          |

</Example>

# Implementation details

## Using integers

The encoding as described before is impractical since it uses numbers of unlimited precision for _Low_ and _High_, similarly _C_ can be a very long integer.

Any practical implementation of arithmetic encoding should only use integers and should not be very long (four digits for example).

The main idea is that once the leftmost digits of _Low_ and _High_ are equal, they continue to be equal. So we should "forget about" the leftmost digit once the encoder has output it. This is done by shifting the digits.

Using four digits, we first initialise $L^*=000$ and $H^*=9999$ and proceed as follows

<Example>

| x        | Low   | High  | Digit | $L^*$ | $H^*$ |
| -------- | ----- | ----- | ----- | ----- | ----- |
|          | 0     | 1     |       | 0000  | 9999  |
| S        | 0.5   | 1     |       | 5000  | 9999  |
| W        | 0.7   | 0.75  | 7     | 0000  | 4999  |
| I        | 0.1   | 0.2   | 1     | 0000  | 9999  |
| S        | 0.5   | 1.0   |       | 5000  | 9999  |
| S        | 0.75  | 1.0   |       | 7500  | 9999  |
| $\sqcup$ | 0.75  | 0.775 | 7     | 5000  | 7499  |
| M        | 0.525 | 0.55  | 5     | 2500  | 4999  |
| I        | 0.3   | 0.35  | 3     | 0000  | 4999  |
| S        | 0.25  | 0.5   |       | 2500  | 4999  |
| S        | 0.375 | 0.5   | 3750  |       | 4999  |

</Example>

In practice we should be using enough digits to ensure that enough information is conveyed by $H^*$ and $L^*$ at all times. Another potential issue is that of underflow, when for instance _High_ decreases too fast and loses its significant digits. Scaling is then performed to avoid this situation.

## Using binary strings

Firstly note that we can choose to output any number in the range $[Low,High)$ and not necessarily _Low_ per se. A certain choice of value may have fewer digits in its binary expression and so require less space than _Low_.

It can be shown that, if one uses the number $(Low+High)/2$, then one only needs to transmit the first

$$
l={\huge\lceil}\log \dfrac{1}{p(m)}{\huge\rceil}+1
$$

bits of that number, where $p(m)$ is the probability of the input sequence m
