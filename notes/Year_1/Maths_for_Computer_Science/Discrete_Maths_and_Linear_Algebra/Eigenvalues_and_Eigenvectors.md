---
title: Eigenvalues and Eigenvectors
---

## Definition

Let A be an $n\times n$ matrix. A non-zero vector $x\in \mathbb{R}^n$ is
called an eigenvector of A if, for some scalar $\lambda$

$$
Ax=\lambda x
$$

In this case, $\lambda$ is called an eigenvalue of A
and x is an eigenvector corresponding to $\lambda$

- The assumption $x\neq 0$ is necessary to avoid the case
  $A0=\lambda0$ which always holds

- The meaning of the notion is that when x is multiplied by A it does
  not change direction (up to reversal)

## Example

Vector $\mathbf{x}=\left( \begin{array}{l}{1} \\ {2}\end{array}\right)$
is an eigenvector of
$A=\left( \begin{array}{rr}{3} & {0} \\ {8} & {-1}\end{array}\right)$
corresponding to the eigenvalue 3. Indeed,

$$
A \mathbf{x}=\left( \begin{array}{rr}{3} & {0} \\ {8} & {-1}\end{array}\right) \left( \begin{array}{l}{1} \\ {2}\end{array}\right)=\left( \begin{array}{l}{3} \\ {6}\end{array}\right)=3 \mathbf{x}
$$

# Characteristic equation of a matrix

## Theorem

If A is an $n\times n$ matrix then $\lambda$ is an eigenvalue of A iff
it satisfies $\operatorname{det}(\lambda I-A)=0$

The equation $\operatorname{det}(\lambda I-A)=0$ is called the
characteristic equation of A

## Proof

By definition, $\lambda$ is an eigenvalue of A iff $Ax=\lambda x$ for
some $x\neq 0$

The equation $Ax=\lambda x$ can be re-written as $Ax=\lambda Ix$, and
then as $(\lambda I-A)x=0$

By theorem about invertible matrices, the last equation has solution
$x\neq 0$ iff $\operatorname{det}(\lambda I-A)=0$

## Example

Find the eigenvalues of the matrix
$A=\left( \begin{array}{cc}{2} & {-1} \\ {10} & {-9}\end{array}\right)$

$$
\operatorname{det}(\lambda I-A)=\left| \begin{array}{cc}{\lambda-2} & {1} \\ {-10} & {\lambda+9}\end{array}\right|=(\lambda-2) \cdot(\lambda+9)-1 \cdot(-10)=\lambda^{2}+7 \lambda-8
$$

So, the characteristic equation of A is $\lambda^2+7\lambda-8=0$

Its solutions are $\lambda_1=1$ and $\lambda_2=-8$ are the eigenvalues
of A

# Characteristic polynomial of a matrix

- In general, the expression $\operatorname{det}(\lambda I-A)$ is a
  polynomial

  $$
  p(\lambda)=\lambda^{n}+c_{1} \lambda^{n-1}+\ldots+c_{n-1} \lambda+c_{n}
  $$

- Solving the equation $p(\lambda)=0$ is difficult in general (no
  closed formula). In practice, it is solved numerically.

## Example

Find the eigenvalues of
$A=\left( \begin{array}{rrr}{0} & {1} & {0} \\ {0} & {0} & {1} \\ {4} & {-17} & {8}\end{array}\right)$.
We have

$$
\operatorname{det}(\lambda I-A)=\left( \begin{array}{ccc}{\lambda} & {-1} & {0} \\ {0} & {\lambda} & {-1} \\ {-4} & {17} & {\lambda-8}\end{array}\right)=\lambda^{3}-8 \lambda^{2}+17 \lambda-4=0
$$

The solutions are $\lambda=4, 2+\sqrt{3}$ and $2-\sqrt{3}$

# Eigenspaces and their bases

- Let $\lambda_0$ be an eigenvalue of A and consider the equation
  $(\lambda_0I-A)x=0$

- The solution set of the equation is a subspace of $\mathbb{R}^n$, it
  is the null space of the matrix $\lambda_0I-A$

- It is called the eigenspace of A corresponding to $\lambda_0$
  because the non-zero vectors in this subspace are the eigenvectors
  of A corresponding to $\lambda_0$

- To find the basis in this subspace, use the algorithm for finding
  basis in null space of a matrix

## Example

Find (a basis of) the eigenspace of
$A=\left( \begin{array}{cc}{2} & {-1} \\ {10} & {-9}\end{array}\right)$
corresponding to $\lambda=8$

Form the equation $(-8I-A)x=0$, or

$$
\left( \begin{array}{cc}{-10} & {1} \\ {-10} & {1}\end{array}\right) \left( \begin{array}{c}{x_{1}} \\ {x_{2}}\end{array}\right)=\left( \begin{array}{c}{0} \\ {0}\end{array}\right) \quad \text { or } \quad \begin{array}{c}{-10 x_{1}+x_{2}=0} \\ {-10 x_{1}+x_{2}=0}\end{array}
$$

The subspace consists of all vectors of the form $(x,10x)$. One basis is
$\{(1,10)\}$

# Similarity of matrices

## Definition

Square matrices A and B are called **similar** if $A=P^{-1}BP$ for some
invertible P

Not that if $A=P^{-1}BP$ then $B=Q^{-1}AQ$ where $Q=P^{-1}$

Similar matrices have many features in common, including determinant,
rank, nullity, characteristic polynomial, eigenvalues etc.

## Lemma

If A and B are similar then $\det(A)=\det(B)$

## Proof

$\operatorname{det}(A)=\operatorname{det}\left(P^{-1} B P\right)=\operatorname{det}\left(P^{-1}\right) \operatorname{det}(B) \operatorname{det}(P)=\frac{1}{\operatorname{det}(P)} \operatorname{det}(B) \operatorname{det}(P)=\operatorname{det}(B)$

## Definition

A square matrix is called **diagonalisable** if it is similar to a
diagonal matrix

# Diagonalisation

## Theorem

An $n\times n$ matrix is diagonalisable iff it has n linearly
independent eigenvectors

## Proof

We prove only $(\Rightarrow)$-direction. Assume that there is an
invertible matrix P and a diagonal matrix
$D=\operatorname{diag}(\lambda_1,...,\lambda_n)$ such that $D=P^{-1}AP$,
or $AP=PD$.

Denote the column vectors of P by $\mathbf{p}_1,...,\mathbf{p}_n$, so
that $P=[p_1|...|p_n]$. Then

$$
A P=A\left[\mathbf{p}_{1}|\ldots| \mathbf{p}_{n}\right]=\left[A \mathbf{p}_{1}|\ldots| A \mathbf{p}_{n}\right]
$$

On the other hand

$$
P D=\left[\lambda_{1} \mathbf{p}_{1}|\ldots| \lambda_{n} \mathbf{p}_{n}\right]
$$

Since $AP=PD$, we can conclude that
$A\mathbf{p}_i=\lambda_i\mathbf{p}_i$ for all
$1\leqslant i\leqslant n$.

Since P is invertible the vectors $\mathbf{p}_1,...,\mathbf{p}_n$ are
linearly independent and in particular, none of
$\mathbf{p}_1,...,\mathbf{p}_n$ is $\mathbf{0}$, so each of them is a
linearly independent eigenvector.
