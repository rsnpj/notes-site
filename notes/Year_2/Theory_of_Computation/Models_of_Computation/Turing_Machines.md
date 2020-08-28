---
title: Turing Machines
---

A Turing machine has an infinite tape (memory). There is a finite-state
"program" that controls a tape head. The head can read, write and move
around (in both directions) on the tape.

A typical program instructions: if the finite control is in state $p$
and the head reads $b$, then write $a$, move the head to the left and go
to state $q$

# Formal Definition of TM

A Turing Machine is a 7-tuple
$(Q,\Sigma, \Gamma,\delta,q_0,q_{accept},q_{reject})$

1.  Q is the set of states

2.  $\Sigma$ is the input alphabet not containing the special **blank**
    symbol $\sqcup$

3.  $\Gamma$ is the tape alphabet satisfying $\Sigma \subset \Gamma$ and
    $\sqcup \in \Gamma$

4.  $\delta: Q\times \Gamma \rightarrow Q \times \Gamma \times \{L,R\}$
    is the transition function (If in Q moving to $\Gamma$, replace the
    state and move the head to the **L**eft or **R**ight).This is
    deterministic

5.  $q_0\in Q$ is the start state

6.  $q_{accept} \in Q$ is the accept state, and

7.  $q_{reject}\in Q$ is the reject state

<Important>
{String.raw`
The first $\sqcup$ denotes the start of the blanks
`}
</Important>

# Computation of TM

The tape content is unbounded but always **finite**; the first
(leftmost) blank marks the end of the tape content

A configuration consists of three items:

1.  The current state

2.  The tape content

3.  The head location

The configuration $C_1$ yields the configuration $C_2$ if the TM can
legally go from $C_1$ to $C_2$ in a single step (using the transition
function once)

The start configuration on an input $w\in \Sigma^*$ consists of:

-   The start state $q_0$

-   $w$ as the tape content

-   The head location being the first (leftmost) position of the tape

An accepting or rejecting configuration is a configuration whose state
is $q_{accept}$ ($q_{reject}$,respectively). Accepting and rejecting
configurations are halting configurations.

A TM $\mathscr{M}$ accepts an input $w$ if there is a sequence of
configurations $C_1,C_2,...,C_k$ such that

1.  $C_1$ is the start configuration of $\mathscr{M}$ on input $w$

2.  $C_i$ yields $C_{i+1}$ for $1\leqslant i\leqslant k-1$ (it can move
    from $C_1$ to $C_k$ via valid moves)

3.  $C_k$ is an accepting configuration

The set of string accepted by $\mathscr{M}$ constitutes the language of
$\mathscr{M}$, denoted by $L(\mathscr{M})$

# Turing-Recognisable and Turing-Decidable languages

<Definition name="Turing Recognisable">
{String.raw`
A language $\mathscr{L}$ is Turing-Recognisable, if there is a TM $\mathscr{M}$ that recognises it, i.e. $\mathscr{L}=L(\mathscr{M})$.
`}
</Definition>
Informally it will halt for every input it accepts but will either halt or loop forever on an input it rejects
<Definition name="Turing Decidable">
{String.raw`
A language $\mathscr{L}$ is Turing-Decidable, if there is a TM $\mathscr{M}$ that accepts every $w\in\mathscr{L}$ and reject every $w\notin \mathscr{L}
`}
</Definition>

Informally Halts on all accepting or rejecting inputs with the correct result

<Important>
{String.raw`
If $\mathscr{M}$ recognises $\mathscr{L}$, it may or may not halt on words not in $\mathscr{L}$. However, if $\mathscr{M}$ decides $\mathscr{L}$, it always halts
`}
</Important>

<Important>
The standard terminology used to be "r.e." (stands for recursively enumerable) instead of "Turing-Recognisable" and "recursive" instead of "Turing-Decidable"
</Important>

# Multitape TM

A Multitape TM is an ordinary (single tape) TM with several tapes, each
of them having its own head. The only difference in the formal
definition is the transition function, which is now

$$
\delta: Q \times \Gamma^{k} \rightarrow Q \times \Gamma^{k} \times\{L, R\}^{k}
$$

where $k$ is the number of tapes.

<Theorem>
Every Multitape TM has an equivalent single tape TM
</Theorem>

Put the encoding from each turing machine in sequence, with a special
character to act as a separator between each encoding so that the turing
machine knows to jump.

Add $\dot{a},\dot{b}...$ for all the characters in the language, denote
the position of the head in the original machine.

A single step in the multi tape TM will take many steps in a single tape
TM, up to the total length of all the chunks added together.

# Non-deterministic TM

A non-deterministic TM has a transition function

$$
\delta: Q \times \Gamma \rightarrow \mathscr{P}(Q \times \Gamma \times\{L, R\})
$$

This transition function creates the power set of all options, including
the empty set.

So where in a Deterministic Turing Machine for a given symbol on the
tape and state it will do one thing, a non-deterministic Turing machine
could do any of a number of things.

<Theorem>
Every Non-deterministic TM has an equivalent deterministic TM
</Theorem>

**Proof. Idea:** Consider the tree of all possible computations of the
Non-deterministic TM. Start from the root (the start configuration) and
do a breadth-first search. Accept only if an accepting configuration is
found. Note that:

1.  Depth First Search would not work - might go down forever

2.  Can use a multitape TM to implement the breadth-first search

# Church-Turing Thesis

The intuitive notion of algorithm is equivalent to the mathematical
concept of algorithm defined by Turing Machines (or any other formal
model of computation)

# Universal Turing Machine

**Proposition** - Every TM $\mathscr{M}$ can be encoded as a word over a
finite alphabet, We shall use $\langle\mathscr{M}\rangle$ to denote the
encoding of a Turing machine $\mathscr{M}$

<Theorem>
{String.raw`
There is a TM $\mathscr{U}$ that takes a two-part input, the encoding of a TM $\mathscr{M},\langle\mathscr{M}\rangle$, and a word $w$, and simulate $\mathscr{M}$ on $w$. $\mathscr{U}$ is called a universal turing machine.
`}
</Theorem>

# The Halting Problem

<Definition name="The halting problem">
{String.raw`
Given a (encoding of a) TM $\mathscr{M}$, and a word $w$, does $\mathscr{M}$ terminate on $w$?
`}
</Definition>

**Proposition**: The Halting Problem is **Turing-recognisable**

**Proof**: Run a Universal TM on the pair
$(\langle\mathscr{M}\rangle,w)$. Accept if the computation eventually
terminates.

**Proposition**: The halting problem is not **Turing-decidable**

**Proof**: Assume for contradiction that there is a TM $\mathscr{H}$
that decides the halting problem

$$
\mathscr{H}(\langle\mathscr{M}\rangle, w)=\left\{\begin{array}{ll}{\operatorname{accept}} & {\text { if } \mathscr{M} \text { terminates on } w} \\ {\text { reject }} & {\text { if } \mathscr{M} \text { does not terminate on } w}\end{array}\right
.$$
Consider the TM $\mathscr{D}$ that takes a TM $\mathscr{M}$ as an input
does the following:
$$

\mathscr{D}(\langle\mathscr{M}\rangle)=\left\{\begin{array}{ll}{\operatorname{accept}} & {\text { if } \mathscr{H}(\langle\mathscr{M}\rangle,\langle\mathscr{M}\rangle) \text { rejects }} \\ {\operatorname{loop}} & {\text { if } \mathscr{H}(\langle\mathscr{M}\rangle,\langle\mathscr{M}\rangle) \text { accepts }}\end{array}\right.

$$
What happens when $\mathscr{D}$ runs on its own encoding
$\langle \mathscr{D}\rangle$?! There are two possibilities:

1.  $\mathscr{D}$ terminates on $\langle \mathscr{D} \rangle$. By the
    construction of $\mathscr{D}$, we have that
    $\mathscr{H}(\langle \mathscr{D}\rangle, \langle \mathscr{D} \rangle)$
    rejects, and by the definition of $\mathscr{H}$, it follows that
    $\mathscr{D}$ does not terminate on $\langle \mathscr{D} \rangle$

2.  $\mathscr{D}$ does not terminate on $\langle \mathscr{D} \rangle$.
    By the construction of $\mathscr{D}$, we have that
    $\mathscr{H}(\langle \mathscr{D}\rangle, \langle \mathscr{D} \rangle)$
    accepts, and by the definition of $\mathscr{H}$, it follows that
    $\mathscr{D}$ terminates on $\langle \mathscr{D}\rangle$

# Turing-Recognisable vs Turing-Decidable

<Theorem>
{String.raw`
A language $\mathscr{L}$ is Turing-Decidable iff both $\mathscr{L}$ and its complement $\overline{\mathscr{L}}$ are Turing-recognisable
`}
</Theorem>

**Proof (of the "interesting" direction only)**: Suppose $\mathscr{M}_1$
recognises $\mathscr{L}$ and $\mathscr{M}_2$ recognises
$\overline{\mathscr{L}}$. On an input $w$, run $\mathscr{M}_1$ and
$\mathscr{M}_2$ "in parallel" (i.e. simulate alternating steps of
$\mathscr{M}_1$ and $\mathscr{M}_2$ on a multitape TM). Either
$\mathscr{M}_1$ or $\mathscr{M}_2$ must eventually accept; accept it if
$\mathscr{M}_1$ accepts and reject it is $\mathscr{M}_2$ accepts
$$
