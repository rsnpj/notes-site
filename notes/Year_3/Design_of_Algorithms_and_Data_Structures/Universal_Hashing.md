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

We can show that the maximum number of balls in any bin is $\Theta(\dfrac{\log n}{\log\log n})$ with high probability.

We will show a weaker result $\mathcal{O}(\log n)$ with probability $1-\dfrac{1}{n^c}$ for any constant $c>0$

Use variant of **Chernoff Inequality**:

-   Choose an arbitrary bin
-   Let $X_1,...,X_n$ be independent 0/1 random variables with $X_i=1$ iff the ith ball goes into out bin

$$
E[X_i]=0\cdot p(X_i=0)+1\cdot p(X_i=1)=p(X_i=1)=1/n
$$

-   Let $X=\sum_{i=1}^nX_i$ represent the number of balls in our bin

$$
E[X]=E[\sum X_i]=\sum E[X_i]=n\cdot \dfrac{1}{n}=1
$$

-   Chernoff variant: for $\delta\geqslant e^2-1$,
    $$
      p(X\geqslant (1+\delta)E[X])\geqslant e^{-(\delta+2)E[X]}
    $$
-   We'll choose $\delta=d\ln(n)-2$
-   Then:

$$
p(X\geqslant d\ln(n)-1)\leqslant e^{-d\ln(n)}=n^-d
$$

-   Only one bin, but with union bound:

$$
p(\exist \text{ bin with }\geqslant d\ln(n)-1 \text{ balls})\leqslant n\cdot n^{-d}=n^{-(d-1)}
$$

-   Choose $d=c+1 \Rightarrow$ with probability $\geqslant 1-1/n^c$, no bin has more than $d\ln(n)-1=\Theta(\log n)$ balls

Can't use previous argument as Chernoff's requires complete independence

There are variants of Chernoff's that allow limited dependence, but often they're not good enough

-   Consider m items $x_1,...,x_m$
-   Let $X_{ij}=1$ iff $x_i,x_j$ collide
-   Let $X=\sum X_{ij}$ be the total number of collisions
    $$
    E[X]=E[\Sigma X_{ij}]=\sum E[X_{ij}]
    $$
    $$
    E[X_{ij}]=p(h(x_i)=h(x_j))\leqslant 1/n \Rightarrow E[X] \leqslant {m \choose 2}\cdot \dfrac{1}{n}\leqslant \dfrac{m^2}{2}\cdot \dfrac{1}{n}
    $$
-   Moving on from the last section (after the $\Rightarrow$)
    -   Markov's: $P(x\geqslant k)\leqslant \frac{E[x]}{k}$ for $k>0$ and positive X or $p(X\geqslant \ell \cdot E[X])\leqslant \frac{1}{\ell}$ with $k=\ell\cdot E[X]$
    -   Letting $\ell=2$ gives us $p(X\geqslant \frac{m^2}{n})\leqslant \frac{1}{2}$
-   Suppose the max load is Y, then the number of collisions must be at least ${Y \choose 2}$ - must all collide pairwise

$$
p\Bigg({Y \choose 2}\geqslant \dfrac{m^2}{n}\Bigg)\leqslant p\Bigg(X\geqslant \dfrac{m^2}{n}\Bigg)\leqslant\dfrac{1}{2}
$$

$$
{Y\choose 2}=\dfrac{Y(Y-1)}{2}\approx \dfrac{Y^2}{2}
$$

$$
p\Bigg({Y\choose 2}\geqslant \dfrac{m^2}{n}\Bigg)\approx p\Bigg(\dfrac{Y^2}{2}\geqslant \dfrac{m^2}{n}\Bigg)=p\Bigg(Y^2\geqslant 2\dfrac{m^2}{n}\Bigg)=p\Bigg(Y\geqslant\sqrt{2\dfrac{m^2}{n}}\Bigg)=p(Y\geqslant m\cdot \sqrt{2/n})
$$

-   with $m=n$

$$
p(Y\geqslant n \cdot \sqrt{2/n})=p(y\geqslant \sqrt{2n})\leqslant 1/2
$$

# Proof

How would you prove or disprove the claim of a k-universal family of hash functions

Key: for any pair of distinct $x_1,x_2\in U, p(h(x_1)=h(x_2))\leqslant \frac{1}{n}$ for a function h drawn uniformly at random from H

So for this kind of proof/disproof, choosing h is the random experiment

We must show that there are at most/least this and that many functions in H what make arbitrary pair $x_1,x_2$ crash

**Definition**

-   Let $U=\{0,...,m-1\}, |U|=m$ (Universe)
-   Let $V=\{0,...,n-1\}, |V|=n$ (Hash Table)
-   Let $m\geqslant n$. Choose prime $p\geqslant m$ and

$$
\begin{aligned}
h_{a, b}(x) &=((a x+b) \bmod p) \bmod n \\
H &=\left\{h_{a, b} \mid 1 \leq a \leq p-1,0 \leq b \leq p-1\right\}
\end{aligned}
$$

We claim that this family is **2-universal**

For proof we need to

-   Pick arbitrary $x_1,x_2$ where $x_1\neq x_2$
-   Count functions in H for which these $x_1,x_2\in U$ collide in the table
-   Divide by the size of H
-   Looking for the result to be at most $1/n$

## Proof 1

**Strategy**: First consider collisions just the $\bmod p$, and then $\bmod n$

**Claim**: $\forall x_1\neq x_2 \in U, ax_1+b \neq ax_2+b (\bmod p)$ - any pair will remain distinct after stage 1

This is because

$$
ax_1+b=ax_2+b(\bmod p)
$$

implies

$$
a(x_1-x_2)=0 \bmod p
$$

and here both a and $x_1-x_2$ are non zero mod p

-   $1\leqslant a \leqslant p-1$
-   $0\leqslant x_1,x_2 < m \leqslant p$
-   $x_1 \neq x_2$

as per the definitions

## Proof 2

So now we know that $\forall x_1\neq x_2 \in U, ax_1+b \neq ax_2+b (\mod p)$

$\Rightarrow$ distinct keys definitely won't collide after mod p. We want to count those functions where they don't collide after the mod p, but **do** after the mod n

**Claim**: for given $x_1\neq x_2$, $\forall u,v$ with $u\neq v$ and $0\leqslant u,v\leqslant p-1$ there is exactly one pair a,b with

$$
\begin{gathered}
    ax_1+b=u\bmod p\\
    ax_2+b=v\bmod p
\end{gathered}
$$

and this means that there is exactly one function in H

Strategy: instead of counting functions, which is the same as counting pairs a,b, we can count pairs u,v

## Proof 3

Starting with

$$
\begin{gathered}
    ax_1+b=u\bmod p\\
    ax_2+b=v\bmod p
\end{gathered}
$$

solve this for a and b:

$$
\begin{aligned}
u-a x_{1} &=v-a x_{2}(\bmod p) \\
a x_{2}-a x_{1} &=v-u(\bmod p) \\
a\left(x_{2}-x_{1}\right) &=v-u(\bmod p) \\
a &=\frac{v-u}{x_{2}-x_{1}}(\bmod p) \\
b &=u-a x_{1}=u-\frac{v-u}{x_{2}-x_{1}} x_{1}(\bmod p)
\end{aligned}
$$

It follows that given $u\neq v$ there is exactly one hash function in H for which

$$
a x_{1}+b=u(\bmod p) \quad \text { and } \quad a x_{2}+b=v(\bmod p)
$$

## Proof 4

If we want to bound the probability that $h_{a,b}(x_1)=h_{a,b}(x_2)$ when $h_{a,b}$ is chosen uniformly at random from H, it is sufficient to count number of pairs $u,v,0\leqslant u,v \leqslant p-1$ for which $u\neq v$ but $u=v \mod n$

For each choice of $u$ there are at most $\lceil p/n \rceil -1$ possible appropriate values for v

<Example>

$n=3, p=5 ( \lceil p/n \rceil-1=1\ )$

For all $u\in\{0,1,2,3,4\}$ how many $v\neq u$ s.t. $u=v(\bmod 3)$

| u          | 0   | 1   | 2   | 3   | 4   |
| ---------- | --- | --- | --- | --- | --- |
| $u\bmod 3$ | 0   | 1   | 2   | 0   | 1   |
| Possible v | 3   | 4   | -   | 0   | 1   |

</Example>

In total therefore at most $p\cdot (\lceil p/n \rceil -1)\leqslant p(n-1)/n$ many

Each pair corresponds to a total of $p(p-1)$ hash functions, so

$$
p\left(h_{a, b}\left(x_{1}\right)=h_{a, b}\left(x_{2}\right)\right) \leq \frac{p(p-1) / n}{p(p-1)}=\frac{1}{n}
$$

## Disproof

Let p be a prime and n be an integer $p\geqslant n$. Consider

$$
\begin{aligned}
&H=\left\{h_{a} \mid 1 \leq a \leq p-1\right\}\text { where }\\
&h_{a}:\{0, \ldots, p-1\} \rightarrow\{0, \ldots, n-1\}: x \mapsto(a x \bmod p) \bmod n
\end{aligned}
$$

**Claim**: This H is not 2-universal

$$
h_{a}:\{0, \ldots, p-1\} \rightarrow\{0, \ldots, n-1\}: x \mapsto(a x \bmod p) \bmod n
$$

Need to find "sufficiently many" $h_a\in H$ and $x_1\neq x_2$ that collide too often under those $h_a$

-   Let $p=n+2$
-   Consider $a=1$ and $a=n+1$ and $x_1=1$ and $x_2=n+1$
    -   $a=1$
        -   $h_a(x_1)=h_a(1)=(1\cdot 1 \bmod p) \bmod n = 1$
        -   $h_a(x_2)=h_a(n+1)=(1+1\bmod p)\bmod n =1$
        -   **Collision**
    -   $a=n+1$
        -   $h_a(x_1)=h_a(1)=(n+1\bmod p)\bmod n = 1$
        -   $h_a(x_2)=h_a(n+1)=((n+1)^2\bmod p)\bmod n = (n^2+2n + 1\bmod p)\bmod n=(n(n+2)+1\bmod p)\bmod n=1$
        -   **Collision**

# Perfect hashing

-   Efficient data structure for static dictionaries
-   Items permanently stored in a table
-   Once stored, table used only for search operations

Suppose set S of m items is hashed into a table of n bins, using hash function from 2-universal family with chaining

Number of operations for looking up an items x is proportional to the number of items in x's bucket

## Observation 1

Assume m elements are hashed into an n-bucket chained hashing table by using a hash function h chosen uniformly from a 2-universal family. For an arbitrary element x, let X be the number of items in a bucket $h(x)$. Then

$$
E[X] \leq\left\{\begin{array}{ll}
m / n & \text { if } x \notin S \\
1+(m-1) / n & \text { if } x \in S
\end{array}\right.
$$

## Proof

Let $X_i=1$ if ith element of S is in the same bucket as x, and 0 otherwise

h is chosen from a family of 2-universal hash functions $\Rightarrow p(X_i=1)\leqslant 1/n$

First case $x\notin S$ follows from

$$
E[X]=E\left[\sum_{i=1}^{m} X_{i}\right]=\sum_{i=1}^{m} E\left[X_{i}\right] \leq \frac{m}{n}
$$

If $x\in S$, we can assume that it's the first element of S. Then $X_1=1$ and $p(X_i=1)\leqslant 1/n$ when $2\leqslant i \leqslant m$, and

$$
E[X]=E\left[\sum_{i=1}^{m} X_{i}\right]=1+\sum_{i=2}^{m} E\left[X_{i}\right] \leq 1+\frac{m-1}{n}
$$

Observation shows that "average performance" when using function from 2-universal family is good

When e.g. m=n then the average number of items, other than x, that need to be inspected is 1

This however doesn't give us a bound on worst case for lookup

This motivates perfect hashing: given set S, we'd like to construct a hash table that gives excellent worst case performance.

## Lemma

If $h\in H$ is chosen uniformly at random from 2-universal family, mapping universe U to $\{0,...,n-1}$, then, for any set $S\subset U$ of size m, the probability of h being perfect is at least 1/2 when $n\geqslant m^2$

## Proof

Let $s_1,...,s_m$ be the m items of S. Let $X_{ij}$ be 1 if $h(s_i)=h(s_j)$ and 0 otherwise. As we saw earlier in the proof of balls-into-bins, expected number of collisions when using 2-universal hash function is

$$
E[X]=E\left[\sum_{i, j} X_{i j}\right]=\sum E\left[X_{i j}\right] \leq\left(\begin{array}{c}
m \\
2
\end{array}\right) \frac{1}{n}<\frac{m^{2}}{2} \cdot \frac{1}{n}
$$

Markov's inequality then gives $p(X\geqslant m^2/n)\leqslant p(X\geqslant 2E[X])\leqslant 1/2$

When now $n\geqslant m^2$ we find $X<1$ with probability at least 1/2

-   Randomly chosen hash function is perfect with probability at least 1/2
-   In expectation 2 attempts until we find one

## Waste

$\Omega(m^2)$ buckets for storing m items is very wasteful

Main idea: use a two level scheme

-   First hash set into table with m buckets using 2-universal family
-   Some of these buckets will have collisions
-   For each such bucket, provide a second hash function from appropriate 2-universal family, and an entirely separate hash table
-   If bucket has $k>1$ items in it, then we use $k^2$ buckets in the secondary table
-   Have already shown in earlier lemma that with $k^2$ bins we can find a hash function from a 2-universal family that will give no collisions

<Theorem>

The two-level approach gives a perfect hashing scheme for m items using total of $\mathcal{O}(m)$ buckets

</Theorem>

As shown in the earlier lemma, the number of collisions X in the first stage satisfies

$$
(X\geqslant m^2/n)\leqslant p(X\geqslant 2E[X])\leqslant 1/2
$$

When $n=m$, this implies that the probability of having more than m collisions is at most 1/2

Using probabilistic method, there exists a choice of hash function from the 2-universal family in the first stage that gives at most m collisions

Let $c_i$ be the number of items in the ith bucket. Then there are ${c_i \choose 2}$ collisions between items in the ith bin, so

$$
\sum_{i=1}^m{c_i \choose 2}\leqslant m
$$

For each bin with $c_i>1$ items, we find second hash function that gives no collisions, using space $cc_i^2$

The total number of bins is then bounded by

$$
m+\sum_{i=1}^{m} c_{i}^{2} \leq m+2 \sum_{i=1}^{m}\left(\begin{array}{c}
c_{i} \\
2
\end{array}\right)+\sum_{i=1}^{m} c_{i} \leq m+2 m+m=4 m
$$
