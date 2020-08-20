---
title: Matrix Inversion
---

# Row equivalence of matrices

Recall that the three **elementary row operations** on a matrix are:

- Multiply a row my a non zero constant c

- Interchange two rows

- Add a constant c times one row $r_1$ to another row $r_2$

Observation: If B is obtained from A by using an elementary row
operation then A can be obtained from B by using the **inverse
elementary row operation**:

- Multiply the same row by a non zero constant $1/c$

- Interchange the same two rows

- Add -c times row $r_1$ to row $r_2$

Matrices A and B are called **row equivalent** if either (hence each)
can be obtained from the other by a sequence of elementary row
operations

# Elementary matrices

An $n\times n$ matrix is called an **elementary matrix** if it is
obtained from the identity matrix $I_n$ by performing a single
elementary row operation\
Examples of elementary matrices:

$$
\left( \begin{array} { r r } { 1 } & { 0 } \\ { 0 } & { - 3 } \end{array} \right) \left( \begin{array} { c c c c } { 1 } & { 0 } & { 0 } & { 0 } \\ { 0 } & { 0 } & { 1 } & { 0 } \\ { 0 } & { 1 } & { 0 } & { 0 } \\ { 0 } & { 0 } & { 0 } & { 1 } \end{array} \right) \left( \begin{array} { l l l } { 1 } & { 0 } & { 3 } \\ { 0 } & { 1 } & { 0 } \\ { 0 } & { 0 } & { 1 } \end{array} \right) \left( \begin{array} { l l l } { 1 } & { 0 } & { 0 } \\ { 0 } & { 1 } & { 0 } \\ { 0 } & { 0 } & { 1 } \end{array} \right)
$$

## Lemma

Suppose that an elementary matrix E is obtained from $I_m$ by performing
an elementary row operation. If A is an $m\times n$ matrix then the
product EA is the matrix obtained from A by performing the same row
operation

Thus, performing an elementary row operation has the same effect as
multiplying by the corresponding elementary matrix (from the left)

# Elementary matrices are invertible

## Lemma

Every elementary matrix E is invertible, and the inverse is also
elementary

## Proof

By definition, E can be obtained from I by using some elementary row
operation. Then I can be obtained from E by using the inverse elementary
row operation. By the above, there is a matrix $E_0$ such that $E_0E=I$,
hence E is invertible. We have $E_0=E^{-1}$, so $EE_0=I$, which implies
that $E_0$ is also elementary

# Theorem about invertible matrices

## Theorem

If A is an $n\times n$ matrix, then the following are equivalent, i.e.
all true or all false

1.  A is invertible

2.  The linear system $Ax=0$ has only the trivial solution $x=0$

3.  The reduced row echelon form of A is $I_n$

4.  A can be expressed as a product of elementary matrices

5.  $det(A)\neq 0$

## Proof

We will prove that
$(1)\Rightarrow(2)\Rightarrow(3)\Rightarrow(4)\Rightarrow (1)$ and
$1\Leftrightarrow (5)$ later on the page

$(1)\Rightarrow (2)$. Assume that A is invertible. If $Ax=0$ then
$x=A^{-1}Ax=A^{-1}0=0$

$(2)\Rightarrow (3)$. Assume that the system $Ax=0$ has only the trivial
solution $x=0$. The augmented matrix of the system is $[A|0]$. If the
reduced echelon form of this matrix is not $[I_n|0]$ then the system has
a non trivial solution, which can't exist. Hence the reduced echelon
form of $[A|0]$ is $[I_n|0]$, which immediately implies (3).

$(3)\Rightarrow (4)$ If $I_n$ is obtained from A by a sequence of
elementary row operations then there are elementary matrices
$E_1,...E_k$ such that

$$
E_k\cdots E_2E_1A=I_n
$$

We proved today that each $E_i$ is invertible and each $E^{-1}_i$ is elementary. Hence

$$
A = E _ { 1 } ^ { - 1 } E _ { 2 } ^ { - 1 } \cdots E _ { k } ^ { - 1 } l _ { n } = E _ { 1 } ^ { - 1 } E _ { 2 } ^ { - 1 } \cdots E _ { k } ^ { - 1 }
$$

$(4)\Rightarrow (1)$. The product of invertible matrices is also
invertible

# Inversion algorithm

As an application of the above theorem, we give an algorithm which

1.  decides whether a given matrix A is invertible

2.  and, if so, finds the inverse $A^{-1}$

Assume that $E_k\cdots E_2E_1A=I_n$. Multiplying by $A^{-1}$, get
$E _ { k } \cdots E _ { 2 } E _ { 1 } l _ { n } = A ^ { - 1 }$\
Therefore, if a sequence of elementary row operations transforms A to
$I_n$ then the same sequence transforms $I_n$ to $A^{-1}$\
Inversion algorithm:

1.  Write the matrix $[A|I_n]$

2.  Apply elementary row operations to the whole matrix to transform its
    left half (i.e. A) to reduced row echelon form

3.  If this form (of the left half) is not $I_n$ then the matrix is not
    invertible

4.  Otherwise, the obtained matrix is $[I_n|A^{-1}]$

## Example

Find the inverse (if it exists) of the matrix
$A = \left( \begin{array} { c c c } { 1 } & { 2 } & { 3 } \\ { 2 } & { 5 } & { 3 } \\ { 1 } & { 0 } & { 8 } \end{array} \right)$

$$
\left( \begin{array} { l l l | l l l } { 1 } & { 2 } & { 3 } & { 1 } & { 0 } & { 0 } \\ { 2 } & { 5 } & { 3 } & { 0 } & { 1 } & { 0 } \\ { 1 } & { 0 } & { 8 } & { 0 } & { 0 } & { 1 } \end{array} \right) \rightarrow \left( \begin{array} { r r r | r r r } { 1 } & { 2 } & { 3 } & { 1 } & { 0 } & { 0 } \\ { 0 } & { 1 } & { - 3 } & { - 2 } & { 1 } & { 0 } \\ { 0 } & { - 2 } & { 5 } & { - 1 } & { 0 } & { 1 } \end{array} \right) \rightarrow \left( \begin{array} { c c c | c c c } { 1 } & { 2 } & { 3 } & { 1 } & { 0 } & { 0 } \\ { 0 } & { 1 } & { - 3 } & { - 2 } & { 1 } & { 0 } \\ { 0 } & { 0 } & { - 1 } & { - 5 } & { 2 } & { 1 } \end{array} \right) \rightarrow \left( \begin{array} { c c c | c c c } { 1 } & { 2 } & { 3 } & { 1 } & { 0 } & { 0 } \\ { 0 } & { 1 } & { - 3 } & { - 2 } & { 1 } & { 0 } \\ { 0 } & { 0 } & { 1 } & { 5 } & { - 2 } & { - 1 } \end{array} \right) \rightarrow
$$

$$
\left( \begin{array} { c c c | c c c } { 1 } & { 2 } & { 0 } & { - 14 } & { 6 } & { 3 } \\ { 0 } & { 1 } & { 0 } & { 13 } & { - 5 } & { - 3 } \\ { 0 } & { 0 } & { 1 } & { 5 } & { - 2 } & { - 1 } \end{array} \right) \rightarrow \left( \begin{array} { c c c | c c c } { 1 } & { 0 } & { 0 } & { - 40 } & { 16 } & { 9 } \\ { 0 } & { 1 } & { 0 } & { 13 } & { - 5 } & { - 3 } \\ { 0 } & { 0 } & { 1 } & { 5 } & { - 2 } & { - 1 } \end{array} \right)
$$

We have
$A ^ { - 1 } = \left( \begin{array} { r r r } { - 40 } & { 16 } & { 9 } \\ { 13 } & { - 5 } & { - 3 } \\ { 5 } & { - 2 } & { - 1 } \end{array} \right)$

# Determinants reminder

- The determinant of a $2\times 2$ matrix
  $A = \left( \begin{array} { l l } { a } & { b } \\ { c } & { d } \end{array} \right)$
  is the number

  $$
  \operatorname { det } ( A ) = \left| \begin{array} { l l } { a } & { b } \\ { c } & { d } \end{array} \right| = a d - b c
  $$

- If A is a square matrix of order n, then the minor of the entry
  $a_{ij}$ denoted by $M_{ij}$, is the determinant of the matrix (of
  order n-1) obtained from A by removing its ith row and jth column

- The number $C _ { i j } = ( - 1 ) ^ { i + j } M _ { i j }$ is called
  the cofactor of $a_{ij}$

- If A is an $n\times n$ matrix then the determinant of A can be
  computed by any of the following **cofactor expansions** along the
  ith row and along the jth column, respectively

  $$
  \operatorname { det } ( A ) = a _ { i 1 } C _ { i 1 } + a _ { i 2 } C _ { i 2 } + \ldots + a _ { i n } C _ { i n }
  $$

  $$
  \operatorname { det } ( A ) = a _ { 1 j } C _ { 1 j } + a _ { 2 j } C _ { 2 j } + \ldots + a _ { n j } C _ { n j }
  $$

- Easy to see: if A has a row of 0s or a column of 0s then det(A)=0

- Easy to see: it holds that $det(A)=det(A^T)$

# Determinants and elementary row operations

How do elementary row operations affect the determinant of a square
matrix?

## Theorem

Let A be an $n\times n$ matrix

- If B is obtained from A by multiplying a row by a constant k then
  $det(B)=k\cdot det(A)$

- If B is obtained from A by interchanging two rows then
  $det(B)=-det(A)$

- If B is obtained from A by adding a multiple of one row to another
  row then $det(B)=det(A)$

## Lemma

If $A=(a_{ij})$ is an $n\times n$ upper triangular matrix, i.e.
$a_{ij}=0$ whenever $i>j$ (all 0s under the diagonal), then
$\operatorname { det } ( A ) = a _ { 11 } \cdot a _ { 22 } \cdots a _ { ( n - 1 ) ( n - 1 ) } \cdot a _ { n n }$

# Computing determinants

The previous section suggests a strategy for computing the determinant
of a matrix:

- Use elementary row operations to transform the matrix into row
  echelon form

- Record how determinant changes during the transformation

- The row echelon form is upper triangular, its determinant is easy to
  find

Example:

$$
\left| \begin{array} { r r r } { 0 } & { 1 } & { 5 } \\ { 3 } & { - 6 } & { 9 } \\ { 2 } & { 6 } & { 1 } \end{array} \right| = - \left| \begin{array} { r r r } { 3 } & { - 6 } & { 9 } \\ { 0 } & { 1 } & { 5 } \\ { 2 } & { 6 } & { 1 } \end{array} \right| = - 3 \left| \begin{array} { c c c } { 1 } & { - 2 } & { 3 } \\ { 0 } & { 1 } & { 5 } \\ { 2 } & { 6 } & { 1 } \end{array} \right| =- 3 \left| \begin{array} { r r r } { 1 } & { - 2 } & { 3 } \\ { 0 } & { 1 } & { 5 } \\ { 0 } & { 10 } & { - 5 } \end{array} \right| = - 3 \left| \begin{array} { r r r } { 1 } & { - 2 } & { 3 } \\ { 0 } & { 1 } & { 5 } \\ { 0 } & { 0 } & { - 55 } \end{array} \right| = ( - 3 ) \cdot ( - 55 ) = 165
$$

We now have two ways of computing determinants:

by cofactor expansion (i.e. by definition) and by row reduction (as
above)

They can be mixed: create many 0s by row reduction and use cofactor
expansion

# Determinants of elementary matrices

We have $det(I_n)=1$. The following is a special case of the previous
theorem

## Corollary

Let E be an $n\times n$ elementary matrix

- If E is obtained from $I_n$ by multiplying a row by a constant k
  then $det(E)=k$

- If E is obtained from $I_n$ by interchanging two rows then
  $det(E)=-1$

- If E is obtained from $I_n$ by adding a multiple of one row to
  another row then $det(E)=1$

## Lemma

If E and B are $n\times n$ matrices and E is elementary then
$det(EB)=det(E)det(B)$

## Proof

We consider only the 1st case from the above corollary, the other two
are similar. If E is obtained from $I_n$ by multiplying a row by k, then
EB is obtained from B by the same operation, so
$det(EB)=k\cdot det (B)=det(E)det(B)$

# Inconvertibility criterion

The following theorem is $(1)\Leftrightarrow (5)$ from the theorem about
invertible matrices

## Theorem

A square matrix A is invertible iff $det(A)\neq 0$

## Proof

Let R be the reduced row echelon form of A. We have the following facts:

- Either R=I (and $det(R)=1$) of R contains a row of 0s (and
  $det(R)=0$)

- A is invertible iff R=I, by the theorem about invertible matrices
  $(1)\Leftrightarrow (3)$

- We know that $R=E_r\cdots E_2E_1A$ for some elementary matrices
  $E_i$

- $\operatorname { det } ( R ) = \operatorname { det } \left( E _ { r } \right) \cdots \operatorname { det } \left( E _ { 2 } \right) \operatorname { det } \left( E _ { 1 } \right) \operatorname { det } ( A)$
  by the previous lemma

- $det(E_i)\neq 0$ for all i, so $det(R)$ and $det(A)$ are either both
  0 or both non 0

- Finally, A is invertible
  $\Leftrightarrow R = I \Leftrightarrow \operatorname { det } ( R ) \neq 0 \Leftrightarrow \operatorname { det } ( A ) \neq 0$

# Properties of determinants

## Theorem

If A and B are square matrices of the same size then
$det(AB)=det(A)det(B)$

## Proof

- It can be shown that if A is invertible then neither is AB. In this
  case $det(A)=det(AB)=0$

- Assume that A is invertible, then $A=E_1E_2\cdots E_r$ for some
  elementary $E_i$

- Then
  $A B = E _ { 1 } E _ { 2 } \cdots E _ { r } B \text { and } \operatorname { det } ( A B ) = \operatorname { det } \left( E _ { 1 } \right) \operatorname { det } \left( E _ { 2 } \right) \cdots \operatorname { det } \left( E _ { r } \right) \operatorname { det } ( B )$

- Since
  $\operatorname { det } ( A ) = \operatorname { det } \left( E _ { 1 } \right) \operatorname { det } \left( E _ { 2 } \right) \cdots \operatorname { det } \left( E _ { r } \right)$,
  we have the required equality.

Applying the above theorem to the case when A is invertible and
$B=A^{-1}$, we get

## Corollary

If A is invertible then $det(A^{-1})=1/det(A)$

Note that $det(A+B)\neq det(A)+det(B)$ in general. Try $A=I_2$ and
$B=-I_2$

# Inverting a matrix via cofactors/adjoint

- If A is a square matrix of order n, then the **minor of the entry
  $a_{ij}$** denoted by $M_{ij}$, is the determinant of the matrix (of
  order n-1) obtained from A by removing its ith row and jth column

- The number $C _ { i j } = ( - 1 ) ^ { i + j } M _ { i j }$ is called
  the **cofactor of $a_{ij}$**

- The matrix

  $$
  \operatorname { cof } ( A ) = \left( \begin{array} { c c c c } { C _ { 11 } } & { C _ { 12 } } & { \dots } & { C _ { 1 n } } \\ { C _ { 21 } } & { C _ { 22 } } & { \cdots } & { C _ { 2 n } } \\ { \vdots } & { \vdots } & { } & { \vdots } \\ { c _ { n 1 } } & { C _ { n 2 } } & { \cdots } & { c _ { n n } } \end{array} \right)
  $$

  is called the **matrix of cofactors** of A

- The transpose of cof(A) is the **adjoint** of A, denoted by $adj(A)$

## Theorem

If A is an invertible matrix then $A^{-1}=\dfrac{1}{det(A)}\cdot adj(A)$

## Example

Find the inverse (if it exists) of the following matrix
$A = \left( \begin{array} { c c c } { 0 } & { 1 } & { 5 } \\ { 3 } & { - 6 } & { 9 } \\ { 2 } & { 6 } & { 1 } \end{array} \right)$

We have computed $det(A)=165$ earlier, so the inverse exists
We have:

$$
\operatorname { cof } ( A ) = \left( \begin{array} { r r r } { - 60 } & { 15 } & { 30 } \\ { 29 } & { - 10 } & { 2 } \\ { 39 } & { 15 } & { - 3 } \end{array} \right) , \text { so adj } ( A ) = \left( \begin{array} { r r r } { - 60 } & { 29 } & { 39 } \\ { 15 } & { - 10 } & { 15 } \\ { 30 } & { 2 } & { - 3 } \end{array} \right)
$$

Therefore,

$$
A ^ { - 1 } = \frac { 1 } { 165 } \left( \begin{array} { r r r } { - 60 } & { 29 } & { 39 } \\ { 15 } & { - 10 } & { 15 } \\ { 30 } & { 2 } & { - 3 } \end{array} \right) = \left( \begin{array} { r r r } { - 60 / 165 } & { 29 / 165 } & { 39 / 165 } \\ { 15 / 165 } & { - 10 / 165 } & { 15 / 165 } \\ { 30 / 165 } & { 2 / 165 } & { - 3 / 165 } \end{array} \right)
$$
