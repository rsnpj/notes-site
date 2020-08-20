---
title: Fundamentals of Propositional Logic
---

# The Rudiments of Propositional Logic

Propositional Logic:

- The most fundamental logic, lying at the heart of many other things

- Formalises day-to-day, common sense reasoning

Key to propositional logic are **propositions**:

- Declarative sentences can be either **true** or **false**

Propositions are represented by **propositional variables** (**Boolean
variables, atoms**)

- Usually letters such as **x,Y,a** or subscripted letters such as
  $\mathbf{x_2,Y_0,a_1}$

- Which can take a truth value T (true) or F(false)

Syntax\
New propositions called **formulae** or **Boolean formulae** or
**propositional formulae** or **compound propositions** are formed from
propositional variables and formulae by the use of logical operators

- $\land$ - conjunction(and)

- $\lor$ - disjunction(or)

- $\lnot$ - negation(not)

- $\Rightarrow$ - implies (if left statement true, then right
  statement must be true, if LHS false, whole statement becomes true)

- $\Leftrightarrow$ - if and only if (iff)

# Some formulae

## Construction

The operators $\land, \lor , \Rightarrow$ and $\Leftrightarrow$ take two
propositional formulae $\varphi$ and $\psi$\
\
The operator $\lnot$ takes one propositional formula $\varphi$ and
yields a new one

- $\lnot\varphi$

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

- The value of a formula under some **truth assignment** is
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

- $\lnot(X\land Y)\equiv \lnot X\lor\lnot Y$

- $\lnot(X\lor Y)\equiv \lnot X\land\lnot Y$

These formulae are indeed equivalences:

| X   | Y   | $\lnot$ | (X  | $\land$ | Y)  | $\lnot$ | X   | $\lor$ | $\lnot$ | Y     | $\lnot$ | (X  | $\lor$ | Y)  | $\lnot$ | X     | $\land$ | $\lnot$ | y   |
| --- | --- | ------- | --- | ------- | --- | ------- | --- | ------ | ------- | ----- | ------- | --- | ------ | --- | ------- | ----- | ------- | ------- | --- |
| T   | T   | **F**   | T   | T       | T   | F       | T   | **F**  | F       | T     | **F**   | T   | T      | T   | F       | T     | **F**   | F       | T   |
| T   | F   | **T**   | T   | F       | F   | F       | T   | **T**  | T       | F     | **F**   | T   | T      | F   | F       | T     | **F**   | T       | F   |
| F   | T   | **T**   | F   | F       | T   | T       | F   | **T**  | F T     | **F** | F       | T   | T      | T   | F       | **F** | F       | T       |
| F   | F   | **T**   | F   | F       | F   | T       | F   | **T**  | T       | F     | **T**   | F   | F      | F   | T       | F     | **T**   | T       | F   |

- De Morgan's Laws can be applied not just to variables, but to
  formulae $\varphi$ and $\psi$

- De Morgan's Laws are often used to simplify formulae with regard to
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
