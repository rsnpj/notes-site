---
title: Paths, cycles and connectivity
lecturer: Andrei
---

# Walks, paths, cycles and distances

-   A walk in a graph G is a sequence $v_0v_1,v_1,v_2,...,v_{n-1}v_n$.
    In this case we also say that $v_0,v_1,...v_n$ is a walk of G

-   A walk $v_0,v_1,...,v_n$ in G is a path is all $v_i$'s are distinct.
    In this case we also say that $v_0,v_1,...,v_n$ is a graph in G. A
    **path** is a walk that never crosses itself

-   A walk $v_0,v_1,...,v_n$ with $v_0=v_n$ is called a **circuit** or
    **closed walk**

-   A closed walk is a **cycle** if all $v_i$'s in it are distinct
    except $v_0=v_n$

-   If G is a directed graph then the **directed paths** and **directed
    cycles** are defined in a natural way, with each edge being directed
    from $v_i$ to $v_{i+1}$

-   The **length** of a path or a cycle is the number of edges in it

-   The distance between vertices u and v in a graph, denotes
    $dist(u,v)$, is the length of a shortest path from u to v if such a
    path exists, and $\infty$ otherwise

-   The **diameter** of a graph is the largest distance between two
    vertices in it

# The acquaintance graph and six degrees of separation

-   All vertices are people

-   There is an edge between two of them if they are acquainted

# The collaboration graph and the Erdos number

-   The vertices are all people

-   There is an edge between two of then if they have written a joint
    paper

# Shortest Path Problems

In an edge weighted graph, the problem of finding the shortest distance
from u to v is the shortest path problem

# Connectivity

## Definition

A graph is called **connected** if any two distinct vertices are
connected by a path. A **connected component** of a graph G is a maximal
connected subgraph of G

![image](/img/Year_1/MCS/DMLA/Paths/graph.webp)

_Is this path connected_

_How many connected components does this graph have?_

-   Is connected - In one piece

-   Removing 6-7, 5-8 and 4-7 makes two connected components, making it
    not connected

# Exercise

$\delta$ - the smallest degree of a vertex in a graph\
\
Prove that if G is a graph on n vertices are
$\delta(G)\geqslant (n-1)/2$ then G is connected

-   Proof **by contradiction:** Assume G is not connected, derive a
    contradiction

-   Take two vertices u and v in different connected components

-   We have that $deg(u)\geqslant (n-1)/2$ and $deg(v)\geqslant (n-1)/2$

-   The set N(u) contains none of the neighbours of v nor v itself

-   Similarly, N(v) contains none of the neighbours of u nor u itself

-   Hence G contains at least
    $\frac { n - 1 } { 2 } + 1 + \frac { n - 1 } { 2 } + 1 = n + 1$
    vertices, a contradiction

-   In fact, we even proved more: any two vertices in G are at distance
    at most 2 (so the diameter of G is at most 2)

# Strong connectivity

## Definition

-   A directed graph G is called **(weakly) connected** if the graph
    obtained from G by forgetting directions is connected

-   A directed graph is called **strongly connected** if any two
    distinct vertices are connected by directed paths in both directions
    (can go from u to v and v to u)

-   A **strongly connected component** (or simply **strong component**)
    of a digraph G is a maximal strongly connected subgraph of G

Graph

-   3,4,6,7 is a strongly connected component as a loop is formed, the
    only way out is to go to 8, which you cannot leave

-   2,1,5,9 is another strongly connected component

-   8 is a strong component on its own

# Special circuits/cycles in graphs

-   Can we travel along the edges of a given graph G so that we start
    and finish at the same verted and traverse **each edge exactly
    once**?

    -   Such a circuit in G is called a Eulerian circuit

-   Can we travel along the edges of a given graph so that we start and
    finish at the same vertex and visit **each vertex exactly once**

    -   Such a called a **Hamiltonian** cycle
