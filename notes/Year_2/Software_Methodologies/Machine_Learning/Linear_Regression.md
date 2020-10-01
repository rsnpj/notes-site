---
title: Linear Regression, Training and Loss
lecturer: Lei
---

# Linear regression

<Definition name="Linear Regression">
A method for finding the straight line or hyperplane that best fits a set of points
</Definition>

$$
y=b+w_1x_1
$$

-   y - the predicted label
-   b - the bias, sometimes referred to as $w_0$
-   $w_1$ - the weight of feature 1
-   $x_1$ - a feature

# Training and loss

<Definition name="Training a model">
Learning good values for all weights and the bias from labelled examples
</Definition>

<Definition name="Loss">
The penalty for a bad prediction
</Definition>

<Definition name="Empirical Risk Minimisation">
The process of examining many examples and attempting to find a model that minimises loss
</Definition>

## Squared loss

The square of the difference between the label and the prediction

$$
(\text{observation}-\text{prediction}(x))^2
$$

$$
(y-\hat{y})^2
$$

## Mean square error

$$
MSE=\dfrac{1}{N}\sum_{(x,y)\in D}(y-\text{predicition}(x))^2
$$

(x,y) is an example where

-   x is the set of features used by the model to make predictions

-   y is the example’s label

prediction(x) is a function of the weights and bias in combination with
the set of features x

D is the dataset containing many labelled examples

N is the number of examples in D

# Reducing loss

-   Hyperparameters are the configuration settings used to tune how the
    model is trained

-   Derivative of loss with respect to weights and biases tells us how
    loss changes for a given example

-   So we repeatedly take small steps in the direction that minimises
    loss, we call these **Gradient steps**

![Gradient steps](/img/Year_2/Software_Methodologies/Machine_Learning/Linear_Regression/Gradient_Descent.webp)

## Weight initialisation

For convex problem, weights can start anywhere forming a graph that
looks like $x^2$

Foreshadowing: not true for neural networks

-   More than one minimum

-   Strong dependency on initial values

## Efficiency of reducing loss

-   Could compute gradient over entire dataset on each step, but this
    turns out to be unnecessary

-   Computing gradient on small data examples works well

-   **Stochastic Gradient Descent** - one example at a time

-   **Mini-batch Gradient Descent** - batches of 10-1000

## Learning rate

The ideal learning rate in one-dimension is

$$
\dfrac{1}{f(x)''}
$$

The ideal learning rate for 2 or more dimensions is the inverse of the
Hessian (matrix of second partial derivatives)
