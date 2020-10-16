---
title: Bloom Filters
lecturer: Tom
---

This is a variant on a dictionary data structure (is **not** a dictionary) that allows for very efficient **set membership queries**, using very little space

Doesn't actually store any elements, used rather for bookkeeping

-   Can "make elements known to it"
-   Standard Bloom filter: no notion of deletions
-   Answers to look up queries just yes/no

Probabilistic structure so must accept that certain things can and will go wrong

Suppose we have a set $S=\{s_1,...,s_m\}$ with $s_i$ from a very large universe U

For membership structure, could just have a bit array of length $|U|$

This is very wasteful when $|U|\gg m$ so we use hashing instead

A bloom filter is:

-   An array of $n$ bits, $A[0],...,A[n-1]$ with $n\approx m \ll |U|$
-   Uses $k$ hash functions $h_1,...,h_k$ with range $\{0,...,n-1\}$

    Assumption: $h_i$ map each element from a universe to a random number uniformly over a range

And it works like so:

-   For each element $s\in S$, for $1\leqslant i\leqslant k$ the bits $A[h_i(s)]$ are set to 1
-   To check if an element $x$ is in $S$ we check whether all array locations $A[h_i(x)]$ are set to 1 for $1\leqslant i \leqslant k$

> It isn't perfectly clear here, but $A[h_i(s)]$ means for all the hash functions, rather than just one

# Problem

The problem with Bloom filters is that it can give false positives:

-   If not all bits $A[h_i(x)]$ are set then clearly $x\not\in S$, and the answer "no" is correct
-   If however all bits $A[h_i(x)]$ are set then
    -   Either $x\in S$ and the answer yes is correct or
    -   $x\not\in S$ and the bits are set by some combination of other elements and the answer "yes" is incorrect

So we want to find the probability of a false positive:

-   Recall that table size is $n$, we have $m$ elements and $k$ hash functions
-   After all m elements of S are hashes into Bloom filter, the probability that a specific bit is still zero is

$$
\Bigg(1-\dfrac{1}{n}\Bigg)^{km}\approx e^{-km/n}
$$

-   -   1/n to be hit by one function for one element
    -   1-1/n to not be hit by one function for one element
    -   m many elements, each with k functions
    -   the "$\approx$" comes from $(1-1/n)^n\approx 1/e$
-   Let $p_0\approx e^{-km/n}$, then the probability of a false positive is

$$
\Bigg(1-\Big(1-\dfrac{1}{n}\Big)^{km}\Bigg)^k\approx \Big(1-e^{-km/n}\Big)^k=(1-p_0)^k
$$

For convenience we'll use

-   $p_0$ as probability for a bit in BF(Bloom Filter) to be 0
-   $p_f=(1-e^{-km/n})^k=(1-p_0)^k$ as probability of false positive

We're given m and n, and wish to optimise the number of hash functions k so as to minimise false positive probability $p_f$

-   Using more hash functions gives us more chances to find a 0-bit for an element $x\not\in S$, but
-   Using fewer hash functions increases fraction $p_0$ of 0-bits in array

# Wrap up

-   Recall that $p_f=(1-e^{-km/n})^k=(1-p_0)^k$
-   Optimal number $k$ of hash functions that minimises $p_f$ as a function of k is found using derivative
-   Let $g=\ln p_f = k\ln(1-e^{-km/n})$, so that $p_f=e^g$
-   Not minimising $f_p$ is equivalent to minimising g wrt k

$$
g^{\prime}=\frac{d g}{d k}=\ln \left(1-e^{-k m / n}\right)+\frac{k m}{n} \cdot \frac{e^{-k m / n}}{1-e^{-k m / n}}
$$

-   Derivative is 0 when $k=(\ln 2)\cdot \dfrac{n}{m}$ and this is a global minimum
-   For this value we have $f_p\approx0.6185^{n/m}$
-   Recall that $m=|S|$, and n is the size of the bit array
-   For $n=m$ we have $f_p\approx 0.6185$, which isn't great
-   As we increase the x for $m=xn$ then the value reduces
-   Falls exponentially in $n/m$
-   Constant when $n=\Theta(m)$
-   Inversely polynomial $(1/m^c)$ when $n/m=\Omega(\log m)$ or $n=\Omega(m\log m)$
