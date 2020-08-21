---
title: Logical Equivalence in First Order Logic
---

Two formulae $\phi$ and $\psi$ are logically equivalent of they are true
for the same set of models, in which case we write $\phi\equiv\psi$

All logical equivalences from propositional logic give rise to
equivalences in first-order logic: for example, as

$p\Rightarrow q \equiv \lnot p \lor q$ for any propositional variables p
and q

We must have that

$\phi\Rightarrow\psi \equiv \lnot \phi \lor \psi$, for any first-order
formulae $\phi$ and $\psi$

Note, however, that care must be taken as to exactly what an
interpretation is when we "plug in" formulae as in the previous
example: if

- $\phi$ is over the signature consisting of the binary relation
  symbol E and the constant symbol C

- $\psi$ is over the signature consisting of the binary relation
  symbol E and the ternary relation symbol M

Then an interpretation for $\lnot \phi \lor \psi$ is over the signature
consisting of the symbols E, C and M

# Some tricks

## Renaming variables

Consider some first-order formula of the form $\forall x \phi(x)$ where
$y$ does not appear in $\phi(x)$

If we replace every occurrence of the variable $x$ in $\phi$ with the
variable $y$, we claim that
$\forall x \phi (x) \equiv \forall y \phi (y)$:

- Let I be some interpretation for $\forall x \phi (x)$ in which
  $\forall x \phi (x)$ is true

- For every value u in the domain of I, we have that
  $(I,x=u)\models \phi (x)$

- So, for every value u in the domain of I, we have that
  $(I,y=u)\models \phi (y)$

- Hence, I is an interpretation in which $\forall y \phi (y)$ is
  true.

  Similarly, if I is an interpretation in which $\forall y \phi (y)$
  is true then I is an interpretation in which $\forall x \phi (x)$ is
  true

In general, and by the same reasoning, if we ever have some formula
$\phi$ in which there is a quantification, $\forall x$, say, then we can
replace

- Every occurrence of x in the scope of this quantification with the
  variable $y$

- The quantification $\forall x$ by $\forall y$

So long as $y$ does not appear in $\phi$, without changing the
semantics

Of course, the same can be said of $\exists x \phi (x)$ and, more
generally, any formula containing a quantification $\exists x$

But, consider the formula $\exists x E(x,y)$

If we simply replace $x$ with $y$ and $\exists x$ with $\exists y$ then
we get $\exists y E(y,y)$ which is semantically very different from
$\exists x E(x,y)$

## Substitution

Consider the formula $\phi$ in which there is contained a sub formula
$\psi$

Suppose further that $\psi$ has free variables $x_1,x_2,...,x_k$

If $\psi$ is logically equivalent to a formula $\chi (x_1,x_2,...,x_k)$
then we can replace $\psi$ in $\phi$ with the formula $\chi$ and not
change the semantics

# Some common equivalences

More interesting re the interactions between the quantifiers $\forall$
and $\exists$ and the logical connectives $\lnot, \lor$ and $\land$

Consider the formula $\lnot \forall x \phi$, where $\phi(x)$ is a
first-order formula with free variable x

Let I be some interpretation fr $\lnot \forall x \phi$. We have that:

- $I\models \lnot \forall x \phi$

  Iff it is not the case that $I\models \forall x \phi$

  Iff it is not the case that for every value $u$ in the domain of I,
  we have that $\phi(u)$ holds in I

  Iff there exists some value $u$ in the domain of I such that
  $\lnot \phi (u)$ holds in I

  Iff $I\models \exists x\lnot \phi$

($\phi(u)$ is shorthand for saying that $x$ is to be interpreted as
$u$).

So for evert first-order formula $\phi(x)$

$$
\lnot \forall x \phi \equiv \exists x \lnot \phi
$$

Consider the
formula $\lnot \exists x \phi$, where $\phi (x)$ is a first-order
formula with free variable x

Let I be some interpretation for $\lnot \exists x \phi$. We have that:

- $I\models \lnot \exists x \phi$

  Iff it is not the case that $I\models \exists x \phi$

  Iff it is not the case that there exists some value $u$ in the
  domain of I such that $\phi(u)$ holds in I

  Iff for every value $u$ in the domain of I, we have that
  $\lnot \phi(u)$ holds in I

  Iff $I\models \forall x \lnot \phi$

So, for every first order formula $\phi(x)$:

$$
\lnot \exists x \phi\equiv \forall x \lnot \phi
$$

**General rule**: negations can be "pushed through" universal quantifiers if we change
the universal quantifier to an existential quantifier

**Another general rule**: negations can be "pushed through"
existential quantifiers if we change the existential quantifier to a
universal quantifier

## Example

Consider the formula
$\neg \exists x \forall y ( \neg E ( x , y ) \vee M ( y , y , z , x ) )$.
We have

$$
\neg \exists x \forall y ( \neg E ( x , y ) \vee M ( y , y , z , x ) )
$$

$$
\equiv \forall x \neg \forall y ( \neg E ( x , y ) \vee M ( y , y , z , x ) )
$$

$$
\equiv \forall x \exists y \neg ( \neg E ( x , y ) \vee M ( y , y , z , x ) )
$$

# More complicated equivalences

Consider the formula $\forall x \phi \land \exists y \psi$ where
$\phi(x)$ and $\psi (y)$ are first order formulae with free variables x
and y, respectively.

By renaming bound variables (if necessary), we may assume that x does
not appear in $\psi$ and y does not appear in $\phi$

Let I be some interpretation for $\forall x \phi \land \exists y \psi$

We have $I\models \forall x \phi\land \exists y\psi$ iff
$I\models \forall x \phi$ and $I\models \exists y\psi$:

- $I\models \forall x \phi$ iff no matter which value from the domain
  of I we give to the variable x, we have that $\phi(x)$ holds in I

- $I\models \exists y\psi$ iff there exists some value from the domain
  of I for the variables y such that $\psi(y)$ holds in I

Thus: $I\models \forall x \phi \land \exists y \psi$ iff:

No matter which value we give to x, we have that $\phi(x)$ holds in I,
and there exists some value for y such that $\psi (y)$ holds in I

Consider $\forall x \exists y(\phi \land \psi)$

Suppose that $I\models \forall x \exists y (\phi \land \psi)$

Choose any $u$ for $x$. There exists a v for y such that
$\phi(u)\land \psi(v)$ holds.

So, $I\models \forall x \phi \land \exists y \psi$

Hence,
$\forall x \phi \land \exists y \psi\equiv \forall x \exists y (\phi \land \psi)$.

Indeed, by the same token,
$I\models \forall x \phi \land \exists y \psi$ iff
$I\models \exists y\forall x (\phi \land \psi)$.

**General rule**: Quantifications can be "pulled out" from inside
logical connectives and the order of quantifiers doesn't matter, so long
as the names of the quantified variables are not used elsewhere

# Some more complicated equivalences

## Example 1

If we assume that

- $x$ does not appear in $\psi$ and $\chi$

- $y$ does not appear in $\phi$ and $\chi$

- $z$ does not appear in $\phi$ and $\psi$

Applying this general rule yields:

$$
\begin{aligned} ( \forall x \phi \wedge \exists y \psi ) \vee \forall z \chi & \equiv \forall x \exists y ( \phi \wedge \psi ) \vee \forall Z \chi \\ & \equiv \forall x \exists y \forall z ( ( \phi \wedge \psi ) \vee \chi ) \end{aligned}
$$

## Example 2

Consider the formula
$( \forall x \phi \vee \forall x \psi ) \wedge \exists x \chi$

We can rename two of the bound occurrences of x to get

$$
( \forall x \phi ( x ) \vee \forall y \psi ( y ) ) \wedge \exists z\chi ( z )
$$

(assuming y and z do not appear in $\phi$ and $\chi$, respectively).
Now we get the equivalent formulae

$$
\begin{aligned} ( \forall x \phi ( x ) \vee \forall y \psi ( y ) ) & \wedge \exists \chi ( z ) \\ & \equiv \forall x \forall y ( \phi ( x ) \vee \psi ( y ) ) \wedge \exists \chi \chi ( z ) \\ & \equiv \forall x \forall y \exists z ( \phi ( x ) \vee \psi ( y ) \wedge \chi ( z ) ) \end{aligned}
$$

# Be careful when applying general rules

Great care has to be taken when manipulating quantifiers:

- The order of the quantification matters

- Consider other occurrences of a quantified variable **outside the scope**

## Example

Consider the first-order sentence $\forall x \exists y E(x,y)$

Let I be the interpretation with domain $\{1,2,3,4\}$ where
$E = \{ ( 1,2 ) , ( 2,3 ) , ( 3,4 ) , ( 4,1 ) \}$

Clearly, $I\models \forall x \exists y E(x,y)$ but
$I\not \models \exists x \forall y E(x,y)$

Consider the first order sentence
$\forall x \exists y E(x,y)\land \forall z\lnot E(z,z)$

Whilst
$I\models \forall x \exists y E(x,y)\land \forall z \lnot E(z,z)$

$I = \forall z \forall x \exists y ( E ( x , y ) \wedge \neg E ( z , z ) )$

$I = \forall x \forall z \exists y ( E ( x , y ) \wedge \neg E ( z , z ) )$

It is not the case that
$I = \forall z \exists y \forall x ( E ( x , y ) \wedge \neg E ( z , z ) )$

# More on bound occurrences

Consider the first order formula
$\forall x \exists y E ( x , y ) \wedge \exists x U ( x )$

It does not make sense to pull the quantifiers out, as we could get
$\forall x \exists y \exists x ( E ( x , y ) \wedge U ( x ) )$

Actually, semantically this second sentence is logically equivalent to

$$
\exists y \exists x ( E ( x , y ) \wedge U ( x ) )
$$

(as existentially quantified x "overwrites" the universally quantified x) which is
certainly not equivalent to the sentence we started with. To see this,
consider the interpretation where the domain is
$\{ 1,2 \} , E = \{ ( 1,2 ) \}$ and $U = \{ 1 \}$

We need to ensure that the two original bound occurrences of x have
"nothing to do with each other". In order to ensure this, we need to
rename one of them:

$$
\begin{aligned} \forall x \exists y E ( x , y ) \wedge \exists x U ( x ) & \equiv \forall x \exists y E ( x , y ) \wedge \exists z \mathrm { U } ( z ) \\ & \equiv \forall x \exists y \exists z ( E ( x , y ) \wedge U ( z ) ) \end{aligned}
$$
