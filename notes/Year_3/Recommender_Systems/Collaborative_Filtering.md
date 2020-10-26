---
title: Collaborative Filtering
lecturer: Suncica
---

<Definition name="Collaborative Filtering">

Opinions of **other users** with similar preferences used to predict the items the active user would like to be recommended

</Definition>

# CBF complementing CF

Content-based filtering:

-   Can predict items without ratings
-   Needs content to analyse
-   Over specialisation

Collaborative Filtering

-   Needs item ratings for predictions
-   Does not require content
-   Leads to more diverse items

# CF Process

![CF Process](/img/Year_3/Recommender/CF/Process.webp)

# Classification of CF Models

Probabilistic

-   Underlying probabilistic model
-   Represent probability distributions
-   Gaining popularity with machine learning

Non-probabilistic:

-   Still widely used
-   Algorithms including
    -   Graph-based
    -   Nearest neighbour

Memory based:

-   Used stored ratings directly in prediction
-   Prediction based on neighbours' preferences
    -   Similarities between items or users

Model-based

-   Use ratings to learn a predictive model
-   Transform items and users to same latent factor space

# Memory-based methods

## User-user filtering

User-based nearest neighbour

1. Discover similar users, i.e. neighbours
2. Prediction method
    - Regression if the ratings are on a continuous scale
    - Else, classification

### Similar users

Use a measure such as pearson correlation

-   Similarity/correlation range: -1.0 to 1.0
-   Negative correlations generally not used

$$
\operatorname{user} \operatorname{Sim}(u, n)=\frac{\sum_{i \subset \mathrm{CRu}, \mathrm{n}}(r u i-\bar{r} u)(r n i-\bar{r} n)}{\sqrt{\sum_{i \subset \mathrm{CRu}, \mathrm{n}}(r u i-\bar{r} u)^{2}} \sqrt{\sum_{i \subset \mathrm{CRu}, \mathrm{n}}(r n i-\bar{r} n)^{2}}}
$$

### Regression

Naive approach is to average all neighbours' ratings for item i

-   $rni$ neighbour n's rating for item i

$$
\operatorname{pred}(u, i)=\frac{\sum_{n \subset \text {neighbors}(u)} r n i}{\text {number of neighbours}}
$$

Weighting ratings from users who have higher similarity to u

-   $\operatorname{userSim}(u,n)$ - similarity between active user u and a neighbour n
    $$
    \operatorname{pred}(u, i)=\sum_{n \in \text {neighbors}(u)} \operatorname{userSim}(u, n) \cdot r_{n i}
    $$
-   Normalisation - If similarities of neighbours do not add up to 1

    $$
    \operatorname{pred}(u, i)=\frac{\sum_{n \subset \text {neighbors}(u)} \operatorname{userSim}(u, n) \cdot r_{n i}}{\sum_{n \subset \text {neighbors}(u)} \operatorname{userSim}(u, n)}
    $$

Adjustment for mean rating - some users will consistently rate higher than others, so that needs to be taken into account

$$
\operatorname{pred}(u, i)=\bar{r}_{u}+\frac{\sum_{n \subset \text {neighbors}(u)} \operatorname{userSim}(u, n) \cdot\left(r_{n i}-\bar{r}_{n}\right)}{\sum_{n \subset \text {neighbors}(u)} \text {userSim}(u, n)}
$$

### Classification

Used when rating/preference expressed with:

-   Few discrete values
-   Values that can't be ordered

Process

-   k-NN nearest neighbours of user u vote $v_{ir}$ on unknown item i rating
    -   $v_{ir}$ - sum of similarity weights of neighbours
        -   $\delta(r_{vi}=r)$ is 1 if $r_{vi}=r$
        -   0 Otherwise
-   Computed for every possible rating value
-   Predicted rating = value r for which $v_{ir}$ is the greatest

$$
v_{i r}=\sum_{v \in \mathcal{N}_{i}(u)} \delta\left(r_{v i}=r\right) w_{u v}
$$

## Item-item filtering

Item-based nearest neighbour

-   Rationale
    -   Number of users changes often
    -   Set of items (relatively) static
-   Pre-compute item similarities
    -   Compute all-to-all similarity
    -   For each item j compute the k (model size) most similar items

Process

1. Extract set of items active user has rated
2. Similarity between target item i and rated items
3. Select k most similar items
4. Predict

### Similarity measures

#### Pearson-r correlation

1. Isolate co-related cases
2. Calculate sim, i.e. correlation

_U_ - the set of users who have rated both _i_ and _j_

$$
\operatorname{sim}(i, j)=\frac{\sum_{u \in U}\left(R_{u, i}-\bar{R}_{i}\right)\left(R_{u, j}-\bar{R}_{j}\right)}{\sqrt{\sum_{u \in U}\left(R_{u, i}-\bar{R}_{i}\right)^{2}} \sqrt{\sum_{u \in U}\left(R_{u, j}-\bar{R}_{j}\right)^{2}}}
$$

#### Cosine similarity

-   Items ⟶ vectors in n-dimensional user space
    -   m (users) x n (items) ratings matrix
-   $sim(i,j)$ - cosine of angle between vectors i and j

$$
\operatorname{sim}(i, j)=\cos (\vec{i}, \vec{j})=\frac{\vec{i} \cdot \vec{j}}{\|\vec{i}\|_{2} *\|\vec{j}\|_{2}}
$$

#### Adjusted cosine similarity

Difference in user rating scales considered

$$
\operatorname{sim}(i, j)=\frac{\sum_{u \in U}\left(R_{u, i}-\bar{R}_{u}\right)\left(R_{u, j}-\bar{R}_{u}\right)}{\sqrt{\sum_{u \in U}\left(R_{u, i}-\bar{R}_{u}\right)^{2}} \sqrt{\sum_{u \in U}\left(R_{u, j}-\bar{R}_{u}\right)^{2}}}
$$

### Prediction method

Weighted sum - predicting item i rating for user u

-   $R_{u,N}$ - ratings given by u on items similar to i
-   $S_{i,N}$ - weighting ratings by similarity $s_{i,j}$ between items i and j
-   Scaling to ensure prediction is within a predefined range
-   Ratings can also be normalised

$$
P_{u,i}=\dfrac{\sum_{\text{all similar items, N}}(s_{i,N}*R_{u,N})}{\sum_\text{all similar items,N}(|s_{i,N}|)}
$$
