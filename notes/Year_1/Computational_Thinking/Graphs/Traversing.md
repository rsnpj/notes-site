---
title: Graph Traversing
---

# Graph Representations

- Humans understand graphs pictorially as a collection of vertices and
  edges

- For a computer to understand graphs it needs to be stored in a
  structured way

Two standard data structures to represent graphs:

- A collection of adjacency lists

  - For every vertex, a lined list with all its neighbours

  - These lists are called adjacency lists

- An adjacency matrix

  - The vertices are (arbitrarily) numbered 1,2,3,...,n

  - a square $n\times n$ matrix such that the element (i,j) is:

    - equal to 1 if vertices i and j are adjacent

    - equal to 0 otherwise

For undirected graphs:

- The adjacency matrix is symmetric (the elements (i,j) and (j,i) are
  equal)

# Graph traversing

- Both data structures

  - store only "local" information about the graph (i.e.
    adjacencies)

  - The "global" information is provided implicitly

- How can you know if the graph is **connected**?

  - If you start at a specific vertex, can you reach every other
    vertex?

  - If not, can you list the "reachable vertices"

Where is the difficulty? - we want to visit all accessible vertices but
avoid running into "cycles"

Algorithm to traverse a labyrinth:

- Whenever you find an unvisited vertex continue to explore it from
  deeper

- If no more options, use a _ball of string_ to return to junctions
  that you previously saw but did not investigate

# Depth First Search (DFS)

The depth first search algorithm:

```python
DFS(G,u):
    visited[u]=1
    print u
    for each vertex v in Adj[u]
        if visited[v]==0:
            DFS(G,v)
```

- Initially all vertices are marked as "unvisited" i.e.
  visited\[u\]=0 for all vertices u

- When we visit a new vertex u

  - We mark it as visited (line 1)

  - We call (recursively) the same algorithm (DFS) for all unvisited
    neighbours v of u (lines 3-5)

# DFS in action

![image](/img/Year_1/CT/Graphs/Traversing/DFS.png)

# Graph traversing

- The Depth First Search (DFS) algorithm can be used to traverse the
  whole graph

- It can also be used for directed graphs:

  - In this case Adj\[u\] denotes the set of vertices that are
    accessible from u with one edge

- Variations of DFS are mainly used for "connectivity type" problems

# Shortest Paths

- The length of a path connecting two vertices a,b is the number of
  edges in the path

- The distance between two vertices a,b in a graph is the smallest
  length of a path that connects a and b

- The shortest path problem: given two vertices a and b, what is their
  distance?

Sketch of a simple algorithm for shortest paths:

- You stand on a vertex a of the graph and need to find your distance
  to the vertex b

- Ask all your neighbours what is their distance to b and compute the
  smallest of these distances, say x

- Then your distance to b is equal to $x+1$

![image](/img/Year_1/CT/Graphs/Traversing/Shortest.png)

In this algorithm, we proceed layer by layer:

- We expand the "frontier" between visited and unvisited vertices,
  across the breadth of the frontier

  ![image](/img/Year_1/CT/Graphs/Traversing/Shortest1.png)

- For every k=1,2,3 the algorithm:

  - First visits all vertices at distance k from a

  - Then all vertices at distance k+1

# Breadth First Search (BFS)

The natural alternative to DFS

```python
def BFS(G,a,b):
    i=0
    label=[a]=0
    while b is unlabeled
        for each vertex u with label[u]==i
            for each unlabeled vertex v in Adj[u]
                label[v]=i+1
        i=i+1
    return label[b]
```

- BFS is an iterative algorithm, i.e. no recursive calls

- The label of a vertex u equals its distance from a

- We could continue iteration until all vertices are labelled

- Initially all vertices are marked a unlabelled i.e. label\[u\]= $-1$
  or $\infty$

# BFS In action

![image](/img/Year_1/CT/Graphs/Traversing/BFS.png)

# Graph Traversing

Two main approaches for graph exploration:

- Breadth-First Search (BFS)

  - Search in **breadth**

  - layer by layer

- Depth-First Search

  - Search in **depth**

  - dig deeper, until not possible any more

<!-- -->

- DFS is **not** appropriate for shortest paths

  - We may reach the target vertex b via a **very long** path, as we
    just "dig deeper"

- Both BFS and DFS

  - Appropriate for graph exploration

  - Can list all reachable vertices from a start vertex a

  - very fast (linear time)

# A generic search algorithm

```python
reachable[a]=1  #Initialisation
S={a} #initialisation; set of vertices, from which we continue exploration
for i=1 to n #Iterate until no more reachable vertices
    choose a vertex u in S # the crucial choice of the search
    print u # u is the next vertex in the output list
    for each vertex v in Adj[u]
        if reachable[v]==0: #We found a new vertex v to reach
            reachable[v]=1 #"mark" v as reached
            S=S+v #add v to the list of reachable vertices
```

- The set S changed dynamically

- BFS and DFS have different "policy" for the choice at line 4

- BFS prefers vertices "closer to a"

- DFS prefers vertices that are always "one step further"

# The policy of BFS

- The policy of BFS

  - Remove the element that has been **longer in S**

  - a First-In-First-Out (FIFO) policy

- This data structure is called a queue

- In other words

  - Add new vertices at the end of the queue

  - remove vertices from the beginning of the queue

  - first process vertices that are closer to the start vertex

# The policy of DFS

- The policy of DFS:

  - Remove the element that has been shorter S

  - a Last-In-First-Out (LIFO) policy

- This data structure is called a "stack"

- In other words:

  - add new vertices at the end (top) of the stack

  - remove vertices from the end(top) of the stack

  - first process vertices that always "one step further"

# Longest paths

Computing a Longest path is NP complete

Intuitively:

- vertices are balls

- edges are strings tight on the balls

Shortest path problem:

- Pull firmly two specific balls away from each

- the length of the string between then is their distance in the graph

Longest path problem:

- You need to investigate all (possibly "strange") paths between the
  two balls through the net of strings

- which can be very complex

However:

- If the graph has no cycles, then it is easy

- such graphs are called "trees"
