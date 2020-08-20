---
title: Intro to discrete probability
---

# Probability Theory

Some applications in CS:

- Monte Carlo algorithms - Faster algorithms that give correct answers
  with high probability

- Information Theory - Good models for data compression and error
  correction

- Computer Graphics - Automated random generation of objects

- Statistical analysis - empirical analysis of computer system
  performance

- Machine learning - Probabilistic classification methods

- Bioinformatics - Finding genes associated with particular diseases

- ...

# Sample space, events and probability

- An **experiment** is a procedure that yields one of a given set of
  possible **outcomes**

- The **sample space** of the experiment is the set of possible
  outcomes

- An **event** is any subset of the sample space

For a finite sample space S and event E in it, let $|S|$ and $|E|$
denote the number of possible outcomes in S and E respectively.\
$|S|$ represents the number of elements in S

## Definition

If S is finite sample space of equally likely outcomes, and E is an
event in it, then the **probability** of E is

$$
p(E)=\dfrac{|E|}{|S|}
$$

All of our sample spaces are finite, so we can use counting principles

# Examples

## Example 1

_An urn contains four blue balls and five red balls. What is the
probability that a ball chosen from the urn is blue?_

- Sample Space: 9 balls. We are interested in the event: blue ball

- The number of successful outcomes (blue ball) is 4

- The total number of possible outcomes is 9

- Hence, the probability is $\frac{4}{9}$

## Example 2

_When two (fair) dice are rolled, which sum of the numbers on the dice
is more probable: 7 or 8?_

- Sample space: 36 combinations (x,y), x is on the 1st die and y is on
  the 2nd

- The successful outcomes for 7 are
  (1,6),(2,5),(3,4),(4,3),(5,2),(6,1)

- The number of successful outcomes for 7 is 6

- The total number of possible outcomes is 36

- Hence, the probability of sum 7 is 6/36=1/6

- What is the probability that the sum is 8? 5/36, so sum 7 is more
  probable

## Example 3

_What is the probability to win the big prize in the National Lottery,
i.e. to correctly guess 6 numbers out of 49_

- Sample Space: 6 combinations out of the set of 49 numbers
  $\binom{49}{6}=13,938,816$

- The number of successful outcomes is 1

- Hence, the probability is 1/13,938,816

## Example 4

_What is the probability that a hand of (5) cards in poker contains 4
cards of the same kind?_

- Sample space: 5 combinations of the set of 52 numbers,\
  C(52,5)=$\frac{52!}{47!5!}=2,598,960$ in total

- The number of successful outcomes is
  $$C(13,1)\cdot C(4,4)\cdot C(48,1)=13\cdot1\cdot48=624$$ We choose

  - 1 kind out of 13

  - then all 4 cards of that kind, and

  - then 1 card from the remaining 48

- Hence, the probability os 624/2,598,960$\approx$0.00024

## Example 5

_What is the probability that a hand of (5) cards in poker contains 3
cards of 1 kind and 2 of another?_

- Sample space: 5 combinations of the set of 52 numbers,\
  C(52,5)=$\dfrac{52!}{47!5!}=2,598,960$ in total

- The number of successful outcomes is
  $$P(13,2)\cdot C(4,3) \cdot C(4,2)=13\cdot12\cdot4\cdot6=3774$$ We
  choose

  - One of a kind for three cards and a different one for 2,

  - Then 3 out of 4 cards for the 1st kind, and

  - 2 out of 4 for the other

- Hence, the probability is 3,744/2,598,960$\approx$0.0014

## Example 6

_What is the probability that number 11,4,17,39 and 23 are drawn in that
order from a bin containing 50 balls labelled 1,2,...,50 if_:

(a) the ball selected is not returned to the bin

(b) the ball selected is returned to the bin before the next one is
drawn

(a) "Sampling without replacement"

- Sample space S: 5 permutations from the set of 50 number
  P(50,5)=254,251,20

- The number of successful outcomes is 1

- Hence, the prob is...

(b) "Sampling with replacement"

# The probability of the complementary event

Let E be an event in sample space S. The probability of $\overline{E}$
is given by

$$
P(\overline{E})=1-P(E)
$$

## Example 1

_A sequence of 10 bits is randomly generated. What is the probability
that at least one of these is zero_

For this the complimentary value, which is that the sequence is all 1s
is much easier to calculate

$$
1-\frac{1}{1024}=\frac{1023}{1024}
$$

# The probability of combinations of events

Let $E_1$,$E_2$ be events in a sample space S then

$$
P(E_1\cup E_2)=P(E_1)+P(E_2)-p(E_1\cap E_2)
$$

## Example 1

_What is the probability that a number selected at random from the
numbers from 1 to 100 is divisible by at least one of 2 and 5?_

- Sample space is 100

- Prob divisible by 2 is 1/2

- Prob divisible by 5 is 1/5

- Prob divisible by 10 is 1/10

- Therefore the probability is calculated by
  $$
  \frac{1}{2}+\frac{1}{5}-\frac{1}{10}=\frac{3}{5}
  $$

# The 3 door puzzle

- Asked to open 1 of 3 doors

- Prize behind only 1

- First select a door

- One of other doors discounted

- Should you change your choice or not?

# Assigning probabilities

- There can be some sample space where the probabilities $s_1...s_n$
  are not equally likely

- This makes a probability distribution

## Example

- Biased die such that 3 appears twice as often as any other number

- Probability of 3 is 2/7, the probability of a different number is
  1/7

- The probability of odd numbers is 4/7
