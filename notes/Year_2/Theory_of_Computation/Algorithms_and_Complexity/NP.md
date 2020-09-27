---
title: The Complexity Class NP
lecturer: Daniel
---

# Certificates

Every yes-instance of an NP problem has a short and easily checkable
certificate, for example an assignment for satisfiability

<Definition name="Certificate">
A potential solution, it may be correct or incorrect
</Definition>

# Verifiers

<Definition name="Verifier">
{String.raw`
An acceptor machine (FSM with accepting states) V which halts on all inputs is called a verifier for a language $\mathcal{L}$ if
$$
\mathcal{L}=\{w| V \text{accepts "w; c" for some string c}\}
$$
`}
</Definition>

-   w;c just means a problem certificate pair

-   The string c is called a certificate (or witness) for w

-   A verifier is said to be polynomial-time if it is a polynomial-time
    TM, and there is a polynomial $p(x)$ such that, for any
    $w\in \mathcal{L}$, there is a certificate c with
    $|c|\leqslant p(|w|)$

# The class NP

<Definition name="NP">
The class of languages that have polynomial-time verifiers is called NP
</Definition>

<Problem name="Composite number" instance="A positive integer k" question="Are there integers $u,v>1$ such that $u\cdot v=k$"/>

<Problem name="Subset sum" instance="A collection of positive integers $S=\{a_1,...,a_k\}$ and a target integer t" question="Is there a subset $T\subseteq S$ such that $\sum_{i\in T}a_i=t$" />

# Problems (probably) not in NP

<Problem name="No Hamiltonian Cycle" instance="A graph G" question="Is it true that G has no Hamiltonian cycle?"/>

<Problem name="Checkers" instance="An integer n and a position in checkers on $n\times n$ board" question="Is it a winning position for white?"/>

# Nondeterministic Machines

We can get an alternative definition of the class NP by considering
non-deterministic machines.

Recall that if NT is a non-deterministic Turing Machine, then NT(x)
denotes the tree of configurations which can be entered with input x,
and NT accepts x if there is some accepting path in NT(x).

<Definition name="Time complexity">
{String.raw`
The time complexity of a non-deterministic Turing Machine NT is the function $NTime_{NT}$ such that $NTime_{NT}(x)$ is the number of steps in the shortest accepting path $NT(x)$ is there is one, otherwise it is the number of steps in the shortest rejecting path
`}
</Definition>

# Non-Deterministic time complexity

<Definition name="Non-deterministic time complexity">
{String.raw`
For any function f, we say that the non-deterministic time complexity of a decidable language $\mathcal{L}$ is $\mathcal{O}(f)$ is there exists a non-deterministic TM NT which decides $\mathcal{L}$, and constants $n_0$, and $c$ such that for all inputs $x$ with $|x|>n_0$
$$
NTime_{NT}(x)\leqslant c\cdot f(|x|)
$$
`}
</Definition>

<Definition name="Non-deterministic time complexity class">
{String.raw`
The non-deterministic time complexity class NTIME[f] is defined to be the class of all problems (i.e. languages), for which there exists an algorithm with non-deterministic time complexity in $\mathcal{O}(f)$.
`}
</Definition>

# Alternative NP Definition

$$
\mathrm{NP}=\bigcup_{k \geq 0} N T M E\left[n^{k}\right]
$$

Proof:

-   If $\mathcal{L}\in NTIME[n^k]$, then there is a non-deterministic
    machine NT such that $x\in\mathcal{L}$ iff there is an accepting
    computation path in $NT(x)$. Furthermore, the length of these paths
    is $\mathcal{O}(|x|^k)$

-   Using (some encoding of) these computation paths as the
    certificates, we can construct a polynomial time verifier for
    $\mathcal{L}$ which simply checks that each step of the computation
    path is valid

-   Conversely, if $\mathcal{L}$ has a polynomial-time verifier V, then
    we can construct a non-deterministic machine that first "guesses"
    the value of the certificate, and then simulates V with that
    certificate

-   Since the length of this certificate is polynomial in the length of
    the input, this machine is a non-deterministic-polynomial-time
    decision procedure for $\mathcal{L}$

# Complete Problems

-   Any complexity class can be partitioned into equivalence classes via
    polynomial time reduction - each class contains problems that are
    reducible to each other

-   These equivalence classes are partially ordered by reduction

-   Problems in the maximal class are called complete

# NP-completeness

-   To show that $\mathcal{L}$ is NP-complete we must show that every
    language in NP can be reduced to $\mathcal{L}$ in polynomial time

-   However once we have one NP-complete language $\mathcal{L}_0$, we
    can show any other language $\mathcal{L}$ is NP complete by showing
    that $\mathcal{L}_0\leqslant \mathcal{L}$

# Ladner’s theorem

<Theorem>
{String.raw`
If $P\neq NP$ then NP contains infinitely many (polynomial time) inequivalent problems
`}
</Theorem>

-   This implies that unless P=NP, the class NP contains (infinitely
    many) problems that are neither in P nor NP-complete. Such problems
    are called NP-intermediate

# Linear Programming

<Problem name="Linear Programming" instance="Integer vectors $V_i=(v_1^i,...,v_n^i), 1\leqslant i\leqslant m, D=(d_1,...,d_n), C=(c_1,...,c_n)$ and an integer B" question="Is there a rational vector $X=(x_1,...,x_n)$ such that $V_i\cdot X\leqslant d_i$ for all $1\leqslant i\leqslant m$ and such that $C\cdot X\geqslant B$"/>

-   This is in P, but the same problems where X is required to be an
    integer vector is NP-complete

# Primes/composite

<Problem name="Composite" instance="Positive integer K" question="Is K composite?"/>

-   Recently proven that it is in P

# Graph Isomorphism

<Problem name="Graph Isomorphism" instance="Two undirected graphs $G=(V_G,E_G)$ and $H=(V_H,E_H)$" question="Are G and H isomorphic, i.e., is there a bijection $f:V_G\rightarrow V_H$ such that $(u,v)\in E_G$ iff $(f(u),f(g))\in E_H$?"/>

-   Currently the main candidate for NP-intermediate
