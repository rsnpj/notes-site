---
title: Decision Problems
lecturer: Daniel
---

# Optimisation vs Decision Problems

-   A major variation of optimization problems: decision problems

-   Answer is not a value but YES/NO

-   Every optimisation -problem has a decision counterpart

-   An optimisation problem has a fast algorithm iff the corresponding
    decision problem has a fast algorithm

# Decision problems and encodings

The standard way to define a decision problem is to describe a generic
instance and a yes-no question about each instance

**Reachability**:

-   Instance: A finite directed graph G and vertices s and t

-   Question: Is there a path in G from s to t?

To input problems to a computer, each instance must be encoded as a
string of symbols over some alphabet. We need an encoding scheme

To ensure that encoding the problem does not change its essential
nature, an encoding scheme must be concise

-   Represent numbers efficiently

-   Not add unnecessary information

# Languages

An alphabet, $\Sigma$ is a (finite) set of symbols

A string over $\Sigma$ is a finite sequence of symbols from $\Sigma$

A language over $\Sigma$ is any set of strings over $\Sigma$

For a problem $\Pi$ and an encoding scheme e with alphabet $\Sigma$, the
set of all strings corresponding to instances with answer yes is denoted
$\mathscr{L}(\Pi,e)$ and is called the language associated with $\Pi$
and e

For decision problems, we just want to decide whether the (encoding of
a) given instance belongs to the alphabet $\mathscr{L}(\Pi, e)$

# Complexity of Problems

-   The problems encountered so far in this course have all proved to be
    tractable (since we have found fast algorithms for all of them)

-   There are many problems however, which cannot be quickly solved in
    practice, i.e., which are intractable

-   There are many difficulties:

    -   What do we mean by tractable and intractable

    -   Can we define these notions formally

    -   Can we prove that a problem is one but not the other

-   One technique that will prove very useful: showing that one decision
    problem can be transformed(reduced) into another

# Complexity measures

Every decidable problems has a set of algorithms that solved it. The
properties of this set of algorithms:

-   The difficulty of constructing the algorithm

-   The length of the shortest possible algorithm

    -   Static complexity measure

    -   Useful for classifying the complexity of strings, called
        Kolmogorov complexity

-   The efficiency of the most possible algorithm?

    -   Dynamic complexity measure

    -   A numerical function that measures the maximum resources used by
        an algorithm to compute the answer to a given instance

# Dynamic complexity measures

-   The most critical resources are often time/space

-   By considering Turing Machines as our model of computation

<Definition name="Time complexity">
The time complexity of a Turing Machine T is the function $Time_T$ such that $Time_T(x)$ is the number of steps taken by the computation $T(x)$
</Definition>

<Definition name="Space Complexity">
The space complexity of a Turing Machine T is the function $Space_T$ such that $Space_T(x)$ is the number of distinct tape cells visited during the computation $T(x)$
</Definition>

# Equivalence

<Theorem>
An n-vertex graph G has an independent set of size k iff G has a vertex cover of size n-k
</Theorem>

<Corollary>
The decision problems independent set and vertex cover
are equivalent
</Corollary>

# Clique

-   Instance - A graph G and an integer k

-   Question: Does G have a clique of size at least k - i.e. a set of at
    least k vertices that are all adjacent to one another

# Complement

<Definition name="Complement">
The complement of a graph G has the same vertex set, and there is an edge between two vertices u and v in the complement iff there is no edge from u to v in G
</Definition>

<Theorem>

A graph G has an independent set of size k iff its complement $\overline{G}$ has a clique of size k

</Theorem>

<Corollary>
The decision problems independent set and clique are
equivalent
</Corollary>

# Set cover

-   Instance - A set U of n elements, a collection of subsets
    $S_1,S_2,...,S_t$ whose union equals I, and an integer k

-   Question: Does there exist a collection of at most k of these sets
    whose union is equal to all of U

`VERTEX COVER` can be solved using an algorithm for `SET COVER`, but not
the other way round

# Time complexity

As

$$
\log_an=\log_ab \times \log_bn
$$

$\log_\alpha n$ and $\log_\beta n$ are the same when it comes to $\mathcal{O}$

<Definition name="Time complexity">

For any function f, we say that the time complexity of a decidable language $\mathcal{L}$ is $\mathcal{O}(f)$, or $\mathcal{L}$ is decidable in $\mathcal{O}(f)$ time, if there exists a TM T which decides $\mathcal{L}$, and constants $n_0$ and $c$ such that for all inputs x with $|x|>n_0$

$$
Time_T(x)\leqslant c\cdot f(|x|)
$$

</Definition>

# Complexity Classes

<Definition name="Time complexity class Time[f]">

The class of all problems for which there exists an algorithm with time complexity in $\mathcal{O}(f)$

</Definition>

This is sometimes called DTIME\[f\] - for deterministic time

# The complexity class P

<Definition name="P">

$$
\mathbf{P}=\bigcup\_{k \geq 0} T I M E\left[n^{k}\right]
$$

</Definition>

The class P is a reasonable mathematical model of the class of problems
which are tractable or solvable in practice

However, the correspondence is not exact:

-   When the degree of the polynomial is high then the time grows so
    fast that in practice the problem is not solvable

-   The constants may also be very large

# Different models of computation

<Lemma>

We can simulate t steps of k-tape TM with an equivalent one tape TM in
$\mathcal{O}[t^2]$ steps

</Lemma>

<Lemma>

We can simulate t steps of a two-way infinite k-tape machine with an
equivalent k-tape TM in $\mathcal{O}[t]$ steps

Hence the class P is the same for all of these models of computation
(and many others)

</Lemma>

# Different encodings

<Lemma>

For any number n, the length of the encoding of n in base $b_1$ and the
length of the encoding of n in base $b_2$ are related by a constant
factor (provided $b_1,b_2\geqslant 2$)

Hence the class P is the same for these encodings (and many others)

</Lemma>

# Proving a problem is in P

-   The class P is said to be robust - it doesn’t depend on the exact
    details of the computational model or encoding so we don’t need to
    specify all the details of the machine model or even the encoding

-   The most direct way to show that a problem is in P is to give a
    polynomial time algorithm which solves it

-   Even a naive polynomial time algorithm often provides a good insight
    into how the problem can be solved efficiently

-   To find such an algorithm we generally need to identify an approach
    to the problem that is considerably better than brute-force search

# CNF

Some of the most important computational problems concern logical
formulas

A logical formula f is said to be in conjunctive normal form (CNF) if

$$
f=C_1\land...\land C_m
$$

disjunction (OR) of literals

$$
C_i=l_{i1}\lor ... \lor l_{ik}
$$

and a literal is either a variable or its negation

<Definition name="k-CNF">
If a logical formula in CNF has at most k literals per clause then it is in k-CNF
</Definition>

# Satisfiability

<Definition name="Satisfiable">
The logical formula f is satisfiable if there exists an assignment of True and False to the variables of f which makes f true
</Definition>

-   f is True iff all the clauses are True

-   A clause is True iff at least one literal is true

<Problem instance="CNF formula f" question="Is f satisfiable?"/>

<Problem instance="k-CNF formula f" question="Is f satisfiable?" />

## 2 Satisfiability

**Proposition** - 2-Satisfiability is in P

**Proof**:

1.  Declare all clauses unsatisfied and literals unassigned

2.  Select an arbitrary unassigned variable x and assign x the value
    True and $\lnot x$ the value False

3.  Select an unsatisfied clause $l_i\lor l_j$

    1.  If both literals are unassigned, ignore the clause

    2.  If at least one literal is assigned True, declare the clause
        satisfied

    3.  If both are False, restart the algorithm setting x false and
        $\lnot x$ True. If a conflict occurs again, declare
        unsatisfiable

    4.  If one literal is False and the other unassigned, set the other
        to True and its negation to False, and declare the clause
        satisfied

4.  Repeat step 3 until either

    1.  All clauses are satisfied, return satisfiable

    2.  Or all clauses remaining not satisfied (yet) have all their
        variables unassigned. In this case return to step 2

# Polynomial-time reducibility

Another way to show that a problem is in P is to use a reduction

Informally, a problem P is reducible to a problem Q if we can somehow
use methods that solve Q in order to solve P

<Definition name="Polynomially reducible">

A language $\mathcal{L}_1$ is polynomially reducible to $\mathcal{L}_2$, denoted $\mathcal{L}_1\leqslant \mathcal{L}_2$, if a polynomial-time computable function f exists such that

$$
x\in\mathcal{L}_1\Leftrightarrow f(x) \in \mathcal{L}_2
$$

</Definition>

**Lemma**

$$
\mathcal{L}_1\leqslant \mathcal{L}_2 \text{ and } \mathcal{L}_2 \in P \Rightarrow \mathcal{L}_1\in P
$$

Main idea - The composition of polynomials is a polynomial\

**Proof**

-   Let $A_2$ be a polynomial-time algorithm that decides $L_2$

-   Let f be a polynomial-time reduction algorithm from $L_1$ to $L_2$

-   We construct a polynomial-time algorithm $A_1$ that decides $L_1$

    1.  Given input $x\in \{0,1\}^*$, compute $f(x)$ in polynomial time
        (we know that $x\in L_1 \Leftrightarrow f(x)\in L_2$)

    2.  Use algorithm $A_2$ to decide whether $f(x)\in L_2$

    3.  If $f(x)\in L_2$ then output YES; otherwise output NO

# k-Colourability

-   Let $G=(V,E)$ be a graph, with vertices V and edges E

-   Recall that a function $f:V\rightarrow \{1,...,n\}$ is a colouring
    if adjacent vertices are assigned different values (colours)

<Problem name="k-colourability" instance="A graph G" question="Is there a colouring of G using at most k colours?"/>

## 2-Colourability $\leqslant$ 2-Satisfiability

We can reduce 2-Colourability to 2-Satisfiability

-   For each vertex $v_i$ of the graph we create a variable $x_i$

-   For each edge $(v_i,v_j)$ we add two clauses $(x_i\lor x_j)$ and
    $(\lnot x_i \lor \lnot x_j)$

This translation of a 2-colourability problem to a 2-satisfiability
problem is computable in polynomial time. now we check if it satisfies
the reducibility condition:

-   If the graph is 2-colourable, use 2-colouring to assign truth values
    to variables (one colour is true, the other false)

-   If the formula is satisfiable, define the 2-colouring by setting
    true variables to colour 1 and false to colour 2. If two adjacent
    vertices get the same colour then one of the associated clauses is
    not satisfied (contradiction). Thus we have a 2-colouring
