---
title: Buchi Automata
---

A Finite-sate Automaton (FA) consists of

-   A finite input alphabet $\Sigma$

-   A finite set of states Q

-   A transition relation $\Delta\subseteq Q\times \Sigma \times Q$

-   A start state $q_0\in Q$

-   A set of accepting states $F\subseteq Q$

Then

1.  If the input is finite, i.e. in $\Sigma^*$, we have a
    non-deterministic FA (with no $\epsilon$ transitions)

2.  If the input is infinite, i.e. in $\Sigma^\omega$, we have A Buchi
    Automaton

3.  If $\Delta$ is a partial function $Q\times \Sigma \rightarrow Q$, we
    have a Deterministic Automaton

# Acceptance conditions

NFA or DFA accepts a finite word $w_1w_2...w_n\in \Sigma^*$ if there is
a sequence of states $r_0,r_1,r_2,...,r_n$ satisfying the following
conditions

1.  $r_0=q_0$

2.  $(r_i,w_{i+1},r_{i+1})\in \Delta$ for every
    $i,-\leqslant i\leqslant n-1$

3.  $r_n\in F$

Buchi Automaton accepts $w_1w_2...\in \Sigma^\omega$ if there is a
sequence of states $r_0, r_1,r_2,...\in Q^\omega$ satisfying the
following conditions

1.  $r_0=q_0$

2.  $(r_i,w_{i+1},r_{i+1})\in \Delta$ for every $i,i>0$

3.  There are infinitely many $r_i$’s in F

# Regular Languages

**Regular language** - Some DFA/NFA recognises it

<Theorem>
A language is regular iff it could be described by a regular expression
</Theorem>

A regular language/expression is built upon the basic ones, which are
any $s\in \Sigma$, the regular symbol $\epsilon$ or the empty language
$\varnothing$, using the following operations (where A and B are
regular)

1.  $A\cup B$, which is the set-theoretic union

2.  $A\circ B$ (or simply AB) which is $\{ab| a\in A, b\in B\}$

3.  A\*, which is $\{a_1...a_n|a_i\in A, n\geqslant 0\}$

# $\omega$-regular languages

<Definition name="$\omega$ regular language">
{String.raw`
An $\omega$-regular language/expression is built upon regular languages, using the following expressions
1. $A\cup B$, where both A and B are $\omega$-regular
2. $AB$, where A is regular and B is $\omega$-regular
3. $A^\omega$, which is $\{a_1...| a_i\in A\}$, i.e. an infinite sequence of words from A, where A is regular and doesn't contain the empty word
`}
</Definition>

<Theorem>
{String.raw`
An $\omega$-language is $\omega$-regular iff some non-deterministic Buchi Automaton recognises it
`}
</Theorem>

# Limits of Regular Languages

<Definition name="Limit of a regular language">
{String.raw`
Let A be a regular language. The limit of A limA is the language $\{a\in \Sigma^\omega| \text{a has infinitely many prefixes in A}\}$
`}
</Definition>

<Theorem>
{String.raw`
An $\omega$-language is a limit of a regular language iff some deterministic Buchi Automaton recognises it
`}
</Theorem>
