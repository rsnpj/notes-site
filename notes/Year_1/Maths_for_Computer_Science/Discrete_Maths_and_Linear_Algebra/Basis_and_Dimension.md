---
title: Basis and Dimension of a vector space
lecturer: Andrei
---

# Basis

## Definition

If V is a vector space and $S=\{v_1,...,v_r\}$ is a set of vectors in V
then S is a basis for V if

1.  S is linearly independent

2.  S spans V

## Description

- The standard unit vectors form a basis for $\mathbb{R}^n$, called
  the standard basis

- The $m\times n$ matrices $M_{ij}$ whose entries are all 0 except
  $a_{ij}=1$ form the standard basis for the space $\mathbb{M}_{mn}$
  of all $m\times n$ matrices
- Consider the case $m=n=2$ (other cases are similar) Then:
  $$
  M _ { 11 } = \left( \begin{array} { c c } { 1 } & { 0 } \\ { 0 } & { 0 } \end{array} \right) , M _ { 12 } = \left( \begin{array} { c c } { 0 } & { 1 } \\ { 0 } & { 0 } \end{array} \right) , M _ { 21 } = \left( \begin{array} { c c } { 0 } & { 0 } \\ { 1 } & { 0 } \end{array} \right) , M _ { 22 } = \left( \begin{array} { c c } { 0 } & { 0 } \\ { 0 } & { 1 } \end{array} \right)
  $$
- It is clear that
  $a M _ { 11 } + b M _ { 12 } + c M _ { 21 } + d M _ { 22 } = \left( \begin{array} { c c } { a } & { b } \\ { c } & { d } \end{array} \right)$\
  Any $2\times 2$ matrix is a linear combination of our matrices (i.e.
  they span $\mathbb{M}_{22}$). If
  $a M _ { 11 } + b M _ { 12 } + c M _ { 21 } + d M _ { 22 }$ is the
  zero matrix then $a=b=c=d=0$ (i.e. they are linearly independent)

## Example

Show that the vectors

$\mathbf { v } _ { 1 } = ( 1,2,1 ) , \mathbf { v } _ { 2 } = ( 2,9,0 ) , \mathbf { v } _ { 3 } = ( 3,3,4 )$
form a basis in $\mathbb{R}^3$

For a vector $b=(b_1,b_2,b_3)\in \mathbb{R}^3$ consider the equation
$k _ { 1 } \mathbf { v } _ { 1 } + k _ { 2 } \mathbf { v } _ { 2 } + k _ { 3 } \mathbf { v } _ { 3 } = \mathbf { b }$\
The equation can be re-written as a linear system and in matrix form

$$
\begin{aligned}
k _ { 1 }& + 2 k _ { 2 } & + 3 k _ { 3 } &= b _ { 1 } \\
2 k _ { 1 } &+ 9 k _ { 2 } & + 3 k _ { 3 }& = b _ { 2 } \\
k _ { 1 }& & + 4 k _ { 3 } & = b _ { 3 } \end{aligned} \left( \begin{array} { c c c } { 1 } & { 2 } & { 3 } \\ { 2 } & { 9 } & { 3 } \\ { 1 } & { 0 } & { 4 } \end{array} \right) \left( \begin{array} { l } { k _ { 1 } } \\ { k _ { 2 } } \\ { k _ { 3 } } \end{array} \right) = \left( \begin{array} { c } { b _ { 1 } } \\ { b _ { 2 } } \\ { b _ { 3 } } \end{array} \right)
$$

We need to check

1.  linear independence, i.e. if b=0 then the system only has the
    trivial solution $k_1=k_2=k_3=0$, and

2.  the vector span $\mathbb{R}^3$ i.e. the system has a solution for
    every b

- Condition (1) holds iff the matrix of the system has a non zero
  determinant

- If the determinant is non-zero then condition (2) holds too

- The determinant is -1, so we are done

# Basis representation is unique

## Theorem

If $S=\{v_1,...,v_n\}$ is a basis for a vector space V then each vector
$v\in V$ can be expressed as
$\mathbf { v } = k _ { 1 } \mathbf { v } _ { 1 } + k _ { 2 } \mathbf { v } _ { 2 } + \ldots + k _ { n } \mathbf { v } _ { n }$
in exactly one way

## Proof

S spans V, hence each vector can be represented as in at least one way.
Assume some vector v has two different representations:

$$
\begin{aligned} \mathbf { v } & = k _ { 1 } \mathbf { v } _ { 1 } + k _ { 2 } \mathbf { v } _ { 2 } + \ldots + k _ { n } \mathbf { v } _ { n } \\ \mathbf { v } & = c _ { 1 } \mathbf { v } _ { 1 } + c _ { 2 } \mathbf { v } _ { 2 } + \ldots + c _ { n } \mathbf { v } _ { n } \end{aligned}
$$

Subtracting one from the other, one gets

$$
\mathbf { 0 } = \left( k _ { 1 } - c _ { 1 } \right) \mathbf { v } _ { 1 } + \left( k _ { 2 } - c _ { 2 } \right) \mathbf { v } _ { 2 } + \ldots + \left( k _ { n } - c _ { n } \right) \mathbf { v } _ { n }
$$

Since the two representations of v are different, we have $k_1\neq c_i$
for some $i$. Then the last equality contradicts the fact that
$S=\{v_1,...,v_n\}$ is linearly independent

# Coordinates

## Definition

If $S=\{v_1,...,v_n\}$ is a basis for a vector space V then the
coordinates of a vector $v\in V$ relative to the basis S are the
(unique) numbers $k_1,k_2,...,k_n$ such that
$\mathbf { v } = k _ { 1 } \mathbf { v } _ { 1 } + k _ { 2 } \mathbf { v } _ { 2 } + \ldots + k _ { n } \mathbf { v } _ { n }$
The vector
$( \mathbf { v } ) _ { S } = \left( k _ { 1 } , k _ { 2 } , \dots , k _ { n } \right) \in \mathbb { R } ^ { n }$
is the coordinate vector of v relative to S

## Example

When $V=\mathbb{ R }^n$ and S is the standard basis then v and $(v)_s$
are the same

In general $v\leftrightarrow (v)_s$ is a one to one correspondence
between V and $\mathbb{ R }^n$

How do we find the coordinates of a given vector relative to a given
basis?

We checked that
$\mathbf { v } _ { 1 } = ( 1,2,1 ) , \mathbf { v } _ { 2 } = ( 2,9,0 ) , \mathbf { v } _ { 3 } = ( 3,3,4 )$
form a basis in $\mathbb{ R }^3$. Find the coordinates of $v=(5,-1,9)$
in this basis

We need to find numbers $k_1,k_2,k_3$ such that
$k _ { 1 } \mathbf { v } _ { 1 } + k _ { 2 } \mathbf { v } _ { 2 } + k _ { 3 } \mathbf { v } _ { 3 } = \mathbf { v }$.
This equation can be rewritten as a linear system

$$
\begin{aligned}
 k _ { 1 } &+ 2 k _ { 2 } & + 3 k _ { 3 } &= 5 \\
 2 k _ { 1 }& + 9 k _ { 2 } & + 3 k _ { 3 } &= - 1 \\
  k _ { 1 } & &+ 4 k _ { 3 } &= 9 \end{aligned}
$$

Solving the system, we
get $k_1=1,k_2=-1,k_3=2$, these are the coordinates of **v**

# Dimension

A vector space V is finite-dimensional if it can be spanned by a finite
set of vectors. Otherwise, V is infinite-dimensional

## Theorem

Let V be a finite-dimensional vector space and let
$\left\{ \mathbf { v } _ { 1 } , \dots , \mathbf { v } _ { n } \right\}$
be any basis in V

1.  Any subset of V with more than n vectors is linearly independent

2.  Any subset of V with fewer than n vectors does not span V

## Corollary

All bases of a finite-dimensional vector space have the same number of
vectors

## Definition

The dimension of a finite-dimensional vector space V, denoted by
$\operatorname { dim } ( V )$, is the number of vectors in any of its
bases. By convention, $\operatorname{dim}(\{0\})=0$

## Examples

- $\operatorname{dim}(\mathbb{ R }^n)=n$

- $\operatorname{dim}(\mathbb{M}_{mn})=mn$

# Plus/Minus Theorem

## Theorem

Let S be a non empty set of vectors in a vector space V

1.  If S is linearly independent and $\mathbf{ v }\in V$ is not in
    $\operatorname{span}(S)$ then $S\cup \{\mathbf{ v }\}$ is also
    linearly independent

2.  If some $\mathbf{ v }\in S$ can be expressed as a linear combination
    of other vectors in S then
    $\operatorname{span}(S)=\operatorname{span}(S\backslash \{\mathbf{ v }\})$

## Corollary

Let V be an n-dimensional vector space and let S be a subset of V with
exactly n vectors. If S is linearly independent or S spans V then S is a
basis for V

# Dimension of a subspace

## Theorem

Let W be a subspace of a finite-dimensional vector space V. Then

1.  W is finite-dimensional and
    $\operatorname{dim}(W)\leqslant \operatorname{dim}(V)$

2.  $W=V$ iff $\operatorname{dim}(W)=\operatorname{dim}(V)$

# Row space, column space and null space

## Definition

Let A be an $m\times n$ matrix

The **row space** of A is the subspace of $\mathbb{ R }^n$ spanned by
the row vectors of A

The **column space** of A is the subspace of $\mathbb{ R }^m$ spanned by
the column vectors of A

The **null space** of A is the solution set of the linear system $ax=0$

## Example

Let

$$
A = \left( \begin{array} { r r r } { 2 } & { 1 } & { 0 } \\ { 3 } & { - 1 } & { 4 } \end{array} \right)
$$

The row vectors of A are

$$
\mathbf { r } _ { 1 } = ( 2,1,0 ) \text { and } \mathbf { r } _ { 2 } = ( 3 , - 1,4 )
$$

The column vectors of A are

$$
\mathbf { c } _ { 1 } = \left( \begin{array} { c } { 2 } \\ { 3 } \end{array} \right) , \mathbf { c } _ { 2 } = \left( \begin{array} { r } { 1 } \\ { - 1 } \end{array} \right) , \text { and } \mathbf { c } _ { 3 } = \left( \begin{array} { l } { 0 } \\ { 4 } \end{array} \right)
$$

# Elementary row operations and the column space

Elementary row operations change neither the row space nor the null
space of a matrix, but they can change the column space

However, elementary row operations do not change dependencies between
column vectors of a matrix: if
$\mathbf { w } _ { 1 } , \dots , \mathbf { w } _ { r }$ are some column
vectors of a matrix such that
$c _ { 1 } \mathbf { w } _ { 1 } + c _ { 2 } \mathbf { w } _ { 2 } + \ldots + c _ { r } \mathbf { w } _ { r } = \mathbf { 0 }$
holds before an operation then it also holds after

## Theorem

Let A and B be row equivalent matrices. Then a given set of column
vectors in A is linearly independent iff the corresponding set of column
vectors in B is such. Similarly, a given set of column vectors in A is a
basis for the column space of A iff the corresponding set of column
vectors in B is a basis for the column space of B.

## Theorem

If a matrix R is in row echelon form then the column (row) vectors with
the leading 1s form a basis for the column (row, respectively) space of
R.

# Finding basis for the row, column and null spaces

In order to find a basis for the column space of a matrix A do

- Transform A (by elementary row operations) to row echelon form R

- Select all columns in R that have leading 1s

- The corresponding columns in A form a basis

In order to find a **basis for the row space** of a matrix A, do

- Transform A (by elementary ) row operations to row echelon form R

- The rows in R with the leading 1s form a basis for the row space of
  A

In order to find the **basis for the null space** of A, do

- Find the general solution to the system $Ax=0$

- For each free variable x, take the solution (vector
  $\mathbf{ v }_x$) om which x=1 and the other free variables are set
  to 0

- These vectors $\mathbf{ v }_x$ together form a basis for the null
  space

In order to find a basis for $\operatorname{Span}(S)$, where S is a set
of vectors, do

- form a matrix whose row vectors are the vectors in S and then do as
  above

# Rank and nullity

## Theorem

The row space and column space of a matrix have the same dimension

## Definition

The **rank** of a matrix A, denoted by $\operatorname{rank}(A)$, is the
dimension of its row space.\
The nullity of A, denoted by $\operatorname{nullity}(A)$, is the
dimension of the null space of A

## Lemma

For any $m\times n$ matrix A, rank(A) and nullity(A) are the numbers of
leading and free variables,. respectively, in the general solution to
$Ax=0$

## Theorem (Dimension Theorem for Matrices)

For any matrix A with n columns, rank(A)+nullity(A)=n

## Proof

The system $Ax=0$ has n variables. Now use the previous lemma
