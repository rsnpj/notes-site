---
title: Universal Hashing
lecturer: Tom
---

# k-universality

Let U be a universe with $|U|\geqslant n$, let $V=\{0,1,...,n-1\}$ (hash table)

Family of hash functions H from U to V is k-universal if $\forall x_1,...,x_k\in U$, and for a h chosen uniformly at random from H

$$
p(h(x_1)=\cdots = h(x_k))\leqslant \dfrac{1}{n^{k-1}}
$$

The probability here is just saying the probability that they all collide

For example with k=2:

Family of hash functions H from U to V is 2-universal if $\forall x_1,x_2 \in U$, and for a h chosen randomly from H,

$$
p(h(x_1)=h(x_2))\leqslant \dfrac{1}{n}
$$

## Strong k-universality

Here we define the same universe U.

A family of hash functions H from U to V is strongly k-universal if $\forall x_1,...,x_k\in U$, for any values $y_1,...,y_k\in V$ and for a h chosen uniformly at random from H

$$
p(h(x_1)=y_1,...,h(x_k)=y_k)\leqslant \dfrac{1}{n^k}
$$

With strong universality I can ask questions about this going here and that going there, whereas with universality only about collisions somewhere.

> Note that for both k-universality and strong k-universality, the probability is actually in $\mathcal{O}$, so if we have a constant on the top, we don't need to worry

## Comparison with completely random functions

2-Universal functions aren't as good as completely random functions. We must be aware of the problems:

-   Can in proofs only use 2 values rather than all of them
-   Know nothing at all about collisions between three when using 2-universal family

# Balls into bins

Balls into bins process (randomly throwing n balls into n bins, asking for max number of balls in any bin)

-   Usually balls choices completely random and independent
-   What if locations chosen from 2-universal family of hash functions

We can show that the maximum number of balls in any bin is $\Theta(\dfrac{\log n}{\log\log n})$
