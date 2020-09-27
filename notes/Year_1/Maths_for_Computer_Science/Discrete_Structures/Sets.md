---
title: Sets
lecturer: Daniel
---

# Some notation

-   We write $x\in X$ to denote that x is an element or member of the
    set X, or that X contains x, with $x\notin X$ denoting that x is not
    an element of X

-   We can describe a set by listing it's elements

    -   the set of pairs of prime numbers less than 6 is
        $\{\{2,3\}\{2,5\},\{3,5\}\}$

-   It is always possible if a set is finite

-   However if a set is infinite, then it is not possible, unless we
    cheat by adding dots

-   We often describe a set by it's defining property, e.g.:

    -   The set of natural numbers
        $\mathbb{N}=\{x: x \ \textrm{x is a natural number\} = \{0,1,2,...\}}$

    -   The set of integers
        $\mathbb{Z}=\{ x : x \in N \text { or } x = - y \text { for } y \in \mathbf { N } \} = \{ 0,1 , - 1,2 , - 2 , \ldots \}$

    -   The set of rational numbers
        $\mathbb{Q}=\{ x : x = y / z \text { for } y , z \in \mathbf { Z } \text { with } z \neq 0 \}$

    -   The set of real numbers
        $\mathbb{R}=\{ x : x \text { is a real number } \}$

-   We regard 0 as a natural number

# Cardinality

-   If there are exactly n distinct elements in the set S, where
    $n\in \mathbf{ N }$ then S is finite and has size or cardinality n
    and we write $|S|=n$

    -   As we remarked earlier, if S is not finite then it is infinite

-   Of course, the empty set $\varnothing$ has size 0

-   We can also define the size of an infinite set

-   One might be tempted to think that all infinite sets have the same
    size, however there are different sizes of infinity

# Set Equality

-   Two sets X and Y are equal when we write $X=Y$ iff they contain
    exactly the same elements

-   Equivalently X and Y are equal iff:

    -   for every object x, $x\in X$ implies that $x\in Y$

    -   for every object x $x\in Y$ implies that $x\in X$

    -   For example:

        -   $\{1,2,3,4,5\}={3,2,4,5,1}$

-   **Singleton Set** - A set containing exactly one element

-   Note that strictly speaking $\{1,3,3,5\}$ is not a set but a
    multiset, but we regard it as a description of the set $\{1,3,5\}$

-   Recall also that our sets are objects and so we can have sets
    containing sets as elements, indeed, we can have sets containing
    sets as elements, e.g.

    -   $\{\varnothing\}\neq \varnothing$

    -   $\{\{\varnothing\}\}\neq \{\varnothing\}$

# Venn Diagrams

-   Sometimes it is useful to have a pictoral representation of a set or
    sets

-   Any venn diagram is contained within (usually) a rectangle,
    depicting the set of all objects

-   Sets are represented by circles and elements by points or items

![image](/img/Year_1/MCS/Discrete_Structures/Sets/venn.webp)

# Subsets

-   A set X is a subset of set Y when we write $X\subseteq Y$ iff every
    element that is in X is also in Y

-   So, X is not a subset of Y, when we write $X\subsetneq Y$ iff there
    is some element that is in X that is not in Y

-   A subset X of Y is a proper subset when we write $X\subset Y$, if
    $X\subseteq Y$ and there may be at least one element of Y that is
    not in X

![image](/img/Year_1/MCS/Discrete_Structures/Sets/venn1.webp)

# Some facts about subsets

-   $\mathbb{N}\subset \mathbb{Z}\subset \mathbb{Q}\subset \mathbb{R}$

-   For any set S $S\subseteq S$

-   For any set S $\varnothing\subseteq S$

-   For any sets A and B

    -   $A=B$ iff $A\subseteq B$ and $B\subseteq A$

        -   Trivially if $A=B$ then $A\subseteq B$ and $B\subseteq A$

        -   Conversely suppose that $A\subseteq B$ and $B\subseteq A$

            -   If $x\in A$ then $x\in B$

            -   If $x\notin A$ then $x\notin B$

        -   So A=B

-   For every set A if $A\subseteq \varnothing$ then $A=\varnothing$

    -   Suppose that $A\subseteq \varnothing$ and let $x\in A$, so
        $x\in \varnothing$, a contradiction

# The Power Set

-   There are a number of common operations upon sets which enable us to
    create new sets out of old ones

-   Let S be a set. The **power set** P(S) (or P(S) or $2^s$) is the set
    of all subsets of S

-   We already have seen that every non empty set S has at least 2
    subsets, $\varnothing$ and S

-   However, in general, there are many more subsets, e.g:

    -   If $S=\{0,1,2,3\}$ then P(S) is all combinations of 0,1,2,3 and
        the empty set

    -   If $S=\mathbb{N}$ then P(S) is any set of natural numbers

    -   If $S=\varnothing$ then:

        -   $P(S)=\{\varnothing\}$

        -   $P(P(S))=\{\varnothing,\{\varnothing\}\}$

        -   $P(P(P(S)))=\{ \varnothing , \{ \varnothing \} , \{ \{ \varnothing \} \} , \{ \varnothing , \{ \varnothing \} \} \}$

-   In general, if S is finite of size n, then $P(S)$ is finite of size
    $2^n$

# The Cartesian Product

-   Often, the order of a collection of elements matters, though the
    order of the elements in a set is of no importance

-   An ordered n-touple $(a_1,a_2,...,a_n)$ is an ordered collection of
    elements

-   If $n=2(resp. n=3)$ then we call the touple an ordered pair (resp
    touple)

-   Two ordered n touples are equal iff $a_i=b_i$ for all $i=1,2,...,n$

-   Cartesian products allow us to talk about \"order\"

-   For any two sets X and Y, the cartesian product $X\times Y$ is the
    set

    $$
    \{ ( x , y ) : x \in X \text { and } y \in Y \}
    $$

-   For example:

    -   The Cartesian product of $\{0,1,2\}$ and $\{a,b\}$ is

        $$
        \{ ( 0 , a ) , ( 1 , a ) , ( 2 , a ) , ( 0 , b ) , ( 1 , b ) , ( 2 , b ) \}
        $$

    -   The Cartesian product of $\{a,b\}$ and $\{0,1,2\}$ is:
        $$
        \{ ( a , 0 ) , ( a , 1 ) , ( a , 2 ) , ( b , 0 ) , ( b , 1 ) , ( b , 2 ) \}
        $$

-   We can also define the Cartesian product of more than two sets

-   Let $A_1,A_2,...,A_n$ be sets. The Cartesian product
    $A_1\times A_2 \times ...\times A_n$ is the set:

    $$
    \left\{ \left( a _ { 1 } , a _ { 2 } , \dots , a _ { n } \right) : a _ { i } \in A _ { i } , \text { for all } i = 1,2 , \ldots , n \right\}
    $$

-   If $A_1,A_2,...,A_n$ are all finite sets with $|A_i|=m_i$ for
    $i=1,2,...,n$ then:
    $$
    \left| A _ { 1 } \times A _ { 2 } \times \ldots \times A _ { n } \right| = m _ { 1 } \times m _ { 2 } \times \ldots \times m _ { n }
    $$

# Union and Intersection

-   Let A and B be sets, the union of A and B, written as $A\cup B$ is
    the set that contains all elements that are in A, in B or both

    -   That is $A \cup B = \{ x : x \in A \vee x \in B \}$

-   Let A and B be sets. The intersection of A and B, written $A \cap B$
    is the set of elements that are in A and B

    -   That is, $A \cap B = \{ x : x \in A \wedge x \in B \}$

-   Two sets are called disjoint if their intersection is the empty set

-   Principle of inclusion-exclusion: if A and B are finite sets then:
    $$
    | A \cup B | = | A | + | B | - | A \cap B |
    $$

## Union and Intersection Venn Diagrams

![image](/img/Year_1/MCS/Discrete_Structures/Sets/venn2.webp)

# Difference and Compliment

-   Let A and B be sets. The difference of A and B, written
    $A-B (or  \ A\backslash B)$ is the set that contains all elements
    that are in A but not in B

    -   That is, $A - B = \{ x : x \in A \wedge x \notin B \}$

-   Let A be a set. The compliment of A, written $\overline{A}$ is the
    set that contains all elements that are not in A

    -   That is, $A = \{ x : x \notin A \}$

-   The difference A-B is sometimes called the **complement of B with
    respect to A**

## Venn Diagram of Difference and Complement

![image](/img/Year_1/MCS/Discrete_Structures/Sets/venn3.webp)

# A Different Semantics

-   Note that we can define different semantics for propositional logic

-   Consider some formula $\phi$ of propositional logic such as:

    $$
    ( X \wedge ( Y \wedge Z ) ) \vee \neg ( \neg X \vee ( Y \wedge Z ) )
    $$

-   Previously we interpreted $\phi$ using truth assignments, with a
    truth assignment making $\phi$ either true or false

-   We can interpret $\phi$ by assigning sets to each of the
    propositional variables:

    -   We get that $\phi$ denotes a set of elements via:

        -   Interpret $\land$ as intersection

        -   Interpret $\lor$ as union

        -   Interpret $\lnot$ as complement

-   Write $\phi\equiv_s\psi$ iff $\phi$ and $\psi$ always denote the
    same set of elements

-   We get the identities from propositional logic
    $$\phi \equiv _ { S } \psi \text { if, and only if, } \phi \equiv \psi$$

-   So
    $( X \wedge ( Y \wedge Z ) ) \vee \neg ( \neg X \vee ( Y \wedge Z ) )$
    denotes the set of elements shown, i.e. X

![image](/img/Year_1/MCS/Discrete_Structures/Sets/venn4.webp)
