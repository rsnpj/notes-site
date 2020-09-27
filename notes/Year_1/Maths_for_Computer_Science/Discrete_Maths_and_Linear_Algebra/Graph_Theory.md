---
title: The basics of Graph Theory
lecturer: Andrei
---

# What is a Graph?

-   A mathematical model

-   A representation of objects and relations between them

-   The objects can be 'anything'

-   The relations between pairs of anything

# Formal Definitions

## Definitions

A **graph** G is a pair $(V(G),E(G))$, where $V(G)$ is a **nonempty**
set of **vertices**(or nodes) and $E(G)$ is a set of **unordered
pairs** {u,v} with $u,v\in V(G)$ and $u\neq v$ called the **edges** of
G.

-   V(G) can be infinite, but all our graphs will be finite

-   If no confustion can arise we write $uv$ instead of $\{u,v\}$

-   If the graph G is clear from the context, we write V and E instead
    of V(G) and E(G)

-   It often helps to draw graphs

    -   represent each vertex by a point

    -   each edge by a line or curve connecting the corresponding points

    -   only endpoints of lines/curves matter, not the exact shape

# A drawing of a graph

![image](/img/Year_1/MCS/DMLA/Graph_Theory/drawing.webp)

This is a drawing of the graph G=(V,E) with $V=\{a,b,c,d,e,f\}$ and $E=\{ab,ac,bc,bd,ce,de,ef\}$

# Types of graphs

-   **directed** graphs or **digraphs** - edges can have directions

    -   The web graph: vertices are webpages and edges are hyperlinks

    -   the precedence graph: vertices are program statements, edges
        reflect execution order

    -   the influence graph: vertices are people in the group, edges
        mean "influences"

-   multigraphs - multiple edges are allowed between two vertices

    -   the air link graph - several different airlines can fly between
        two towns

-   pseudographs - edges of the form $uu$, called loops are allowed

    -   region pseudograph in computer graphics: Vertices are connected
        regions edges mean "can get from one to the other by crossing a
        fence"

-   vertex or edge weighted graphs - vertices and/or edges can have
    weights

    -   the road map graph: weights on edges

By default, all our graphs are **simple undirected** graphs, that is,
the above things are not allowed

# More examples of graph models

Graphs can be useful to express **conflicting** situations between
objects

-   vertices - base stations for mobile phones, Edges: overlapping
    service areas

-   vertices - traffic flows at a junctions, Edges: conflicting flows

Graphs can be useful for **analysing strategies** and **solutions**

-   vertices: states in a game, edges: transitions between states

-   vertices: steps in a solution, Edges: transitions between steps

# Terminology

## Definitions

Let G be a graph and $uv$ cn edge in it. Then

-   u and v care called endpoints of the edge $uv$

-   u and v are called neighbours or adjacent vertices

-   $uv$ is said to be incident to u (and to v)

-   if $vw$ is also an edge and $w\neq u$ then $uv$ and $vw$ are called
    adjacent

## Definitions

Let $G=(V,E)$ be a graph. The **neighbourhood** of a vertex $v\in V$,
notation $N(v)$, is the set of neighbours of v i.e.,
$N(v)=\{ u\in V| uv\in E\}$.

The **degree** of a vertex $v\in V$ notation deg(v), is the number of
neighbours of v i.e. $deg(v)=|N(v)|$

With $\delta(G)$ or $\delta$ we denote the **smallest degree** in G, and
with $\Delta(G)$ or $\Delta$ or the **largest degree**

A vertex with degree 0 will be called an **isolated vertex**

A vertex with a degree 1 an **end vertex** or a **pendant vertex**

## Definition

A subgraph $G'=(V',E')$ of $G=(V,E)$ is a graph with $V'\subseteq V$ and
$E'\subseteq E$; this subgraph is called **proper** if $G'\neq G$ and
spanning if $V'=V$

# First theorem in Graph theory

Can you guess the relationship between the sum of the degrees of the
vertices of a graph G and the number of edges of G

## Theorem(Handshaking Lemma)

$$
\text { Let } G = ( V , E ) \text { be a graph. Then } \sum _ { v \in V } \operatorname { deg } ( v ) = 2 | E |
$$

This is useful for proving that a graph cannot exist

## Proof

Every edge has two endpoints and contributes one to each of their
degrees, so contributes two to the sum of the degrees of all the
vertices of V

# Some graph classes

Some graphs appear so often they have special names

## $P_3$

![image](/img/Year_1/MCS/DMLA/Graph_Theory/p3.webp)

This is denotes an $P_3$ and in general we define $P_n$ as a path on n
vertices i.e. a graph with vertex set $\{v_1,v_2,...,v\}$ and edge set
$\{v_1v_2,v_2v_3,...,v_{n-1}v_n\}$ So $P_n$ has n-1 edges

### Definition

A path in a graph G is a subgraph of G which is $P_k$ for some integer
$k\geqslant 1$. This notion is called a **simple path**

## $C_4$

![image](/img/Year_1/MCS/DMLA/Graph_Theory/c4.webp)

In general a cycle $C_n$ on n verticies is defined similarly as a $P_n$,
but with an additional edge between $v_n$ and $v_n$. So $C_n$ has n
edges

### Definition

A cycle in a graph G is a subgraph of G which is a $C_k$ for some
integer $k\geqslant 3$. This notion is called a **simple circuit**

## $K_{p,q}$

![image](/img/Year_1/MCS/DMLA/Graph_Theory/kpq.webp)

All four of these graphs can be described as $K_{p,q}$: a graph
consisting of two disjoint vertex sets on p and q vertices and all the
edges between the two vertex sets. So $K_{p,q}$ has $p\cdot q$ edges

### Definitions

$K_{p,q}$ is called a **complete bipartite** graph. So a graph is
bipartite iff we can partition its vertex set into two sets such that
every edge has endpoints in each set

## Definition

A **complete** graph on n vertices, denote by $K_n$ contains all the
possible edges between pairs of vertices.

A $K_n$ graph has $\binom{n}{2}=\frac{1}{2}n(n-1)$

## Definition

The (n dimensional) hypercube or n cube $Q_n (n\geqslant 1)$ is the
graph with

$$
V=\{(e_1,...,e_n)|e_i\in\{0,1\} (i=1,...,n) \}
$$

in which two vertices are neighbours iff the corresponding rows differ in exactly
one entry

### Example

$Q_1=P_2=K_2$; $Q_2=C_4$. For n=3, the set V consists of $2^3=8$ elements

![image](/img/Year_1/MCS/DMLA/Graph_Theory/n_dimension.webp)

# More on n cubes

## Theorem

All n cubes are bipartite

## Proof

-   We give a bipartition of the vertex set of the n cube

-   Let $V_1$ contain all the vertices with an odd number of 1s

-   Let $V_2$ contain all vertices with an even number of 1s

-   This is clearly a partition of V into two disjoint sets

-   It is easy to see that each edge has one endpoint in each of the
    sets

-   So it proves that all n-cubes are bipartite

# Types of graphs

-   $p_n$ is only k regular for $p_2$
-   $c_n$ is k regular
-   $K_{p,q}$ is only k regylar for p=q
-   $Q_n$ is k regular
-   $p_n$ is bipartite
-   $C_n$ is bipartite only for even n
-   In $Q^n$ the number of verticies is $2^n$ and each has $n$ connections.
    The number of edges is $n\times 2^{n-1}$
