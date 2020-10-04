---
title: Decoding Hamming Codes
lecturer: Max
---

# Decoding

Encoding is easy: use the generator matrix G

Decoder problem:

-   Input: a vector $v\in F^n$

-   Output: The unique codeword c at Hamming distance $\leqslant 1$ from
    v

Remarkable property of the Hamming code: a vector $v\in F^n$ either is a
codeword, or is at Hamming distance 1 from a unique codeword

## Example

The source and destination use the (7,4,3)-Hamming code

The source wants to transmit the four bit message

$$
m=(0,0,1,1)
$$

The source encodes the message

$$
c=mG=(1,0,0,0,0,1,1)
$$

During transmission on the channel, the sixth bit is flipped, the receiver then obtains

$$
v=(1,0,0,0,0,0,1)
$$

$$
\begin{aligned} \mathbf { m } = ( 0,0,1,1 ) & \stackrel { \text { encoding } } { \longrightarrow } \mathbf { c } = ( 1,0,0,0,0,1,1 ) \\ & \stackrel { \text { channel } } { \longrightarrow } \mathbf { v } = ( 1,0,0,0,0,0,1 ) \end{aligned}
$$

# Decoding

## Brute force

First method: Brute force

Denote the vectors of $F^k$ as:

$$
\mathbf { m } _ { 0 } = ( 0,0 , \ldots , 0 ) , \mathbf { m } _ { 1 } = ( 0,0 , \ldots , 1 ) , \ldots , \mathbf { m } _ { 2 ^ { k } - 1 } = ( 1,1 , \ldots , 1 )
$$

**Description**: Compute the Hamming distance between the received
vector v and the ith codeword $m_iG$ until it is no more than 1.

**Remark**: For the brute force algorithm, we need G. It will be given
in your practicals.

### Example

For the (7,4,3)-Hamming code. Receive $v=(1,0,0,0,0,0,1)$

$$
\begin{array} { l } { \mathbf { m } _ { 0 } \mathbf { G } = ( 0,0,0,0,0,0,0 ) : d _ { H } \left( \mathbf { m } _ { 0 } \mathbf { G } , \mathbf { v } \right) = 2 } \\ { \mathbf { m } _ { 1 } \mathbf { G } = ( 1,1,0,1,0,0,1 ) : d _ { H } \left( \mathbf { m } _ { 1 } \mathbf { G } , \mathbf { v } \right) = 2 } \\ { \mathbf { m } _ { 2 } \mathbf { G } = ( 0,1,0,1,0,1,0 ) : d _ { H } \left( \mathbf { m } _ { 2 } \mathbf { G } , \mathbf { v } \right) = 5 } \\ { \mathbf { m } _ { 3 } \mathbf { G } = ( 1,0,0,0,0,1,1 ) : d _ { H } \left( \mathbf { m } _ { 3 } \mathbf { G } , \mathbf { v } \right) = 1 } \end{array}
$$

Then the codeword is $c=m_3G=(1,0,0,0,0,1,1)$

## Local Search

We know that the codeword c must be either v or of the form v with one
bit flipped.

For $1\leqslant i\leqslant n$ define $e_i=(0,...,0,1,0,...,0)$ were 1 is
in the position i, then either c=v or $c=v+e_i$ for some i

**Description:** Check whether v is a codeword. If not, then flip each
bit until we obtain a codeword.

This decoding algorithm does not require you to compute G

To check if a vector is a codeword, multiply by $H^T$, if the result is
zero, then it is a codeword

### Example

For the (7,4,3) - Hamming code. Receive v=(1,0,0,0,0,0,1)

$$
\begin{aligned} \mathbf { v H } ^ { \top } & = ( 1,1,0 ) \\ \left( \mathbf { v } + \mathbf { e } _ { 1 } \right) \mathbf { H } ^ { \top } & = ( 1,1,1 ) \\ \left( \mathbf { v } + \mathbf { e } _ { 2 } \right) \mathbf { H } ^ { \top } & = ( 1,0,0 ) \\ \left( \mathbf { v } + \mathbf { e } _ { 3 } \right) \mathbf { H } ^ { \top } & = ( 1,0,1 ) \\ \left( \mathbf { v } + \mathbf { e } _ { 4 } \right) \mathbf { H } ^ { \top } & = ( 0,1,0 ) \\ \left( \mathbf { v } + \mathbf { e } _ { 5 } \right) \mathbf { H } ^ { \top } & = ( 0,1,1 ) \\ \left( \mathbf { v } + \mathbf { e } _ { 6 } \right) \mathbf { H } ^ { \top } & = ( 0,0,0 ) \end{aligned}
$$

Then the codeword is $c=v+e_6=(1,0,0,0,0,1,1)$

## Syndrome - The best one to use and implement

The received word v is either a codeword or of the form $c+e_i$ for some i.

If v is a codeword, we have $vH^T=0$. Otherwise

$$
\begin{aligned} \mathbf { v H } ^ { \top } & = \left( \mathbf { c } + \mathbf { e } _ { i } \right) \mathbf { H } ^ { \top } \\ & = \mathbf { c H } ^ { \top } + \mathbf { e } _ { i } \mathbf { H } ^ { \top } \\ & = \mathbf { e } _ { i } \mathbf { H } ^ { \top } \\ & = i ^ { t h } \text { column of } \mathbf { H } \end{aligned}
$$

**Description:** Compute the **syndrome** $vH^T$ to obtain i, and hence
the correct codeword $v+e_i$

### Example

For the $(7,4,3)$-Hamming code. Receive v=(1,0,0,0,0,0,1)

Compute

$$
vH^T=(1,1,0)
$$

Then $i=1\times 4+ 1\times 2+0\times1=6$

The codeword is $c=v+e_6$=(1,0,0,0,0,1,1)

### Example

Case 1: $vH^T=0\Rightarrow v=c$

Case 2 $vH^T\neq 0\Rightarrow v=c+e_i$

$vH^T=(c+e_i)H^T=cH^T(0)+e_iH^T=e_iH^T=$ ith column of H=The number i in
binary

$vH^T$ gives 6 in binary, so the 6th bit is an error

# Recovering the original message

Once we get the codeword c, we still need to get the original message
m.

This is very easy with our choice of generator matrix: remove the
positions $1,2,4,...,2^{r-1}$ from c.

E.g.: C=(1,0,**0**,0,**0,1,1**) means that the original message is
$m=(0,0,1,1)$
