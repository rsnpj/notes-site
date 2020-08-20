---
title: Matrices and Determinants
---

# Matrices

## Definition

A matrix is a rectangular array of (real) numbers. The numbers in the
array are called the **entries** of the matrix. The entry in row i and
column j is denoted by $a{ij}$

## Dimensions

- A matrix with m rows and n columns is said to have size $m\times n$

- A general $m\times n$ matrix can be written as

  $$
  \left( \begin{array} { c c c c } { a _ { 11 } } & { a _ { 12 } } & { \dots } & { a _ { 1 n } } \\ { a _ { 21 } } & { a _ { 22 } } & { \cdots } & { a _ { 2 n } } \\ { \vdots } & { \vdots } & { } & { \vdots } \\ { a _ { m 1 } } & { a _ { m 2 } } & { \cdots } & { a _ { m n } } \end{array} \right)
  $$

- A matrix of size $n\times n$ is called a square matrix of order n

- Two matrices are **equal** when they have the same size and the
  corresponding entries are equal

# Matrix operations

Let $A=a_{ij}$ and $B=(b_{ij})$ be $m\times n$ matrices

- The **sum** A+B is defined as the $m\times n$ matrix $C=(c_{ij})$
  such that $c_{ij}=a_{ij}+b_{ij}$

- The difference A-B is defined similarly

- If $\alpha$ is a number (scalar) then the product (of a matrix by a
  scalar) $\alpha A$ is the $m\times n$ matrix $C=(c_{ij})$ such that
  $c_{ij}=\alpha\cdot a_{ij}$

Example: Let

$$
A = \left( \begin{array} { c c c } { 2 } & { 3 } & { 4 } \\ { 1 } & { 3 } & { 1 } \end{array} \right) \text { and } B = \left( \begin{array} { r r r } { 0 } & { 2 } & { 7 } \\ { - 1 } & { 3 } & { - 5 } \end{array} \right)
$$

Then:

$$
2 A - B = \left( \begin{array} { c c c } { 4 } & { 6 } & { 8 } \\ { 2 } & { 6 } & { 2 } \end{array} \right) - \left( \begin{array} { r r r } { 0 } & { 2 } & { 7 } \\ { - 1 } & { 3 } & { - 5 } \end{array} \right) = \left( \begin{array} { c c c } { 4 } & { 4 } & { 1 } \\ { 3 } & { 3 } & { 7 } \end{array} \right)
$$

# Matrix Multiplication

- If A is an $m\times r$ matrix and B an $r'\times n$ matrix and the
  product matrix AB is defined only if $r=r'$

- If $A=(a_{ij})$ is an $m\times r$ matrix and $B=(b_{ij})$ an
  $r\times n$ matrix then the **product** AB is the $m\times n$ matrix
  $C=(c_{ij})$ such that:

$$
c _ { i j } = a _ { i 1 } b _ { 1 j } + a _ { i 2 } b _ { 2 j } + \ldots + a _ { i r } b _ { r j }
$$

# Properties of matrix arithmetic

Assuming that the sizes of the matrices are such that the operations can
be preformed, the following rules are valid:

1.  $A+B=B+A$

2.  $A+(B+C)=(A+B)+C$

3.  $A(BC)=(AB)C$

4.  $A(B\pm C)=AB\pm AC$

5.  $(B\pm C)A=BA+CA$

6.  $\alpha(B\pm C)=\alpha B\pm \alpha C$

7.  $(\alpha \pm \beta)A=\alpha A\pm \beta A$

8.  $\alpha(\beta A)=(\alpha\beta)A$

9.  $\alpha(BC)=(\alpha B)C=B(\alpha C)$

# Special matrices

- A matrix whose entities are all 0 is called a zero matrix and
  denoted by 0.

  We have A+0=0+A=A and 0A=0

- A square matrix $(a_{ij})$ such that $a_{ii}=1$ and $a_{ij}=0$. If
  $i\neq j$ is called the identity matrix. denotes $I_n$

  $$
  I _ { n } = \left( \begin{array} { c c c c c } { 1 } & { 0 } & { \cdots } & { 0 } & { 0 } \\ { 0 } & { 1 } & { \cdots } & { 0 } & { 0 } \\ { \vdots } & { \vdots } & { } & { \vdots } & { \vdots } \\ { 0 } & { 0 } & { \cdots } & { 1 } & { 0 } \\ { 0 } & { 0 } & { \cdots } & { 0 } & { 1 } \end{array} \right)
  $$

- It is easy to check that, for any $m\times n$ matrix A $AI_n=A=I_mA$

# AB vs BA

In general, even for square matrices, it is possible that

- $AB\neq BA$

- AB=0, but $A\neq 0$ and $B\neq 0$

- AC=BC, but $A\neq B$

Example:

$$
\begin{array} { l } { \left( \begin{array} { l l } { 0 } & { 1 } \\ { 0 } & { 2 } \end{array} \right) \left( \begin{array} { c c } { 3 } & { 7 } \\ { 0 } & { 0 } \end{array} \right) = \left( \begin{array} { c c } { 0 } & { 0 } \\ { 0 } & { 0 } \end{array} \right) } \\ { \left( \begin{array} { c c } { 3 } & { 7 } \\ { 0 } & { 0 } \end{array} \right) \left( \begin{array} { c c } { 0 } & { 1 } \\ { 0 } & { 2 } \end{array} \right) = \left( \begin{array} { c c } { 0 } & { 17 } \\ { 0 } & { 0 } \end{array} \right) } \end{array}
$$

# Matrix Transpose

If A is an $m\times n$ matrix then the **transpose** of A is the
$n\times m$ matrix $A^T$ such that the ith row of A is the ith column of
$A^T$\
Example:

$$
A = \left( \begin{array} { c c c } { 2 } & { 3 } & { 4 } \\ { 1 } & { 3 } & { 1 } \end{array} \right) \text { then } A ^ { T } = \left( \begin{array} { c c } { 2 } & { 1 } \\ { 3 } & { 3 } \\ { 4 } & { 1 } \end{array} \right)
$$

## Theorem

If the sizes of the matrices are such that the operations can be
performed then

1.  $(A^T)^T=A$

2.  $(A+B)^T=A^T+B^T$

3.  $(A-B)^T=A^T-B^T$

4.  $(\alpha A)^T=\alpha A^T$

5.  $(AB)^T=B^TA^T$

# Matrix inverse and its properties

- If A is a square matrix of order n and if a matrix B of the same
  size can be found such that $AB=BA=I_n$, then A is said to be
  **invertable** (or **non singular**), and B is called an **inverse**
  of A

- In this case A and B are inverse of each other

- If no such B can be found then A is singular

- If B and CD are both inverses of A then $B=C$. Indeed, we have

  $$
  B = B I = B ( A C ) = ( B A ) C = I C = C
  $$

- So, we can speak of the inverse of A, it is usually denoted by
  $A^{-1}$

- If A and B are invertible matrices of the same size then AB is
  invertable and $(AB)^{-1}=B^{-1}A^{-1}$. Indeed,

  $$
  ( A B ) \left( B ^ { - 1 } A ^ { - 1 } \right) = A \left( B B ^ { - 1 } \right) A ^ { - 1 } = A I A ^ { - 1 } = A A ^ { - 1 } = I
  $$

- If A is invertible then $A^T$ is also invertible and
  $(A^T)^{-1}=(A^{-1})^T$. Indeed,
  $$
  A ^ { T } \left( A ^ { - 1 } \right) ^ { T } = \left( A ^ { - 1 } A \right) ^ { T } = I ^ { T } = I
  $$

# Finding the inverse of a $2\times 2$ matrix

Let
$A = \left( \begin{array} { l l } { a } & { b } \\ { c } & { d } \end{array} \right)$.#

The **determinant** of A is the number $det(A)=ad-bc$. This number is
also denoted by

$$
\left| \begin{array} { l l } { a } & { b } \\ { c } & { d } \end{array} \right|
$$

## Theorem

The matrix
$A = \left( \begin{array} { l l } { a } & { b } \\ { c } & { d } \end{array} \right)$
is invertible iff $det(A)\neq 0$, in which case

$$
A ^ { - 1 } = \frac { 1 } { \operatorname { det } ( A ) } \left( \begin{array} { c c } { d } & { - b } \\ { - c } & { a } \end{array} \right)
$$

# Minors and cofactors

- We defined the determinants of $2\times 2$ matrices, so will now
  define them for general square matrices

- Assume that we can compute determinants of square matrices of order
  n-1

- If A is a square matrix of order n, then the **minor of the entry
  $a_{ij}$** denoted my $M_{ij}$, is the determinant of the matrix (of
  order n-1) obtained from A by removing its ith row and jth column

- The number $C _ { i j } = ( - 1 ) ^ { i + j } M _ { i j }$ is called
  the **cofactor of $a_{ij}$**

Example: Let

$$
A = \left( \begin{array} { c c c } { 3 } & { 1 } & { - 4 } \\ { 2 } & { 5 } & { 6 } \\ { 1 } & { 4 } & { 8 } \end{array} \right)
$$

The minor of $a_{32}$ is

$$
M _ { 32 } = \left| \begin{array} { r r r } { 3 } & { 1 } & { - 4 } \\ { 2 } & { 5 } & { 6 } \\ { 1 } & { 4 } & { 8 } \end{array} \right| = \left| \begin{array} { r r } { 3 } & { - 4 } \\ { 2 } & { 6 } \end{array} \right| = 26
$$

The cofactor of $a_{32}$ is

$$
C _ { 32 } = ( - 1 ) ^ { 3 + 2 } \cdot 26 = - 26
$$

# Determinants

If A is an $n\times n$ matrix then the **determinant** of A can be
computed by any of the following **cofactor expressions** along the ith
row and along the jth column, respectiveley:

$$
\operatorname { det } ( A ) = a _ { i 1 } C _ { i 1 } + a _ { 2 } C _ { i 2 } + \ldots + a _ { i n } C _ { i n }
$$

$$
\operatorname { det } ( A ) = a _ { 1 j } C _ { 1 j } + a _ { 2 j } C _ { 2 j } + \ldots + a _ { n j } C _ { n j }
$$
