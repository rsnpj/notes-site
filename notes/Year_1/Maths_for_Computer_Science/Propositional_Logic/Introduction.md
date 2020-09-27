---
title: Fundamentals of Propositional Logic
lecturer: Daniel
---

# The Rudiments of Propositional Logic

Propositional Logic:

-   The most fundamental logic, lying at the heart of many other things

-   Formalises day-to-day, common sense reasoning

Key to propositional logic are **propositions**:

-   Declarative sentences can be either **true** or **false**

Propositions are represented by **propositional variables** (**Boolean
variables, atoms**)

-   Usually letters such as **x,Y,a** or subscripted letters such as
    $\mathbf{x_2,Y_0,a_1}$

-   Which can take a truth value T (true) or F(false)

Syntax\
New propositions called **formulae** or **Boolean formulae** or
**propositional formulae** or **compound propositions** are formed from
propositional variables and formulae by the use of logical operators

-   $\land$ - conjunction(and)

-   $\lor$ - disjunction(or)

-   $\lnot$ - negation(not)

-   $\Rightarrow$ - implies (if left statement true, then right
    statement must be true, if LHS false, whole statement becomes true)

-   $\Leftrightarrow$ - if and only if (iff)

# Some formulae

## Construction

The operators $\land, \lor , \Rightarrow$ and $\Leftrightarrow$ take two
propositional formulae $\varphi$ and $\psi$

The operator $\lnot$ takes one propositional formula $\varphi$ and
yields a new one

-   $\lnot\varphi$

## Use of parentheses

$(\varphi \land \psi)\lor\chi$ means first build $\varphi\land\psi$ and
then build $(\varphi \land \psi)\lor\chi$\
$\varphi \land (\psi\lor\chi)$ means first build $\psi\lor\chi$ and then
build $\varphi \land (\psi\lor\chi)$

## Some typical well formed formulae

$$\lnot((\lnot b\land a)\Rightarrow(c\lor\lnot d))$$
$$((a\land\lnot a)\lor((b\lor c)\lor d))\Leftrightarrow d$$
$$(((a\Rightarrow b)\Rightarrow c)\Rightarrow d)$$

# Semantics of propositional logic

Semantics: all propositional variables take the value **T(True)** or
**F(false)**

-   The value of a formula under some **truth assignment** is
    ascertained by using the **truth tables** for the above logical
    connectives

The truth tables for our logical connectives are as follows:

| p   | q   | $p\land q$ | $p\lor q$ | $\lnot p$ | $p\Rightarrow q$ | $p\Leftrightarrow q$ |
| --- | --- | ---------- | --------- | --------- | ---------------- | -------------------- |
| T   | T   | T          | T         | F         | T                | T                    |
| T   | F   | F          | T         | F         | F                | F                    |
| F   | T   | F          | T         | T         | T                | F                    |
| F   | F   | F          | F         | T         | T                | T                    |

In order to build the truth table of a formula we decompose the formula
into sub formulae e.g.:

| p   | q   | ((p | $\land$ | $\lnot$ | q)  | $\lor$ | p)  | $\land$ | $\lnot$ | (p  | $\lor$ | $\lnot$ | q)  |
| --- | --- | --- | ------- | ------- | --- | ------ | --- | ------- | ------- | --- | ------ | ------- | --- |
| T   | T   | T   | F       | F       | T   | T      | T   | F       | F       | T   | T      | F       | T   |
| T   | F   | T   | T       | T       | F   | T      | T   | F       | F       | T   | T      | T       | F   |
| F   | T   | F   | F       | F       | T   | F      | F   | F       | T       | F   | F      | F       | T   |
| F   | F   | F   | F       | T       | F   | F      | F   | F       | F       | F   | T      | T       | F   |

While this looks very complicated, just follow the logic through and it
is simple to do.

# Some basic notation

If we have a propositional formula $\varphi(x_1,x_2,...,x_n)$ then we
can call an assignment f of either **T** or **F** to each
$x_1,x_2,...,x_n$ i.e. a function

$$
f:\{x_1,x_2,...,x_n\}\rightarrow \{T,F\}
$$

a **truth assignment (interpretation, valuation)** for $\varphi$

We say that $\varphi$ **evaluates** to **T**(with respective to **F**
under f. If the row of the truth table for $\varphi$ corresponding to
**f** evaluates to **T**(with respect to **F**.

for a set of inputs f, if a formula with these inputs comes to true,
then f is a satisfying truth assignment of $\varphi$

$\varphi$ is the formula under which the inputs f are put under, for
example $p\land q$

If **f** evaluates $\varphi$ to **T** then f **satisfies** $\varphi$ or
is a **satisfying truth assignment of** $\varphi$ or a **model** of
$\varphi$

If $\varphi$ evaluates to **T** for every f then $\varphi$ is a
**tautology**

If $\varphi$ evaluates to **F** for every f then $\varphi$ is a
**contradiction**

A **literal** is either a propositional variable, say **x**, or the
negation of a propositional variable, say $\lnot$x

# Logical equivalence

Steps in a mathematical proof are often just the replacement of one
statement by another (equivalent) statement which says the same thing
e.g.
"If I don't explain this clearly then the students won't understand"
is the same thing as

"Either I explain this clearly or the students won't understand"

To see this, denote the sub-statement "I don't explain this clearly"
as **X** and denote the sub statement "the students won't understand" as **Y**

The former statement is thus $X\Rightarrow Y$ and the latter:

| X   | Y   | X   | $\Rightarrow$ | Y   | $\lnot$ | X   | $\lor$ | Y   |
| --- | --- | --- | ------------- | --- | ------- | --- | ------ | --- |
| T   | T   | T   | **T**         | T   | F       | T   | **T**  | T   |
| T   | F   | T   | **F**         | F   | F       | T   | **F**  | F   |
| F   | T   | F   | **T**         | T   | T       | F   | **T**  | T   |
| F   | F   | F   | **T**         | F   | T       | F   | **T**  | F   |

We say that the two propositional formulae are **(logically)**
equivalent if they have identical truth tables

If $\varphi$ and $\psi$ are equivalent then we write $\varphi\equiv\psi$

# A spot of practice

The **exclusive-OR** is written $X\oplus Y$ and if **true** iff exactly
one of **X** and **Y** is **true**

_Prove that $X\oplus Y$ is logically equivalent to both
$(X\land\lnot Y)\lor(\lnot X\land Y)$ and $\lnot(X\Leftrightarrow Y)$_

| X   | Y   | X   | $\oplus$ | Y   | (X  | $\land$ | $\lnot$ | Y)  | $\lor$ | $(\lnot$ | X   | $\land$ | Y   | $\lnot$ | (X  | $\Leftrightarrow$ | Y)  |
| --- | --- | --- | -------- | --- | --- | ------- | ------- | --- | ------ | -------- | --- | ------- | --- | ------- | --- | ----------------- | --- |
| T   | T   | T   | **F**    | T   | T   | F       | F       | T   | **F**  | F        | T   | F       | T   | **F**   | T   | T                 | T   |
| T   | F   | T   | **T**    | F   | T   | T       | T       | F   | **T**  | F        | T   | F       | F   | **T**   | T   | F                 | F   |
| F   | T   | F   | **T**    | T   | F   | F       | F       | T   | **T**  | T        | F   | T       | T   | **T**   | F   | F                 | T   |
| F   | F   | F   | **F**    | F   | F   | F       | T       | F   | **F**  | T        | F   | F       | F   | **F**   | F   | T                 | F   |

# De Morgan's Laws

These are two very useful logical equivalences known as De Morgan's
Laws

**De Morgan's Laws** are:

-   $\lnot(X\land Y)\equiv \lnot X\lor\lnot Y$

-   $\lnot(X\lor Y)\equiv \lnot X\land\lnot Y$

These formulae are indeed equivalences:

| X   | Y   | $\lnot$ | (X  | $\land$ | Y)  | $\lnot$ | X   | $\lor$ | $\lnot$ | Y   | $\lnot$ | (X  | $\lor$ | Y)  | $\lnot$ | X   | $\land$ | $\lnot$ | y   |
| --- | --- | ------- | --- | ------- | --- | ------- | --- | ------ | ------- | --- | ------- | --- | ------ | --- | ------- | --- | ------- | ------- | --- |
| T   | T   | **F**   | T   | T       | T   | F       | T   | **F**  | F       | T   | **F**   | T   | T      | T   | F       | T   | **F**   | F       | T   |
| T   | F   | **T**   | T   | F       | F   | F       | T   | **T**  | T       | F   | **F**   | T   | T      | F   | F       | T   | **F**   | T       | F   |
| F   | T   | **T**   | F   | F       | T   | T       | F   | **T**  | F       | T   | **F**   | F   | T      | T   | T       | F   | **F**   | F       | T   |
| F   | F   | **T**   | F   | F       | F   | T       | F   | **T**  | T       | F   | **T**   | F   | F      | F   | T       | F   | **T**   | T       | F   |

-   De Morgan's Laws can be applied not just to variables, but to
    formulae $\varphi$ and $\psi$

-   De Morgan's Laws are often used to simplify formulae with regard to
    negations

# Applying De Morgan's Laws

In fact, not only can De Morgan's Laws be applied to formula, they can
be applied to **sub-formulae** within a formula

Take the propositional formula:

$$
\lnot(p\lor\lnot(q\land\lnot p))\land\lnot(p\Rightarrow q)
$$

and the sub formula

$$
\lnot(q\land\lnot p)
$$

By De Morgan's Laws

$$
\lnot(q\land\lnot p)\equiv \lnot q \lor \lnot \lnot p\equiv \lnot q \lor p
$$

So:

$$
\lnot(p\lor \lnot(q\land\lnot p))\land \lnot(p\Rightarrow q)\equiv \lnot(p\lor(\lnot q \lor p))\land \lnot (p\Rightarrow q)
$$

Indeed, we can always replace any sub-formula of some propositional
formula with an **equivalent formula** without affecting the
truth(table) of the original.

# A spot of practice

Consider $\lnot(p\lor\lnot(q\land\lnot p))\land \lnot(p\Rightarrow q)$

Can we manipulate it so as to simplify it?

| Formula                                                                    | Rule                              |
| -------------------------------------------------------------------------- | --------------------------------- |
| $\lnot(p\lor\lnot(q\land\lnot p))\land \lnot (p\Rightarrow q)$             | Apply De Morgan's laws            |
| $\lnot(p\lor(\lnot q\lor \lnot\lnot p))\land \lnot(p\Rightarrow q)$        | Remove double negation            |
| $\lnot(p\lor(\lnot q \lor p))\land \lnot(p\Rightarrow q)$                  | apply De Morgan's laws            |
| $(\lnot p \land \lnot(\lnot q \land p)) \land \lnot (p\Rightarrow q)$      | apply De Morgan's laws            |
| $(\lnot p \land (\lnot\lnot q \land \lnot p)) \land \lnot(p\Rightarrow q)$ | Remove double negation            |
| $(\lnot p \land (q \land \lnot p)) \land \lnot (p\Rightarrow q)$           | $\Rightarrow$ using $\lor, \lnot$ |
| $(\lnot p \land (q \land \lnot p)) \land \lnot(\lnot p \lor q)$            | apply De Morgan's Laws            |
| $(\lnot p \land (q \land \lnot p)) \land (\lnot\lnot p \land \lnot q)$     | remove double negation            |
| $(\lnot p \land (q \land \lnot p)) \land p(\land \lnot q)$                 | Associativity of $\land$          |
| $(\lnot p \land q \land \lnot p) \land (p \land \lnot q$                   | Associativity of $\land$          |
| $\lnot p \land q \land \lnot p \land p \land \lnot q$                      | Commutativity of $\land$          |
| $\lnot p \land \lnot p \land p \land q \land \lnot q$                      | $X\land \lnot X\equiv F$          |
| $\lnot p \land F \land q \land \lnot q$                                    | $F\land \varphi \equiv F$         |
| $F$                                                                        |                                   |

# Generalised De Morgan's Laws

We can actually generalise De Morgan's laws so that negations can be
"pushed inside" conjunction/disjunctions of more than two literals

To do this we apply De Morgan's laws to sub formulae of a formula

Consider $\lnot(X\lor Y\lor Z)$
Rewrite this formula as $\lnot(X\lor(Y\lor Z))$ and denote $Y\lor Z$ by
$\varphi$
Applying De Morgan's laws to $\lnot(X\lor \varphi)$

# Some rules

$$
(p\land q)\land r \equiv p\land (q \land r)
$$

$$
(p \lor q)\lor r \equiv p \lor (q \lor r)
$$

$$
p \land \lnot p \equiv F
$$

# Distribution laws

Whereas De Morgan's Laws allow us to simplify formulae with respect to
negations we often have "combinations" of disjunctions and
conjunctions.

The Distributive Law of Disjunction over Conjunction is:\

$$
p\lor (q\land r)\equiv (p\lor q)\land (p\lor r)
$$

And the **Distributive law of conjunction over disjunction is**

$$
p\land(q\lor r)\equiv (p\land q)\lor (p\land r)
$$

Just as before there are the **generalised Distributive laws**

$$
X\land(Y_1\lor Y_2 \lor ... \lor Y_n)\equiv (X\land Y_1)\lor (X\land Y_2)\lor ... \lor (X\land Y_n)
$$

$$
X\lor (Y_1\land Y_2 \land ...\land Y_n)\equiv (X\lor Y_1)\land (X\lor Y_2)\land ... \land (X\lor Y_n)
$$

Of course we can apply these laws to combinations of formulae and to
sub-formulae not just with propositional variables.

# Functional Completeness

We defined propositional logic using the connectives:
$\land \lor \lnot \Rightarrow \Leftrightarrow$, but we could have chosen
other connectives

We say that a set C of logical connectives is **functionally complete**
if any propositional formula is equivalent to one constructed using only
the connectives from C. - This is kind of like Turing complete for
logic

In fact $\land \lor\lnot$ is functionally complete

-   Let $\varphi$ be a propositional formula involving the variables
    $p_1,p_2,...,p_n$

-   Build the truth table for $\varphi$ and let f be some truth
    assignment that evaluates to **true**

-   Suppose that in this truth assignment f each $p_i$ has the truth
    value of $v_i$

-   Build a conjunction $\chi_f$ of literals as follows: for each i

    -   if $v_i$ is **true** then include the literal $p_i$ in the
        conjunction $\chi_f$

    -   if $v_i$ is **false** then include the literal $\lnot p_i$ in
        the conjunction $\chi_f$

## Example

Consider the following truth table for $\varphi$

| p   | q   | r   | s   | $\varphi$ |
| --- | --- | --- | --- | --------- |
| T   | T   | T   | T   | F         |
| T   | T   | T   | F   | F         |
| T   | T   | F   | T   | **T**     |
| T   | T   | F   | F   | F         |
| T   | F   | T   | T   | F         |
| T   | F   | T   | F   | F         |
| T   | F   | F   | T   | **T**     |
| T   | F   | F   | F   | **T**     |
| F   | T   | T   | T   | F         |
| F   | T   | T   | F   | F         |
| F   | T   | T   | F   | F         |
| F   | T   | F   | T   | F         |
| F   | T   | F   | F   | **T**     |
| F   | F   | T   | T   | F         |
| F   | F   | T   | F   | F         |
| F   | F   | F   | T   | F         |
| F   | F   | F   | F   | **T**     |

We consider each true statement as $f_1$ through to $f_5$

So

-   $\chi_{f_1} = p \land q \land \lnot r \land s$
-   $\chi_{f_2} = p \land \lnot q \land \lnot r \land s$
-   $\chi_{f_3} = p \land q \land \lnot r \land \lnot s$
-   $\chi_{f_4} = \lnot p \land q \land \lnot r \land \lnot s$
-   $\chi_{f_5} = \lnot p \land \lnot q \land \lnot r \land \lnot s$

So $\varphi$ is the $\lor$ of all of these

-   $f_1$ can be specified by writing a truth assignment
    $p\land q\land \lnot r \land s$

-   The disjunction can then be written as the lor of all the inputs
    that make it true, so $\psi={\chi_f}_1\lor...$

-   Only in the case of truth assignment $f_1$ will $\chi_1$ be true and
    etc for the rest of the fs

-   So this can be used to show that two truth tables are exactly the
    same, and so that $\land \lor \lnot$ is **functionally complete**

## More on Functional Completeness

-   Now let $\psi$ be the disjunction of all those conjunctions $\chi_f$
    we have just built. Remember, we only build disjunctions
    corresponding to the rows of the truth table evaluating to **true**

-   We claim that $\varphi$ and $\psi$ are logically equivalent

    -   Suppose that f is some truth statement making $\varphi$ true, so
        we have indeed built the conjunction $\chi_f$

    -   Key Point: The only truth assignment making the conjunction
        $\chi_f$ true is the truth assignment f itself

    -   In particular the truth assignment f must make $\chi_f$ true

        -   For example with regard to the truth assignment f in the
            example $\chi_f$ is

            $p_1\land \lnot p_2 \land ... \land \lnot p_n$

            Which is made **true** only by the truth assignment f

    -   Hence, f makes $\psi$ true

-   Conversely

    -   Suppose that g is some truth assignment making $\psi$ true

        -   So at least one conjunct $\chi_f$ say, is made **true** by g

    -   But the only truth assignment making $\chi_f$ true is f

        -   Hence, f=g

    -   The reason $\chi_f$ appears as a conjunct is because f makes
        $\varphi$ true

        -   So g=f is a truth assignment making $\varphi$ true

-   Consequently, for any truth assignment f

    -   f satisfies $\varphi$ if, and only if, f satisfies $\psi$

        -   That is, $\varphi\equiv\psi$

-   Our proof yields even more

    -   Every formula of propositional logic is equivalent to a formula
        in **disjunctive normal form**

        -   A disjunction of conjunctions of literals

    -   Also, every truth table is the truth table of some propositional
        formula

# Conjunctive normal form

-   Let $\varphi$ be some formula of propositional logic

-   The formula $\lnot \varphi$ is equivalent to one in disjunctive
    normal form

    -   That is, one of the form

        $\chi_1\lor\chi_2\lor ... \lor \chi_m$

        Where each $\chi_i$ is a conjunction of literals

-   So, $\varphi$ is equivalent to the formula

    $\lnot(\chi_1\lor\chi_2\lor ... \lor \chi_m)$

    Which in turn, by using generalised De Morgan's Laws, is equivalent
    to

    $\lnot \chi_1\land \lnot \chi_2\land ... \land \lnot \chi_m$

-   Each $\lnot\chi_i$ is equivalent to a disjunction of literals, by
    again using generalised De Morgan's Laws

-   Thus

    -   Every formula of propositional logic is logically equivalent to
        a conjunction of disjunctions of literals, i.e., a conjunction
        of **clauses**

        -   That is, every formula of propositional logic is equivalent
            to a formula in **conjunctive normal form**

# A spot of practice

![image](/img/Year_1/MCS/Propositional_Logic/Introduction/Fig2.webp)

# Converting to c.n.f syntactically

-   We can often establish normal forms "syntactically"

-   Consider the formula

    ![image](/img/Year_1/MCS/Propositional_Logic/Introduction/Fig3.webp)

-   In the "semantic" approach, i.e., using truth tables we are stuck
    with using exponentially sized truth tables

-   However with the "syntactic" approach, i.e., using known
    equivalences

    -   We can often achieve our aims much more quickly, though this
        often requires cunning

Non-Examinable from here on

# An application: SAT-solving

-   The power of propositional logic of quite remarkable as
    computationally complex problems can be described using logic

-   The aim of SAT-solving is

    -   To encode a problem X as a propositional formula $\varphi$ so
        that

        -   A solution to X corresponds to $\varphi$ having a satisfying
            truth assignment

    -   To employ algorithms to solve the satisfiability problem (SAT)
        for $\varphi$ (and so X)

-   The SAT problem is to decide if a propositional formula has a
    satisfying truth assignment. It is extremely hard to solve

    -   In fact, it is NP-complete, even if the formula is given in
        c.n.f, so it takes time exponential in the size of the formula
        to solve

-   However, modern day SAT-solvers can give extremely good results

    -   Note that all modern day SAT-solvers need their inputs to be in
        c.n.f
