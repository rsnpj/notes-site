---
title: Cost Function
---

Supervised learning problem

-   Collection of n p-dimensional feature vectors:
    $\{x_i\}, i=1...n$

-   Collection of observed responses $\{y_i\},i=1...n$

-   Aims to construct a response surface $h(x)$

-   Describes how well the current response surface $h(x)$ fits the
    available data (on a given set) - we use J to represent the cost
    function

    $$
    J(y_i,h(x_i))
    $$

-   Smaller values of the cost function correspond to a better fit, so
    in the graph below $J_2>J_1$

-   Machine learning goal: construct $h(x)$ such that J is minimised

-   In regression, $h(x)$ is usually directly interpretable as a
    predicted response

![image](/img/Year_2/Software_Methodologies/Machine_Learning/Cost_Function/Cost_Function.webp)

## Least squares deviation cost

$$
J(y_i,h(x_i))=\dfrac{1}{n}\sum_{i=1}^{n}{(y_i-h(x_i))^2}
$$

$r_i$ is the difference between the real value and the predicted value

-   Nice mathematical properties

-   Problem with outliers- when you have a large residual and it is then
    squared, the impact is large where it should be ignored

![image](/img/Year_2/Software_Methodologies/Machine_Learning/Cost_Function/Least_Squares.webp)

## Least Absolute Deviation Cost

$$
J(y_i,h(x_i))=\dfrac{1}{n}\sum_{i=1}^{n}{|(y_i-h(x_i))|}
$$

-   More robust with respect to outliers - not squared residual so less
    impact

-   May pose computational challenges

![image](/img/Year_2/Software_Methodologies/Machine_Learning/Cost_Function/Least_Absolute.webp)

## Huber-M Cost

$$
0.5(y_i-h(x_i))^2 & \text{if } |y_i-h(x_i)|<\delta\\
\delta({|y_i-h(x_i)|}-0.5\delta) & \text{otherwise}\\
\end{array}\right\}
$$

-   Combines the best qualities of the LS and LAD losses (basically
    using one or the other depending on which one is better to use)

-   Parameter $\delta$ is usually set automatically to a specific
    percentile of absolute residuals. Calculate all residuals, then for
    example top 10% is $\delta$

![image](/img/Year_2/Software_Methodologies/Machine_Learning/Cost_Function/Huber-M.webp)
