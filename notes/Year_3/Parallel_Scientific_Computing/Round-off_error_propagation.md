---
title: Round-off error propagation
lecturer: Tobias
---

# Inexact arithmetic

As seen before, even our most basic arithmetic operations are "wrong" due to rounding error. So formulas are better represented as

$$
f=x+y\approx z = \operatorname{round}(x+y)
$$

To highlight this difference, we can change addition to be

$$
x+_M y
$$

To represent that it is done with machine precision

From [Floating Point Numbers](https://csnotes.me/Year_3/Parallel_Scientific_Computing/Floating_Point), we know that the round-off error comes from the number (re-)normalisations and rounding, so:

$$
x+_M y = \operatorname{round}(x+y)=(x+y)(1+\epsilon)
$$

Here $\epsilon$ is the worst-case estimate always picking the sign least favourable for us. We use our machine precision as a pessimistic upper bound.

To be more formal, we should multiply the real result with $(1+\widetilde{\epsilon})$ with $|\widetilde{\epsilon}|\leqslant \epsilon$ from our machine precision definition.

If you have two operations in a row, say:

$$
x+_M y \cdot _M z
$$

You'd have to use two epsilon values $\epsilon_1$ and $\epsilon_2$, one for each operation. However we ignore this and just work with one generic $\epsilon$ This allows us to introduce a few simple compute rules

$$
\begin{gathered}
x+_M y \Rightarrow (x+y)(1+\epsilon) \\
x-_M y\Rightarrow (x-y)(1+\epsilon)\\
x\cdot_M y \Rightarrow (x \cdot y)(1+\epsilon)\\
x/_M y \Rightarrow (x/y)(1+\epsilon)
\end{gathered}
$$

This formalises what happens in our ALU in a single step. We furthermore simplify it to neglect all higher order terms

$$
\epsilon \cdot \epsilon \Rightarrow 0
$$

i.e. assume that $\epsilon$ is really small, so the product of two $\epsilon$ is something we can safely ignore. Finally we introduce:

$$
\begin{gathered}
    \epsilon+\epsilon\Rightarrow 2\epsilon\\
    \epsilon-\epsilon\Rightarrow 2\epsilon
\end{gathered}
$$

Also if $x\approx y$, then

$$
x-_My=\epsilon
$$

<Definition name="Cancellation">

Subtracting two similar values will return us the machine error

</Definition>

# Round-off error analysis

We want to formally analyse longer calculations:

1. Write down the calculation as done on the machine and replace all arithmetic operations by their machine counterpart
2. Use the rules described above to map machine calculations onto "real" mathematical operators including error thresholds

<Example>

$$
\begin{aligned}
x+_{M} y+_{M} z &=(x+y)\left(1+\epsilon_{1}\right)+_{M} z \\
&=\left((x+y)\left(1+\epsilon_{1}\right)+z\right)\left(1+\epsilon_{2}\right) \\
&=(x+y)+(x+y) \epsilon_{1}+(x+y) \epsilon_{2}+(x+y) \epsilon_{1} \epsilon_{2}+z+z \epsilon_{2}
\end{aligned}
$$

We then eliminate higher order terms to talk in terms of one $\epsilon$

$$
\begin{aligned}
x+_{M} y+M z &=((x+y)(1+\epsilon)+z)(1+\epsilon) \\
&=(x+y+z+x \epsilon+y \epsilon)(1+\epsilon) \\
&=x+y+z+x \epsilon+y \epsilon+x \epsilon+y \epsilon+z \epsilon+x \epsilon^{2}+y \epsilon^{2} \\
&=x+y+z+x \epsilon+y \epsilon+x \epsilon+y \epsilon+z \epsilon \\
&=x(1+2 \epsilon)+y(1+2 \epsilon)+z(1+\epsilon)
\end{aligned}
$$

</Example>

# Programming Recipes

With the way that errors work, we no longer get associativity in our formulas, as in:

$$
(x+_M y)+_M z \neq x+_M (y+_M z)
$$

This means that we want to try and reorder our operations so that the operation introducing the potentially largest error comes last

## Stagnation

<Definition name="Accumulation">

If we add up a sum:

$$
f=\sum_{n=0}^{N-1}x_n
$$

in a register of the ALU, we accumulate this result step by step in a computer

</Definition>

Stagnation occurs at a point of accumulation where the sum obtained so far is large and the amount to add is small, so their contribution is "lost" on the machine

One way to work around this is to sort the entries by their magnitude before adding, such that small entries are added before large ones.

Another method is to split up the sums into two sums, accumulate each, then sum up the result. This method can be applied recursively and gives us a benefit when it comes to parallelisation.

An example of this comparison is:

$$
\begin{aligned}
x_{1}+_{M} x_{2}+_{M} x_{3}+_{M} x_{4} &=\left(x_{1}(1+2 \epsilon)+x_{2}(1+2 \epsilon)+x_{3}(1+\epsilon)\right)+_{M} x_{4} \\
&=x_{1}(1+3 \epsilon)+x_{2}(1+3 \epsilon)+x_{3}(1+2 \epsilon)+x_{4}(1+\epsilon), \text { yet } \\
\left(x_{1}+_{M} x_{2}\right)+_{M}\left(x_{3}+_{M} x_{4}\right) &=\left(x_{1}+x_{2}\right)(1+\epsilon)+_{M}\left(x_{3}+x_{4}\right)(1+\epsilon) \\
&=\left(x_{1}+x_{2}+x_{3}+x_{4}\right)+\left(x_{1}+x_{2}+x_{3}+x_{4}\right)(1+2 \epsilon)
\end{aligned}
$$

Here we get a maximal error amplification of $(N-1)\epsilon$ for a standard sum, but recursive summation has amplification of $\log_2(N)\epsilon$

Using this method we can also use **Mixed Precision** by computing the smaller blocks with lower precision than the total sum.
