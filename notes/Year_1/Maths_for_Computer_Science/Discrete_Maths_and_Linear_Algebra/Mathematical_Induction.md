---
title: Mathematical Induction
lecturer: Andrei
---

# Proof By Induction

Suppose we want to prove that the following statements are valid for
every **positive integer** m:

-   $n<2^n$

-   $1+2+..+n=n(n+1)/2$

-   $n^3-n$ is divisible by 3

Although these 3 cases look very different there is a **general
approach** to prove such statements, called **proof by induction**

## The general principle of proof by induction

Suppose we want to prove that a given statement $S(n)$ holds for all
integers $n \geqslant j$ for a fixed integer j.

The simplest proof by induction works as follows:

-   Step 1 (**Basis Step**): Check that S(n) is true for n=j (smallest
    possible value of n); If this is not the case, then the statement
    cannot be true. If S(j) is true, then proceed to Step 2

-   Step 2: (**Induction Step**): Prove the following **conditional**
    statement. If S(n) holds for a fixed value $n=k\geqslant j$
    (**Induction Hypothesis or Assumption**) then it also holds for
    $n=k+1$

The two steps together then imply that $S(n)$ holds for $n=j$ (by Step
1), for $n=j+1$ (by Step 1 and Step 2 applied for k=j), for $n=j+2$ (by
Step 2 applied for $k=j+1$, and so on, so it holds for all
$n\geqslant j$

## Example 1: Proving $n< 2^n$ by induction

1.  Basis Step: Check that the statement is valid for n=1. It is, as
    $1<2$

2.  Induction Step: Let $k\geqslant 1$

    -   Assume that the statement holds for $n=k$, that is, $k<s^k$

    -   Need to use that to derive the statement for $n=k+1$, that is
        $k+1<2^{k+1}$

    -   We have
    -   $k+1<2^k+1<2^k+2^k=2^k+1$

        The first inequality above is by the inductive assumption

3.  Since the statement is **valid for n=1**, and that is **valid for
    n=k+1 if it is valid for n=k**, we conclude that it is **valid for
    all positive integers n**

## Example 2: Proving that $n^3-n$ is divisible by 3

1.  Basis Step: Check that the statement is valid for $n=1$. It is as
    $1^3-1=0$ is divisible by 3

2.  Induction Step: Let $k\geqslant 1$ be an integer

    -   Assume that the statement holds for $n=k$, that is $k^3-k=3m$
        for some integer $m\geqslant 0$

    -   Need to use that to derive the statement for $n=k+1$, that is,
        $(k+1)^3-(k+1)=3m'$ for some integer $m'\geqslant0$

    -   We have

        $(k+1)^3-(k+1)=k^3+3k^2+3k+1-(k+1)=k^3-k+3k^2+3k=3(m+k^2+k)$

        The m appears due to replacing some terms in k with the
        assumption $k^3-k=3m$

3.  Since both the basis and inductive step are completed, we conclude
    that the statement is valid for all positive integers $n$

## Example 3: Proving that $1+2+...+n=(n+1)n/2$

1.  Basis Step: Check that the statement is valid for $n=1$. It is, as
    $1=2\cdot1/2$

2.  Induction Step: Let $k\geqslant1$ be an integer

    -   Assume that the statement holds for $n=k$, that is

        $1+2+...+k=(k+1)k/2$

    -   Need to use that to derive the statement for $n=k+1$, that is

        $1+2+...+k+(k+1)=(k+2)(k+1)/2$

    -   We have

        $1+2+...+k+(k+1)=(k+1)k/2)+(k+1)=(k+2)(k+1)/2$

3.  Since we know that the statement is valid for $n=1$, and that it is
    valid for $n=k+1$, if it is valid for $n=k$, we conclude that it is
    valid for all positive integers $n$

## Variations

-   Sometimes a statement is valid only for $n\geqslant j$. Then the
    Basis Step is about $S(j)$, rather than just 1

-   Sometimes in the basis step we have to check a number of small
    cases, not just $n=j$

-   Sometimes in Induction Step we have to assume that $S(n)$ holds for
    all $n\leqslant k$, not just for $n=k$ (Strong Induction in
    Textbook)

# Geometry

## Some Geometry

-   A **polygon** is a closed geometric figure formed by a series of
    line segments $s_1...,s_n$ called sides

-   Two consecutive sides share an endpoint, as do $s_1$ and $s_n$. The
    endpoints are called **vertices**

-   A polygon is **simple** if no two non-consecutive sides intersect

-   Each polygon divides the plane into two regions: **interior** and
    **exterior**

-   A polygon is **convex** if each line segment between two interior
    points is within the interior. Line segment joining points doesn't
    go outside shape

-   A **diagonal** is a line segment connecting two non-consecutive
    vertices

-   An **interior diagonal** is one that lies entirely inside the
    polygon

    -   Lemma: Every simple polygon has an interior diagonal

## Triangulation in Computational Geometry

-   **Triangulation** is the process of dividing a simple polygon into
    triangles by adding non-intersecting diagonals

-   In order to computationally process a complicated surface, it is
    divided into simple polygons, which are then triangulated

-   Delaunay triangulations are especially popular

## Triangulation Proof By Strong Induction

**Theorem**: Each simple polygon with $n\geqslant 3$ sides can be
triangulated into $n-2$ triangles

1.  Basis Step: The theorem trivially holds for $n=3$

2.  Induction step: let $k\geqslant3$ be any integer

    -   Assume that the theorem is true for all $n\leqslant k$

    -   Take a simple polygon P with $n=k+1$ sides

    -   By Lemma above, it has an interior diagonal

    -   The diagonal splits P into two simple polygons. Q with s sides
        and R with t sides

    -   We have $3\leqslant s\leqslant k$ and $3\leqslant t\leqslant k$.
        Moreover $k+1=s+t-2$. Using base assumption Q and R can also be
        split using a diagonal

    -   By assumption Q and R can be triangulated into $s-2$ and $t-2$
        triangles, respectively. Assume the theorem is true

    -   This gives triangulation of P into $(s-2)+(t-2)=k-1=n-2$
        triangles
