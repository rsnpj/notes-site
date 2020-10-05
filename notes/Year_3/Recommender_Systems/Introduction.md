---
title: Introduction to Recommender Systems
lecturer: Suncica
---

# What are Recommender Systems

Belong to a class of **information filtering systems** combining:

-   Machine learning/data mining
-   Business and Marketing
-   HCI

They are algorithms/tools/techniques that:

-   Take user's preferences as an input
-   Predict a rating that a user would give to an item
-   Output suggestions/recommendations about what a user may like

# Key definitions

<Definition name="User model/profile">

Structured representation of user interests

</Definition>

<Definition name="Item's context">

Attributes/text describing an item

</Definition>

The main content of the item will be unstructured data (text etc) as opposed to clear variables

<Definition name="Rating">

Expression of preference

</Definition>

<Definition name="Prediction">

Estimate of preference or rating

</Definition>

<Definition name="Recommendation">

Suggestions of selected items - what is actually displayed

</Definition>

# Moving from a User item to a rating

![User item to rating](/img/Year_3/Recommender/Introduction/Item->Rating.webp)

<Definition name="Context">

The information outside of the recommender system e.g. weather, time of day

</Definition>

If you are not generating a recommender systems with homogenous items it is difficult to understand the user's interest

Because of this, recommender systems are mostly used in specific contexts

# Prediction vs Recommendation

Prediction:

-   Helps quantify
-   A numerical value
-   Predicting liking of an item for the active user
-   Not necessarily seen by the user (can be displayed, e.g. Netflix says 94% match)

Recommendation:

-   Selected items for the user from a larger set (produced from prediction)

# Dimensions of an analytical framework

-   Domain - area where the recommender system is applied
-   Context - what does the user want to achieve?
-   Knowledge source - where the data is coming from
-   Purpose
-   Personalisation level
-   Recommendation algorithm(s)
-   Interfaces
-   Privacy, trustworthiness

# Purpose of recommender systems

Content recommendations:

-   Sales
-   Information

Education of user:

-   Educate about making the right decision

Community building:

-   Loyalty - make the relationship between user and site more valuable
-   Join community to give feedback

# Levels of personalisation

1. Generic/non personalised - same recommendations to all users
2. Demographic - Matching a demographic group
3. Ephemeral - Matching current activity
4. Persistent - Matching long term interests

# Inputs to a recommender system

Explicit - user knows the data is being collected:

-   Like
-   Rating
-   Review
-   Vote
-   Profile data

Implicit - user doesn't know the data is being collected:

-   View, click
-   Order, purchase
-   Following
-   Saving, deleting etc

# Outputs from a recommender system

-   Predictions
-   Recommendations
-   Filtering

# Challenges

-   Privacy
-   Bias
-   External Manipulation
-   Explainability and transparency
-   Cold start - New items and new users
-   Changing user preferences
-   Unpredictable items
-   Over specialisation
-   Sparsity - lack of knowledge
-   Scalability
-   Seasonality effects

# Non personalised recommender systems

Generic recommendations are:

-   Based on what other users have said about items on average
-   Independent of the user
-   All users receive the same recommendations

## Approach

Automatic - little customer effort to generate the recommendation

Ephemeral - the system does not recognise the user from session to session

<Important>

It is important to explain to the user why a given thing is being recommended to them

</Important>
