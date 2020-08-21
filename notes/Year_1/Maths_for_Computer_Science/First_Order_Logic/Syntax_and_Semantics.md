---
title: Syntax and Semantics
---

# Syntax of first-order logic

Every (well formed) formula of first order logic is constructed from
**atoms** (or **atomic formula**). We completely define the **syntax**
of first-order logic by defining what we mean by atoms and the
constructions we are allowed to use.

## Atoms

- If P is a relation symbol of arity r and $y_1,..,y_r$ are (not
  necessarily distinct) variables or constant symbols, then
  $P(y_1,...,y_r)$ is an **atom** with free variables from
  $y_1,...,y_r$ (this sequence can also contain constants and repeated
  items)

- If C and D are constant symbols and x and y are variables then C=D,
  C=x and x=y are all **atoms** with, respectively, set of free
  variables $\varnothing, \{x\}, \{x,y\}$

The **signature** of formula is its finite set of predicate (relation)
and constant symbols

## Constructions

- If $\phi$ and $\psi$ are formulae, with free variables free$(\phi)$
  and free$(\psi)$, then

  $$
  \phi \vee \psi , \phi \wedge \psi , \neg \phi
  $$

  are formulae, with, respectively, free variables
  $free(\phi)\cup free(\psi), free (\phi)\cup free(\psi) \ and \ free(\phi)$

- If $\phi$ is a formula with free variables $free(\phi)$ then
  $$
  \exists x ( \phi ) , \forall x ( \phi )
  $$
  are formulae, both with free variables $free(\phi) \backslash \{x\}$. The occurrence of x in
  both formulae is a bound occurrence

If a formula has no free variables then it is called a **sentence**

# Parse trees

We can check that a formula is well formed using a parse tree (if the
tree cannot be made then the formula is not well formed). We can
illustrate with

$$
\forall x ( \forall y ( P ( x , y ) \Leftrightarrow \neg Q ( x , y ) ) ) \wedge \exists x ( P ( C , x ) \wedge \neg Q ( x , C ) )
$$

![image]((/img/Year_1/MCS/First_Order_Logic/Syntax_and_Semantics/tree.png)

Note that here $p\Leftrightarrow q$ has been replaced with
$(p\land q)\lor (\lnot p \land \lnot q)$

# Semantics for first-order logic

An interpretation or structure for a first order formula $\phi$ is:

- The domain of discourse D

- A value from D for every free variables of $\phi$

- A relation over D for every relation symbol involved in $\phi$

- A value from D for every constant symbol involved in $\phi$

The semantics of a first order formula in some interpretation is as
follows:

- We interpret atoms as propositional variables

- We interpret $\land, \lor$ and $\lnot$ as propositional logic

- We interpret $\forall x \phi$ as true if $\phi$ is true for all
  values for x

- We interpret $\exists x \phi$ as true if there is at least one value
  for x making $\phi$ true

# An illustration

Consider a **signature** consisting of two binary relation symbols P and
Q and one constant symbol C. Let $\phi$ be defined as:

$$
\forall x ( \forall y ( P ( x , y ) \Leftrightarrow \neg Q ( x , y ) ) ) \wedge \exists x ( P ( C , x ) \wedge \neg Q ( x , C ) )
$$

In order to decide whether $\phi$ evaluates to true or not we need an **interpretation**

Consider the interpretation:

$$
\phi = \forall x ( \forall y ( P ( x , y ) \Leftrightarrow \neg Q ( x , y ) ) ) \wedge \exists x ( P ( C , x ) \wedge \neg Q ( x , C ) )
$$

where:

- The domain of discourse is the set of natural numbers $\mathbb{N}$

- The relation
  $P = \{ ( u , v ) : u , v \in \mathbb { N } , u \leq v \}$

- The relation $Q = \{ ( u , v ) : u , v \in \mathbb { N } , u > v \}$

- The constant $C=0\in \mathbb{ N }$

So

- $(\mathbb{ N },p,Q,0)\models \phi$ if and only if
- $( \mathbb { N } , P , Q , 0 ) \models \forall x \forall y ( P ( x , y ) \Leftrightarrow \neg Q ( x , y ) )$
  and
  $( \mathbb { N } , P , Q , 0 ) \models \exists x ( P ( C , x ) \wedge \neg Q ( x , C ) )$

- if and only if for every
  $x,y \in \mathbb{ N }, x\leqslant y \Leftrightarrow x\ngtr$ y and
  there exists $x\in \mathbb{ N }$ such that $0\leqslant x$ and
  $x\ngtr 0$

Both conjuncts are true. Thus $(\mathbb{ N },P,Q,0)$ is a model of
$\phi$, i.e., $(\mathbb{ N },P,Q,0)\models \phi$

## Secondary interpretation

Now consider a **signature** consisting of two binary relation symbols P
and Q and one constant symbol C. Let $\phi$ be defined as:

$$
\forall x ( \forall y ( P ( x , y ) \Leftrightarrow \neg Q ( x , y ) ) ) \wedge \exists x ( P ( C , x ) \wedge \neg Q ( x , C ) )
$$

In order to decide whether $\phi$ evaluates to true or not we need an **interpretation**

Consider the interpretation:

$$
\phi = \forall x ( \forall y ( P ( x , y ) \Leftrightarrow \neg Q ( x , y ) ) ) \wedge \exists x ( P ( C , x ) \wedge \neg Q ( x , C ) )
$$

where:

- The domain of discourse is the set of natural numbers $\mathbb{N}$

- The relation
  $P = \{ ( u , v ) : u , v \in \mathbb { N } , \textcolor{red}{u < v} \}$

- The relation $Q = \{ ( u , v ) : u , v \in \mathbb { N } , u > v \}$

- The constant $C=0\in \mathbb{ N }$

So

- $(\mathbb{ N },p,Q,0)\models \phi$ if and only if

  $( \mathbb { N } , P , Q , 0 ) \models \forall x \forall y ( P ( x , y ) \Leftrightarrow \neg Q ( x , y ) )$
  and
  $( \mathbb { N } , P , Q , 0 ) \models \exists x ( P ( C , x ) \wedge \neg Q ( x , C ) )$

- if and only if for every
  $x,y \in \mathbb{ N }, x< y \Leftrightarrow x\ngtr$ y and there
  exists $x\in \mathbb{ N }$ such that $0< x$ and $x\ngtr 0$

Both conjuncts are false. Thus $(\mathbb{ N },P,Q,0)$ is not a model of
$\phi$, i.e., $(\mathbb{ N },P,Q,0)\models \lnot\phi$

# A subtlety

Consider a signature consisting of two binary relation symbols P and Q
and one constant symbol C. Let $\phi$ be defined as

$$
\forall \textcolor{blue}{x} ( \forall y ( P ( \textcolor{blue}{x} , y ) \Leftrightarrow \neg Q ( \textcolor{blue}{x} , y ) ) ) \wedge \exists z ( P ( z , \textcolor{red}{x} ) \wedge \neg Q ( \textcolor{red}{x} , C ) )
$$

This is a perfectly legal formula of first order logic, even though the
variable x appears \"differently\" in the formula

- x appears <span className="text-red-600">bound</span> in the first conjunct

- x appears <span className="text-blue-600">free</span> in the second conjunct

Consequently, it is more precise to speak of "free occurrences" or
"bound occurrences" of variables rather than free or bound variables

# Another subtlety

Consider the formula $\chi$ defined as

$$
\forall x ( \forall y ( P ( x , y ) \Leftrightarrow \neg Q ( x , y ) ) ) \wedge \exists y ( P ( y , x ) \wedge \neg Q ( x , y ) )
$$

and the interpretation I for $\chi$ where:

- The domain D=$\{1,2,3\}$

- $P = \{ ( 1,3 ) , ( 2,3 ) , ( 3,1 ) \}$ and
  $Q = \{ ( 1,1 ) , ( 1,2 ) , ( 2,1 ) , ( 2,2 ) , ( 3,2 ) , ( 3,3 ) \}$

- x=3

Not only does x appear both free and bound but y appears bound but
within the scopes of two different quantifications.

We clearly have $I\models \chi$ as

- For every $(x,y)\in D\times D, (x,y)\in P$ if and only if
  $(x,y)\not\in Q$

- There exists a $y\in D$ such that $(y,3)\in P$ and $(3,y)\not\in Q$,
  namely y=1 (only need to show it for one value in this case as
  $\exists$)

If we amend the interpretation so that x is interpreted as x=2 then we
have that $I\models \lnot \chi$

# More illustrations

Consider the well formed formula $\phi$ defined as
$\forall x \exists y P(x,y)$

And consider the interpretation of $\phi$ where:

- The domain of discourse is the set $\mathbb{Z}$ of integers

- $P = \{ ( u , v ) : u , v \in \mathbb { Z } , u > v \}$

So,

- $( \mathbb { Z } , P ) = \forall x \exists y P ( x , y )$

  if and only if for every
  $x \in \mathbb { Z } , ( \mathbb { Z } , P ) \models \exists y P ( x , y )$

  if and only if for every $x\in \mathbb{ Z }$, there exists
  $y\in \mathbb{ Z }$ with $x>y$

For any $x\in \mathbb{ Z }$, if we take $y=x-1$ then this value of y
**witnesses** that $x>y$; hence, $(\mathbb{ Z },P)\models \phi$

If we restrict the domain to the natural numbers $\mathbb{ N }$ and
where $P = \{ ( u , v ) : u , v \in \mathbb { N } , u > v \}$, i.e. we
have the restriction of $(\mathbb{ Z },p)$ to $\mathbb{ N }$ then
$(\mathbb{ N },p)\models \lnot \phi$. This fails for example when a
value is 0 as there is not a natural number smaller than it

Consider the well formed formula $\phi$ defined as
$\exists y \forall x P ( x , y )$

And consider the interpretation of $\phi$ where

- The domain of discourse if the set $\mathbb{ Z }$ of integers

- $P = \{ ( u , v ) : u , v \in \mathbb { Z } , u > v \}$

So,

- $( \mathbb { Z } , P ) = \exists y \forall x P ( x , y )$

  if and only if there exists $y\in \mathbb{ Z }$ such that
  $(\mathbb{ Z },P)\models \forall x P(x,y)$

  if and only if there exists $y\in \mathbb{ Z }$ such that for all
  $x\in \mathbb{ Z }, x>y$

No matter which $y\in \mathbb{ Z }$ we choose, putting $x=y-1$ results
in $x\leqslant y$

Hence
$( \mathbb { Z } , P ) \models \neg \exists y \forall x P ( x , y )$

Take care with the **order** of quantifiers
