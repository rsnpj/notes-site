<Exercise>
<Question>

Prove that Independent Neighbours is NP-complete by reduction from Independent Set

</Question>

<Answer>

If a graph G has a vertex whose neighbourhood contains an independent set of size K, then a certificate for this is a vertex v and a set W of K neighbours of v that form an independent set. It is clear that whether all vertices in W are neighbours of v and whether W is an independent set can be verified in polynomial time (just check each pair of vertices in W to make sure they are not neighbours) so Independent Neighbours belongs to NP.

Now to we need to find a reduction to prove completeness. If G=(V,E) and K>0 is an instance of Independent Set, form the following instance of Independent Neighbours: the graph G′, which is obtained from G by adding a new vertex u and all edges between u and the vertices in G, and the same number K.

It is clear that this G′, K can be computed in polynomial time from G, K. If there is an independent set W of size K in G, then W consists of neighbours of u, obviously. Moreover,W is still independent in G′, since we added only edges involving u. Hence, we have a vertex,u, and an independent set,W, of K neighbours ofu.

In the other direction, if G′has a vertex v and an independent set W of K neighbours of v,then (excluding the trivial case K= 1) W cannot contain u because u is connected to all other vertices in G′and W is independent. Hence,W must be contained in V, and so is an independent set in G

</Answer>

</Exercise>

<Exercise>

<Question>

Prove that Feedback Vertex Set is **NP**-_complete_

</Question>

<Answer>

First of all, membership in NP can be shown by using the required vertex set as a certificate - to check that it is a good certificate, one needs to delete these vertices from the graph and check the remaining digraph is acyclic, which can be done in polynomial time.

Let $G=(V,E)$ be an undirected graph. Replace each edge with a pair of directed edges, one in each direction, to obtain a directed graph $D=(V, A)$. We shall prove that a set of vertices $W\subseteq V$ is a vertex cover in $G$ iff it is a feedback vertex set for $D$.

First, suppose that W is a vertex cover; that is, every edge of G is incident with at least one vertex in W. Then every directed edge of D is also incident with at least one vertex in W so every cycle in D certainly includes a vertex of W.

Now suppose thatWis a feedback vertex set for D. So W is incident with every cycle in D; in particular W contains at least one vertex from every cycle of length 2 (a cycle of length 2 is just a pair of edges with opposite orientations between the same pair of vertices). But for every pair of vertices u and v joined by an edge inG, there is a 2-cycle containing u and v in D, so W covers every edge of G.

Thus the problem of finding a vertex cover in a graph can be reduced to the problem of finding a feedback vertex set in a directed graph.

</Answer>

</Exercise>

<Exercise>

<Question>

Show that if $D$ is a dominating set for $H$, then there is also a dominating set $D′$ where $|D|\geqslant|D|$ and $D′$ contains only vertices of G.

</Question>

<Answer>

Each vertex in D dominates itself and its neighbours. If x is a vertex in D and we can find a vertex y such that every vertex that x dominates is also dominated by y, then we can replace x with y in D and we will still have a dominating set.

Suppose x is a vertex that was added when we created H; that is, there is a pair of vertices u and v (which are joined by an edge) such that x is joined only to u and v. Thus the vertices that x dominates are itself and u and v. Thus we can replace x by either u or v and we still have a dominating set

Thus all the “new” vertices can be replaced one by one until we have a dominating set $D′$ that contains only vertices from G and $|D′|\leqslant|D|$ ($D′$ might be smaller than D as if D contains a vertex x and one of its neighbours u, we can just discard x).

</Answer>

</Exercise>

<Exercise>

<Question>

Show that a set of vertices $D\subseteq V$ is a dominating set of H iff if it is a vertex cover of G.

</Question>

<Answer>

First we prove that if D is a dominating set of H, then it is a vertex cover of G. We are assuming that D contains only vertices of G. For each edge that joins u to v in G, there is a vertex in H that is adjacent to only u and v. Thus D must contain either u or v. So D contains at least one vertex incident with each edge in G, so is, by definition, a vertex cover.

Now we prove that if V is a vertex cover of G then it is a dominating set of H. By the remarks above, it is clear that as D covers every edge, it dominates all of the new vertices that were added to form H. We must also show that it dominates every vertex in G. Each vertex v in G is incident
with at least one edge (since we assume the graph is connected) so has at least one neighbour. As D is a vertex cover it contains either v or its neighbour (to cover the edge between them). As v is dominated by itself and its neighbour, in both cases D dominates v. So D is a dominating set.

We have proved that the problem of finding a vertex cover of size K in a graph G can be reduced to the problem of finding a dominating set in a graph H (where H is obtained from G as in the question). Thus we have a reduction from Vertex Cover to Dominating Set proving the NP-completeness of the latter.

</Answer>

</Exercise>

<Exercise>

<Question>
Consider the following Boolean formula

$$
f=(x_1\lor\lnot x_2)\land (x_2\lor\lnot x_3)\land...\land (x_m\lor\lnot x_1)
$$

Show that the only two truth assignments that satisfy f are where every variable is `True` or every variable is `False`

</Question>

<Answer>

Let A be any assignment that satisfies f . Suppose that x1 is false under A. Let i be the smallest i such that $x_i$ is true. Then $(x_{i+1}\lor\lnot x_i)$ is not satisfied. Thus if $x_1$ is false then so is every other
variable. Similarly, suppose that x1 is true under A. Let i be the largest i such that $x+i$ is false. Then $(x_i\lor x+{i+i})$ is not satisfied. Thus if $x_1$ is true then so is every other variable. So we have proved that A is one of the two suggested assignments.

</Answer>

</Exercise>
