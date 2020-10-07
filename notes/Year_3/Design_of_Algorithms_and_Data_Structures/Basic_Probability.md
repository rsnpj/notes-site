---
title: The basics of probability
lecturer: Tom
---

# Events

**Probability space**, usually denoted by $\Omega$, is a set of things that describe the possible outcomes of a random experiment

For example, tossing a coin, $\Omega=\{Head,Tail\}$

We will only be considering _discrete spaces_, only things you can properly enumerate.

The elements $\omega\in\Omega$ are called **elementary events**. In a coin toss, _head_, would be an elementary event

A **composite event** is a subset of $\Omega$, for example the event that you get an even number when rolling a die.

# Axioms

A probability distribution $\mathbb{P}$ on $\Omega$ is mapping from events to reals such that

1. $\mathbb{P}(A)\geqslant 0$ for all $A\subseteq \Omega$
2. $\mathbb{P}(\Omega)=1$ (normalisation)
3. $\mathbb{P}(A)+\mathbb{P}(B)=\mathbb{P}(A\cup B)$ for any two mutually exclusive events A and B, i.e. $A\cap B = \varnothing$

The generalisation of this is that for any finite sequence of pairwise mutually exclusive events $A_1,A_2,...$

$$
P\left(\bigcup_{i} A_{i}\right)=\sum_{i} \mathbb{P}\left(A_{i}\right)
$$

From this, more rules follow

1. $\mathbb{P}(\varnothing)=0$
2. If $A\subseteq B$ then $\mathbb{P}(A)\leqslant\mathbb{P}(B)$
3. With $\overline{A}=\Omega\backslash A$, then $\mathbb{P}(\Omega)-\mathbb{P}(A)=1=\mathbb{P}(A)$
4. For any A and B (not necessarily mutually exclusive)

$$
\begin{aligned}
\mathbb{P}(A \cup B) &=\mathbb{P}(A)+\mathbb{P}(B)-\mathbb{P}(A \cap B) \\
& \leq \mathbb{P}(A)+\mathbb{P}(B)
\end{aligned}
$$

Considering discrete sample spaces, for any event $A\subseteq \Omega$

$$
\mathbb{P}(a)=\sum_{\omega\in A}\mathbb{P}(\omega)
$$

<Definition name="Uniform Probability Distribution">

If $\Omega$ is finite, and $\mathbb{P}(\omega\in\Omega)=1\backslash|\Omega|$, then we have a **uniform probability distribution** on $\Omega$

</Definition>

# Conditional Probability

<Definition name="Conditional Probability">

The conditional probability of an event A given that another event B occurs is

$$
\mathbb{P}(A \mid B) \stackrel{\text { def }}{=} \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}
$$

If $\mathbb{P}(B)\neq 0$

</Definition>

# Independence

<Definition name="Independent">

We say two events are independent if

$$
\mathbb{P}(A\cap B) = \mathbb{P}(A)\cdot\mathbb{P}(B)
$$

Equivalent to (if $\mathbb{P}(B)\neq 0$)

$$
\mathbb{P}(A \mid B) \stackrel{\text { def }}{=} \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)} \stackrel{\text { above }}{=} \frac{\mathbb{P}(A) \cdot \mathbb{P}(B)}{\mathbb{P}(B)}=\mathbb{P}(A)
$$

</Definition>

<Definition name="Pairwise independent">

Events $A_1,A_2,...,A_n$ are pairwise independent if

$$
\mathbb{P}(A_i\cap A_j)=\mathbb{P{A_i}}\cdot \mathbb{P}(A_j)
$$

for all $1\leqslant i < j \leqslant n$

</Definition>

<Definition name="Mutually independent">

Events $A_1,A_2,...,A_n$ are mutually independent if every k-subset $A_{i_1},...,A_{i_k}$ $2\leqslant k \leqslant n$ and $1 \leqslant i_1 < i_2 < ... < i_k \leqslant n$ satisfies

$$
\mathbb{P}(A_{i_1}\cap\cdots\cap A_{i_k})=\mathbb{P}(A_{i_1})\cdots \mathbb{P}(A_{i_k})
$$

</Definition>

# Random Variables

A random variable X is a function $X: \Omega \rightarrow \mathbb{R}$ from a probability space $\Omega$ to the reals

Used most often as in

> Probability that random variable X (defined on events of some probability space $\Omega$) takes a certain value

Which is an event: for $y\in\mathbb{R}$ $X=y$ is defined to be $\{\omega \in \Omega : X(\omega)=y\}$

## Independence between random variables

Random variables X and Y are independent if $\forall x,y\in\mathbb{R}$ events "X=x" and "Y=y" are independent

In other words: X,Y are independent iff $\forall x,y$

$$
\mathbb{P}(X=x \text{ and } Y=y)=\mathbb{P}(X=x)\cdot \mathbb{P}(Y=y)
$$

## Expected values of random variables

Given a random variables X, it's expected value is

$$
\mathbb{E}[X]=\sum_xx\cdot\mathbb{P}(X=x)
$$

Sometimes written as $\mu_x$ (or $\mu$ if context is clear)

# Linearity of expectation

$$
\mathbb{E}[X+Y]=\mathbb{E}(X)+\mathbb{E}(Y)
$$

whenever $\mathbb{E}[X]$ and $\mathbb{E}[Y]$ are defined

This is true even if X and Y are **not independent**

<Important>

Linearity of explanation does not apply for multiplication

<Important>

If $X,Y$ are **independent** then

$$
\begin{aligned}
\mathbb{E}[\boldsymbol{X} \boldsymbol{Y}] &=\sum_{x} \sum_{y} x y \mathbb{P}(X=x \text { and } Y=y) \\
&=\sum_{x} \sum_{y} x y \mathbb{P}(X=x) \mathbb{P}(Y=y) \\
&=\left(\sum_{x} x \mathbb{P}(X=x)\right) \cdot\left(\sum_{y} y \mathbb{P}(Y=y)\right) \\
&=\mathbb{E}[\boldsymbol{X}] \mathbb{E}[\boldsymbol{Y}]
\end{aligned}
$$

If not, then (usually) not
