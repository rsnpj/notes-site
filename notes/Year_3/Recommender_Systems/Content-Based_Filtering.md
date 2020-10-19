---
title: Content-Based Filtering
lecturer: Suncica
---

<Definition name="Content-Based Filtering">

Analyses features of the items/documents previously rated by a user then builds a model/profile of user interests

</Definition>

The aim of this is to recommend items similar to items this user has liked in the past

Benefits of Content-Based Filtering[^1]:

-   User independence
    -   Use only ratings to build user profile
    -   Vector space models
-   Transparency
    -   Recommendations can be explained
    -   List content features/descriptions
-   New item
    -   New items recommended
    -   Not susceptible to first-rater problem(heavy influence of those who first rate the item)

Drawbacks of Content-Based Filtering:

-   Limited Content Analysis
    -   Domain knowledge needed
    -   Enough information required to discriminate between P and N items
    -   Harder to find complements than substitutes
    -   Weighing attributes and ratings; content interdependency
-   Over specialisation
    -   No inherent method for finding unexpected items
    -   Lack of serendipity
    -   Limited novelty
-   New User
    -   Need to collect enough ratings
    -   Recommendations for new user not reliable
-   User profile updating
    -   Throw away/recompute
    -   Mix in new rating; decay old profile over time

[^1]: Lops, P., De Gemmis, M. and Semeraro, G., 2011. Content-based recommender systems: State of the art and trends. In Recommender systems handbook (pp. 73-105). Springer, Boston, MA.

# Content based filtering architecture

![Architecture](/img/Year_3/Recommender/CBF/Architecture.webp)

## Content analyser

Aim:

-   Represent items' content in a structured form

Feature extraction techniques

-   Transforming original information space to target one
-   Understanding which features are relevant and so should be selected to represent an item

Item representations:

-   Type 1: **Structured** - same number of attributes, with known set of values
-   Type 2: **Unstructured data**

## Profile learner

Aim:

-   Collect and generalise user preference data
-   Construct user profile

Takes data from

-   Represented items repository
    -   Features + Descriptions of items
-   Feedback repository:
    -   Explicitly defined user interests
    -   Inferred from reactions to recommendations

Generates a User profile model

-   Inferred preferences
-   Supervised learning algorithm
    -   Trained on a set of item representations with the user's ratings

## Filtering component

Aim:

-   Apply user profile model to new item representations
    -   Match user profile representation
    -   Generate a prediction/ relevance judgement/score
    -   Present a (ranked) list of item recommendations

# Content analysis

## Item description

-   Structured data
    -   Attributes
-   Unstructured data
    -   Keyword based approach
        -   Requires training sets with a large number of examples
        -   Lack of intelligence - can't infer a related keyword from a keyword, won't find wider category for example
    -   Semantic analysis
        -   Knowledge bases (lexicons or ontologies)

## Vector Space Model (VSM)

-   Commonly used in CBF RSs
-   Terminology
    -   Corpus (set of documents)
        -   $D=\{d_1,d_2,...,d_N\}$
    -   Dictionary (set of words in the corpus)
        -   $T=\{t_1,t_2,...,t_n\}$
-   Aspects to define
    -   How to weight the terms
    -   How to measure vector similarity

## Keyword vector

Item/document representation

-   All documents represented by vectors of equal length
-   A vector of term weights
-   Dimensions are a subset of the dictionary of the relevant terms
-   In an n-dimensional space
    -   **Dimension** is a term from the dictionary of the corpus
    -   **Weight** is the degree of association between the document and the term

## Feature extraction/selection procedure

1. Pre processing
    - Tokenization, stopwords removal, stemming, lemmatization
2. Compute selection metric
3. Sort metric values
    - Pick rich informative features - features with high values
4. Combine all feature vectors
    - Remove duplicate terms
    - Generate new feature vector space
        - All documents represented by vectors of equal length for the matching process to be successful

## Feature selection metrics

-   **A** - Number of documents including term t, which belongs to category c
-   **B** - Number of documents including t, which does not belong to c
-   **C** - Number of documents in category c, which does not include t
-   **D** - Number of documents in other categories without term t
-   **N** - Size of the corpus, total number of documents

### Chi-square

$$
\chi^{2}(t, c)=\frac{N \times(A D-B C)^{2}}{(A+C) \times(B+D) \times(A+B) \times(C+D)}
$$

### Information gain

$$
\begin{aligned}
I G(t, c)=\text { Entropy }(S) &+\frac{A+B}{N_{1}+N_{2}}\left(\frac{A}{A+B} \log \left(\frac{A}{A+B}\right)+\frac{B}{A+B} \log \left(\frac{B}{A+B}\right)\right) \\
&+\frac{C+D}{N_{1}+N_{2}}\left(\frac{C}{C+D} \log \left(\frac{C}{C+D}\right)+\frac{D}{C+D} \log \left(\frac{D}{C+D}\right)\right)
\end{aligned}
$$

$$
\text { Entropy }(S)=-\frac{N_{1}}{N_{1}+N_{2}} \log \left(\frac{N_{1}}{N_{1}+N_{2}}\right)-\frac{N_{2}}{N_{1}+N_{2}} \log \left(\frac{N_{2}}{N_{1}+N_{2}}\right)
$$

### Mutual information

$$
M I(t, c)=\log \left(\frac{A /(A+C)}{(A+B) / N}\right)
$$

### TF-IDF(Term frequency - Inverse document frequency)

-   The most common weighting scheme
-   Terms with higher TF-IDF are more important
    -   Rare terms (across documents) are not less relevant than frequent terms (IDF)
    -   Multiple occurrences of a term in a document not less relevant than single occurrence (TF)
    -   Long documents not preferred (normalisation)

#### Measures

Term frequency(TF):

-   T - term frequency
-   L - count of unique words in the document
-   $T_i$ - frequency of the most frequent word in the document

$$
TF = \dfrac{T}{L} \quad \text{ or } TF = \dfrac{T}{T_i}
$$

TF-IDF

> Notation is annoying here, TF-IDF doesn't mean any subtraction

-   N - number of documents
-   $n_k$ - number of documents with term k

$$
\operatorname{TF-IDF}\left(t_{k}, d_{j}\right)=\underbrace{\operatorname{TF}\left(t_{k}, d_{j}\right)}_{\mathrm{TF}} \cdot \underbrace{\log \frac{N}{n_{k}}}_{\mathrm{IDF}}
$$

(cosine) Normalisation

-   Weighted frequency $w_{k,j}$ of term k in document j
-   Documents represented by vectors of terms with weights in [0,1] interval

$$
\large w_{k,j}=\dfrac{\operatorname{TF-IDF}(t_k,d_j)}{\sqrt{\sum^{|T|}_{s=1}\operatorname{TF-IDF}(t_s,d_j)^2}}
$$

# Profile Learning

<Definition name="Training set">

Label item/document based on active user's rating

</Definition>

# Methods

## (k-) nearest neighbour

Lazy learners - not building a model, but stores all training examples in memory

Process

1. Compare new item to all stored items
2. Find k-nearest neighbours
3. Assign neighbours' class to the new item

## Prediction and recommendations

Predict like/dislike for a (new/unseen) item

Match two vectors of the same length (same items in each vector, but with different weights)

1. User profile vector
2. Item representation vector

## Similarity/distance measures

-   Cosine:

$$
\cos (x, y)=\frac{(x \bullet y)}{\|x\|\|y\|} \quad \operatorname{sim} \left(d_{i}, d_{j}\right)=\frac{\sum_{k} w_{k i} \cdot w_{k j}}{\sqrt{\sum_{k} w_{k i}^{2}} \cdot \sqrt{\sum_{k} w_{k j}^{2}}}
$$

-   Pearson correlation

$$
\operatorname{Pearson}(x,y)=\dfrac{\Sigma(x,y)}{\sigma_x\times \sigma_y}
$$

-   Euclidean

$$
d(x,y)=\sqrt{\sum_{k=1}^n(x_k-y_k)^2}
$$

-   Minkowski

$$
d(x,y)=\bigg(\sum^n_{k=1}|x_k-y_k|^r\bigg)^{\frac{1}{r}}
$$

-   Mahalanobis

$$
d(x,y)=\sqrt{(x-y)\sigma^{-1}(x-y)^T}
$$

-   Jaccard, Simple Matching

$$
JC=\dfrac{M11}{M01+M10+M11} \quad SMC=\dfrac{\text{Number of matches}}{\text{Number of attributes}}
$$

# Other methods

## Rocchio's formula

User profile as a classifier

-   $\overrightarrow{c_i}$ - category/class
-   T - dictionary, distinct terms in the training set
-   $\omega_{kj}$ - TF-IDF weight
-   $POS_i$, $NEG_i$ - positive/negative examples
-   $\beta, \gamma$, control parameters

$$
\omega_{k i}=\beta \cdot \sum_{\left\{d_{j} \in P O S_{i}\right\}} \frac{\omega_{k j}}{\left|P O S_{i}\right|}-\gamma \cdot \sum_{\left\{d_{j} \in N E G_{i}\right\}} \frac{\omega_{k j}}{\left|N E G_{i}\right|}
$$

$$
\overrightarrow{c_i}=\langle \omega_{wi},...,\omega_{|T|i}\rangle
$$

### Prediction

Predict like/dislike for a new/unseen item

Match two vectors of the same length

1. User profile vector
2. Item representation vector of the unseen item

-   By applying a distance/similarity measure
-   Class of the more similar $\overrightarrow{c_i}$ vector is assigned to the new item

## Naїve Bayes

-   $P(c|d)$ a **posteriori** probability of a document _d_ belonging to class _c_
-   $P(c)$ a **priori** probability
-   Select the class with the highest probability

$$
P(c|d)=\dfrac{P(c)P(d|c)}{P(d)}
$$

$$
P\left(c_{j} \mid d_{i}\right)=P\left(c_{j}\right) \prod_{w \in V_{d_{i}}} P\left(t_{k} \mid c_{j}\right)^{N_{\left(d_{i}, t_{k}\right)}}
$$

> Here t is used for a **term** and N is used for the frequency of the term

## Further methods

Decision trees

-   **nodes** - labelled by terms
-   **Branches** - labelled by term weight
-   **Leaves** - labelled by categories
-   Learned by recursively partitioning training data into subgroups

Decision rule

-   From all the rules that correctly classify all the training examples select the "best" one according to minimality criterion

Logistic (Softmax) regression:

-   Estimates a probability of $p(y=jx)$ for input x for each value of j from 1 to k
-   Output k-dimensional vector with k estimated probabilities summing to 1

# Advances in CBF

Algorithm based:

-   Deep learning
-   Meta-path methods
-   Metadata encodings

Data-based:

-   User generated content
-   Other features: visual, multimedia
-   Linked open data
-   Heterogeneous information networks
