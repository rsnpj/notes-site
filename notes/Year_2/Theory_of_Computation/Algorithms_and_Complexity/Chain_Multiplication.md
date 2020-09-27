---
title: Matrix chain multiplication
lecturer: Daniel
---

# Matrix chain multiplication problem

## Matrix multiplication

Let A be a $p\times q$ matrix, and let B be a $q'\times r$ matrix, i.e.

$$
A=\left(\begin{array}{cccc}{a_{1,1}} & {a_{1,2}} & {\dots} & {a_{1, q}} \\ {a_{2,1}} & {a_{2,2}} & {\dots} & {a_{2, q}} \\ {\vdots} & {\vdots} & {\dots} & {\vdots} \\ {a_{p, 1}} & {a_{p, 2}} & {\dots} & {a_{p, q}}\end{array}\right), \quad B=\left(\begin{array}{cccc}{b_{1,1}} & {b_{1,2}} & {\dots} & {b_{1, r}} \\ {b_{2,1}} & {b_{2,2}} & {\dots} & {b_{2, r}} \\ {\vdots} & {\vdots} & {\dots} & {\vdots} \\ {b_{q^{\prime}, 1}} & {b_{q^{\prime}, 2}} & {\dots} & {b_{q^{\prime}, r}}\end{array}\right)
$$

The if $q=q'$ their product $C=AB$ is the $p\times r$ matrix where

$$
c_{i, j}=\sum_{k=1}^{q} a_{i, k} b_{k, j}
$$

If the number of columns of A is not equal to the number of rows of B, the product is not defined

## Matrix multiplication algorithm

Input: a $p\times q$ matrix A ad a $q'\times r$ matrix B\
Output: the product $C=AB$ if $q=q'$

`Multiply(A,B)`

```python
if q != q1 then
    return ERROR: incompatible dimensions
else
    Let C be a new p * r matrix
    for i = 1 to p do
        for j = 1 to r do
            c[i][j]= 0
            for k= 1 to q do
                c[i][j]=c[i][j]=a[i][k]*b[k][j]
    return C
```

Number of scalar multiplications: $pqr$ (so $n^3$ if the same
dimensions, as we have seen before)

## Parenthesizing matrix multiplications

Matrix multiplication is associative:

$$
A_{1} A_{2} A_{3}=\left(A_{1}\left(A_{2} A_{3}\right)\right)=\left(\left(A_{1} A_{2}\right) A_{3}\right)
$$

Let $n=3$ and $\langle A_1, A_2, A_3 \rangle$ have the following
dimensions:

$$
A_{1}: 10 \times 100, \quad A_{2}: 100 \times 5, \quad A_{3}: 5 \times 50
$$

There are two ways of parenthesizing:

1.  $((A_1A_2)A_3)$ requires

    $$
    (10 \times 100 \times 5)+(10 \times 5 \times 50)=7,500 \text { multiplications. }
    $$

2.  $(A_1(A_2A_3))$ requires
    $$
    (100 \times 5 \times 50)+(10 \times 100 \times 50)=75,000 \text { multiplications. }
    $$

## Matrix chain multiplication

We are given a sequence (chain) of $\langle A_1,...,A_n\rangle$ of n
compatible matrices to be multiplied: we wish to compute

$$
A_1A_2...A_n
$$

$A_i$ is a $p_{i-1}\times p_{i}$ matrix

**Problem** Where should we place the parentheses so as to minimise the
number of operations?

Note: We are not actually computing the product here!

## How many ways to parenthesize?

Let $P(n)$ denote the number of ways to parenthesize a product of n
matrices for $n\geqslant 2$

$$
P(2) = 1, \qquad P(3) = 2, \qquad P(4)=5, ...
$$

We have $P(n)=C_{n-1}$, where $C_n$ is the n-th Catalan number:

$$
C_{n}=\frac{1}{n+1}\left(\begin{array}{c}{2 n} \\ {n}\end{array}\right) \sim \frac{4^{n}}{\sqrt{\pi} n^{3 / 2}}
$$

Hence brute force has an exponential running time

# Applying dynamic programming

To use dynamic programming, we follow a four step sequence:

1.  Characterise the structure of an optimal solution

2.  Recursively define the value of an optimal solution

3.  Compute the value of an optimal solution

4.  Construct an optimal solution from the computed information

## Step 1: The structure of an optimal parenthesization

Denote $A_{i..j}=A_iA_{i+1} \cdots A_j$ for $i\leqslant j$

To parenthesize $A_{i..j}$ we must split the product between $A_k$ and
$A_{k+1}$ for some $i\leqslant k< j$

**Optimal substructure**: Suppose that to optimally parenthesize
$A_{i..j}$ we split the product between $A_k$ and $A_{k+1}$. Then both
parenthesizations of $A_{1..k}$ and $A_{k+1...j}$ must be optimal

## Step 2: A recursive solution

Let $m[i,j]$ be the minimum number of multiplications required to
compute $A[i..j]$

Our goal is to compute $m[1,n]$

We have

$$
m[i, j]=\min \left\{m[i, k]+m[k+1, j]+p_{i-1} p_{k} p_{j}: i \leq k<j\right\} \quad \text { for all } i<j
$$

and of course

$$
m[i, i]=0 \quad \text { for all } i
$$

## Step 3: Computing the optimal costs

Let us use the bottom-up approach

Input: a sequence $p=\langle p_0,p_1,...,p_n\rangle$

Output: The minimum number of multiplications required to compute the
matrix chain multiplication $A_1\cdots A_n$ where $A_i$ has the
dimension $p_{i-1}\times p_i$

**Idea**: Computing $m[i,j]$ for a product of $j-i+1$ matrices only uses
values for products of fewer than $j-1+1$ matrices

`MATRIX-CHAIN-ORDER(p)`

```python
Let m[1..n,1..n] be a new table
for i= 1 to n:
    m[i,i]= 0
for I = 2 to n:
    for i= 1 to n_I+1L
        j= i+I-1
        m[i,j]= infinity
        for k= i to j-1 do
         m[i, j] =min(m[i, k]+m[k+1, j]+p_{i-1} p_{k} p_{j}: i <= k<j)
return m
```

We can determine the minimum number of multiplications, but we also want
to know HOW to parenthesize!

Good news: easy to modify MATRIX-CHAIN-ORDER to keep track of where we
place the parentheses

We use an additional array $s[i.j]$ which keeps track of that k where we
cut the product $A_{i..j}$ into $A_{i..k}$ and $A_{k_1...j}$

`MATRIX-CHAIN-ORDER'(p)`

```python
Let m[1..n,1..n] and s[1..n-1, 2..n ]be new tables
for i = 1 to n do
    m[i,i] = 0
for I = 2 to n do
    for i= 1 to n_I+1 do
        j= i+I-1
        m[i,j]= infinity
        for k= i to j-1 do
            q= m[i,k] + m[k+1, j]+p[i-1]*p[k]*p[j]
            if q<m[i,j] then
                m[i,j]= q
                s[i,j]= k
return m and s
```

### Running time

Three nested loops: worst case running time of $\mathcal{O}(n^3)$

By using the formula

$$
\sum_{k=1}^{n}k^2=\dfrac{n(n+1)(2n+1)}{6}
$$

one can show that the bound is tight, that is, that the worst-case running
time is $\Theta(n^3)$

## Step 4: Constructing an optimal solution

The table s\[1..n-1,2..n\] gives us the information to print out the
right parenthesization

`PRINT-PAR({s,i,j}`

```python
if i==j then
    print "A_"+i
else
    print "("
    PRINT-PAR(s,i,s[i,j])
    PRINT-PAR(s,s[i,j+1],j)
    print ")"
```

Initial call: `PRINT-PAR(s,1,n)`
