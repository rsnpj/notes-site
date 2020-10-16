---
title: Cuckoo Hashing
lecturer: Tom
---

# Introduction

Dictionary data sources are used for storing a set of items and support three basic operations:

-   `Lookup(x)`: returns true if x is in current set
-   `Insert(x)`: adds item x to current set if not already present
-   `Delete(x)`: removes x from current set if present

# Hashing

_n is the upper bound of the number of elements in our table_

Performance bounds will often not hold in the worst case, but in the **expected** case, worst case can be very bad.

Often can show that true "with high probability", that is, extremely unlikely to deviate much from expected values

Behaviour determined by one of two hash functions which take items as input and return "random" values in some set $\{1...r\}$. Throughout r will be the size of our hash table.

Space usage (table size) will be bounded in terms of n

Balanced search trees usually logarithmic time bounds on operations, we will achieve constant expected per operation

Assumptions:

1. All items to be stored have the same size, and we can compare any two items in constant time
2. Have access to hash functions $h_1$ and $h_2$ such that any function value $h_i(x)$ is equal to a particular value in $\{1...r\}$ with probability 1/r

    Function values are probabilistically independent of each other

3. There is a fixed upper bound n on number of items in the set

# Hashing with chaining

The main idea of hashing-based dictionaries is to let hash function(s) decide where to store items

Item x will be stored as "position $h_1(x)$" in an array of size $r\geqslant n$

For this, $h_1$ must really be a function, that is $h_1(x)$ must be a fixed value

## Collisions

Likely to get collisions: items $x\neq y$ where $h_1(x)=h_1(y)$

For each value $a\in\{1...r\}$ there is some set $S_a$ of items having this particular hash of $h_1$

Obvious idea: make a pointer from a position a to some data structure holding set $S_a$, often called a bucket

A linked list is sufficient for this

## Analysing hashing with chaining

> We are using $\mathcal{O}$ in here as constant factors come in, but we don't care about them

Starting with two observations

1. For any two distinct items x and y, the probability that x hashes to y is $\mathcal{O}(1/r)$ - our table has size r, so just the odds of that one bucket out of r
2. The time for an operation on an item x is bounded by some constant times the number of items in the bucket of x

By the second observation, we can bound the time by bounding the size of x's bucket

For any operation it might be the case that x is stored in a data structure when the operation begins, but this can cost only constant-factor time extra, compared to the case where x is not in the list

We may therefore assume that the bucket of x contains only items different from x

<Theorem>

The expected time for any operation is constant

</Theorem>

Proof:

-   Let S be the set of items that were present at the beginning of the operation
-   For any $y\in S$, first observation says that the probability that the operation spends time on y is $\mathcal{O}(1/r)$
-   Therefore the expected time consumption charged to y is $\mathcal{O}(1/r)$
-   To get total expected time, we must sum up expected time for all elements in S
-   By linearity of expectation, this is $|S|\cdot \mathcal{O}(1/r)$, which is $\mathcal{O}(1)$ as r was chosen such that $r\geqslant n\geqslant |S|$

# Cuckoo hashing

What if we absolutely must guarantee worst-case constant lookups, rather than only expected:

1. Make the table huge
2. Use hash functions with no collisions - very complicated for insertions

We will consider a simpler method, cuckoo hashing[^1]

[^1]: R. Pagh and F. Rodler Cuckoo Hashing Proceedings of European Symposium on Algorithms, 2001

## Idea

Instead of requiring x to be stored at position $h_1(x)$, we give two alternatives: $h_1(x)$ and $h_2(x)$

We allow at most one element to be stored at any position: no need for a data structure holding colliding items

Allows us to look up an item by inspecting just two positions in the array

When inserting a new element x may of course still happen that there is no space since both positions $h_1(x)$ and $h_2(x)$ are occupied

Pull a cuckoo: throw out current occupant y of position $a=h_1(x)$ to make room, and place x there instead

This makes y homeless:

-   If alternate position for y is vacant move it there
-   If not, displace that element

Continue until the procedure finds a vacant position, or has taken too long

In the latter case, choose two new hash functions and start from scratch

```python
def insert(x)
    if (T[h1(x)]==x or T[h2(x)]==x):
        return
    pos=h1(x)
    for i in range(n):
        if(T[pos]==None):
            T[pos]=x
            return
        swap(x,T[pos])
        if pos == h1(x):
            pos=h2(x)
        else:
            pos=h1(x)
    rehash()
    insert(x)
```

The variable `pos` keeps track of the position in which we are currently trying to inset an item

Note that the procedure doesn't start out with checking whether $h_1(x)$ or $h_2(x)$ are vacant but simply tries to inset x into $h_1(x)$

## Analysis

Insertion procedure can loop n times **only** if there is a cycle in the graph

Every insertion will succeed so long as there is no cycle

Time spent will be bounded by a constant times size of bucket, so observation 2 from before still holds

We will now show that expected insertion time (in absence of rehash) is constant, for this we will show that observation 1 holds too

<Lemma>

For any positions j and j, and any $c>1$, if table size $r\geqslant 2cn$ then the probability that in the undirected cuckoo graph there exists a path from i to j of length $\ell\geqslant 1$, which is a shortest path from i to j, is at most $c^{-\ell}/r$

</Lemma>

-   c can be any constant >1
-   Lemma says that if number r of nodes (size of array) is large enough compared to number n of edges then we have low probability that any two nodes i and j are connected by a path
    -   Probability that they are connected by a path of constant length is $\mathcal{O}(1/r)$
    -   Probability that a path of length $\ell$ exists (but no shorter path) is exponentially decreasing in $\ell$

### Proof of lemma

**Base case** - $\ell=1$ (just an edge):

-   There is a set S of at most n items that have i **and** j as possible positions
    -   We're only interested in paths of length 1 here
    -   Those are edges, and an edge represents the two hash values of an item
-   For each item, the probability that this is true is at most $2/r^2$
    -   First goes here and second there (each with probability 1/r) or the other way round

Overall probability is bounded by

$$
\sum_{x\in s}2/r^2 \leqslant 2n/r^2 \leqslant c^{-1}/r
$$

**Inductive step**

-   Need to bound the probability that there exists a path of length $\ell>1$, but no shorter path
-   This is only if, for some position k
    -   There is a shortest path of length $\ell-1$ from i to k that does not go through j, and
    -   There is an edge from k to j
-   By the induction hypothesis, the probability for the former is bounded by
    $$
    c^{-(\ell-1)}/r=c^{-l+1}/r
    $$
-   Argument for the latter is exactly the same as in the base case (one edge between k and j), so that's $c^{-1}/r$
-   Probability that both conditions hold for a particular choice of k is no more than
    $$
    \dfrac{c^{-l+1}}{r}\cdot\dfrac{c^{-1}}{r}=\dfrac{c^{-\ell}}{r^2}
    $$
-   Probability that there exists a k with both conditions satisfied is
    $$
    r\cdot \dfrac{c^{-\ell}}{r^2}=\dfrac{c^{-\ell}}{r}
    $$

## Rehashing

Rehashing isn't very common:

-   Can prove using the lemma that the expected number of rehashing during insertion of $\Theta(n)$ elements is $\mathcal{O}(1)$
-   If time for one rehash is $\mathcal{O}(n)$, then the expected time for all rehashes is $\mathcal{O}(n)$, which is $\mathcal{O}(1)$ per insertion

### Problem

When doing analysis in more detail, we can show that with arbitrary constant $\epsilon>0$ and $2(1+\epsilon)n$ slots, for at most n keys, we get

-   Lookups $\mathcal{O}(1)$ worst-case
-   Deletions $\mathcal{O}(1)$ worst-case
-   Insertions $\mathcal{O}(1)$ expected

But insertion of a set of n keys fails and triggers rebuild of the whole data structure with probability $\mathcal{O}(1/n)$

In some applications a failure probability of $\mathcal{O}(1/n^3)$ could already lead to a failure rate that is too high, so cuckoo hashing can't be used.

A new method was proposed[^2]

-   Add small constant sized piece of memory, the so called stash
-   Move elements that can't be inserted into this stash

They prove that using a stash of size s lowers the failure probability from $\mathcal{O}(1/n)$ to $\mathcal{O}(1/n^{s+1})$

[^2]: Kirsch, A., Mitzenmacher, M. and Wieder, U., 2010. More robust hashing: Cuckoo hashing with a stash. SIAM Journal on Computing, 39(4), pp.1543-1561.
