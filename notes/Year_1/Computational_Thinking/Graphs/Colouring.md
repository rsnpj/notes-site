---
title: Graph Colouring
---

# Problems in natural science

- Aim: Solve a "real world" problem

- How: most times it is difficult to try "real world" solutions
  until we find the best one

- Therefore

  - We rephrase the problem as an "abstract" problem

  - This is called abstract modelling

  - We can easily

    - Try many alternative solutions to the abstract problem

    - and then "translate" these solutions in terms of the
      original "real world" problem

- Usually the "abstract model" involves graphs/networks

# Radio Frequency assignment

- A network of radio transmitters

- Each of them must have an operating frequency

- if two nearby transmitters have the same frequency they
  **interfere** with each other

- We **pay** for every frequency we are using

- a real world problem: assign the frequencies such that:

  - no transmitters interfere

  - we pay as little as possible

- To solve the problem, we do not have to deal with the transmitters
  themselves

- We consider a graph problem

  - transmitter $\leftrightarrow$ vertex

  - one edge between two nearby transmitters

  - frequency of transmitter $\leftrightarrow$ colour of its vertex

- Our goal becomes graph colouring

  - assign the smallest number of colours to vertices where two
    connected vertices have different colour

# Scheduling of talks

- A conference agency organises a set of business meetings

- each meeting has pre-defined start/finish times

- A hotel room can be used for many meetings, if they do not overlap

- The agency **pays** for every hotel room they book

- Real world problem: book hotel rooms such that:

  - All meetings take place

  - The agency pays as little as possible

- Let the meetings have the following start/finish times:

  ![image](/img/Year_1/CT/Graphs/Colouring/graph.png)

- Again, we consider a **graph colouring problem**:

  - meeting $\leftrightarrow$ vertex

  - one edge between two overlapping meetings

  - room for a meeting $\leftrightarrow$ colour of its vertex

# Timetable of exams

- each exam takes one day

- two exams can be held concurrently if no student is registered in
  both of them

- Real world problem: create a timetable such that:

  - each student participates in all his/her exams

  - The exams **finish as soon as possible**

- Again we consider a graph colouring problem:

  - exam $\leftrightarrow$ vertex

  - one edge between two exams with common students

  - Date of an exam $\leftrightarrow$ colour of its vertex

# Graph colouring

All these problems (and many others) can be "rephrased" in terms of
graph colourings, where:

- The vertices correspond to transmitters, meetings, exams,...

- The colours correspond to frequencies, rooms, dates,...

But always:

- The edges correspond to some kind of **conflicts** (nearby
  transmitters, overlapping meetings, common students,...)

- In general, it is hard (NP-complete) to compute the smallest number
  of colours needed for a given graph

- However, in special cases it is easy:

  - What an graph is a path:

    ![image](/img/Year_1/CT/Graphs/Colouring/path.png)

    always two colours suffice

  - When a graph is **complete** with k vertices

    ![image](/img/Year_1/CT/Graphs/Colouring/complete.png)

    always k colours needed (every vertex is a different colour)

- Thus, if a graph includes a **complete subgraph** with **k
  vertices**

  - We need at least k colours for this graph

  - When a graph is complete with k vertices, k colours are always
    needed (each vertex a different colour)

# A simple algorithm

How to check whether 3 colours are enough?

- The simplest algorithm: "brute force", i.e. enumerate exhaustively
  **all possible 3-colourings** until you:

  - either find a 3-colouring, where any two adjacent vertices have
    different colours

  - or otherwise conclude that you need more colours

![image](/img/Year_1/CT/Graphs/Colouring/brute_force.png)

Let's count how many steps we need (for n vertices)

- 3 choices for the 1st vertex, 3 choices for the 2nd vertex and so on

- All together $3^n$ steps, which is too many

# A more "delicate" algorithm

We can "refine" our search of a good colouring:

- If two vertices a and b are **not connected**, then in the optimal
  colouring:

  1.  either a and b have **different** colours

  2.  if a and b have the **same** colour

- In the first case: we can just add an edge between the vertices a
  and b

  ![image](/img/Year_1/CT/Graphs/Colouring/first_case.png)

- In the second case: we can just "merge" the two vertices a and b
  into one

  ![image](/img/Year_1/CT/Graphs/Colouring/first_case1.png)

This algorithm in action:

- At every iteration:

  - pick up a pair of non connected vertices a and b

  - try both possibilities a and b have

    - the same colour

    - different colours

  - For each case, iterate: find another pair of non connected
    vertices, iterate ...

- Stop when **no iteration** is possible i.e. when we end up only with
  complete graphs

- The smallest size of these complete graphs is equal to the smallest
  number of colours we need

![image](/img/Year_1/CT/Graphs/Colouring/inAction.png)

- However also this algorithm also has **exponential running time in
  the worst case**

- This is called backtracking:

  - try something (merge/add edge)

  - Then "undo" and try something else

# A different view of colouring

If a graph can be coloured with **k colours**, then:

- each two vertices a and b with the same colour are not connected to
  each other, i.e.

- The graph can be partitioned into k "colour classes" each having
  **no edges**

![image](/img/Year_1/CT/Graphs/Colouring/classes.png)

Algorithmically, this formulation doesn't help much

A graph is called k-partite, if it can be coloured with k different
colours

# Graph Colouring

A proper colouring of a graph with k colours:

- A colouring of the vertices, such that any two adjacent vertices
  have different colours

The graph colouring problem:

- Find the smallest number k such that the graph has a proper k
  colouring

A brute force algorithm for 3 colouring:

- exhaustively enumerate all possible 3-colourings

- For each colouring, check whether all vertex pairs have different
  colours

- correct answer is always guaranteed

- Exponential time needed ($3^n$ iterations)

Sometimes we just want "some" proper colouring:

- not necessarily with the smallest number of colours

- but we want it quickly

Then: a greedy algorithm

# A "greedy" algorithm

- Assign labels to the vertices $v_1,v_2,v_3,v_4,...,v_n$ such that

  - $v_2$ is adjacent to $v_1$
  - $v_3$ is adjacent to one of $\{v_1,v_2\}$
  - $v_4$ is adjacent to one of $\{v_1,v_2,v_3\}$
  - ...
  - $v_n$ is adjacent to one of $\{v_1,v_2,v_3,...,v_{n-1}\}$

- Visit the vertices sequentially

- Assign to each vertex the "smallest" colour that is not being used
  by its neighbours so far

![image](/img/Year_1/CT/Graphs/Colouring/greedy.png)

- This greedy algorithm:

  - finishes quickly (polynomial number of iterations)

  - Makes at every step a decision that "looks the best for no\"

  - but the final output may not be the best possible

- The choice of vertex ordering:

  - determines the quality of the solution (i.e. number of colours)

- It is hard (NP-complete) to compute the best possible vertex
  ordering

# Which algorithm to choose

|     | brute-force algorithm                   | greedy algorithm                   |
| --- | --------------------------------------- | ---------------------------------- |
| +   | computes always the optimum             | finishes quickly (polynomial time) |
| -   | finishes very slowly (exponential time) | not always the optimum solution    |

Two measures of algorithmic performance:

- quality of the solution (how far from the optimum)

- time needed

# A "greedy" algorithm

- Ok, it is hard to find the optimum in general

- What is I just look for specific small values of k?

- For k=1

  - only the trivial graph (one vertex) can be coloured with only
    one colour

- For k=2 bipartite graphs

# Bipartite graph

- Our greedy algorithm

  - always decides correctly whether 2 colours are enough for the
    graph

  - for any choice of the vertex ordering

- In other words, this algorithm:

  - constructs a proper 2 colouring, if one exist

  - otherwise reports that we need more colours

# Greedy with 2 colours

This algorithm in action:

- Colour the first vertex blue

- Thus the next vertex (which is neighbour) is necessarily red

- and the next one is necessarily blue

- etc

In other words

![image](/img/Year_1/CT/Graphs/Colouring/2_colour.png)

In some cases the last vertex needs a third colour

![image](/img/Year_1/CT/Graphs/Colouring/2_colour1.png)

# Bipartite graphs

- Therefore:

  - Using the greedy 2 colouring algorithm we can decide whether a
    given graph is bipartite

- Is there any other way to do this?

Theorem: A graph is bipartite if, and only if it has no cycles with odd
length

- Can we use this theorem algorithmically? There can be too many
  cycles in a graph (exponential)

- we can not check all of them efficiently

# Greedy colouring

- Can the greedy algorithm solve 3 colouring?

![image](/img/Year_1/CT/Graphs/Colouring/3_colour.png)

greedy can not be used for 3 colouring

# Colouring of planar graphs

Consider an arbitrary map:

- We want to distinguish different countries using different colours

- How many colours do we need

This is the famous 4 colour problem.

How can we model a map by a graph

- region of the map $\leftrightarrow$ vertex of the graph

- an edge when two regions have common borders

Planar graphs:

- the graphs that are obtained by maps equivalently

- the graphs that can be drawn on the plane such that no two edges
  cross each other
