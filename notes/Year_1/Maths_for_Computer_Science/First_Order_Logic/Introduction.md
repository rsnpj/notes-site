---
title: An Overview of First Order Logic
lecturer: Daniel
---

# Predicates and atomic formulae

Whereas the fundamental building block in propositional logic is the
propositional variable, with first order logic it is the **predicate**
(we have already been introduced to predicates when we studied
relations)

A **predicate symbol** (or **relation symbol**) is just a symbol with an
associated arity e.g., P might be defined as a predicate symbol with
arity r

Given a predicate symbol P of arity r and some variables
$x_1,x_2,...,x_r$ (where it might be the case that some of these
variables are the same), the formula $$P(x_1,x_2,...,x_r)$$ is an
**atomic formula** of first order logic

In order to know whether this atomic formula is **true** or **false**,
we need to be given an r-ary relation P' over some domain D, say, and
values $v_1,v_2,...,v_r$ from D for $x_1,x_2,...,x_r$

# Atomic formula: an example

Suppose T is the ternary relation symbol. Then $$T(x,y,x)$$ is an
**atomic formula**

Now let T' be the following ternary relation on $\mathbb{N}$

$$
\{(u,v,w): u,v,w\in \mathbb{N}, u=2v \  \text{and w is even}\}
$$

and consider the interpretation (or model) of $T(x,y,x)$ in T' with x=6 and
y=3. This is true

In this case, we write $(T',x=6,y=3) \models T(x,y,x)$ or sometimes
$\left( \mathbb { N } , T ^ { \prime } , x = 6 , y = 3 \right) = T ( x , y , x )$

## Lecture example

$$
(u,v,w)=(6,3,6)
$$

This is in T' as the last digit is even and the
first digit is twice the second digit

# Building formula

Given some atomic formulae, we can build more complicated formulae from
these atomic formulae by using the usual connectives of propositional
logic, namely $\lnot,\land, \lor, \Rightarrow$ and $\Leftrightarrow$.
For example,

$$
E \left( x _ { 1 } , x _ { 2 } \right) \vee \left( T \left( x _ { 1 } , x _ { 1 } , x _ { 3 } \right) \Rightarrow \neg E \left( x _ { 2 } , x _ { 3 } \right) \right)
$$

is a formula of first-order logic, where E is a predicate symbol of
arity 3, and $x_1,x_2$ and $x_3$ are variables.

In order to interpret this formula, we need a binary relation for E, a
ternary relation for T and values for $x_1,x_2$ and $x_3$. The domains
of the relations for E and T must be the same.

Is the following interpretation true?

$E = \left\{ \left( u _ { 1 } , u _ { 2 } \right) \in \mathbb { N } ^ { 2 } : u _ { 1 } \leq u _ { 2 } \right\} , T = \left\{ \left( u _ { 1 } , u _ { 2 } , u _ { 3 } \right) \in \mathbb { N } ^ { 3 } : u _ { 1 } \cdot u _ { 2 } = u _ { 3 } \right\}$

and $x_1=3,x_2=2$ and $x_3=9$

This is not true as $F\lor T\Rightarrow F$, which is false.

Not only do we allow formulae such at $P(x_1,x_2,...,x_r)$ as atomic
formulae, but we are also allowed formulae of the form $x=y$, where x
and y are variables (this constitutes all atomic formulae)

The semantics of x=y is that this atomic formula is true only if the
value of x is equal to the value of y (in an interpretation)

## Example

Let E be a binary predicate symbol. Consider the formula

$$
( E ( x , y ) \wedge E ( y , z ) ) \Rightarrow \neg ( x = z )
$$

(We sometimes abbreviate $\lnot(x=z)$ by $x\neq z$)

If E is interpreted as:

$$
E = \left\{ ( x , y ) \in \mathbb { N } ^ { 2 } : x < y \right\}
$$

and x=5, y=7 and z=11 then is the formula true in this interpretation?

$E(x,y)$ is true as $5<7$

$E(y,z)$ is true as $7<11$

$\lnot(x=z)$ is true as $5\neq 11$

So the whole formula is true

## More on building formulae

Formulae built from atomic formulae are called quantifier-free formula
and the free variables are those variables appearing in a formula

# Quantifiers

Given a formula with **free** variables, we can now "quantify" over
these variables using the universal quantifier (or the for-all
quantifier) $\forall$ and the existential quantifier (or the exists
quantifier) $\exists$

Suppose that $\phi(x)$ is a quantifier-free formula with one free
variable x. Then $\forall x \phi (x)$ is a formula of first order logic
and has no free variables. The variable x is a **bound** variable in
$\forall x \phi (x)$

## Example

Suppose that Q is a unary relation symbol. Consider the formula
$\forall x Q(x)$. Is it true for the following interpretations?

- Interpret Q as the relation
  $Q=\{u \in \mathbb{ N }: \text{u is even}\}$

  This is not true as there are odd natural numbers

- Interpret Q as the relation
  $Q\{u\in \mathbb{ N }: \text{u has a square root}\}$

  This is true as every natural number is a square root

Then thinking about the formula $\exists x Q(x)$ and the relation
$Q=\{u \in \mathbb{ N }: \text{u is even}\}$, it is then true as 2 is
even.

A formula e.g. $\lnot(\forall x Q(x))$ is the same as
$\exists x \lnot Q(x)$

# More complicated formulae

We can apply quantifiers to quantifier-free formula even when there is
more than one free variable in the formula.

Let $\phi(x_1,x_2,...,x_r)$ be a quantifier free formula with free
variables $x_1,x_2,...,x_r$. Then the following are two examples of
formulae of first order logic.

$$
\forall x _ { 1 } \phi \left( x _ { 1 } , x _ { 2 } , \ldots , x _ { r } \right) \quad \exists x _ { 3 } \phi \left( x _ { 1 } , x _ { 2 } , \ldots , x _ { r } \right)
$$

The first has free variables $x_2,...,x_r$ and bound variable $x_1$ (as
it is outside the $\phi$); and the second has free variables
$x_1,x_2,x_4,...,x_r$ and bound variable $x_3$

An **interpretation** of such formulae are as before except that
relations and values for the free variables have to be supplied in order
for any interpretation to make sense.

## Examples

- If $\phi(x)$ is the formula $\forall y(x=y \lor E(x,y))$ and
  $E = \left\{ ( u , v ) \in \mathbb { N } ^ { 2 } : u < v \right\}$
  then

  $$
  ( E , x = 0 ) \models \phi ( x )
  $$

  $$
  \forall y (0=y \lor E(0,y))
  $$

  $$
  \forall y (0=y \lor 0<y) \text{True as only natural numbers is either} \ 0 \ or \ >0
  $$

  but

  $$
  (E,x=v)\models \lnot\phi (x) \ \text{wherever} \ v\neq 0
  $$

- If $\phi(x)$ is the formula $\exists y E(y,x)$ and
  $E = \left\{ ( u , v ) \in \mathbb { N } ^ { 2 } : u < v \right\}$
  then we have
  $$
  (E,x=0)\models \lnot \phi (x)
  $$
  but
  $$
  (E,x=v)\models \phi (x) \ \text{wherever} \  v\neq 0
  $$

# More complicated formulae

We can also apply quantifiers to formulae already involving
quantifiers.

Consider the formula $\forall y(x=y \lor E(x,y))$. There is one free
variable and we can quantify over this free variable; like this

$$
\exists x \forall y ( x = y \vee E ( x , y ) )
$$

Let the binary relation $E = \left\{ ( u , v ) \in \mathbb { N } ^ { 2 } : u < v \right\}$

For formula above to be **true** in this interpretation, we need that
there exists some value $u\in \mathbb{ N }$ for x such that for any
value $v\in \mathbb{ N }$ for y, we have that $u=v\lor E(u,v)$; that is,
either $u=v$ or $u<v$

There clearly does exist such a value u, namely $u=0$. However, if
$E = \left\{ ( u , v ) \in \mathbb { Z } ^ { 2 } : u < v \right\}$ then
the formula is **false** as given any value for x, there is always some
integer that is strictly less than this value for x

We can also build new formula, using the usual **propositional connectives**, from existing formulae that involve **quantifiers**.
Consider the formula

$$
\exists x \forall y ( x = y \vee E ( x , y ) ) , \text { and } \exists x \forall w ( x = w \vee E ( w , x ) )
$$

If we **interpret** E as
$\left\{ ( u , v ) \in \mathbb { N } ^ { 2 } : u < v \right\}$ then is
the following formula true?

$$
\exists x \forall y ( x = y \vee E ( x , y ) ) \wedge \exists x \forall w ( x = w \vee E ( w , x ) )
$$

What if we interpret E as

$$
\{ ( u , v ) \in \{ 0,1 , \ldots , 9 \} \times \{ 0,1 , \ldots , 9 \} : u < v \}
$$

Notice how the same variable, x, is quantified twice in the same formula
yet the two quantifications are entirely separate!
