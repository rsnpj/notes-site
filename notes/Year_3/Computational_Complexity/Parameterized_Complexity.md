---
title: Parameterized Complexity
lecturer: Andrei
---

<Problem name="Vertex cover" instance="A graph G=(V,E), and a natural number k" question="Is there a set $W\subseteq V$, which $|W|\leqslant k$, such that for each edge $(i,j)\in E$ $$\{i,j\}\cap W\neq \varnothing$$" />

<Problem name="Independent set" instance="A graph G=(V,E) and a natural number k" question="Is there a set $W\subseteq V$ with $|W|\geqslant k$, such that for each $i,j\in W$, we have $(i,j)\not\in E$" />

Note that, in any graph G, W is a VC iff V\W is an independent set

Similarities and differences

-   Both problems are NP complete
-   Both solvable by complete enumeration in $\mathcal{O}(n^k)$ time
-   VC can be solved in $\mathcal{O}(2^kn)$ time
-   No known $n^{\mathcal{O}(k)}$ algorithm for IndSet
-   IndSet is (probably) harder than VC

# A $\mathcal{O}(2^kn)$ algorithm for Vertex Cover

Each edge in G must be covered

Build a binary search tree of depth k as follows:

-   Pick any edge $(x,y)$ and branch
-   Left branch buts x in VC and removes it from G
-   Right branch puts y in VC and removes it from G
-   Recurse by choosing the next (any) edge on each branch

Note that:

-   If G have VC with at most k elements the algorithm must find it in one of the branches of the search tree
-   The tree has $\mathcal{O}(2^k)$ nodes, and $\mathcal{O}(n)$ work is done at each node, so $\mathcal{O}(2^k)$ is optimal

# Parameterized problems and FPT

Parameterized problem:

-   Input $I$ has distinguished integer $k$, called parameter
-   We wish to express run time in terms of both $n=|I|$ and $k$

<Definition name="Fixed Parameter Traceable">

A parameterized problem is fixed-parameter traceable if it can be solved in time $f(k)n^c$ where f is an arbitrary function depending only on k and c is a constant (independent of k)

</Definition>

-   F can be arbitrarily bad
-   Any problem in P is automatically FPT
-   FPT is a robust complexity class

# How (not) to choose a parameter

-   Many problems have a natural parameterization (size of required subset in a graph)
-   Some have different parametrizations, for example `SAT` can be parameterized by:
    -   The number of variables
    -   The number of clauses
    -   Weight of assignment
    -   Many structural parameters arising from graphs associated with a clause-set
-   If a problem X is **FPT**, then X with any fixed k must be in **P**

# Examples of FPT problems

-   Finding a vertex cover of size k
-   Finding a path of length k
-   Finding k disjoint triangles
-   Drawing graph on a plane with k edge crossings
-   Finding disjoint paths that connect k pairs of vertices

# FPT algorithmic techniques

-   Bounded search tree
-   Kernelization
-   Tree width
-   Graph Minors
-   Colour Coding
-   Iterative compression

# Kernelization

<Definition name="Kernelization">

A polynomial-time procedure that transforms instance $(I,k)$ into another instance $(I',k')$ - a kernel, such that

1. $(I,k)$ is a yes-instance iff $(I',k')$ is a yes-instance
2. $k'\leqslant k$
3. $|I'|\leqslant f(k)$ for some function f

</Definition>

If a problem X admits kernelization then it is **FPT**. The proof for this is that the size of $(I',k')$ depends only on k, not on n, so we can solve $(I',k')$ by brute force.

## Kernelization for vertex cover

Exhaustively apply the following rules

-   **Rule 1**: If v is an isolated vertex, $(G,k)\Rightarrow (G\backslash v,k)$
-   **Rule 2**: If $\operatorname{deg}(v)>k, (G,k)\Rightarrow (G\backslash v, k-1)$

Assume now neither rule can be applied

-   If $|V|>k(k+1)$ then the answer is no - each vertex v has $\deg(v)\leqslant k$, and so k vertices can cover at most $k^2$ other vertices
-   If $|V|\leqslant k(k+1)$ then we have a kernel
