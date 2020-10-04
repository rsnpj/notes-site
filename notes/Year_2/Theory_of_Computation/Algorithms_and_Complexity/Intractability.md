---
title: Coping with Intractability
lecturer: Daniel
---

If an optimisation problem is NP-hard we generally regard it as
intractable

We traditionally cope with this in the following ways

1.  Restrict the input

2.  Use heuristics

3.  Use approximation algorithms

4.  Random, fixed parameter, exact algorithms, average case etc

# Restricting the input

A planar graph is a graph that can be drawn in the plane without edge
crossings

<Theorem>
Every planar graph is 4-colourable
</Theorem>

So 4 colouring is trivial for planar graphs, the answer is always yes

<Theorem>
3 colouring is NP complete for planar graphs
</Theorem>

<Theorem>
Every triangle free planar graph is 3 colourable
</Theorem>

Hence 3 colouring is trivial for triangle free planar graphs

# Using Heuristics

A well known heuristic for colouring is first fit

-   Order the vertices of an n-vertex graph G as $v_1,...,v_n$

-   Colour the vertices one by one in that order assigning the smallest
    available colour

-   So, $v_i$ gets the smallest colour $x$ not used on
    $N(v_i)\cap\{v_1,...,v_{i-1}\}$ where $N(v_i)$ denotes the
    neighbourhood of $v_i$ in $G$

-   Every tree is bipartite so can eb coloured with at most 2 colours

# Approximation algorithms

-   An algorithm is a k-approximation if it always finds a solution that
    is a factor of k within the optimum

## Vertex cover

Here is an approximation algorithm for vertex cover

`Approx-Vertex-Cover(G=(V,E))`

```python
C=[]
E`=E(G)
while E` != []:
    let (u,v) be an arbitrary edge of E'
    C = C + [u,v]
    remove from E` every edge incident with either u or v
return C
```

<Theorem>
The algorithm is a 2 approximation for vertex cover
</Theorem>

**Proof**

-   Let $C=\{u_1,v_1,u_2,v_2,...,u_p,v_p\}$ be the output, where the
    edges $(u_i,v_i)$ were chosen in executions of step 3, so $|C|=2p$

-   By construction, $G-C$ has no edges so C is a vertex cover

-   Let $C^*$ be a minimum vertex cover of G. As $(u_i,v_i)$ is an edge,
    at least one of $u_i,v_i$ belongs to $C^*$. So $|C^*|\geqslant p$.
    Hence $|C|=2p\leqslant 2|C^*|$
