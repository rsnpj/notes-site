---
title: Linear Temporal Logic
---

# Intuition

We have a Boolean state (or world), in which a number of atomic
propositions (AP) are true or false

We’d like to reason about discrete linear time, which is an infinite
sequence of states $A_0,A_1....$ with state $A_0$ at time 0 being the
current state (thus any propositional formula over the AP talks about
$A_0$)

We’d next line to add temporal modalities, such as:

-   always A - $\square A$

-   eventually A - $\diamond A$

-   next A - $\circ A$

-   etc

These let us express other natural temporal properties such as
infinitely often a - $\square\diamond a$

# Syntax of LTL

We are given a finite set AP of atomic propositions (boolean variables),
Boolean connectives plus two temporal modalities:

-   $\circ$ - next

-   $U$ - until

A formula in LTL is defined by the following grammar (in which brackets
are omitted)

$$
\varphi:=\text { true }|a| \varphi_{1} \wedge \varphi_{2}|\neg \varphi| \bigcirc \varphi | \varphi_{1} U \varphi_{2}
$$

where $a\in AP$ and $\varphi_1,\varphi_2$ are LTL formulae

Other modalities can be expressed, e.g.

$$
\diamond a \stackrel{\text { def }}{=} \text { trueUa }
$$

$$
\square a \stackrel{\text { def }}{=} \neg \diamond \neg a
$$

# Intuitive statements

![image](/img/Year_2/Theory_of_Computation/MOC/LTL/Intuitive_statements.png)

# Formal Semantics

A world is labelled by the AP that are true in it, so it is just a
letter from the alphabet $2^{AP}$ (the set of all subsets of AP)

A word $\sigma$ is an infinite sequence of worlds, i.e.
$\sigma \in (2^{AP})^\omega$

The satisfaction relation, $\sigma \models \varphi$ where
$\sigma = A_0A_1...$ is a word and $\varphi$ is a formula, recursively
defined by

$$
\begin{array}{ll}
\sigma \models true &  \\
\sigma \models a & \text{iff }  a\in A_0\\
\sigma \models \varphi_1 \land \varphi_2 & \text{iff } \sigma \models \varphi_1 \text{ and } \sigma \models \varphi_2\\
\sigma\models\lnot\varphi & \text{iff } \sigma\not\models \varphi\\
\sigma\models\circ \varphi & \text{iff } A_1\ldots \models \varphi\\
\sigma\models\varphi_1 \cup \varphi_2 & \text{iff there is } i\leqslant s.t. A_i...\models \varphi_2 \text{ and } A_j...\models \varphi_2 \text{ for all } 0\leqslant j<i
\end{array}
$$

Note here that the bottom line feels like it should be phi 1 and phi 2, but this was what Stefan said and I will follow him blindly into the darkness.

The set of all words that satisfy a formula $\varphi$ is called
$Words(\varphi)$

# Transition Systems

A transition system TS has:

1.  A finite set of states S

2.  A transition relation $\rightarrow \subseteq S\times S$, which is
    left-total (for every $s_1\in S$, there is $s_2\in S$ such that
    $s_1\rightarrow s_2$)

3.  A set of initial states $I\subseteq S$

4.  A finite set of atomic propositions AP

5.  A labelling function $L:S\rightarrow 2^{AP}$

The transitions may be labelled by a finite set of actions Act, in which
case the transition relation becomes
$\rightarrow \subseteq S\times Act \times S$

# Execution of a TS

A run of TS is an infinite sequence of states

$$
S_0\rightarrow s_1 \rightarrow ...
$$

where $s_0\in I$, which produces an infinite trace $\sigma \in (2^{AP})^\omega$,
$\sigma=L(s_0)L(s_2...)$

The set of all possible traces of the TS is called $Traces(TS)$

Finally, TS satisfies $\varphi$, $TS\models \varphi$, if
$Traces(TS)\subseteq Words(\varphi)$ i.e. if each trace of the TS
satisfies the formula $\varphi$

Thus is is possible that $TS\not\models \varphi$ and
$TS \not\models \lnot \varphi$

# Model checking Linear Temporal Logic

## Setup and high-level solution

We are given a Transition System $\tau$ and an LTL $\varphi$, both over
the same set of atomic propositions AP. The task is to decide if
$\tau\models\varphi$

That is, if all runs of $\tau$ satisfy $\varphi$, i.e.
$Traces(\tau)\subseteq Words(\varphi)$.

Equivalently

$$
Traces(\tau)\cap \big((2^{AP})^\omega \backslash Words(\varphi)\big)=\varnothing
$$

This is the same as

$$
Traces(\tau)\cap Words(\lnot \phi)=\varnothing
$$

So if both the runs of $\tau$ and the models of $\varphi$ are
represented by Buchi Automata, we can construct the intersection and
check for emptiness. If it is empty, reply that $\tau\models\varphi$,
otherwise return $a,b\in (2^{AP})^*$ such that $ab^\omega$ is a run of
$\tau$ that falsifies $\varphi$

## Difficulties of operations on BA

1.  **Transforming a TS into a Buchi Automaton** - easy - move each
    label from the state onto all outgoing transitions and introduce a
    new start state (of the automaton) instead of multiple ones (of the
    TS)

2.  **Constructing the intersection of two BA** - easy - take the
    product of the two BA and making sure that we alternate infinitely
    often between accepting states from the two

3.  **Checking a BA for emptiness** - easy - check if there is a
    non-trivial strongly connected component that contains an accepting
    state and is reachable from the start state

4.  **Transforming an LTL formulae into an equivalent BA** - difficult -
    Translate it into a generalised BA that has multiple sets of
    accepting states and the acceptance condition is that a state form
    each set is visited infinitely often. A GBA is however easily
    transformed into an equivalent BA

5.  **Negating a BA** - Difficult

## LTL to Buchi

### States

A state has two components

1.  A subset of the AP (that are true; all the other are false) that
    records the current world, which is the last input seen

2.  A subset of all subformulae of the $\varphi$ that should be true in
    the future, from this state onward

-   A state must be propositionally consistent. This takes care of all
    boolean connectives

### Transitions

A transition from $s_1$ into $s_2$ labelled by $a\in 2^{AP}$ is added if

1.  The label $a$ matches the first component of the state $s_2$

2.  The state $s_1$ has the subformula $\circ\psi$ iff the state $s_2$
    has the subformula (or AP) $\psi$ - this takes care of the Next
    operator

3.  Whether the state $s_2$ has the subformula $\varphi_1\cup \varphi_2$

    1.  The state $s_1$ has $\varphi_2$, or

    2.  The state $s_1$ has $\varphi_1$ and the state $s_2$ has
        $\varphi_1\cup \varphi_2$

    This partly takes care of the until operator as it can be expanded
    as follows

    $$
    \varphi_{1} \cup \varphi_{2} \rightarrow \varphi_{2} \vee\left(\varphi_{1} \wedge \bigcirc\left(\varphi_{1} \cup \varphi_{2}\right)\right)
    $$

### Acceptance and Start

The expansion
$\varphi_{1} \cup \varphi_{2} \rightarrow \varphi_{2} \vee\left(\varphi_{1} \wedge \bigcirc\left(\varphi_{1} \cup \varphi_{2}\right)\right)$
doesn’t guarantee that $\varphi_2$ eventually happens. Thus, any
infinite run that always has $\varphi_{1}\cup\varphi_{2}$ but ever
$\varphi_{2}$ is inconsistent. We can prevent it, though, by insisting
that every run has states that have $\varphi_{2}$ or haven’t
$\varphi_{1}\cup \varphi_{2}$ infinitely often.
