---
title: Matrices and Strassen’s Algorithm
lecturer: Daniel
---

# Master Method

The master method depends on the master theorem

Let $T(n)$ be a function on the natural numbers defined by

$$
T(n)=aT(n/b)+f(n)
$$

(Interpret $n/b$ as either $\lfloor n/b \rfloor$ or $\lceil n/b \rceil$)

We will compare $f(n)$ with the function $n^{\log_ba}$

Let $T(n)$ be a function on the natural numbers defined by

$$
T(n)=aT(n/b)+f(n)
$$

for some constant $a\geqslant 1$ and $b>1$

1.  If $f(n)=\mathcal{O}(n^{\log_ba-\epsilon})$ for some constant
    $\epsilon>0$, then $T(n)=\Theta(n^{\log_ba})$

2.  If $f(n)=\Theta(n^{\log_ba})$ then $T(n)=\Theta(n^{\log_ba}\log n)$

3.  If $f(n)=\Omega(n^{\log_ba+\epsilon})$ for some constant
    $\epsilon>0$, and if there exist constant $c<1$ and $n_0$ such that
    $af(n/b)\leqslant cf(n)$ for all $n\geqslant n_0$, then
    $T(n)=\Theta(f(n))$

# Divide-and-conquer for matrix multiplication

## Multiplying two matrices

We are interested in the following problem:

- Input: two square matrices $A,B \in \mathbb{R}^{n\times n}$

- Output: their product $C\in \mathbb{R}^{n\times n}$

We can do it in time $\Theta(n^3)$ by using the definition

$$
c_{i j}=\sum_{k=1}^{n} a_{i k} b_{k j}
$$

(for simplicity, we assume n is a power of two)

$n^2$ entries, computing one entry takes $\Theta(n)$, so $\Theta(n^3)$

Partition A, B and C into four parts (the matrix doesn’t need to be 2x2,
$A_{11}$ etc can be a matrix, doesn’t have to be a number):

$$
A=\left(\begin{array}{ll}{A_{11}} & {A_{12}} \\ {A_{21}} & {A_{22}}\end{array}\right), \quad B=\left(\begin{array}{ll}{B_{11}} & {B_{12}} \\ {B_{21}} & {B_{22}}\end{array}\right), \quad C=\left(\begin{array}{ll}{C_{11}} & {C_{12}} \\ {C_{21}} & {C_{22}}\end{array}\right)
$$

Thus

$$
\begin{array}{l}{C_{11}=A_{11} B_{11}+A_{12} B_{21}} \\ {C_{12}=A_{11} B_{12}+A_{12} B_{22}} \\ {C_{21}=A_{21} B_{11}+A_{22} B_{21}} \\ {C_{22}=A_{21} B_{12}+A_{22} B_{22}}\end{array}
$$

## Pseudo-code

`R-Mult(A,B)`

```python
let C be a new n * n matrix
if n==1:
    c[1][1] = a[1][1]+b[1][1]}
else
    partition(A)
    partition(B)
    partition(C)
    C[1][1] = R-MULT(A[1][1],B[1][1])+R-MULT(A[1][2],B[2][1])
    C[1][2] = R-MULT(A[1][1],B[1][2])+R-MULT(A[1][2],B[2][2])
    C[2][1] = R-MULT(A[2][1],B[1][1])+R-MULT(A[2][2],B[2][1])
    C[2][2] = R-MULT(A[2][1],B[1][2])+R-MULT(A[2][2],B[2][2])
return C
```

## Running time of simple approach

The running time of the R-MULT satisfies

$$
T(n)=8T(n/2)+\Theta(n^2)
$$

Since we do 8 multiplications ($8T(n/2)$) and four additions (of time
$\Theta(n^2)$ each)

$$
f(n)=\Theta(n^2)=\mathcal{O}(n^{3-1})
$$

$$
=\mathcal{O}(n^{\log_ba-\epsilon})
$$

$$
T(n)=\Theta(n^{\log_ba})=\Theta(n^3)
$$

By the master theorem
$T(n)=\Theta(n^3)$

# Strassen’s algorithm

Strassen’s algorithm uses a sophisticated divide-and-conquer approach.
It has four steps:

1.  Divide A, B and C into four parts as before

    Running time $\Theta(1)$

2.  Create 10 Matrices $S_1,...,S_{10}\in \mathbb{R}^{n/2\times n/2}$,
    obtained by sums or differences of $A_{11},...,B_{22}$

    Running time: $\Theta(n^2)$

3.  Using all the matrices available, recursively compute seven product
    matrices $P_1,...,P_7\in \mathbb{R}^{n/2\times n/2}$

    Running time $7T(n/2)$

4.  Compute $C_{11},...,C_{22}$ by adding and subtracting combinations
    of $P_1,...,P_7$\
    Running time $\Theta(n^2)$

## Running time of Strassen’s

Thus, the worst-case running time of Strassen’s algorithm satisfies

$$
T(n) \leq 7 T(n / 2)+\Theta\left(n^{2}\right)
$$

By the master method
we obtain

$$
T(n)=\Theta\left(n^{\log _{2} 7}\right)=\Theta\left(n^{2.8074}\right)
$$

## Description of $S_1,...,S_{10}$

$$
\begin{aligned} S_{1} &=B_{12}-B_{22} \\ S_{2} &=A_{11}+A_{12} \\ S_{3} &=A_{21}+A_{22} \\ S_{4} &=A_{21}-B_{11} \\ S_{5} &=A_{11}+A_{22} \\ S_{7} &=A_{12}-A_{22} \\ S_{8} &=B_{21}+B_{22} \\ S_{9} &=A_{11}-A_{21} \\ S_{10} &=B_{11}+B_{12} \end{aligned}
$$

## Description of $P_1,...,P_7$

$$
\begin{array}{l}{P_{1}=A_{11} S_{1}=A_{11} B_{12}-A_{11} B_{22}} \\ {P_{2}=S_{2} B_{22}=A_{11} B_{22}+A_{12} B_{22}} \\ {P_{3}=S_{3} B_{11}=A_{21} B_{11}+A_{22} B_{11}} \\ {P_{4}=A_{22} S_{4}=A_{22} B_{21}-A_{22} B_{11}} \\ {P_{5}=S_{5} S_{6}=A_{11} B_{11}+A_{11} B_{22}+A_{22} B_{11}+A_{22} B_{22}} \\ {P_{6}=S_{7} S_{8}=A_{12} B_{21}+A_{12} B_{22}-A_{22} B_{21}-A_{22} B_{22}} \\ {P_{7}=S_{9} S_{10}=A_{11} B_{11}+A_{11} B_{12}-A_{21} B_{11}-A_{21} B_{12}}\end{array}
$$

## Expressing C

$$
\begin{array}{l}{C_{11}=P_{5}+P_{4}-P_{2}+P_{6}} \\ {C_{12}=P_{1}+P_{2}} \\ {C_{21}=P_{3}+P_{4}} \\ {C_{22}=P_{5}+P_{1}-P_{3}-P_{7}}\end{array}
$$
