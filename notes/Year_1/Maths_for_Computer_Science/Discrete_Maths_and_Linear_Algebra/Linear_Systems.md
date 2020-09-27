---
title: Linear Systems
lecturer: Andrei
---

# Systems of linear equations

- A **linear equation** in n variables $x_1,...,x_n$ is an equation of
  the form

  $$
  a _ { 1 } x _ { 1 } + a _ { 2 } x _ { 2 } + \ldots + a _ { n } x _ { n } = b
  $$

  where the $a_i$'s and b are co constant and not all $a_i$'s are
  equal to 0

- A finite set of linear equations is called a **system of linear
  equations**, or simply a **linear system**

- A general linear system can be written as

  $$
  \begin{aligned} a _ { 11 } x _ { 1 } + a _ { 12 } x _ { 2 } + \ldots + a _ { 1 n } x _ { n } & = b _ { 1 } \\ a _ { 21 } x _ { 1 } + a _ { 22 } x _ { 2 } + \ldots + a _ { 2 n } x _ { n } & = b _ { 2 } \\ \vdots & = \vdots \\ a _ { m 1 } x _ { 1 } + a _ { m 2 } x _ { 2 } + \ldots + a _ { m n } x _ { n } & = b _ { m } \end{aligned}
  $$

- A **solution** to such a system is a sequence of $s_1,..,s_n$ of
  numbers such that the assignment $x_1=s_1,...,x_n=s_n$ satisfies
  every equation

- A linear system is called consistent if it has at least one solution
  and it is inconsistent otherwise

# A linear system with one solution

Solve linear system

$$
x-y=1
$$

$$
2x+y=6
$$

Eliminate x from the 2nd equation by adding -2 times the 1st equation to the 2nd

$$
x-y=1
$$

$$
2y=4
$$

We have $y=4/3$, and from the 1st equation $x=7/3$

This system has **one solution**

# A linear system with no solutions

Solve linear system

$$
x+y=4
$$

$$
3x+3y=6
$$

Eliminate x from the 2nd equation by adding -3 times the 1st equation to the 2nd

$$
x+y=4
$$

$$
0=-6
$$

The 2nd equation is contradictory. This system has **no solutions**

# A linear system with infinitely many solutions

Solve linear system

$$
2x+2y=1
$$

$$
8x-4y=2
$$

Eliminate x from the 2nd equation by adding -3 times the 1st equation to the 2nd

$$
2x-2y=1
$$

$$
0=0
$$

The 2nd equation implies no restrictions on x and y, can be omitted

Any pair of values for x and y that satisfies $4x-2y=1$ is a solution

Solving it for x, we get $x=\frac{1}{4}+\frac{1}{2}y$

The solution set can be described as the set of all pairs of numbers of
the form $x=\frac{1}{4}+\frac{1}{2}y$,y (y is a free variable here)

This system has **infinitely many solutions**

# Matrix form of a linear system

A linear system

$$
\begin{aligned} a _ { 11 } x _ { 1 } + a _ { 12 } x _ { 2 } + \ldots + a _ { 1 n } x _ { n } & = b _ { 1 } \\ a _ { 21 } x _ { 1 } + a _ { 22 } x _ { 2 } + \ldots + a _ { 2 n } x _ { n } & = b _ { 2 } \\ \vdots & = \vdots \\ a _ { m 1 } x _ { 1 } + a _ { m 2 } x _ { 2 } + \ldots + a _ { m n } x _ { n } & = b _ { m } \end{aligned}
$$

can be written in a matrix form as $Ax=b$ where

$$
A = \left( \begin{array} { c c c c } { a _ { 11 } } & { a _ { 12 } } & { \cdots } & { a _ { 1 n } } \\ { a _ { 21 } } & { a _ { 22 } } & { \cdots } & { a _ { 2 n } } \\ { \vdots } & { \vdots } & { } & { \vdots } \\ { a _ { m 1 } } & { a _ { m 2 } } & { \cdots } & { a _ { m n } } \end{array} \right) , \quad \mathbf { x } = \left( \begin{array} { c } { x _ { 1 } } \\ { x _ { 2 } } \\ { \vdots } \\ { x _ { n } } \end{array} \right) \quad \text { and } \mathbf { b } = \left( \begin{array} { c } { b _ { 1 } } \\ { b _ { 2 } } \\ { \vdots } \\ { b _ { m } } \end{array} \right)
$$

The matrix A is called the coefficient matrix of the system

If A is (square and) invertible then the solution can be found as
$x=A^{-1}b$

# The augmented matrix and elementary row operations

The augmented matrix of a linear system is the matrix

$$
( A | \mathbf { b } ) = \left( \begin{array} { c c c c | c } { a _ { 11 } } & { a _ { 12 } } & { \cdots } & { a _ { 1 n } } & { b _ { 1 } } \\ { a _ { 21 } } & { a _ { 22 } } & { \cdots } & { a _ { 2 n } } & { b _ { 2 } } \\ { \vdots } & { \vdots } & { } & { \vdots } & { \vdots } \\ { a _ { m 1 } } & { a _ { m 2 } } & { \cdots } & { a _ { m n } } & { b _ { m } } \end{array} \right)
$$

The basic method for solving a linear system is to perform algebraic
operations on the system that:

1.  Do not alter the equation set

2.  Produce increasingly simpler systems

Typically the operations are

- Multiply an equation through by a non zero constant

- Interchange two equations

- Add a constant times one equation to another

This corresponds to the **elementary row operations** on the augmented
matrix

- Multiply a row through by a non zero constant

- Interchange two rows

- Add a constant times one row to another

# Row echelon form

Assume that we transform the augmented matrix of a linear system in
variables x,y,z to the form

$$
\left( \begin{array} { c c c | c } { 1 } & { 0 } & { 0 } & { 1 } \\ { 0 } & { 1 } & { 0 } & { 2 } \\ { 0 } & { 0 } & { 1 } & { 3 } \end{array} \right)
$$

Then we know the solution: it's x=1, y=2, z=3
A matrix is in **row echelon form** if it has the following properties:

- If a row is not all 0s then the first non zero number in it is 1
  (the leading 1)

- The rows that are all 0s (if any) are grouped together at the bottom

- If two successive rows are not all 0s then the leading 1 of the
  higher row occurs further to the left than the leading 1 of the
  lower row

A matrix is in **reduced row echelon form** if it has the above
properties, plus

- Each column that contains a leading 1 has 0s everywhere else

Strategy for solving linear systems: use elementary row operations to
transform the augmented matrix to (reduced) row echelon form

# Extracting solutions from row echelon form

Assume that we have transformed the augmented matrix of a linear system
to a (reduced) row echelon form

Examples:

$$
\left( \begin{array} { l l l | l } { 1 } & { 0 } & { 0 } & { 2 } \\ { 0 } & { 1 } & { 0 } & { 5 } \\ { 0 } & { 0 } & { 0 } & { 1 } \\ { 0 } & { 0 } & { 0 } & { 0 } \end{array} \right) \left( \begin{array} { l l l | l } { 1 } & { 0 } & { 0 } & { 2 } \\ { 0 } & { 1 } & { 0 } & { 5 } \\ { 0 } & { 0 } & { 1 } & { 1 } \\ { 0 } & { 0 } & { 0 } & { 0 } \end{array} \right) \left( \begin{array} { c c c | c } { 1 } & { - 1 } & { 0 } & { 2 } \\ { 0 } & { 0 } & { 1 } & { 5 } \\ { 0 } & { 0 } & { 0 } & { 0 } \\ { 0 } & { 0 } & { 0 } & { 0 } \end{array} \right)
$$

We have the following possibilities:

- Some row has a leading 1 in the last column.

  Then the system includes equation $0\cdot x_1 +...+0\cdot x_n=1$

  Then we know the system has no solutions.

- The number of leading 1s is equal to the number of variables

  (and there is no leading 1 in the last column)

  Then the system has a unique solution

- The number of leading 1s is smaller than the number of variables

  (and there is no leading 1 in the last column)

  Then the system has infinitely many solutions

# General solution (and an example)

Assume the matrix in reduced row echelon form is as follows:

$$
\left( \begin{array} { r r r r | r } { 1 } & { - 1 } & { 0 } & { 2 } & { 2 } \\ { 0 } & { 0 } & { 1 } & { - 1 } & { 5 } \\ { 0 } & { 0 } & { 0 } & { 0 } & { 0 } \\ { 0 } & { 0 } & { 0 } & { 0 } & { 0 } \end{array} \right)
$$

In equations, this is

$$
\begin{aligned} x _ { 1 } - x _ { 2 } & + 2 x _ { 4 } & = 2 \\ x _ { 3 } & - x _ { 4 } & = 5 \end{aligned}
$$

- The variables corresponding to the leading 1s ($x_1$ and $x_3$ in
  this example) are the **leading variables**

- The other variables are **free variables**

- **General solution**: the leading variables expressed via free
  variables

- For the above system $x_1=x_2-2x_4+2$, $x_3=x_4+5$ (where $x_2$ and
  $x_4$ are arbitrary numbers)

# Gaussian elimination procedure

Goal: Transform a matrix to row echelon form by using row operations

**Step 1**: Locate the leftmost column that contains a non zero

$$
\left( \begin{array} { c c c c c c } { \mathbf{0} } & { 0 } & { - 2 } & { 0 } & { 7 } & { 12 } \\ { \mathbf{2} } & { 4 } & { - 10 } & { 6 } & { 12 } & { 28 } \\ { \mathbf{2} } & { 4 } & { - 5 } & { 6 } & { - 5 } & { - 1 } \end{array} \right)
$$

**Step 2**: Interchange the first row with another row (if necessary) to
move a non zero to the top in this column

$$
\left( \begin{array} { c c c c c c } { \textbf{2} } & { 4 } & { - 10 } & { 6 } & { 12 } & { 28 } \\ { \textbf{0} } & { 0 } & { - 2 } & { 0 } & { 7 } & { 12 } \\ { \textbf{2} } & { 4 } & { - 5 } & { 6 } & { - 5 } & { - 1 } \end{array} \right)
$$

**Step 3**: If a is at the top, multiply the first row by 1/a (to get a
leading 1)

$$
\left( \begin{array} { c c c c c c } { \textbf{1} } & { 2 } & { - 5 } & { 3 } & { 6 } & { 14 } \\ { \textbf{0} } & { 0 } & { - 2 } & { 0 } & { 7 } & { 12 } \\ { \textbf{2} } & { 4 } & { - 5 } & { 6 } & { - 5 } & { - 1 } \end{array} \right)
$$

**Step 4:** Add suitable multiples of the first to the rows below so
that all numbers below the leading 1 are 0s

$$
\left( \begin{array} { c c c c c c } { \textbf{1} } & { 2 } & { - 5 } & { 3 } & { 6 } & { 14 } \\ { \textbf{0} } & { 0 } & { - 2 } & { 0 } & { 7 } & { 12 } \\ { \textbf{0} } & { 0 } & { 5 } & { 0 } & { - 17 } & { - 29 } \end{array} \right)
$$

**Step 5**: now separate the top row from the rest ("draw a line below
it") and repeat steps 1-5 for the matrix below the line

$$
\left( \begin{array} { c c c c c c } { \textbf{1} } & { 2 } & { - 5 } & { 3 } & { 6 } & { 14 } \\ \hline \textbf{0} & { 0 } & { - 2 } & { 0 } & { 7 } & { 12 } \\ { \textbf{0} } & { 0 } & { 5 } & { 0 } & { - 17 } & { - 29 } \end{array} \right)
$$

$$
\left( \begin{array} { c c c c c c } { 1 } & { 2 } & { - 5 } & { 3 } & { 6 } & { 14 } \\ { 0 } & { 0 } & { 1 } & { 0 } & { - 7 / 2 } & { - 6 } \\ { 0 } & { 0 } & { 5 } & { 0 } & { - 17 } & { - 29 } \end{array} \right)
$$

$$
\left( \begin{array} { c c c c c c } { 1 } & { 2 } & { - 5 } & { 3 } & { 6 } & { 14 } \\ { 0 } & { 0 } & { 1 } & { 0 } & { - 7 / 2 } & { - 6 } \\ \hline 0 & { 0 } & { 0 } & { 0 } & { 1 / 2 } & { 1 } \end{array} \right)
$$

$$
\left( \begin{array} { c c c c c c } { 1 } & { 2 } & { - 5 } & { 3 } & { 6 } & { 14 } \\ { 0 } & { 0 } & { 1 } & { 0 } & { - 7 / 2 } & { - 6 } \\ { 0 } & { 0 } & { 0 } & { 0 } & { 1 } & { 2 } \end{array} \right)
$$

# Gauss-Jordan elimination

$$
\left( \begin{array} { c c c c c c } { 1 } & { 2 } & { - 5 } & { 3 } & { 6 } & { 14 } \\ { 0 } & { 0 } & { 1 } & { 0 } & { - 7 / 2 } & { - 6 } \\ { 0 } & { 0 } & { 0 } & { 0 } & { 1 } & { 2 } \end{array} \right)
$$

To find the reduced row echelon form, we need one step on top of
Gaussian.

**Step 6**: Beginning from the last non 0 row and working upward, add
suitable multiples of each row to create 0s before the leading 1s

$$
\left( \begin{array} { c c c c c c } { 1 } & { 2 } & { - 5 } & { 3 } & { 6 } & { 14 } \\ { 0 } & { 0 } & { 1 } & { 0 } & { 0 } & { 1 } \\ { 0 } & { 0 } & { 0 } & { 0 } & { 1 } & { 2 } \end{array} \right) \quad \text { added } ( 7 / 2 ) \times 3 \text {rd row to } 2 \text{nd row}
$$

$$
\left( \begin{array} { c c c c c c } { 1 } & { 2 } & { - 5 } & { 3 } & { 0 } & { 2 } \\ { 0 } & { 0 } & { 1 } & { 0 } & { 0 } & { 1 } \\ { 0 } & { 0 } & { 0 } & { 0 } & { 1 } & { 2 } \end{array} \right) \quad \text { added } ( - 6 ) \times 3 \text {rd row to } 1 \text{st row}
$$

$$
\left( \begin{array} { l l l l l l } { 1 } & { 2 } & { 0 } & { 3 } & { 0 } & { 7 } \\ { 0 } & { 0 } & { 1 } & { 0 } & { 0 } & { 1 } \\ { 0 } & { 0 } & { 0 } & { 0 } & { 1 } & { 2 } \end{array} \right) \quad \text { added } 5 \times 2 n d \text { row to } 1 \text{st row}
$$

# Example

Solve linear system by Gauss-Jordan elimination:

$$
\begin{aligned} &- 2 x _ { 3 } & &+ 7 x _ { 5 } & = 12 \\ 2 x _ { 1 } + 4 x _ { 2 } & - 10 x _ { 3 } & + 6 x _ { 4 } & + 12 x _ { 5 } & = 28 \\ 2 x _ { 1 } + 4 x _ { 2 } & - 5 x _ { 3 } & + 6 x _ { 4 } & - 5 x _ { 5 } & = - 1 \end{aligned}
$$

The augmented matrix of system is

$$
\left( \begin{array} { c c c c c | c } { 0 } & { 0 } & { - 2 } & { 0 } & { 7 } & { 12 } \\ { 2 } & { 4 } & { - 10 } & { 6 } & { 12 } & { 28 } \\ { 2 } & { 4 } & { - 5 } & { 6 } & { - 5 } & { - 1 } \end{array} \right)
$$

We have already transformed the above matrix to reduced row echelon form
(see four previous slides)

$$
\left( \begin{array} { c c c c c | c } { 1 } & { 2 } & { 0 } & { 3 } & { 0 } & { 7 } \\ { 0 } & { 0 } & { 1 } & { 0 } & { 0 } & { 1 } \\ { 0 } & { 0 } & { 0 } & { 0 } & { 1 } & { 2 } \end{array} \right)
$$

The general solution of the system is $x_1=-2x_2-3x_4+7, x_3=1, x_2$

# Homogeneous linear systems

- A linear system $Ax=b$ is **homogeneous** if b is all 0s

- Such a system has a **trivial solution**: x is all 0s. Any other
  solution is called **non-trivial**

## Theorem

If a homogeneous linear system has n variables and the reduced row
echelon form of its augmented matrix has r non-0 rows then the system
has $n-r$ free variables.

The above theorem follows immediately from the shape of the reduced row
echelon form.

Being consistent and having free variables implies having infinitely
many solutions.

## Corollary

A homogeneous linear system with more variables than equations has
infinitely many solutions
