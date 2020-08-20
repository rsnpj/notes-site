---
title: Conditional Probability and Bernoulli Trials
---

# Conditional Probability

Let E and F be events and let p(F) $>$ 0. The conditional probability of
E given F, denoted p(E\|F) is

$$
p ( E | F ) = \frac { p ( E \cap F ) } { p ( F ) }
$$

Intuition: if we assume F, we make F the new sample space, and then apply the usual
definition of probability.

## Examples

### Example 1

What is the probability that a randomly generated 4-bit string has two
consecutive 0s if we know that the first bit is 0?

- Sample space S: all 4-bit strings, S = $2^4$ = 16

- Event E: 4-bit string has two consecutive 0s

- Event F: first bit is 0

- We know that $p ( E | F ) = p ( E \cap F ) / p ( F )$

- $E\cap F$ consists of strings 0000, 0001, 0010, 0011, 0100. So
  $p(E \cap F)$ = 5/16

- $p ( F ) = 8 / 16 = 1 / 2 , \text { so } p ( E | F ) = p ( E \cap F ) / p ( F ) = \frac { 5 / 16 } { 1 / 2 } = 5 / 8$

## Example 2

What is the probability that a family with two children has two boys,
given that they have at least one boy? Assume that all possibilities BB,
GG, BG, and GB are equally likely

- Sample space S: the 4 combinations abov

- Event E: BB

- Event F: BB, GB, BG

- $\text { We know that } p ( E | F ) = p ( E \cap F ) / p ( F )$

- $\text { Event } E \cap F : B B . \text { So } p ( E \cap F ) = 1 / 4$

- $p ( F ) = 3 / 4 , \text { so } p ( E | F ) = p ( E \cap F ) / p ( F ) = \frac { 1 / 4 } { 3 / 4 } = 1 / 3$

# Independence

- One can say that event E is independent from F if p ( E ) = p ( E \|
  F )

- Since $p ( E | F ) = p ( E \cap F ) / p ( F )$, we have

$$
p ( E ) = p ( E | F ) \text { iff } p ( E \cap F ) = p ( E ) p ( F )
$$

## Definition

The events E and F are independent if $p ( E \cap F ) = p ( E ) p ( F )$
