---
title: Introduction to Machine Learning
---

# Machine Learning Lifecycle

![image](/img/Year_2/Software_Methodologies/Machine_Learning/Introduction/Lifecycle.webp)

![image](/img/Year_2/Software_Methodologies/Machine_Learning/Introduction/Lifecycle1.webp)

-   Randomise the data order so that the model doesn’t train for
    specific orders

-   Two types of data, training and evaluation, to train and assess the
    model respectively

-   To determine how to differentiate between things using our model
    rather than using human judgement and manual rules

-   We can extrapolate the ideas to other problem domains as well, where
    the same principles apply

# What is machine learning?

<Definition name="Machine Learning">
A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P if its performance at tasks in T, as measured by P, improves with experience E.
</Definition>

Machine learning is the study of algorithms that:

-   Improve their performance P

-   At some task T

-   With experience E

A well defined learning task is given by `<P,T,E>`

# Supervised Learning (regression)

To learn the mapping (the rules) between a set of inputs and outputs

Labelled data is provided of past input and output pairs during the
learning process to train the model how it should behave

# Unsupervised learning

To learn the hidden pattern (the rules) from a set of inputs (no
output)

Unlabelled data is provided of past input during the learning process to
train the model how it should behave

**Dimensionality reduction** - Get rid of unused parameters and aspects
of the system

# Reinforcement learning

Occasional positive and negative feedback is used to reinforce
behaviours

-   Good behaviours are rewarded with a treat and become more common

-   Bad behaviours are punished and become less common

A reinforcement learning algorithm just aims to maximise its rewards by
playing the game over and over again

![image](/img/Year_2/Software_Methodologies/Machine_Learning/Introduction/Categories.webp)

# Key terms

**Label** - The variable that we are predicting typically represented by
the variable y

**Features** are input variables that describe our data typically
represented by the variables ${x_1,x_2,x_3,...,x_n}$

**Example** - A particular instance of data, x

**Labelled example** - Has {features,label}:(x,y) used to train the
model

**Unlabelled example** - Has {feature,?}:(x,?) used for making
prediction on new data

**Model** - Maps examples to predict labels: $\hat{y}$ defined by
internal parameters, which ate learned

**Training** - Creating or learning the model

**Inference** - Applying the trained model to unlabelled examples
