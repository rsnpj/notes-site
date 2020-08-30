---
title: Prenex Normal Form
---

# Logical equivalence

Recall that two formula $\phi$ and $\psi$ are logically equivalent if
they are true for the same set of models, in which case we write

$$
\phi\equiv\psi
$$

# Parse Trees

Recall that to check if a formula is well formed we can use a parse
tree. We illustrated this with

![image](/img/Year_1/MCS/First_Order_Logic/Prenex_Normal_Form/parse.webp)

# Prenex Normal Form

We are not in a position to obtain an important normal form. Consider
the process of constructing a forst order formula: We start from atoms
and construct increasingly more complex formula using
$\land,\lor,\lnot,\exists$ and $\forall$, with a structure of a formula
given by its parse tree.\
We say that a first order formula is in prenex normal form if it is
written in the form

$$
Q _ { 1 } x _ { 1 } Q _ { 2 } x _ { 2 } \ldots Q _ { k } x _ { k } \phi
$$

Where:

-   each $Q_i$ is a quantifier

-   each $x_i$ is a variable

-   the formula $\phi$ is quantifier free (so all the logic symbols like
    $\land$ are in here)

We shall show that every first order formula is equivalent to one in
prenex normal form

# Establishing prenex normal form

We use the parse tree of a formula $\phi$ in order to construct an
equivalent formula in prenex normal form.

A key observation is that if we choose some node of the parse tree of
$\phi$ and look at the sub-tree with this node as root then this subtree
corresponds to a sub formula of $\phi$, that is, to a formula apprearing
as a formula within $\phi$

What we do is start at the leaves of the parse tree and work up the tree
repeatedly constructing prenex normal form formulae that are equivalent
to the formulae corresponding to sub-trees of the parse tree

Let's start at the leaves. The formula at each leaf is trivially in
prenex normal form (as it involves no quantifiers)

Suppose that we have reached a node of the parse tree that is a
$\land$-node and that we have constructed prenex normal form formulae
equivalent to the formulae corresponding to the subtrees rooted at the 2
children of this $\land$-node

So, the formula corresponding to the subtree rooted at this $\land$-node
is of the form $\psi\land \chi$ and we have already constructed $\psi'$
and $\chi'$ such that:

-   $\psi'$ and $\chi'$ are in prenex normal form:

    -   $\psi'$ is
        $Q _ { 1 } x _ { 1 } Q _ { 2 } x _ { 2 } \cdots Q _ { k } x _ { k } \psi ^ { \prime \prime }$
        quantifier tree (and each $Q_i$ a quantifier)

    -   $\chi'$ is
        $P _ { 1 } y _ { 1 } P _ { 2 } y _ { 2 } \cdots P _ { k } y _ { k } \chi ^ { \prime \prime }$
        with $\chi ^ { \prime \prime }$ quantifier free (and each $P_i$
        a quantifier)

-   $\psi\equiv\psi'$

-   $\chi\equiv\chi'$

Note that by renaming bound variables (if necessary) we may assume that
no $x_i$ is the same variable as any $y_j$

So $\psi\land \chi$ is equivalent to a formula in prenex normal form

$$
\begin{aligned} \psi \wedge \chi & \equiv Q _ { 1 } x _ { 1 } Q _ { 2 } x _ { 2 } \cdots Q _ { k } x _ { k } \psi ^ { \prime \prime } \wedge P _ { 1 } y _ { 1 } P _ { 2 } y _ { 2 } \cdots P _ { k } y _ { k } \chi ^ { \prime \prime } \\ & \equiv Q _ { 1 } x _ { 1 } Q _ { 2 } x _ { 2 } \cdots Q _ { k } x _ { k } P _ { 1 } y _ { 1 } P _ { 2 } y _ { 2 } \cdots P _ { k } y _ { k } \left( \psi ^ { \prime \prime } \wedge \chi ^ { \prime \prime } \right) \end{aligned}
$$

The same construction works for a $\land$ node of our parse tree.

Consider a $\lnot$ node

Now we have that the formula corresponding to the sub tree rooted at
this $\lnot$ node is equivalent to a formula of the form
$Q _ { 1 } x _ { 1 } Q _ { 2 } x _ { 2 } \cdots Q _ { k } x _ { k } \psi ^ { \prime \prime }$
with $\psi''$ quantifier free (and each $Q_i$ a quatifier).

Hence, using our general rule from earlier, this formula is equivalent
to
$Q _ { 1 } x _ { 1 } Q _ { 2 } x _ { 2 } \cdots Q _ { k } x _ { k } \neg \psi ^ { \prime \prime }$
which is in prenex normal form.

Consider a $\forall$ node.

Now we have that the formula corresponding to the sub-tree rooted at
this $\forall$ node is equivalent to a formula of the form:
$Q _ { 1 } x _ { 1 } Q _ { 2 } x _ { 2 } \cdots Q _ { k } x _ { k } \psi ^ { \prime \prime }$
with $\psi''$ quantifier free (and each $Q_i$ a quantifier)

However, this is immediately in prenex normal form (the same
construction works for a $\exists$ node of our parse tree)

Hence, continuing in this way yields an equivalent formula to $\phi$ in
prenex normal form
