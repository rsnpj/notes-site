---
title: Lambda Calculus
lecturer: Stefan
---

# Syntax

Assume we have a countable set of (variable) names, which we shall
denote by (possibly indexed) small letters -
$a,b,c, ..., x,y,z,a_0,a_1,a_2,...$

<Definition name="$\lambda-term$">
{String.raw`
$$
\begin{aligned}
<term> :&= <name>\\
    &| (\lambda <name>.<term>)\\
    &| (<term><term>)
\end{aligned}
$$
`}
</Definition>

**Conventions**

1.  Function application (3rd line) is left-associative, so
    $(((A_1A_2)A_3)...A_k)$

2.  Nested abstractions (2nd line)
    $(\lambda x_1.(\lambda x_2.(...\lambda x_k.A)...))$ can be
    abbreviated as $\lambda x_1x_2...x_k.A$

# Free and Bound Variables

**Free variables**:

1.  $<name>$ is free in $<name>$

2.  $<name>$ is free in $\lambda <name'>.<term>$ if $<name>\neq <name'>$
    and $<name>$ is free in $<term>$

3.  $<name>$ is free in $<term'><term''>$ if $<name>$ is free in
    $<term'>$ or $<name>$ is free in $<term''>$

**Bound variables**

1.  $<name>$ is bound in $\lambda<name'>.<term>$ if $<name>=<name'>$ or
    $<name>$ is bound in $<term>$

2.  $<name>$ is bound in $<term'><term''>$ if $<name>$ is bound in
    $<term'>$ or $<name>$ is bound in $<term''>$

# Reductions

Denote by $T[x:= R]$ the term in which for every free occurrence of $x$
is replaced by E

**$\alpha$-conversion**: Bound variables can be renamed:

$\lambda x.F \equiv \lambda t.F[x:=t]$ provided t is not free in F and t
is not bound by $\lambda$ in F whenever it replaces an $x$. Example:
$\lambda x.yx(\lambda x.xx)zx \equiv \lambda t.yt(\lambda x.xx)zt.$

**$\beta$-reduction**: Applying a function to the argument

$(\lambda x.F)A \equiv F[x:=A]$ provided all free occurrences in A
remain free in $F[x:=A]$

<Definition name="Normal form">
{String.raw`
A $\lambda$-term is in normal form if no $\beta$ reduction can be applied to it
`}
</Definition>

<Theorem>
{String.raw`
If a $\lambda$-term has a normal form then the formal for is
unique (up to renaming of bound variables)
`}
</Theorem>

**Computing the normal form**: Keep on replacing the leftmost bound
variable by the actual argument until no further reduction is possible.
This does not terminate iff the initial term has no normal form.

# Church Numerals

The Church Numerals $C_0,C_1,C_2,...$ are defined as follows

$$
\begin{array}{l}{C_{0} \equiv \lambda s z . z} \\ {C_{1} \equiv \lambda s z . s(z)} \\ {C_{2} \equiv \lambda s z . s(s(z))} \\ {\ldots \quad \ldots}\end{array}
$$

The successor can be defined as

$$
S=\lambda uvw.v(uvw)
$$

<Lemma>
{String.raw`
For every two terms in F and A, $C_nFA=F^{(n)}A$
`}
</Lemma>

<Corollary>
{String.raw`
Doing addition in $\lambda$-calculus: $C_nSC_m=C_{n+m}$
`}
</Corollary>

# Predecessor is hard

Define true and false by

$$
\begin{array}{l}{T \equiv \lambda x y . x} \\ {F \equiv \lambda x y . y}\end{array}
$$

and represent a pair $(a,b)$ by $\lambda z.zab$ Define

$$
\Phi \equiv \lambda p z . z(S(p T))(p T)
$$

And finally the predecessor is defined as

$$
P \equiv \lambda n . n \Phi\left(\lambda z . z C_{0} C_{0}\right) F
$$
