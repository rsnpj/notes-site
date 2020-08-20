---
title: Basic Counting Principles
---

# The Product Rule

## Definition

Suppose that a procedure can be broken down into a sequence of two
tasks. If there are $n_1$ ways to do the first task and for each of
these ways of doing the first task, there are $n_2$ ways to do the
second task. Then there are $n_1\times n_2$ ways to do the procedure.

## Example

_How many different passwords can be constructed using two (or k)
symbols from a set of N distinct symbols_

For each of the N choices of the first symbol there are again N choices
for the second symbol, so the answer is $N\times N$. For passwords
consisting of k symbols the answer is $N\times N\times ...\times N=N^k$

If we do not allow repetitions of symbols, the answer is $N\times(N-1)$,
respectively $N\times (N-1)\times ...\times (N-k+1)$

# The sum rule

## Definition

If a task can be done either in one of $n_1$ ways or in one of $n_2$
ways, where none of the set of $n_1$ ways is the same as any of the set
of $n_2$ ways, then there are $n_1+n_2$ ways to do the task

## Example

_Suppose we have a set of N characters and a set of M integers. In how
many ways can we choose one symbol which is either a character or an
integer?_

It is clear that we can choose the symbol in $N+M$ ways

In how many ways can we construct a sequence of three symbols where the
first one is a character, the second one an integer, and the third one
either of them?

A combination of the product and sum rules gives the answer:
$N\times M\times (N+M)$

# Example: Counting IP addresses

- The internet is made up of interconnected physical networks of
  computers

- Each computer (actually, each network connection of a computer) is
  assigned to an Internet address

- Version 4 of the Internet Protocol is still in use

  - An address in IPv4 is a string of 32 bits (looks like
    172,16.254.1 in decimal)

  - It consists of **netid** (network number) and **hostid** (host
    number)

  - There are three classes of addresses: class A,B and C

  - Class A is for large networks, B for medium sized and C for
    small

  - Actually, there are also classes E and D, but for a separate
    purpose

- Class A address <span class="text-green-600">0</span> <span class="text-red-600">7-bit netid</span> <span class="text-blue-600">24-bit hostid</span>
  (Short
  netid as small number of large networks, but lots of hosts on those
  networks)

  - Technical restriction: Class A netid cannot be 111111

- Class B address <span class="text-green-600">10</span> <span class="text-red-600">14-bit netid</span> <span class="text-blue-600">16-bit hostid</span>

- Class C address <span class="text-green-600">110</span> <span class="text-red-600">21-bit netid</span> <span class="text-blue-600">8-bit hostid</span>

  - Technical restriction: hostid in any class cannot be all 0 or 1

_How many different IPv4 addresses are available for a computer on the
internet_

Let x be the number we want to compute

- Let $x_a$ be the number of class A addresses,

- Let $n_a$ be the number of class A netids, and

- Let $h_a$ be the number of class A hostids;

- define $x_b, n_b, h_b$ and $x_c,n_c,h_c$ similarly

- By the sum rule $x=x_a+x_b+x_c$

- By the product rule, $x_a=n_a\times h_a$

  - By the product rule, $n_a=2^7-1=127$ (since 111111 is not
    available)

  - By the product rule, $h_a=2^{24}-2=16,777,124$ (since can't have
    all 0s or all 1s)

  - Hence $x_a=127\times 16,777,124=2,130,706,178$

- Similarly $x_b=n_b\cdot h_b=2^{14}\cdot (2^16-2)=1,073,709,056$

- Also, $x_c=n_c\cdot h_c=2^{21}\cdot(2^8-2)=532,676,608$

- All in all, $x=x_a+x_b+x_c=3,737,091,842$ - this is a small number

IPv4 addresses are exhausted now and 128-bit IPv6 addresses are now in
use

# Factorial Function

## Definition

The factorial of an integer $n\geqslant0$, denoted $n!$, is defined by:

$$
0! = 1
$$

$$
n! = 1\cdot2\cdot...\cdot(n-1)\cdot n \quad n\geqslant 1
$$

## Example

_How many different passwords of length 8 can we construct with the
letters A,b,c,D,E,f,g,h if each symbol occurs exactly once?_

The number is $8!$ (for the first symbol we have 8 possibilities; for
each of these choices there are 7 possibilities for the second symbol,
etc)

## Example 2

The factorial function $n!$ grows extremely fast with increasing $n$

_If $n!>$ the age of the universe in seconds, how large should n be?_

n=20 is enough, $20!=2.43\cdot 10^{18}>age\approx 4.32\cdot 10^{17}$ sec

# Permutations

## Definition

The **permutation** of a set of distinct objects is an **ordered**
arrangement of these objects

## r-Permutations

### Definition

An **ordered** arrangement of r elements from a set of at least r
distinct objects is called an **r-permutation**.

This is different from a standard permutations as some elements from the
set will be unused

### Theorem

If n and r are integers with $1\leqslant r\leqslant n$ then there are

$$
P(n,r)=n\cdot (n-1)\cdot...\cdot (n-r+1)
$$

with n distinct elements
Easy to prove using the product rule:

- n different choices for the first position

- for each of these choices, n-1 choices for the second position

- and so on, until the final position, for which there are n-r+1
  different choices given any of the choices for the first r-1
  position

- The product rule yields the given formula

### Corollary

_If n and r are integers with $1\leqslant r\leqslant n$ then_

$$
P(n,r)=\frac{n!}{(n-r)!}
$$

definition of the factorial function and writing out the expansions of
$n!$ and the product of $P(n,r)$ and $(n-r)!$.

For any set of n distinct elements, there are n! permutations of the set

### Examples

_Suppose there are 8 runners in the final race, there can be no ties.
How many ways are there to award the three medals if all outcomes are
possible?_

Answer: $P(8,3)=8\cdot7\cdot6=336$

_How many permutations of the letters ABCDEFGH contain the string ABC?_

Answer: Since ABC must occur as a block, treat this string as one
symbol. Then we need to count the number of permutations of symbols
(ABC),D,E,F,G,H. It's 6!=720

# R combinations

## Definition

An r-combination of elements of a set of at least r elements is an
**unordered** selection of r elements from the set

The difference between a permutation and combination is that a
permutation is ordered, whereas a combination is not.

## Theorem

The number of r-combinations of a set with n elements, where n and r are
integers with $0\leqslant r\leqslant n$, equals

$$
C(n,r)=\frac{n!}{r!(n-r)!}
$$

We can prove this as follows, using what
we know about r-permutations:

- Each r-combination can be ordered in r! different ways to obtain an
  r-permutation

- So $P(n,r)=r!\cdot C(n,r)$ Writing this out and dividing by $r!$
  gives the above formula

## Example

_The department needs to form a committee by selecting 3 of 9
post-doctoral researchers and 4 of 11 PhD students. How many ways can
this be done?_

Answer: the ordering of the selecting committee members does not matter,
so:

- $C(9,3)=\dfrac{9!}{3!6!}=84$ ways to select postdocs and

- $C(11,4)=\frac{11!}{4!7!}=330$ ways to select PhD students

- By the product rule, there are $84\cdot330=27,720$ ways to select
  the committee
