---
title: Basic Counting and Binomial Coefficients
lecturer: Andrei
---

# Binomial Coefficients

## Definition

The number of r-combinations of a set with n distinct elements (with
$r\leqslant n$) is denoted by C(n,r). It is also denoted by:

$$
\binom{n}{r}
$$

and is called a **binomial coefficient**

"n choose r" refers to counting the number of different subsets of r
elements from a set of n elements, so by literally choosing r elements
from n elements in all possible ways

## Example

_How many National Lottery combinations are there?_

$$
\binom{49}{6}=\dfrac{49!}{6!43!}=\dfrac{49\cdot48\cdot47\cdot46\cdot45\cdot44}{1\cdot2\cdot3\cdot4\cdot5\cdot6}=13,938,816
$$

## A simple property of binomial coefficients

### Proposition

_For any integers $0\leqslant k\leqslant n$_

$$
\binom{n}{k}=\binom{n}{n-k}
$$

### Proof

-   Selecting k objects out of n is the same as leaving out k-n elements

-   LHS counts the number of ways to select k

-   RHS counts the number of ways to leave n-k out

# Pascal's identity

## Theorem

_Let n and k be positive integers with $n\geqslant k$. Then:_

$$
\binom{n+1}{k}=\binom{n}{k-1}+\binom{n}{k}
$$

## Proof

### Direct Proof

![Proof](/img/Year_1/MCS/DMLA/Binomial_Coefficients/pascal_proof.webp)

### Combinatorial Proof

Pascal's Identity:

$$
\binom{n+1}{k}=\binom{n}{k-1}+\binom{n}{k}
$$

Show that both sides of the identity count the same things in a different
way:

-   The left hand side counts all the possible subsets of k elements
    from a set of n+1 elements

-   Fix one element x. The right hand side counts:

    -   All the possible k subsets containing x (we have to choose
        another k-1 elements from the other n elements) plus,

    -   All the possible k subsets not containing x (we still have to
        choose k elements from the other n elements)

# Pascal's Triangle and Binomial Coefficients

![image](/img/Year_1/MCS/DMLA/Binomial_Coefficients/pascal_triangle_1.webp)

![image](/img/Year_1/MCS/DMLA/Binomial_Coefficients/pascal_triangle_2.webp)

# Binomial Theorem

## Theorem

_Let x and y be variables, and let n be a nonnegative integer. Then_

$$
(x+y)^n=\binom{n}{0}x^n+\binom{n}{1}x^{n-1}y+\binom{n}{2}x^{n-2}y^2+...+\binom{n}{n-2}x^2y^{n-2}+\binom{n}{n-1}xy^{n-1}+\binom{n}{n}y^n
$$

## Examples

$$
(x+y)^2=x^2+2xy+y^2$$ $$(x+y)^3=x^3+3x^2y+3xy^2+y^3
$$

The coefficients are rows in Pascal's triangle

## Idea of the proof

-   In the expansion of $(x+y)^n$ we obtain the value of "n choose k"
    as the coefficient of the term $x^{n-k}y^{k}$

-   This is because one has to choose a y from k of the n brackets x+y
    in the expansion; the other n-k are all x

## Examples

_Prove that_

$$
\binom{n}{0}+\binom{n}{1}+\binom{n}{2}+   \binom{n}{3}+...+\binom{n}{n}=2^n
$$

Solution: Use the binomial formula with $x=y=1$

# Permutations with indistinguishable objects

## Theorem

\_The number of different permutations of n objects, of which there are

$n_1$ indistinguishable objects of type 1

$n_2$ indistinguishable objects of type 2

....,
$n_k$ indistinguishable objects of type k, is\_

$$
\dfrac{n!}{n_1!n_2!...n_k!}
$$

As with anagrams

-   There are $C(n,n_1)$ choices to put $n_1$ type 1 objects in n
    positions

-   Then $C(n-n_1,n_2)$ choices t put $n_2$ type 2 objects in the
    remaining $n-n_1$ positions, and so on

The total number is:

$$
C(n,n_1)\cdot C(n-n_1,n_2),...,C(n-n_1-n_2-...n_{k-1}-n_k)=\dfrac{n!}{n_1!n_2!...n_k!}
$$

# Combinations with Indistinguishable Objects

**Multiset** - A set in which each element a has a multiplicity (times
they appear) $n_a$

_Example: \[0,0,1,2,2,2\]=\[1,0,2,2,0,2\] is a multiset of size 6, with
$n_0=2$, $n_1=1$, $n_2=3$_ An r-combination of n objects with repetition
is a multiset of size r whose elements come from these n objects

Using the idea with bars and stars, one can show the following:

## Theorem

The number of different r combinations of n objects with repetitions is
$C(n+r-1,n-1)=C(n+r-1,r)$

# Additional Slides

# Distributing Objects into Boxes

_How many ways are there to distribute n objects into k boxes?_\
The answer depends of whether the objects/boxes are distinguishable

-   D objects into D boxes

    -   Ex. Dealing 52 cards to 4 people

-   inD objects into D Boxes

    -   Identical balls into numbered boxes

-   D objects into inD Boxes

    -   Numbered balls into identical boxes

-   inD objects into inD Boxes

    -   Identical balls into identical boxes

## Objects into D-Boxes

**D-Objects into D-Boxes: numbered balls into numbered boxes**

### Theorem

The number of ways to distribute n D-Objects into k D-boxes so that box
i receives $n_i$ objects is:

$$
\dfrac{n!}{n_1!n_2!,...,n_k!}
$$

**inD objects into D boxes: Identical balls into numbered boxes**

### Theorem

The number of ways to distribute n inD objects into k D-Boxes is

$$
C(n+k-1,k)
$$

## Objects into inD-Boxes

**D-Objects into inD-Boxes: n numbered balls into k identical boxes**\
Same as counting partitions of the balls into $\leqslant$ k parts

### Fact

A simple closed formula for the number of ways to distribute n D-Objects
into k inD-Boxes is

NOT KNOWN **D-Objects into inD Boxes: n identical balls into k identical
boxes**

### Fact

A simple closed formula for the number of ways to distribute n
inD-Objects into k inD boxes is:

NOT KNOWN
