---
title: Bloom Filters
lecturer: Tom
---

This isa variant on a dictionary data structure that allows for very efficient set membership queries, using very little space

Doesn't actually store any elements, used rather for bookkeeping

-   Can "make elements known to it"
-   Standard Bloom filter: no notion od deletions
-   Answers to look up queries just yes/no

Probabilistic structure so must accept that certain things can and will go wrong
