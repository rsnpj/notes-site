---
title: Generalisation
---

# Generalisation

![image](/img/Year_2/Software_Methodologies/Machine_Learning/Generalisation/Generalisation.png)

- Goal - to predict well on new data drawn from (hidden) true
  distribution

- Issue - we don’t see the truth, but we only get to sample from it

- If it fits current sample well, how can we trust it will predict
  well on other new samples?

How do we know if our model is good?

- Theoretically

  - Generalisation theory - based on ideas of measuring model
    simplicity/complexity

- Intuition: formalisation of Ockham’s razor principle

  - The less complex a model is, the more likely a good empirical
    result is

- Empirically

  - Asking: will our model do well on a new sample of data

  - Evaluate: get a new sample of data - call it the set set

  - Good performance on the test set is a useful indicator of good
    performance

Three basic assumptions in all of the above

1.  We draw examples independently and identically at random from the
    distribution

2.  The distribution is stationary - it doesn’t change over time

3.  We always pull from the same distribution, including training,
    validation and test sets
