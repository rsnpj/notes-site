---
title: Resolution for Propositional Logic
lecturer: Daniel
---

# Resolution

Recall the rule of inference known as resolution:

![image](/img/Year_1/MCS/Propositional_Logic/Resolution/resolution.webp)

-   Forms the basis of the proof system for propositional logic known as
    **resolution**

However, the basic rule of resolution is a more general one than that
above

![image](/img/Year_1/MCS/Propositional_Logic/Resolution/basic_resolution.webp)

-   The ps and qs are literals - that is, variables or negated variables
    (not necessarily distinct)

-   This is the **only** rule of resolution

This idea can also be implied with just $x$ and $\lnot x$ the empty set
can be inferred as there is a contradiction.

# The proof system Resolution

-   Natural deduction proves theorems starting from scratch, whereas
    resolution takes a given formula and works with it in order to
    decide whether it is a theorem or not

-   In the proof system resolution, we proceed as follows

    -   We are given a propositional formula $\varphi$

    -   We take $\lnot\varphi$ and write it in cnf as
        $C_1\land C_2\land...\land C_m$

    -   We start with the clauses $C_1,C_2,...,C_m$

    -   We continually apply the resolution rule of inference to infer
        new clauses

        -   If we infer the empty clause $\varnothing$, then we halt and
            output that $\varphi$ is a theorem

        -   If we get to the point where we have not inferred the empty
            clause and we cannot infer any new clauses then we halt and
            output that $\varphi$ is not a theorem

-   We have one minor remark

    -   When resolving, we are also allowed to delete the repeated
        literals in any clause

-   Resolution is both sound and complete

    -   if Resolution announces that $\varphi$ is a theorem then
        $\varphi$ is a tautology

    -   if $\varphi$ is a tautology then Resolution announces that
        $\varphi$ is a theorem

# Resolution in action

Consider the propositional formula $\varphi$

![image](/img/Year_1/MCS/Propositional_Logic/Resolution/phi.webp)

So $\lnot \varphi$ is

![image](/img/Year_1/MCS/Propositional_Logic/Resolution/notphi.webp)

So, the set of clauses to which we apply resolution is:

$$
\lnot A \lor \lnot W \lor I \qquad A \lor P \qquad W \lor S \qquad \lnot I\qquad \lnot D \lor \lnot P \qquad \lnot D \lor \lnot S \qquad D
$$

# Resolution in action

So, we have our set of clauses

$$
\lnot A \lor \lnot W \lor I \qquad A \lor P \qquad W \lor S \qquad \lnot I\qquad \lnot D \lor \lnot P \qquad \lnot D \lor \lnot S \qquad D
$$

Now we start resolving

-   $\lnot A\lor \lnot W$ ($\lnot A\lor \lnot W\lor I$ and $\lnot I$)

-   $P\lor \lnot W$ ($\lnot A \lor \lnot W$ and $A\lor P$)

-   $P\lor S$ ($P\lor \lnot W$ and $W\lor S$)

-   $\lnot D \lor S$ ($P\lor S$ and $\lnot D\lor \lnot P$)

-   $\lnot D\lor \lnot D$ ($\lnot D \lor S$ and $\lnot D\lor \lnot S$)

-   $\lnot D$

-   $\varnothing$

So $\varphi$ is a theorem, and so a tautology

# Resolution in action

Let $\varphi$ be the formula
$((p\lor q)\land (\lnot p\lor \lnot q)\lor (r\Rightarrow (p\land q)))\Rightarrow r$

![image](/img/Year_1/MCS/Propositional_Logic/Resolution/action.webp)

Hence, the set of clauses to which we apply resolution is

$$
p\lor q \qquad \lnot p\lor \lnot q \qquad \lnot r\lor p \qquad \lnot r\lor q \qquad \lnot r
$$

Now we start resolving

-   $q\lor\lnot q$ we can ignore this as it will never yield a new clause

-   $p\lor\lnot p$ we can ignore this as it will never yield a new clause

-   $\lnot q \lor \lnot r$

-   $\lnot p\lor \lnot r$

-   $p\lor\lnot r$ we have this phrase already

-   $\lnot r\lor \lnot r$ i.e. $\lnot r$ and we have this clause already

-   $\lnot q \lor \lnot r$ we have this clause already

-   $\lnot r\lor \lnot r$ i.e. $\lnot r$ and we have this clause already

-   No new clauses can be inferred

If you have n non negated clauses and l negated clauses, then the number
of new clauses is $n\times l$

# Is Resolution the silver bullet

-   Resolution works by taking the negation of a formula $\varphi$ we
    wish to prove true and showing that this negation $\lnot \varphi$ is
    unsatisfiable (in essence)

-   One might be inclined to think (from our examples) that resolution
    will always give a "quick" answer as to whether a formula is a
    tautology or not

-   However this is not the case, for the worst case resolution involves
    an exponential number of applications

# Satisfiability vs tautologies

-   SAT-solvers check whether or not a given formula of propositional
    logic is satisfiable, whereas proof systems, such as resolution, aim
    to prove theorems

-   To some extent, these two tasks are different sides of the same coin

-   Let $\varphi$ be some propositional formula

    -   If $\varphi$ is satisfiable

        -   Then there exists a truth assignment making $\varphi$ true

        -   Therefore $\lnot \varphi$ is not a tautology

    -   Conversely, if $\lnot \varphi$ is not a tautology

        -   Then there exists some truth assignment making
            $\lnot\varphi$ false

        -   So $\varphi$ is satisfiable

-   So, $\varphi$ is satisfiable if, and only if $\lnot \varphi$ is not
    a tautology

    -   This leads to strong links between SAT-solving and automated
        theorem proving

# Example 1

-   Let $\varphi$ be the formula
    $\neg ( ( p \lor q ) \land ( \neg p \lor q ) \land ( p \lor \neg q ) \land ( \neg p \lor \neg q ) )$

-   Is $\varphi$ a theorem?

-   In order to prove this using resolution we negate $\varphi$ and put
    it in conjunctive normal form if necessary

-   So $\lnot \varphi$ is the formula
    $( p \lor q ) \land ( \neg p \lor q ) \land ( p \lor \neg q ) \land ( \neg p \lor \neg q )$
    which is in conjunctive normal form already

-   We will now try to apply resolution on $\lnot\varphi$ until

    -   Either we infer the empty clause, which means that
        $\lnot \varphi$ is a contradiction, and hence $\varphi$ is a
        theorem or,

    -   We do not infer the empty clause but at some point we do not
        find any new clauses either; in that case we can find a truth
        assignment that makes $\lnot\varphi$ true, and hence, $\varphi$
        false, which means that $\varphi$ is not a theorem

Applying resolution:

1. $p\lor q$
2. $\lnot p \lor q$
3. $p\lor \lnot q$
4. $\lnot p\lor \lnot q$

-   $q\lor q$ (1 and 2)
-   $q\lor \lnot q$ (2 and 3)
-   $\lnot q \lor \lnot q$ (3 and 4)
-   $\varnothing$
    This implies that $\varphi$ is a theorem

# Example 2

-   Use resolution to prove that if

    -   "It is not raining or I have my umbrella" $\lnot r \lor u$

    -   "I do not have my umbrella or I do not get wet"
        $\lnot u \lor \lnot w$

    -   "It is raining or I do not get wet" $r \lor \lnot w$

    then

    -   I do not get wet

-   A formula $\varphi\Rightarrow\psi$ is logically equivalent to
    $\lnot\varphi\lor\psi$

    -   So that the negation of our formula is $\varphi\land\lnot\psi$

        -   That is
            $$
            (\lnot R\lor U)\land(\lnot U\lor \lnot W)\land (R\lor\lnot W)\land W
            $$

So we must apply resolution on clauses - it is already in cnf so is easy
to do

$$
\lnot R\lor U, \lnot U\lor \lnot W,R\lor\lnot W, W
$$

R - It is raining

U - I have my umbrella

W - I get Wet

$\varphi \Rightarrow \psi$

$\lnot \varphi \lor \psi$

$\lnot(\lnot \varphi \lor \psi)$

$\lnot\lnot \varphi \land \lnot \psi$

$\varphi \land \lnot \psi$

$W, R\lor\lnot W \Rightarrow R$

$W, \lnot U\lor \lnot W \Rightarrow \lnot U$

R is true, so not R is false, not U is true, so U is false. Is a
theorem

$u\lor \lnot W$ (1 and 3)

$\lnot W \lor \lnot W \Rightarrow \lnot W\$ (new 1 and 2)

# Example 3

Applying resolution to the following set of clauses

$$
a\lor b\lor c \qquad a\lor\lnot c\lor d \qquad \lnot a\lor e\lor f \qquad c\lor \lnot e\lor f \qquad c\lor d\lor \lnot f
$$

1.  (1,3) $b\lor c\lor e\lor f$

2.  (2,3) $\lnot c\lor d\lor e \lor f$

3.  (4,n2) $\lnot d \lor f \lor \lnot f$
