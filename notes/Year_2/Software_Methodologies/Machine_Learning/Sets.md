---
title: Training and test set representation
lecturer: Lei
---

# Training and Test set

**Larger Training Set** - The better model we will be able to learn

**Larger Test Set** - The better we will be able to have confidence in
evaluation metrics and tighter confidence intervals

Ensure the test set meets the following 2 conditions:

-   Is large enough to yield statistically meaningful results

-   Is representative of the data set as a whole

## Validation Set

![Validation Set](/img/Year_2/Software_Methodologies/Machine_Learning/Sets/Validation.webp)

1.  Keeping the test data way off to the side (completely unused)

2.  Pick the model that does best on the validation set

3.  Double check that model against the test set

This is a better workflow because it creates fewer exposures to the test
set

# Representation

We must create a representation of the data to provide the model with a
useful vantage point into the data’s key qualities. That is, in order to
train a model, we must choose the set of features that best represent
the data

## Numeric

This works for some models, but in some cases the gradient will change
throughout, so would not work

## Bucketing

One categorical feature is created for each bucket (sections). Then a
fitting can be created for each bucket

## Categorical

**One hot encoding** - Only one category selected at a time (e.g. a
person can only have one blood type)

If there are a small number of categories, then use the raw value, for
larger numbers, hashing may be needed.

## Feature Crossing

Two different features (e.g. age and blood type), then connect together
as one feature (e.g. young people with blood type A)

## Hashing

-   Save memory and time

-   Adds some noise, but limits the maximum number of possibilities

## Embedding

-   Powerful ways to represent large vocabularies

-   Tell the model that objects with different names mean the same thing
    (group together)

-   For example rabbit and bunny could be grouped together
