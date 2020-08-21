---
title: Resolution for first-order logic
---

Resolution is not only a proof system for propositional logic but it is
a sound and complete proof system for first order logic too:

- If $\Sigma$ is a set of first order formulae and $\phi$ is a first
  order formula such that:

  for every interpretation $M , M = \Sigma \Rightarrow M = \phi$

  then the proof system resolution will answer "yes" (completeness)

- If the proof system resolution answers "yes" on input
  $(\Sigma,\phi)$ then for every interpretation
  $M , M = \Sigma \Rightarrow M = \phi$ (soundness)

We shall only consider Resolution for first order logic very briefly.\
We are given a set of first-order formulae $\Sigma$ and another first
order formula $\phi$ and we want to know whether for every
interpretation M, if M satisfies each formula in $\Sigma$ then M
necessarily satisfies $\phi$

That is, we want to know whether the conjunction of the formula in
$\Sigma$, denoted $\Sigma$ too, is such that $\Sigma\Rightarrow\phi$ is
valid, i.e. holds in all interpretations

We describe how the Resolution proof system proceeds and given an
example (but omit a more detailed discussion)

# How we proceed

1.  Form the conjunction of all formula in $\Sigma$ and $\lnot\phi$

2.  Reduce the resulting formula to prenex normal form
    $Q _ { 1 } x _ { 1 } Q _ { 2 } x _ { 2 } \ldots Q _ { k } x _ { k } \psi$

3.  For any existentially quantified variable $x_i$, replace each
    occurrence of $x_i$ in $\psi$ with the term
    $F _ { i } \left( x _ { j _ { 1 } } , x _ { j _ { 2 } } , \dots , x _ { j _ { r } } \right)$,
    where $X _ { j _ { 1 } } , X _ { j _ { 2 } } , \ldots , x _ { j r }$
    are the universally quantified variables appearing in the list
    $x_1,x_2,...,x_{i-1}$ and $F_i$ is a new function symbol

4.  Delete the prefix of quantifiers $Q_1x_1Q_2x_2...Q_kx_k$

5.  Reduce the remaining quantifier-free formula to c.n.f and apply the
    generalised resolution rule to the resulting set of clauses

6.  If we resolve the empty clause then we answer \"yes\". If we get to
    the point where we can resolve no more new clauses then we answer
    "no"

    We may keep on resolving for ever

## Substitutions

Suppose that we have the two clauses:

$$
A ( F ( x ) ) \vee L ( G ( x ) , x ) \text { and } \neg L ( u , v ) \vee \neg K ( u , v )
$$

This bit above is just like resolution on anded clauses in propositional
logic

Note that u and v are universally quantified as they are not expressed
as functions

We can unify the terms and variables $\{ u / G ( x ) , v / x \}$, make
these substitutions throughout the clauses, and then resolve the
resulting clauses:

$$
A ( F ( x ) ) \vee L ( G ( x ) , x ) \text { and } \neg L ( G ( x ) , x ) \vee \neg K ( G ( x ) , x )
$$

resolve to yield $A ( F ( x ) ) \vee \neg K ( G ( x ) , x )$

## An illustration

Suppose we know the following:

- Everyone who loves all animals is loved by someone

- Anyone who kills an animal is loved by no-one

- Jack loves all animals

- Either Jack or Curiosity killed the cat, whose name is Tuna

And we want to know: Did Curiosity kill the cat?\
Translate to first order logic:

**Statement 1:**

$$
\forall x ( \forall y ( \text { Animal } ( y ) \Rightarrow \text { Loves } ( x , y ) ) \Rightarrow \exists y ( \text { Loves } ( y , x ) ) )
$$

**Statement 2 :**

$$
\forall x ( \exists y ( \text { Animal } ( y ) \wedge \text { Kills } ( x , y ) ) \Rightarrow \forall z ( \neg \operatorname { Loves } ( z , x ) ) )
$$

**Statement 3 :**

$$
\forall x ( \text { Animal } ( x ) \Rightarrow \text { Loves } ( \operatorname { Jack } , x ) )
$$

**Statement 4:**

$$
\text{Kills(Jack, Tuna)} \lor \text{Kills(Curiosity, Tuna)}
$$

**Also from statement 4:**

$$
\text{Animal(Tuna)}
$$

**The question being asked:**

$$
\text{Kills(Curiosity, Tuna)}?
$$

Convert to prenex normal form with the quantifier-free part in
conjunctive normal form:
$\forall x \exists y \exists z \forall u \forall v \forall w \forall t$

All statements in the same order and have been converted

$$
( ( \text { Animal } ( y ) \vee \text { Loves } ( z , x ) ) \wedge ( \neg \text { Loves } ( x , y ) \vee \text { Loves } ( z , x ) ) )
$$

$$
( \neg \text { Animal(v } ) \vee \neg \text { Kills } ( u , v ) ) \vee \neg \text { Loves } ( w , u ) )
$$

$$
(\operatorname{Animal}(t)\lor \operatorname{Loves}(Jack,t))
$$

$$
\operatorname{Kills}(Jack, Tuna)\lor \operatorname{Kills}(Curiosity, Tuna)
$$

$$
\operatorname{Animal}(Tuna)
$$

$$
\lnot(\operatorname{Kills}(Curiosity, Tuna))
$$

Replace existential quantifiers and remove universal quantifiers:

$$
((\operatorname{Animal}(F(x))\lor \operatorname{Loves}(G(x),x)) \land (\lnot \operatorname{Loves}(x,F(x)) \lor \operatorname{Loves}(G(x),x)) )
$$

$$
\lnot \operatorname{Animal}(v)\lor \lnot \operatorname{Kills}(u,v) \lor \lnot \operatorname{Loves}(w,u)
$$

$$
\operatorname{Animal}(t)\lor \operatorname{Kills}(Curiosity, Tuna)
$$

$$
\operatorname{Animal}(Tuna)
$$

$$
\lnot(\operatorname{Kills}(Curiosity, Tuna))?
$$

Apply Resolution

$$
( ( \text { Animal } ( F ( x ) ) \vee \operatorname { Loves } ( G ( x ) , x ) ) \wedge ( \neg \operatorname { Loves } ( x , F ( x ) ) \vee \operatorname { Loves } ( G ( x ) , x ) ) )
$$

$$
( \neg \text { Animal } ( v ) \vee \neg \text { Kills } ( u , v ) ) \vee \neg \text { Loves } ( w , u ) )
$$

$$
(\operatorname{Animal}(t)\lor \operatorname{Loves}(Jack,t))
$$

$$
\operatorname{Kills}(Jack,Tuna)\lor \operatorname{Kills}(Curiosity, Tuna)
$$

$$
\operatorname{Animal}(Tuna)
$$

$$
\lnot(\operatorname{Kills}(Curiosity, Tuna))
$$

$$
v / Tuna \rightarrow \lnot Kills(u, Tuna)\lor \lnot \operatorname{Loves}(w,u)
$$

$$
\rightarrow \operatorname{Kills}(Jack, Tuna)
$$

$$
u/Jack \rightarrow \lnot Loves(w,Jack)
$$

$$
x/Jack, t/F(Jack) \rightarrow \lnot \operatorname{Animal}(F(Jack)) \lor \operatorname{Loves}(G(Jack),Jack)
$$

$$
x/Jack\rightarrow \operatorname{Loves}(G(Jack),Jack)
$$

$$
w/G(Jack)\Rightarrow \{\}
$$

So curiosity Killed the cat

# Some comments on resolution

There might appear to be a mismatch between the undecidability of the
validity problem for first order logic:

_"There is no computer program that computes whether any given
first-order formula is valid; that is, is satisfied by all
interpretations."_

and the soundness and completeness of the Resolution proof system for
first order logic:

_"If a first-order formula is valid then Resolution answers 'yes', and
if Resolution answers 'yes' then the first-order formula is valid."_

However, this is not the case; for unlike in propositional logic
Resolution in first-order logic might not halt when a formula is not
valid. Resolution is sometimes said to be semi-decidable.

The Resolution proof system lies at the heart of many modern-day theorem
provers.
