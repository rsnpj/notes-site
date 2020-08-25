---
title: Resolution as Search
---

# Proof systems

The proof system resolution:

- All formulae are clauses, i.e. disjunctions of literals

- One rule of inference, the resolution rule

We may assume that our knowledge base KB is a set of clauses as follows:

- Think of KB as a conjunction of all its formulae

- Find an equivalent formula in conjunctive normal form

- Split the c.n.f conjunction into a set of clauses, so we have moved
  back to the KB being a set of formula

# The resolution inference algorithm

Suppose that we want to decide whether $KB \models \phi$

- Convert $\lnot \phi$ to cnf

- Add the resulting clauses to (the set of clauses) KB

- Iteratively apply the resolution rule to produce new clauses which
  are added to the set of clauses if they are not already present

- This iterative process continues until either

  - There are no new clauses to be added - in which case our
    algorithm answers that KB **does not** entail $\phi$

  - Two clauses resolve to yield the empty clause, so these clauses
    must be X and $\lnot X$, for some boolean variable X, in which
    case our algorithm answers that KB **does** entail $\phi$

- We can also factor, that is, replace $\alpha\lor \alpha$ with
  $\alpha$ ($\alpha$ is some literal)

The resolution inference algorithm is both sound and complete, so in the
worst case it is exponential

## Example

Recall our wumpus world KB from earlier

$$
\left\{\neg P_{1,1}, B_{1,1} \Leftrightarrow\left(P_{1,2}{\lor} P_{2,1}\right), B_{1,2} \Leftrightarrow\left(P_{1,1}{\lor} P_{2,2}{\lor} P_{1,3}\right), \neg B_{1,1}, B_{1,2}\right\}
$$

Rewrite these formula so that KB is in c.n.f and take the clauses

$$
\begin{array}{l}{\left\{\neg P_{1,1},-B_{1,1}\lor P_{1,2}\lor P_{2,1}, \neg P_{1,2}\lor B_{1,1}, \neg P_{2,1}\lor B_{1,1}\right.,} \\ {\neg B_{1,2}\lor P_{1,1}\lor P_{2,2}\lor P_{1,3}, \neg P_{1,1}\lor B_{1,2}, \neg P_{2,2}\lor B_{1,2},} \\ {\left.\neg P_{1,3}\lor B_{1,2}, \neg B_{1,1}, B_{1,2}\right\}}\end{array}
$$

Suppose that the agent returns from room \[1,2\] to room \[1,1\] and
then moves to room \[2,1\]\
As a consequence, suppose the following formulae are added to KB

$$
B_{2,1} \Leftrightarrow\left(P_{1,1}\lor P_{2,2}\lor P_{3,1}\right) \text { and } \neg B_{2,1}
$$

Which converted to c.n.f is:

$$
B_{2,1}\lor P_{1,1}\lor P_{2,2}\lor P_{3,1}, \neg P_{1,1}\lor B_{2,1}, \neg P_{2,2}\lor B_{2,1}, \neg P_{3,1}\lor B_{2,1}, \neg B_{2,1}
$$

Suppose we want to know whether $KB \models P_{1,3}$ (which is finding
if there is a pit in $P_{1,3}$)

Add $\lnot P_{1,3}$ to our set of clauses and apply Resolution

We get the empty set, so there is definitely a pit in room \[1,3\]

This is a bit of a cheat as the resolution is just being applied, where
in reality it is difficult for an algorithm to do this. It is especially
difficult as the set of clauses could get very large-

# Realising Resolution via "global path-based" search

- In our first illustration we "magically" found the derivation of the
  empty clause

- In general, what we’ll need to do is apply a search algorithm in
  order to try and "find" the empty clause

|                  |                                                                                                                                                                                                                                                                             |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| State            | Set of clauses                                                                                                                                                                                                                                                              |
| Initial state    | The clauses of $KB \lor \lnot \phi$                                                                                                                                                                                                                                         |
| Actions          | Resolve and Factor                                                                                                                                                                                                                                                          |
| Goal state       | Any set of clauses containing the empty clause                                                                                                                                                                                                                              |
| State Transition | ($\Sigma$, action, $\Sigma$’) such that <ul><li>Resolve: The target of clauses $\Sigma'$ is the result of applying the rule of inference to the source set of clauses $\Sigma$</li><li>Factor: we factor a clause $\Sigma$ to obtain the set of clauses $\Sigma'$</li></ul> |
| Step cost        | 1                                                                                                                                                                                                                                                                           |

The path from the initial state to a goal state is a "proof" with an
optimal path being a "shortest proof"

# Realising Resolution via "local state-based" search

Here is a "local state-based" search formulation of Resolution

|                    |                                                                                                                                                                                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| State              | Set of clauses                                                                                                                                                                                                                                                                                                            |
| Initial state      | The clauses of $KB \lor \lnot \phi$                                                                                                                                                                                                                                                                                       |
| State transition   | $(\Sigma,\Sigma')$ is such that the target set of clauses $\Sigma'$ is <ul><li>The result of applying the rule of inference to the source set of clauses $\Sigma$</li><li>The result of factoring a clause $\Sigma$ </li></ul>                                                                                            |
| Objective function | f such that $f(\Sigma)$ is <ul><li>The number of clauses in $\Sigma$ if the empty clause $\varnothing$ is in $\Sigma$ </li> <li>$\infty$ otherwise, with $\infty$ a number bigger than the total number of clauses</li> <li>Or a better objective function might be the size of the smallest clause in $\Sigma$</li></ul> |
