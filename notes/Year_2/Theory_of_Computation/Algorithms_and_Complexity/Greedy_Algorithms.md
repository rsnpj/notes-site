---
title: Greedy Algorithms
lecturer: Daniel
---

# The knapsack problem

We consider two variants:

1.  The **0-1 knapsack problem**: A thief robs a store and finds n
    items. Item $i$ is worth $v_i$ euros and weighs $w_i$ kilos.The
    thief can carry at most W kilos in knapsack.

    _Question_: Which items should they take in order to maximise their
    profit?

2.  The **fractional knapsack problem**: Same set-up, but this time the
    thief can carry fractions of items

We assume that the knapsack is not big enough to carry all the items

$$
W< w_1+...+w_n
$$

## Greedy Strategy

**Fractional** knapsack problem is solvable by following **greedy**
strategy

1.  Compute the value per kilo $r_i=v_i/w_i$ for each item

2.  Sort items by value per kilo in nonincreasing order

3.  Take as much as possible of item with greatest value per kilo, then
    take as much as possible of item with the next greatest value per
    kilo etc. until total weight equals knapsack capacity W

<Important>
Nonincreasing allows for items of the same weight, unlike decreasing
</Important>

## Running time of greedy strategy

Step 1 (computing $r_i$ for each $i$) can be done in $\Theta(n)$

Step 2 (sorting the $r_i$ array) can be done in $\Theta(n\log n)$

Step 3 (selecting the items) can be done in $\Theta(n)$

Thus, the worst-case running time is $\Theta(n\log n)$

## Greedy strategy for 0-1 knapsack

The same algorithm does NOT work for the 0-1 knapsack problem

For instance W=6 and

$$
\begin{array}{lll}{v_{1}=3,} & {w_{1}=4,} & {r_{1}=3 / 4} \\ {v_{2}=2,} & {w_{2}=3,} & {r_{2}=2 / 3} \\ {v_{3}=2,} & {w_{3}=3,} & {r_{3}=2 / 3}\end{array}
$$

**Optimal solution**: steal objects 2 and 3 for a total of 4 euros

**Greedy strategy**: steal object 1 for a total of 3 euros

## Correctness for fractional knapsack

n items are sorted by $r_i=v_i/w_i$ in nonincreasing order. So

$$
r_i \geqslant r_j \quad \text{for any} \quad i<j
$$

Two items $p$ and $q$ with $r_p=r_q$ are considered to be equivalent. Hence, we may assume
that

$$
r_i > r_j \quad \text{for any} \quad i<j
$$

The total available amount of item $i$ is $w_i$. Let k be such that

$$
w_{1}+\ldots+w_{k} \leq W \quad \text { and } \quad w_{1}+\ldots+w_{k+1}>W
$$

(Recall that we assume that the knapsack is not big enough to carry all
items, hence such a $k$ exists)

Let $x=(x_1,...,x_n)$ denote a solution: $x_i$ is the amount the thief
takes of item $i$ for $i=1,...,n$

The total value stolen is then $\sum_{i=1}^{n}r_ix_i$

The greedy solution $x$ is given by

$$
\begin{aligned} x_{i} &=w_{i} \text { for } 1 \leq i \leq k \\ x_{k+1} &=W-\left(w_{1}+\ldots+w_{k}\right) \\ x_{i} &=0 \quad \text { for } k+2 \leq i \leq n \end{aligned}
$$

Let $x*$ be an optimal solution. First of all, we must have
$x^*_1+...+x^*_n=W$ (We might as well fill up the sack!)

We will show that $x^*=x$

Suppose $x^*\neq x$. Then $x^*_i<x_i$ for some $i\leqslant k+1$: let
$j := min\{i: x^*_i<x_i\}$. Also, $x^*_I>x_I$ for some $I>j$

Let us add more of item $j$ to the optimal choice: Let $y$ be another
solution, defined by

$$
\left\{\begin{array}{l}{y_{j}=\min \left\{w_{j}, x_{j}^{*}+x_{I}^{*}-x_{I}\right\}} \\ {y_{I}=x_{I}^{*}-y_{j}+x_{j}^{*}} \\ {y_{i}=x_{i}^{*} \quad \text { otherwise }}\end{array}\right.
$$

Exercise:

1.  Check that $y$ is a valid solution, i.e.
    $0\leqslant y_i \leqslant w_i$ for all $1\leqslant i \leqslant n$
    and that $y_1+...+ y_n=W$

2.  Check that $y$ is a better solution than $x^*$, i.e.
    $\sum_{i=1}^{n}r_iy_i>\sum_{i=1}^{n}r+ix^*_i$. Contradiction

# Greedy Algorithms

The knapsack problem is an example of an optimization problem. In an
optimization problem there can be many solutions. Each solution has a
value. An optimal solution is a solution with optimal (minimum or
maximum) value. We want to find an optimal solution

Algorithms for optimization problems go through sequence of steps. At
each step there is a set of choices.

<Definition name="Greedy Algorithm">
A greedy algorithm makes in each step the choice that looks the best at the moment. This choice is called the greedy choice or locally optimal choice.
</Definition>

## Performance of greedy algorithms

This strategy does not have to lead to optimal solutions. Example: 0-1
knapsack problem.

For several problems solution obtained by greedy algorithm is optimal.
Examples:

- Fractional knapsack problem

- Minimum spanning tree (Prim, Kruskal)

- Shortest paths from a single source (Dijkstra)

- Data compression (Huffman coding)
