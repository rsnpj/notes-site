---
title: Vector Spaces and Linear Independence
---

# Vectors in $\mathbb{R}^n$

- You are familiar with vectors in two and three dimensions

- Such a vector can be identified with an (ordered) tuple of real
  numbers $(a_1,a_2)$ or $(a_1,a_2,a_3)$ respectively

- The numbers in the tuple are the **components** of the vector

- The sets of all 2D and 3D vectors are denoted by $\mathbb{R}^2$ and
  $\mathbb{R}^3$ respectively

- Two vectors are equal iff all corresponding coordinates are equal

- Main operations on vectors: addition and multiplication by a scalar

  - If $a=(a_1,a_2)$, $b=(b_1,b_2)$ are vectors in $\mathbb{R}^2$
    then $a+b=(a_1+b_1,a_2+b_2)$

  - If k is a scalar (i.e. real number) and
    $a=(a_1,a_2)\in \mathbb{R}^2$ then $ka=(ka_1,ka_2)$

- For example, if $a=(-1,3)$ and $b=(2,1)$ then $2a-5b=(-12,1)$

- All the above can be generalised to n-tuples of real numbers, for
  any fixed n

- Notation:
  $\mathbb { R } ^ { n } = \left\{ \left( a _ { 1 } , \dots , a _ { n } \right) | \text { all } a _ { i } \in \mathbb { R } \right\}$

- Note that one can view a vector in $\mathbb{R}^n$ as a $1\times n$
  (or $n\times 1$) matrix

# Norm and dot product in $\mathbb{R}^n$

- The length (aka norm) of a vector
  $v=(v_1,v_2,...,v_n)\in \mathbb{R}^n$ is defined by the formula

  $$
  \| \mathbf { v } \| = \sqrt { v _ { 1 } ^ { 2 } + v _ { 2 } ^ { 2 } + \ldots + v _ { n } ^ { 2 } }
  $$

- It holds that

  - $||v||\geqslant 0$, and $||v||=0$ iff $v=0$

  - $||kv||=|k|\cdot ||v||$

- A vector of length 1 is called a **unit vector**

- For any vector v, the vector $\dfrac{1}{||v||}v$ is a unit vector in
  the same direction as v. It is obtained by normalizing v

- The dot product (aka inner product) of vectors $u=(u_1,...,u_n)$ and
  $v=(v_1,...,v_n)$ in $\mathbb{ R }^n$ is defined as

  $$
  u \cdot v = u _ { 1 } v _ { 1 } + u _ { 2 } v _ { 2 } + \ldots + u _ { n } v _ { n }
  $$

  Note that $||v||=\sqrt{v\cdot v}$

- For example, if $u=(-1,3,5,7)$ and $v=(2,-1,3,-5)\in \mathbb{ R }^4$
  then
  $\mathbf { u } \cdot \mathbf { v } = ( - 1 ) \cdot 2 + 3 \cdot ( - 1 ) + 5 \cdot 3 + 7 \cdot ( - 5 ) = - 25$

# Properties of dot product

If u,v and w are vectors in $\mathbb{ R }^n$ then the following
properties hold:

- $u\cdot v=v\cdot u$ (symmetry)

- $\mathbf { u } \cdot ( \mathbf { v } + \mathbf { w } ) = \mathbf { u } \cdot \mathbf { v } + \mathbf { u } \cdot \mathbf { w } ($
  Distributivity $)$

- $k ( \mathbf { u } \cdot \mathbf { v } ) = ( k \mathbf { u } ) \cdot v ($
  Homogeneity $)$

- $\mathbf { v } \cdot \mathbf { v } \geq 0$ and
  $\mathbf { v } \cdot \mathbf { v } = 0$ iff
  $\mathbf { v } = \mathbf { 0 } ($ Positivity $)$

## Theorem (Cauchy-Schwarz inequality, without proof)

If u and $v$ are vectors in $\mathbb { R } ^ { n }$ then
$u \cdot v \leq \| u \| \cdot \| v \|$

## Corollary (Triangle Inequality)

If $u$ and $v$ are vectors in $\mathbb { R } ^ { n }$ then
$\| \mathbf { u } + \mathbf { v } \| \leq \| \mathbf { u } \|$

# Orthogonality in $\mathbb{ R }^n$

- Two vectors u and v in $\mathbb{ R }^n$ are orthogonal (or
  perpendicular) if $u\cdot v=0$

- Example: vectors $u=(-2,3,1,4)$ and $v=(1,2,0.-1)$ in
  $\mathbb{ R }^4$ are orthogonal because
  $u\cdot v=(-2)\cdot 1+3\cdot 2+1\cdot 0+4\cdot (-1)=0$

## Theorem (projection theorem)

If u and $a\neq 0$ are vectors in $\mathbb{ R }^n$ then u can be
uniquely expressed as $u=w_1+w_2$ where $w_1=ka$ and a and $w_2$ are
orthogonal

### Proof

Let
$k = ( \mathbf { u } \cdot \mathbf { a } ) / \| \mathbf { a } \| ^ { 2 } , \mathbf { w } _ { 1 } = k \mathbf { a } ,$
and $\mathbf { w } _ { 2 } = \mathbf { u } - \mathbf { w } _ { 1 }$\
Check than $a\cdot w_2=0$\
The vector $w_1$ is called the orthogonal projection of u on a

## Theorem (Pythagoras' theorem in $\mathbb{ R }^n$)

If u and v are orthogonal vectors in $\mathbb{ R }^n$ then
$\| \mathbf { u } + \mathbf { v } \| ^ { 2 } = \| \mathbf { u } \| ^ { 2 } + \| \mathbf { v } \| ^ { 2 }$

### Proof

Since u and v are orthogonal, we have $u\cdot v=0$, hence

$$
\| \mathbf { u } + \mathbf { v } \| ^ { 2 } = ( \mathbf { u } + \mathbf { v } ) \cdot ( \mathbf { u } + \mathbf { v } ) = \| \mathbf { u } \| ^ { 2 } + 2 ( \mathbf { u } \cdot \mathbf { v } ) + \| \mathbf { v } \| ^ { 2 } = \| \mathbf { u } \| ^ { 2 } + \| \mathbf { v} \| ^ { 2 }
$$

# General (real) vector spaces

## Definition

Let V be a set equipped with operations of "addition" and
"multiplication my scalars", that is, for every $u,v\in V$ and every
$k\in \mathbb{ R }$

- the "sum" $u+v\in V$ is defined, and

- the "product" $ku\in V$ is defined

V is called a (real) vector space, or linear space, if the following
axioms hold:

1.  $u+v=v+u$

2.  $u+(v+w)=(u+v)+w$

3.  there is an element $0\in V$ such that $u+0=0+u=u$ for all u

4.  For each $u\in V$, there is $-u\in V$ such that $u+(-u)=(-u)+u=0$

5.  $k(u+v)=ku+kv$

6.  $(k+m)u=ku+mu$

7.  $k(mu)=(km)u$

8.  $1u=u$

The elements from V are called vectors

## Examples of vector spaces

- $\mathbb { R } ^ { n } = \left\{ \left( a _ { 1 } , \ldots , a _ { n } \right) | \text { all } a _ { i } \in \mathbb { R } \right\}$

- The set $\mathbb{ R }^\infty$ of all infinite sequences
  $u=(u_1,u_2,...,u_n,...)$ is a vector space with operations of
  point-wise addition and multiplication (just as in $\mathbb{ R }^n$)

  $$
  \left( u _ { 1 } , u _ { 2 } , \ldots , u _ { n } , \ldots \right) + \left( v _ { 1 } , v _ { 2 } , \ldots , v _ { n } , \ldots \right) = \left( u _ { 1 } + v _ { 1 } , u _ { 2 } + v _ { 2 } , \ldots , u _ { n } + v _ { n } , \ldots \right)
  $$

  $$
  k \left( u _ { 1 } , u _ { 2 } , \ldots , u _ { n } , \ldots \right) = \left( k u _ { 1 } , k u _ { 2 } , \ldots , k u _ { n } , \ldots \right)
  $$

- All matrices of size $m\times n$ form a vector space, denoted
  $\mathbb{M}_{mn}$, with the usual operations of matrix addition and
  multiplication by scalars

# Subspaces

## Definition

A subset W of a vector space V is called a **subspace** of V is W itself
is a vector space, with operations inherited from V

- To verify that W is a subspace of V, we don't need to check all 8
  axioms

- We only need to check that W is closed under the operations of V,
  that is, if $u,v\in W$ and $k\in \mathbb{ R }$ then $u+1\in W$ and
  $ku\in W$

Examples:

- $\{0\}$ is always a subspace (the zero subspace) of any vector space

- For any fixed $a\in \mathbb{ R }^n$, the set
  $\{ka|k\in \mathbb{ R }\}$ is a subspace of $\mathbb{ R }^n$.
  Indeed, if $u=k_1a$ and $v=k_2a$ then $u+v=(k_1+k_2)a$ and
  $ku=k(k_1a)=(kk_1)a$

- The solution set of a homogeneous linear system $Ax=0$ with n
  variables is a subspace of $\mathbb{ R }^n$. Indeed, if u and v are
  solutions, i.e. $Au=0$ and $Av=0$ then $A(u+v)=Au+Av=0$ and, for any
  k, $A(ku)=k(Au)=0$

Non example, Invertible $n\times n$ matrices do not form a subspace of
$\mathbb{M}_{nm}$

## Lemma

If $W_1,W_2,...,W_r$ are subspaces of V then so is
$W_1\cap W_2 \cap ... \cap W_r$

## Proof

If vectors $u,v$ are in $W_1\cap W_2 \cap ... \cap W_r$ then they belong
to each $W_i$. Since each $W_i$ is a subspace, $u+v$ belongs to $W_i$.
Hence $u+v\in W_1\cap W_2 \cap ... \cap W_r$.\
The proof for multiplication by scalars is similar

# Linear Combinations

Say that a vector $w\in V$ is a linear combination of vectors
$v_1,...,v_r\in V$ if $w=k_1v_1+k_2v_2+...+k_rv_r$ for some scalars
$k_1,...,k_r$

## Theorem

If $S=\{v_1,...,v_r\}$ is a non empty subset of a vector space V then

- The set
  $W = \left\{ \sum _ { i = 1 } ^ { r } k _ { i } \mathbf { v } _ { i } | k _ { i } \in \mathbb { R } \right\}$
  of all linear combinations of the vectors in S is a subspace of V

- This set W is the (inclusion wise) smallest subspace of V that
  contains S

Inclusion wise minimal - The set in the collection that is not a
superset of any other set in the collection The set W is called a
**span** of S, it is denoted by $\operatorname{span}(S)$ or
$\operatorname{span}(v_1,...,v_r)$

# Spanning $\mathbb{ R }^n$

- The standard unit vectors in $\mathbb{ R }^n$ are

  $$
  \mathbf { e } _ { 1 } = ( 1,0,0 , \ldots , 0 ) , \mathbf { e } _ { 2 } = ( 0,1,0 , \ldots , 0 ) , \ldots , \mathbf { e } _ { n } = ( 0,0,0 , \ldots 1 )
  $$

  They span $\mathbb{ R }^n$ because any vector
  $(a_1,a_2,...,a_n)\in \mathbb{ R }^n$ can be represented as

  $$
  \left( a _ { 1 } , a _ { 2 } , \ldots , a _ { n } \right) = a _ { 1 } \mathbf { e } _ { 1 } + a _ { 2 } \mathbf { e } _ { 2 } + \ldots + a _ { n } \mathbf { e } _ { n }
  $$

- How do we test whether a given set of n vectors spans
  $\mathbb{ R }^n$? Let's take n=3

  - Vectors $v_1,v_2,v_3$ span $\mathbb{ R }^3$ iff vectors
    $e_1,e_2,e_3$ can be expressed as linear combinations of the
    $v_i's$

  - Let $A=[v_1|v_2|v_3]$ be the matrix whose columns are the
    vectors $v_1,v_2,v_3$

  - The identity matrix $I_3$ can be written as $I_3=[e_1|e_2|e_3]$

  - The vectors $e_1,e_2,e_3$ can be expressed as a linear
    combination of $v_i$'s iff there is a $3\times 3$ matrix B such
    that $AB=I_3$

  - So, $v_1,v_2,v_3$ span $\mathbb{ R }^3$ iff the matrix
    $A=[v_1|v_2|v_3]$ is invertible

  - Hence, we only need to check whether $det(A)\neq 0$

# Linear in(dependence)

## Definition

Vectors $v_1,...,v_r$ are called linearly independent if

$$
k _ { 1 } \mathbf { v } _ { 1 } + k _ { 2 } \mathbf { v } _ { 2 } + \ldots + k _ { r } \mathbf { v } _ { r } = \mathbf { 0 } \Rightarrow k _ { 1 } = k _ { 2 } = \ldots = k _ { r } = 0
$$

Otherwise, they are linearly dependent

## Explanation

- Standard unit vectors in $\mathbb{ R }^n$ are linearly independent.
  Indeed, if
  $k _ { 1 } \mathbf { e } _ { 1 } + k _ { 2 } \mathbf { e } _ { 2 } + \ldots + k _ { n } \mathbf { e } _ { n } = \left( k _ { 1 } , k _ { 2 } , \ldots , k _ { n } \right) = 0$
  then $k _ { 1 } = k _ { 2 } = \ldots = k _ { r } = 0$

- Determine whether vectors $v_1=(1,-2,3), v_2=(5,6,-1)$, and
  $v_3=(3,2,1)$ in $\mathbb{ R }^3$ are linearly independent

  Assume that $k_1v_1+k_2v_2+k_3v_3=0$ This can be written as the
  linear system

  $$
  \begin{aligned} k _ { 1 } &+ 5 k _ { 2 } & + 3 k _ { 3 } & = 0 \\ - 2 k _ { 1 } &+ 6 k _ { 2 } & + 2 k _ { 3 } & = 0 \\ 3 k _ { 1 } & - k _ { 2 } & + k _ { 3 } & = 0 \end{aligned}
  $$

  Let A be the matrix of this system. By Theorem bout invertible
  matrices, the system has only the trivial solution $k_1=k_2=k_3=0$
  iff $det(A)\neq0$, hence, the vectors are linearly dependent

## Theorem

A set S of two or more vectors is linearly dependent iff at least one of
the vectors is expressible as a linear combination of the other vectors
in S

## Proof

Let
$S = \left\{ \mathbf { v } _ { 1 } , \ldots , \mathbf { v } _ { r } \right\} . \text { Let } k _ { 1 } \mathbf { v } _ { 1 } + k _ { 2 } \mathbf { v } _ { 2 } + \ldots + k _ { r } \mathbf { v } _ { r } = \mathbf { 0 }$
and $k_i\neq 0$ for some i. Let $k_3$ be the first non zero coefficient.
Then
$\mathbf { v } _ { s } = - \frac { k _ { s + 1 } } { k _ { s } } \mathbf { v } _ { s + 1 } - \ldots - \frac { k _ { r } } { k _ { s } } \mathbf { v } _ { r }$
. The other direction of very easy

## Theorem

Let $S=\{v_1,...,v_r\}$ be a subset of $\mathbb{ R }^n$. If $r>n$ then S
is linearly dependent

## Proof

Assume that $k_1v_1+k_2v_2+...+k_rv_r=0$\
As in the example in the previous section, this can be written as a
linear system. This is a homogeneous linear system with more variables
than equations. Hence it has a non-trivial solution, so the vectors in S
are linearly dependent.
