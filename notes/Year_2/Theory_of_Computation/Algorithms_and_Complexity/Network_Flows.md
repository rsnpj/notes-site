---
title: Network Flows
---

# Flow networks, flow, maximum flow

- Material is transferred in a network from a "source" to a "sink"

- Source produces material at a steady rate, sink consumes at same
  rate

Edges have a given capacity

Vertices (other than source/sink) are junctions

- Material flows through them without collecting in them

- Entering rate = exiting rate

# Definitions

<Definition name="Maximum-flow problem">
We wish to compute the greatest possible rate of transportation from source to sink
</Definition>

<Definition name="Flow network">
{String.raw`
* G=(V,E)
* Two distinguished vertices: source s and sink t
* Each edge $(u,v)\in E$ as non-negative capacity $c(u,v)\geqslant 0$
* If $(u,v) \not \in E$, we assume $c(u,v)=0$
* For each $v\in V$, there is a path $s\rightarrow v \rightarrow t$
`}
</Definition>

## Flow constraints

<Definition name="Capacity Constraint">
{String.raw`
For all $u,v\in V$, we require $f(u,v)\leqslant c(u,v)$ \n 
Flow from one vertex to another must not exceed given capacity
`}
</Definition>

<Definition name="Skew symmetry">
{String.raw`
For all $u,v\in V$, we require $f(u,v)=-f(v,u)$ \n 
Flow from vertex u to vertex v is negative of flow in reverse direction
`}
</Definition>

<Definition name="Flow conservation">
{String.raw`
For all $u\in V - \{s,t\}$ we require
$$
\sum_{c\in V}f(u,v)=0
$$
Total flow out of a vertex is 0, likewise for total flow into a vertex (just saying what goes in, comes out), this doesn't apply to the source or drain
`}
</Definition>

## Total flows

<Definition name="Total positive flow">
{String.raw`
The total positive flow entering vertex v is
$$
\sum_{u\in V: f(u,v)>0}f(u,v)
$$
The total positive flow leaving vertex u is
$$
\sum_{v\in V: f(u,v)>0}f(u,v)
$$
`}
</Definition>

<Definition name="Total net flow">
{`
The total net flow at a vertex v is \n
total positive flow leaving v - total positive flow entering v
`}
</Definition>

<Definition name="Flow value">
{String.raw`
The value of flow f is defined as the total flow leaving the source (and thus entering the sink)
$$
|f|=\sum_{v\in V}f(s,v)
$$
Note that $|\cdot|$ does not mean absolute value
`}
</Definition>

If there is an arrow only in one direction on the graph, then the
capacity in the other direction is 0. There is no assumption of
symmetric capacities.

# Technical tools

**Implicit summation**

Let $X,T\subseteq V$. Then

$$
f(X, Y)=\sum_{x \in X} \sum_{y \in Y} f(x, y)
$$

Commonly occurring identities

1.  For all $X\subseteq V$, we have $f(X,X)=0$. Because each $f(u,v)$
    and $f(v,u)=-f(u,v)$ cancel each other

2.  For all $X,Y\subseteq V$, we have $f(X,Y)=-f(Y,X)$. Generalisation
    of $f(X,X)=0$, with the same reasoning

3.  For all $X,Y,Z\subseteq V$ with $X\cap Y=\varnothing$, we have
    $$
    f(X\cup Y, Z)=f(X,Z)+f(Y,Z)
    $$
    $$
    f(Z,X\cup Y) = f(Z,X) + f(Z,Y)
    $$
    Split summation into two: one over X, one over Y

Three important ideas:

1.  Residual networks

2.  Augmenting paths

3.  Cuts

Method is iterative:

1.  Start with $f(u,v)=0$ for all $u,v\in V$

2.  At each iteration, increase flow value by finding an augmenting path
    (a path from source to sink along which we can increase flow) and
    then augment flow along this path

3.  Repeat until no augmenting paths can be found

# Residual networks

**Idea:** Residual network consists of edges that can admit more flow

**Formally:** Consider vertices u and v. Amount of additional flow we
can push from u to v before exceeding capacity $c(u,v)$ is residual
capacity of $(u,v)$ $$c_f(u,v)  = c(u,v) - f(u,v)$$ Note that when flow
$f(u,v)$ is negative, then residual capacity $c_f(u,v)$ is greater than
$c(u,v)$

Interpretation:

- Flow of $-x$ from u to v (i.e. $f(u,v)=-x<0$)

- Implies flow of x from v to u (i.e. $f(v,u)=x>0$)

- Can be cancelled by pushing x units from u back to v

- Can then push another $c(u,v)$ from u to v

- We can push in total $c_f(u,v)=c(u,v)+x>c(u,v)$ from u to v

Given flow network $G=(V,E)$ and flow f, the residual network of G
induced by f is $G_f=(V,E_f)$ with

$$
E_{f}=\left\{(u, v) \in V \times V: c_{f}(u, v)>0\right\}
$$

i.e. each residual edge that can admit flow that is strictly positive

$$
G: \ u\xrightleftharpoons[1]{3/5} v \ \Rightarrow \ G_f: \ u\xrightleftharpoons[4]{2} v
$$

Note that $|E_f| \leqslant 2|E|$

**Lemma**:

Let $G=(V,E)$ be a flow network, f be a flow in G, $G_f$ be the residual
network of G induced by f, and let $f'$ be a flow in $G_f$. Then the
flow sum $f+f'$ with

$$
(f+f')(u,v)=f(u,v)+f'(u,v)
$$

Is a flow in G with value $|f+f'|=|f|+|f'|$

**Proof**:

Must verify that skew symmetry, capacity constraints and conservation
are obeyed\
_Skew symmetry_:

$$
\begin{aligned}
\left(f+f^{\prime}\right)(u, v) &=f(u, v)+f^{\prime}(u, v) \\
&=-f(v, u)-f^{\prime}(v, u) \\
&=-\left(f(v, u)+f^{\prime}(v, u)\right) \\
&=-\left(f+f^{\prime}\right)(v, u)
\end{aligned}
$$

_Capacity constraint_:

Note $f'$ is flow in $G_fr$, so $f'(u,v)\leqslant  c_f(u,v)$. Since by
def. $c_f(u,v) = c(u,v)-f(u,v)$

$$
\begin{aligned}
\left(f+f^{\prime}\right)(u, v) &=f(u, v)+f^{\prime}(u, v) \\
& \leq f(u, v)+c_{f}(u, v) \\
&=f(u, v)+(c(u, v)-f(u, v)) \\
&=c(u, v)
\end{aligned}
$$

_Flow conservation_:

For all $u\in V-\{s,t\}$

$$
\begin{aligned}
\sum_{v \in V}\left(f+f^{\prime}\right)(u, v) &=\sum_{v \in V}\left(f(u, v)+f^{\prime}(u, v)\right) \\
&=\sum_{v \in V} f(u, v)+\sum_{v \in V} f^{\prime}(u, v) \\
&=0+0 \\
&=0
\end{aligned}
$$

_Value_

$$
\begin{aligned}
\left|f+f^{\prime}\right| &=\sum_{v \in V}\left(f+f^{\prime}\right)(s, v) \\
&=\sum_{v \in V}\left(f(s, v)+f^{\prime}(s, v)\right) \\
&=\sum_{v \in V} f(s, v)+\sum_{v \in V} f^{\prime}(s, v) \\
&=|f|+\left|f^{\prime}\right|
\end{aligned}
$$

# Augmenting Paths

Given a flow network $G(V,E)$ and flow f an augmenting path P is a
simple path in residual network $G_f$

Recall that each edge $(u,v)$ in $G_f$ admits some additional positive
flow, obeying capacity constraint

Flow value can be increased by

$$
c_{f}(P)=\min _{(u, v) \in P} c_{f}(u, v)
$$

![image](/img/Year_2/Theory_of_Computation/AAC/Network_Flows/Augmenting_Path.png)

**Lemma**:

Let $G=(V,E)$ to be a flow network, f be a flow in G, and let P be an
augmenting path in $G_f$. Define $f_p$ by

$$
f_{P}(u, v)=\left\{\begin{array}{ll}
{c_{f}(P)} & {\text { if }(u, v) \text { is on } P} \\
{-c_{f}(P)} & {\text { if }(v, u) \text { is on } P} \\
{0} & {\text { otherwise }}
\end{array}\right.
$$

Then $f_p$ is a flow in $G_f$ with value
$|f_p|=c_f(P)>0$

**Corollary (Improve)**

Let $G,f,P,f_p$ be as above, Define $f'=f+f_p$. Then $f'$ is a flow in G
with value $|f'|=|f|+|f_p|>|f|$

# Basic Ford-Fulkerson algorithm

`Ford-Fulkerson(G,s,t)`

```python
for each edge (u,v) in E:
    f(u,v)=0
    f(v,u)=0
while there exists a path P = s to t in the residual network G_f:
    c_f(P)=min(c_f(u,v):(u,v) in P)
    for each edge (u,v) in P:
        f(u,v)=f(u,v)+c_f(P)
        f(v,u)=-f(u,v)
```

## Running Time

The running strongly depends on how the augmenting paths in line 4 are
determined

**If chosen poorly:**

- Value of flow increases with each iteration

- But possibly too slowly

- In extreme cases it can never terminate and it can even not converge
  to the value of maximum flow (can only happen if capacities are
  irrational numbers)

**In practice**

- Capacities are integers so always terminates

- If capacities are small then it is an efficient algorithm
  (polynomial time)

### Running time analysis

Assume integral capacities. Simple bound $\mathcal{O}(E\cdot |f^*|)$ for
running time when choosing paths arbitrarily, $|f^*|$ being the value of
maximum flow

- Initialisation in lines 1-4 take $\mathcal{O}(E)$

- While loop in lines 5-11 is executed at most $|f^*|$ times (value of
  flow increases by at least one unit in each interaction)

- In lines 6-10 (within the while loop) we need
  $\mathcal{O}(V+E)=\mathcal{O}(E)$ time.

### Problematic case

Algorithm needs $\Omega(E|f^*|)$ time in worst case, because $(u,v)$ is
always chosen to be part of augmenting path.

Note that the value of the maximum flow f\* can be arbitrarily large
(might even be exponential on the size of the network)

This algorithm has not polynomial running time in the worst case

# Edmonds-Karp algorithm

- A special implementation of Ford-Fulkerson algorithm

- The augmenting path P is always chosen to be a shortest path from s
  to t (e.g. using BFS) in the residual network $G_f$

- Regardless of the flow that fits in this path P

This has running time $\mathcal{O}(V\cdot E^2)$

# Cuts of flow networks

A cut of a flow network $G=(V,E)$ is a partition of V into the sets S
and T=V-S such that $s\in S$ and $t\in T$

If f is a flow in G, then $f(S,T)$ is the net flow across cut (S,T); its
capacity is c(S,T)

A minimum cut is a cut with minimum capacity over all cuts

**Lemma: Net Flow**

Let f be a flow in a flow network G with source s and sink t, let (S,T)
be a cut of G. Then the flow across (S,T) is f(S,T)=$|f|$

**Corollary (Upper Cut)**

The value of a flow f in a network G is upper bounded by the capacity of
any cut (S,T) in G

**Proof**

Therefore max-flow $\leqslant$ min-cut

$$
|f|=f(S, T)=\sum_{u \in S} \sum_{v \in T} f(u, v) \leq \sum_{u \in S} \sum_{v \in T} c(u, v)=c(S, T)
$$

**Theorem: Max-flow min-cut**

If f is a flow in a flow network $G=(V,E)$ with source s and sink t,
then the following conditions are equivalent

1.  f is a maximum flow in G

2.  The residual network $G_f$ contains no augmenting path

3.  $|f|=c(S,T)$ for some cut $(S,T)$ of G
