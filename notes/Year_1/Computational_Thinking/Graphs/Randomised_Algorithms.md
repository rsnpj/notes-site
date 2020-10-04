---
title: Randomised Algorithms
lecturer: George
---

# Deterministic algorithms

The algorithms we saw until now are deterministic:

-   Process the input and produce an output

-   If it runs many times with the same input it produced the same
    output

-   For many "hard" computational problems

    -   It is difficult to design efficient algorithms

    -   or the running time is very high

Where is the difficulty:

-   We often need to make choices between two (or more) alternatives

-   to make a correct choice we often need to know many **structural
    parameters** of the input

-   decisions in **previous** steps may influence the range of choices
    in future steps

What can we do for that?

-   Design efficient heuristics:

    -   They run quickly

    -   But do not always compute the optimum solution

-   Design approximation algorithms

    -   an optimum solution is not guaranteed

    -   but it is guaranteed that their output is "not far" from the
        optimum (small approximation ratio)

-   Use randomisation

# Randomised algorithms

-   An algorithm is randomised if its behaviour (output, running time)
    is determined by:

    -   The input and

    -   The values produced by a random generator (correspond to the
        random choices that it makes)

-   If it runs many times with the same input: it has different
    outputs/running times (depending on the random values each time)

# Randomised numbers

-   The procedure $RANDOM(a,b)$:

    -   returns an integer between a and b

    -   each of then with equal probability

    -   every call of RANDOM is independent of the other ones

-   In practice: real randomness is difficult

    -   we use pseudo-random number generators

    -   deterministic algorithms returning number that **look random**

An application of RANDOM(a,b)

-   We are given a graph G with vertices 1.2,\...,n

-   We want to compute the random distance of a pair of vertices in G

Recall

-   The algorithm BFS(G,a,b) computes the distance between the vertices
    a and b in G

-   The randomised algorithm:

    ```python
    a=RANDOM(1,n) # randomly choose the first vertex a
    b=a # initialization
    while b=a
        b=RANDOM(1,n) # randomly choose the second vertex
    return BFS(G,a,b) #compute the distance of a and b
    ```

Another application of RANDOM(a,b)

-   We are given an array A with n numbers

-   we want to permute its elements randomly

How can we do that

-   Key idea

    -   Assign each element A\[i\] of the array A with a "priority"
        P\[i\]

    -   Then sort the elements of A according to these priorities

-   The randomised algorithm:

    ```python
    n = length[A]
    for i = 1 to n
        do P[i]=RANDOM($1,n^3$)
    sort A using P as sort keys
    return A
    ```

# Randomised algorithms

-   In a randomised algorithm:

    -   The input is **not** randomly chosen: only the decisions of the
        algorithm

    -   The running time may depend on its random choices. We calculate
        the "expected running time"

Terminology:

| Randomised algorithms | Average-case analysis                        |
| --------------------- | -------------------------------------------- |
| Make random choices   | No random choices (deterministic algorithms) |
| Input is not random   | Random input                                 |
| expected running time | Average case running time                    |

# Basic probability notions

In a random experiment (e.g. a coin toss):

-   First we define a sample space S

-   Each subset of S is an event

-   Each single element of S is also an elementary event (elementary
    events are also events)

-   We assign to each elementary event $x\in S$ a number
    $Pr(x)\geqslant 0$

    Such that for every event $A=\{x_1,x_2,x_3,...,x_k\}$

    -   $\operatorname { Pr } ( A ) = \operatorname { Pr } \left( x _ { 1 } \right) + \operatorname { Pr } \left( x _ { 2 } \right) + \operatorname { Pr } \left( x _ { 3 } \right) + \ldots + \operatorname { Pr } \left( x _ { k } \right)$

    -   Pr(S)=1 i.e.S is the certain event

The probability of an event shows:

-   How probable is that the experiment has an outcome

-   For two events A and B, if $A\cap B=\varnothing$, then

    -   A and B are called **mutually exclusive** and

    -   $Pr(A\cup B)=Pr(A)+Pr(B)$

-   Two events A and B are independent if:

    -   $Pr(A\cap B)=Pr(A)\cdot Pr(B)$

-   In general, we consider A and B as independent if they correspond to
    random experiments defined on different time and space domains

E.g for the random experiment "two independent tosses of a 'fair'
coin":

-   The sample space: $S = \{ H H , H T , T H , T T \}$

-   The event "one head and one tail is":
    $$
    A=\{HT,TH\}
    $$
    probability
    $$
    Pr(A)=Pr(HT)+Pr(TH)
    $$
    $$
    =\frac{1}{2}\cdot \frac{1}{2} +\frac{1}{2}\cdot \frac{1}{2}=\frac{1}{2}
    $$

*   A random variable X is a function from S to the real numbers

*   The expected value of X is
    $$
    E[X]=\sum_{x\in \mathbb{R}} x\cdot Pr(\{X=x\})
    $$

E.g for the experiment "toss two 'fair' coins":

-   You earn £3 for each head but lose £2 for every tail

-   The random variable is X="your earnings"

-   The expected value of X is:
    $$
    E [ X ] = 6 \cdot P ( H H ) + ( 3 - 2 ) \cdot P ( \{ H T , T H \} ) - 4 \cdot P ( T T )= 6 \cdot ( 1 / 4 ) + 1 \cdot ( 1 / 4 + 1 / 4 ) - 4 \cdot ( 1 / 4 ) = 1
    $$

Theorem: for any two random variables X and Y, the expected value of the
random variable X+Y is

$$
E[X+Y]=E[X]+E[Y]
$$

-   This property is called "linearity of expectation"

-   It is particularly useful for applications

# Randomised algorithms

Two main types of randomised algorithms

-   Las Vegas algorithms

    -   always find the correct solution

    -   the running time varies for every execution

-   Monte Carlo algorithms

    -   not always the correct solution

    -   but we can bound the probability of an incorrect solution

-   Both very useful depending on the application

# Monte Carlo algorithms

For decision problems (answer is YES/NO), there are two kinds of Monte
Carlo algorithms

-   Algorithms with two-sided error:

    -   there is a non zero probability that the answer is wrong, when
        it answers YES and when it answers NO

-   Algorithms with one-sided error:

    -   there is a non zero probability that the answer is wrong, when
        it answers NO

    -   the answer is always correct, when it answers YES

    -   if we run the algorithm repeatedly:

        -   the failure probability becomes very small

        -   the running time increases

# One sided error

-   You have two £1 coins

-   Bob claims that the first one is real and the second is fake

-   You want to verify Bob's claim:

    -   So you ask hum questions

    -   what do you ask

-   Main idea:

    -   if the coins are not the same, you finally believe Bob

    -   if the coins are the same, you will catch Bob lying

-   A Monte-Carlo algorithm:

    -   Put the coins behind your back

    -   Pick one randomly (you know which one you have picked)

    -   ask Bob whether the picked coin is real or fake

-   Why does it work

    -   If the coins are different Bob will always recognise the fake
        one

    -   If the coins are the same:

        -   In this case, Bob lies

        -   He does not know which one you picked

        -   he will guess $\Rightarrow$ he answers incorrectly with
            probability $\frac{1}{2}$

Our decision is "does Bob lie?"

-   if you answer YES

    -   then you caught Bob lying

    -   $\Rightarrow$ you are sure he lies (always correct YES answer)

-   If you answer NO

    -   then you did not catch Bob lying

    -   $\Rightarrow$ either he is honest, or he was just lucky
        (erroneous NO answer with probability $\frac{1}{2}$)

-   If you repeat the experiment k times:

    -   You give an erroneous NO answer with probability $\frac{1}{2^k}$
        i.e. if he is too lucky (all k times)

*   The graph isomorphism problem: "given two graphs $G_1,G_2$, are
    they the same graph?"

*   A hard problem - nobody knows whether an efficient algorithm exists

*   If Bob claims that $G_1$ and $G_2$ are not the same

-   randomly pick one of the graphs

-   ask Bob whether this is $G_1$ or $G_2$

-   similar idea with the coins

$\Rightarrow$ we have a Monte Carlo algorithm with one-sided error for
the problem "graph non-isomorphism"

# Randomised algorithms

-   The behaviour of a randomised algorithm is influenced by random
    decisions

-   If it runs many times with the same input it has different
    outputs/running times

-   Why randomised algorithms?

    -   they are usually simpler to devise

    -   and run faster than deterministic ones

-   Las Vegas algorithms:

    -   Always find the correct solution

    -   The running time varies for every execution

-   Monte Carlo algorithms:

    -   Not always the correct solution

    -   But we can bound the probability of an incorrect solution

-   Both very useful

# Monte Carlo algorithms

-   For decision problems (answer is YES/NO)

    -   algorithms with two sided error - any answer can be wrong

-   Algorithms with one sided error

    -   a YES answer is always correct

    -   a NO answer may be false

-   Examples:

    -   "check Bob's claim that two coins are different"

    -   "graph non-isomorphism problem"

-   What about optimisation problems?

    -   here the answer is a number

    -   not a YES/NO number

# The min-cut problem

-   In a graph two vertices can have 0 or 1 edge between them

-   In a multigraph two vertices can be connected by more edges

    ![image](/img/Year_1/CT/Graphs/Randomised_Algorithms/Aggregate1.webp)

-   A cut in a (multi)graph is a set of edges whose removal disconnects
    it

-   The min-cut problem: given a multigraph, find a cut with the fewest
    edges

-   There exist efficient deterministic algorithms using "network
    flows"

-   Lets try randomisation - a really simple algorithm

-   First, an easy observation:

    -   Let S be a min-cut of a multigraph

    -   If S has an edge between vertices a and b then S has all edges
        between a and b

    -   Why? Since otherwise there exists a smaller cut

-   Contraction of an edge $e=(u,v)$:

    -   merge $u$ and $v$ into a single new vertex "$uv$"

    -   all edges between u and v disappear

    -   any other edge $(w,u)$ or $(w,v)$ of the old vertices $u,v$
        becomes an edge $(w,"uv)$ of the new vertex $"uv"$

![image](/img/Year_1/CT/Graphs/Randomised_Algorithms/contraction.webp)

-   A simple Monte Carol algorithm:

    -   pick randomly an edge and contract it

    -   iterate until only two vertices remain

    -   return the number of edges between these two vertices

-   At every step of the algorithm

    -   decrease the number of vertices by one

    -   $\Rightarrow$ n-2 iterations for a graph with $n$ vertices

-   Does this algorithm **always** find a min-cut? Not always

-   An edge contraction

    -   does not reduce the size of a min cut

    -   sometimes it may increase it

-   Why?

    -   every cut of the graph after the contraction was also a cut
        before the contraction, not the inverse

![image](/img/Year_1/CT/Graphs/Randomised_Algorithms/min-cut.webp)

# The algorithm in action

![image](/img/Year_1/CT/Graphs/Randomised_Algorithms/in_action.webp)

# How good is the solution

-   The input graph has n vertices

-   suppose that the min-cut S has k edges

Lemma: the graph has at least $kn/2$ edges

Proof:

-   If there is a vertex v with less than k neighbours then there is a
    cut with less than k edges

-   This is a contradiction, since the min-cut has k edges and all the
    vertices of the graph have at least k neighbours

-   Now count the neighbours of all vertices and the graph has at least
    $kn/2$ edges

Thus:

-   If we pick randomly an edge in the input graph, this edge will
    belong to the min cut S with probability at most
    $\dfrac{k}{nk/2}=\dfrac{2}{n}$

-   This random edge will not belong to the min cut S with probability
    at least $1-\dfrac{2}{n}$

After i iterations (i.e. i contractions)

-   the current graph has n-i vertices

-   suppose that we did not contract yet any edge of the min cut S

Then, similarly:

-   If we pick randomly an edge in the current graph, this edge will
    belong to the min cut S with probability at most
    $\frac { k } { ( n - i + 1 ) k / 2 } = \frac { 2 } { ( n - i + 1 ) }$

-   This random edge will not belong with the min cut S with probability
    at least $1 - \frac { 2 } { ( n - i + 1 ) }$

Summarising:

-   During all (n-2) iterations of the algorithm, we did not contract
    any edge of the min cut S with probability at least

$$
\left( 1 - \frac { 2 } { n } \right) \cdot \left( 1 - \frac { 2 } { n - 1 } \right) \cdot \left( 1 - \frac { 2 } { n - 2 } \right) \cdot \left( 1 - \frac { 2 } { n - 3 } \right) \cdots \left( 1 - \frac { 2 } { 4 } \right) \cdot \left( 1 - \frac { 2 } { 3 } \right)
$$

$$
= \left( \frac { n - 2 } { n } \right) \cdot \left( \frac { m - 3 } { n - 1 } \right) \cdot \left( \frac { n - 4 } { n - 2 } \right) \cdot \left( \frac { n - 5 } { n - 3 } \right) \cdots \left( \frac { 2 } { 4 } \right) \cdot \left( \frac { 1 } { 3 } \right)
$$

$$
= \frac { 2 } { n ( n - 1 ) } \geq \frac { 2 } { n ^ { 2 } }
$$

That is:

-   At the end of the algorithm, the min-cut S is found with probability
    at least $\dfrac{2}{n^2}$

-   The min cut S is not found with probability at most:

    $$
    1-\dfrac{2}{n^2}
    $$

-   We run this algorithm $x$ times

-   keep the smallest cut that we found

-   The probability that after x times we do not detect the min cut is
    at most $\big(1-\frac{2}{n^2}\big)^x$ (too small)

# The sorting problem

The sorting problem:

-   Given a set of n numbers, sort them in increasing order

-   Many algorithms, the most widely used: quick-sort

    -   Choose a pivot $y\in S$

    -   Partition the elements of $S-y$ into two subsets $S_1,S_2$

        -   every element of $S_1$ is smaller than $y$

        -   every element of $S_2$ is larger than y

    -   recursively sort the sets $S_1$ and $S_2$

    -   output:

        -   Sorted $S_1$, followed by $y$, followed by sorted $S_2$

The main idea of quick-sort: divide and conquer

-   Try to find an element y that splits $S-y$ into two sets $S_1$ and
    $S_2$ of the same size

-   We need to solve two instances of the half size

-   If we choose the worst pivot

    -   i.e.always too large/too small pivot

    -   We need $\mathcal{O}(n^2)$ time for a set S with n numbers (all
        possible comparisons)

-   If we always choose the best pivot:

    -   i.e. always a pivot in the "middle"

    -   We need $\mathcal{O}(n\log n)$ time

-   We get the same running time $\mathcal{O}(n\log n)$

    -   even if $S_1$ and $S_2$ have almost the same size

-   This gives us hope

    -   In every set S of n elements, there exist $n/2$ elements $y$
        that split $S-y$ into two almost equal parts

-   In other words:

    -   If we randomly pick one element $y$, it will be a "good pivot"
        with probability $\frac{1}{2}$

-   Randomised quick sort

    -   exactly as the standard quick sort

    -   but randomly choose the pivot at every step

# Randomised Quick-Sort

-   Always the correct answer (a sorted sequence)

    -   no matter which pivot we chose at every step

    -   our choices influence only the running time

    -   a Las Vegas algorithm

-   The running time is a random variable: the number of comparisons

-   For every $1\leqslant i, j\leqslant n$ define the random variable:

    -   $X_{i,j}$ equals 1 if the ith and jth largest elements of S are
        being compared at some iteration

    -   $X_{i,j}$ equals 0, otherwise

-   The expected running time is
    $E \left[ \sum _ { i = 1 } ^ { n } \sum _ { j = i + 1 } ^ { n } X _ { i , j } \right]$

-   By linearity of expectation, this equals:

    $$
    \sum _ { i = 1 } ^ { n } \sum _ { j = i + 1 } ^ { n } E \left[ X _ { i , j } \right]
    $$

-   We can prove that
    $E \left[ X _ { i , j } \right] = \frac { 2 } { j - i + 1 }$

-   Using that, we can prove that the expected running time is
    $\mathcal{O}(n\log n)$

-   Random Quick-Sort is expected to perform as a Quick Sort that always
    chooses a "good" pivot
