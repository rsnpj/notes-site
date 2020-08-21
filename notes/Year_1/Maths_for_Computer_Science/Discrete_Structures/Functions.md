---
title: Functions
---

- To make associations between elements of sets we use functions

- A function f from A to B, written $f:A\rightarrow B$ is an
  assignment of an element of B to every element of A. If $b\in B$ is
  the element assigned to $a\in A$ then we write $f(a)=b$

- Functions can be defined in a number of ways

- In the case of a function $f:A\rightarrow B$

  - The set A is known as the domain (or source) of f

  - The set B is the **codomain** (or **target**) of f

- If $f(a)=b$ then b is the **image** of a (under f)

- The **pre-image** of $b\in B$ (under f) is the subset
  $\{a: f(a)=b\}$ of A

- The image (or range) of f is the set of images of elements of A

# Illustrations of function concepts

- Let $f: N\rightarrow Q$ be defined by the formula $f(x)=x/2+3$

  - The domain of f is N and the codomain is Q

  - The image of 5 under f is 5.5

  - The pre-image of 8 is $\{10\}\subseteq N$

  - The image of f is ${3,3.5,4,4.5,...}$

- Let $f:P(N)\rightarrow N\cup \{\bot \}$ be defined by the property:
  $f(x)$ is the minimal element of the set x if $x\neq \varnothing$
  and $\bot$ if $x=\varnothing$

  - The domain of f is P(N) and the codomain is $N\cup\{\bot\}$

  - The pre image of 5 is the set
    $\{ X : X \subseteq N , 5 \in X \wedge 0,1,2,3,4 \notin X \} \subseteq P ( N )$

# Partial functions

- Partial functions are variations of functions where the function may
  not be defined for every element in the domain

- A partial function $f:A\rightarrow B$ is either $f(a)\in B$ or
  $f(a)$ is undefined

- Partial functions are particularly relevant in CS, as when finding
  the input output correspondence of a particular program, the program
  might not provide an output for every input

# Special types of function

- A function $f:A\rightarrow B$ is injective or one-to-one (with f
  being an injection) if for every (written $\forall$) $a\in A$ and
  $a'\in A$ if $f(a)=f(a')$ then $a=a'$

- A function $f:A\rightarrow B$ is surjective or onto (with f being a
  surjection) if every $b\in B$ is such that there exists (written
  $\exists$) some $a\in A$ such that $f(a)=b$

- If a function $f: A\rightarrow B$ is both injective and surjective
  then it is bijective or a one-to-one correspondence (with f being a
  bijection)

![image](/img/Year_1/MCS/Discrete_Structures/Functions/types.png)

# More on bijections

- Suppose that $f: A\rightarrow B$ is a bijection

- We can build a set of ordered pairs

  $$
  P = \{ ( a , f ( a ) ) : a \in A \} \subseteq A \times B
  $$

- As f is onto every $b\in B$ must appear as the second component in
  some pair (a,b)

- As f is one-to-one every $b\in B$ must appear as the second
  component in at most one pair (a,b)

- So, each element of A appears in exactly one pair in P, as does each
  element of B

- The set P is a "pairing" of the elements of A and B so that every
  element of A is associated with a unique element of B, and vice
  versa

# Compositions of functions

Suppose that $f: A\rightarrow B$ and $g: B\Rightarrow C$ are functions.
We can define the composition of g and f as the function
$g \circ f : A \rightarrow C$ defined as
$( g \circ f ) ( x ) = g ( f ( x ) )$

Note that even if the function $g\circ f$ exists, the function
$f\circ g$ might not exist

Also, even if both $g\circ f$ and $f\circ g$ exist, it could well be
that they are different

# Inverses

Often we want the inverse of a function, where the inverse of the
function $f: A\rightarrow B$ is the function $f^{-1}: B\rightarrow A$
where:

- $f ^ { - 1 } ( f ( a ) ) = a , \forall a \in A$

- $f \left( f ^ { - 1 } ( b ) \right) = b , \forall b \in B$

![image](/img/Year_1/MCS/Discrete_Structures/Functions/inverse.png)

- Note that it may not always be the case that the inverse function
  exists

- Let $f: A\rightarrow B$

  - Suppose that f is not one to one, i.e. $\exists$ distinct
    $a , a ^ { \prime } \in A \text { s.t. } f ( a ) = f \left( a ^ { \prime } \right)$

  - If $f^{-1}$ exists then
    $a = f ^ { - 1 } ( f ( a ) ) = f ^ { - 1 } \left( f \left( a ^ { \prime } \right) \right) = a ^ { \prime }$
    which yields a contradiction

  - So, if an inverse of f exists then f must be one to one

  - Suppose that f is not onto, i.e. $\exists b\in B$ s.t. there is
    not $a\in A$ s.t. $f(a)=b$

  - If $f^{-1}$ exists then $f^{-1}(b)=a'$ for some $a'\in A$ with
    $b = f \left( f ^ { - 1 } ( b ) \right) = f \left( a ^ { \prime } \right)$,
    which yields a contradiction

  - So, if an inverse of f exists then f must be onto

  - So, if an inverse of f exists then f must be a bijection

  - Conversely, if f is one-to-one and onto then the inverse exists.
    We simply define $f^{-1}(b)$ as the unique element $ain A$ for
    which $f(a)=b$. Since f is a bijection, we can "pair" elements
    of A and B so that each element of A is associates with a unique
    element of B, and vice versa

- This, we have proven that f has an inverse if, and only if, f is a
  bijection

# Cardinality Revisited

- Two sets A and B (which may be finite or infinite) have the same
  cardinality iff there is a bijection from A to B

- A set is countable if it is finite or has the same cardinality as N
  when we say it has cardinality $\aleph_0$

- A set is uncountable if it does not have cardinality $\aleph_0$

# Uncountable sets

- Up until not, we have not even shown that there exist uncountable
  sets, however these sets do exist and $\mathbb{R}$ is one of them

- Suppose that R is countable

  - This the set I of real number strictly between 0 and 1 is
    countable, that is, there is a bijection
    $f:\mathbb{N}\rightarrow I$

  - List all the elements of $\mathbb{R}$

  - "pull out" those between 0 and 1 and put them in a sub-list

- Form a new decimal number x between 0 and 1 by building the number
  whose ith digit behind the decimal point is 5 ith the ith digit of
  f(i-1) is 4 and 4 otherwise

- By definition x is not equal to any number on the list

  - its ith digit of x behind the decimal point is different from
    the ith digit behind the decimal point of the ith number in the
    list

  - So f is not onto, which yields a contradiction

- Thus, $\mathbb{R}$ is uncountable and has cardinality "bigger"
  that $\aleph_0$

- The generic technique employed is called **diagonalization**
