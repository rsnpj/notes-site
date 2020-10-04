---
title: Decoder Error Probability
lecturer: Max
---

# Error v failure

## Probabilistic channels

Recall the source-channel-receiver diagram

Channels are probabilistic in nature. Errors due to thermal noise,
faults, damage...

Impossible to predict how many errors will occur

## Decoder error and failure

If more than t errors occur, two situations could happen

-   The decoder cannot find any codeword at a distance $\leqslant$ t
    from the received vector: Decoder **failure**

-   The decoder finds another (wrong) codeword at distance $\leqslant$ t
    from the received vector: Decoder **error**

Failure: Ask for retransmission. No big deal

Error: the decoder is totally oblivious. Much more problematic.

No failures when using hamming codes - hamming codes are optimal so all
sequences will correspond to a codeword.

## Example of decoder error and failure

Consider the code with the following parity-check matrix:

$$
H = \left( \begin{array} { l l l l l } { 0 } & { 0 } & { 0 } & { 1 } & { 1 } \\ { 0 } & { 1 } & { 1 } & { 0 } & { 0 } \\ { 1 } & { 0 } & { 1 } & { 0 } & { 1 } \end{array} \right)
$$

This is a (5,2,3)-code. Its codewords are:

$$
\{ ( 0,0,0,0,0 ) , ( 0,1,1,1,1 ) , ( 1,1,1,0,0 ) , ( 1,0,0,1,1 ) \}
$$

Suppose we send the all zero codeword C=(0,0,0,0,0)

-   If the vector v=(0,1,0,1,0) is received: failure

-   If the vector v=(1,1,0,0,0) is received: error

# Decoder error probability

In general, the decoder error probability (DEP) depends on:

-   The channel

-   The code we use

-   The transmitted codeword

For a given channel and a given code, it can be determined

## Binary symmetric channel

Instead of trying to figure out exactly how the errors occur, we will
simplify the channel model

Binary symmetric channel (BSC) with crossover probability p:

![image](/img/Year_1/CT/ECC/bsc1.webp)

## How many errors?

Let E be the number of errors under a BSC, if n bits are transmitted. We
have:

$$
P ( E = w ) = \left( \begin{array} { c } { n } \\ { w } \end{array} \right) p ^ { w } ( 1 - p ) ^ { n - w }
$$

If we use a code with error correction capability t, the probability of
not being able to correct the errors is:

$$
\begin{aligned} P ( E > t ) & = 1 - P ( E \leq t ) \\ & = 1 - \sum _ { w = 0 } ^ { t } \left( \begin{array} { l } { n } \\ { w } \end{array} \right) p ^ { w } ( 1 - p ) ^ { n - w } \end{aligned}
$$

## DEP over the BSC

**Theorem:** Let $A_i(c)$ be the number of codewords at distance i from
the transmitted codeword **c**, then the DEP over a BSC with crossover
probability p is

$$
D E P = \sum _ { w = t + 1 } ^ { n } p ^ { w } ( 1 - p ) ^ { n - w } \sum _ { i = d _ { m i n } } ^ { n } A _ { i } ( \mathbf { c } ) \sum _ { s = 0 } ^ { t } \left( \begin{array} { c } { i } \\ { \frac { w - s + i } { 2 } } \end{array} \right) \left( \begin{array} { c } { n - i } \\ { \frac { w + s - i } { 2 } } \end{array} \right)
$$

Where

$$
\left( \begin{array} { l } { a } \\ { b } \end{array} \right) = \left\{ \begin{array} { l l } { \frac { a ! } { b ! ( a - b ) ! } } & { \text { if } 0 \leq b \leq a \text { are integers } } \\ { 0 } & { \text { otherwise } } \end{array} \right.
$$

## Distance distribution of Hamming codes

For any linear code, $A_i(C)$ does not depend on c

For the
$\left( n = 2 ^ { r } - 1 , k = 2 ^ { r } - r - 1,3 \right)$-Hamming
code

$$
A _ { i } = 2 ^ { - r } \left( \begin{array} { c } { 2 ^ { r } - 1 } \\ { i } \end{array} \right) + \left( 1 - 2 ^ { - r } \right) \sum _ { j = 0 } ^ { i } ( - 1 ) ^ { j } \left( \begin{array} { c } { 2 ^ { r - 1 } } \\ { j } \end{array} \right) \left( \begin{array} { c } { 2 ^ { r - 1 } - 1 } \\ { i - j } \end{array} \right)
$$

## DEP of hamming codes

For Hamming codes, you can apply the last two (long) equations.

Alternatively, realise that there are **no failures** when using hamming
codes. This, for a BSC channel with crossover probability p

$$
D E P _ { \text { Hamming } } = P ( E > 1 ) = 1 - ( 1 - p ) ^ { n } - n p ( 1 - p ) ^ { n - 1 }
$$
