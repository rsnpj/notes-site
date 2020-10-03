---
title: Concurrent Systems
lecturer: Stefan
---

# Peterson’s Algorithm for Mutual Exclusion

Two processes $P_0$ and $P_1$, with shared variables: boolean
$flag_i,i\in\{0,1\}$ and $turn\in\{0,1\}$

`Process P[i]`

```python
# Non critical:
flag[i]=true
turn=1-i
while flag[1-i] and (turn=1-i):
    wait
#Critical section:
flag[i]=false
```

# Program Graph

<Definition name="Program Graph">

A program graph over a finite set of Boolean variables has
* A finite set of states S called locations
* A deterministic transition relation $\rightarrow \subseteq S\times S \times (Act\cup Cond)$ where
  * Act is a set of atomic actions that change the values of some variables - if a transition labelled by an action is taken, the respective variables are updated accordingly
  * Cond is a set of formulae over the variables - such a transition can be taken only if the respective condition (formula) is true under the current valuation of the variables

</Definition>

# Interleaved program graphs as a transition system

Given two program graphs $(S_1,\rightarrow_1)$ and $(S_2,\rightarrow_2)$
over a joint set of Boolean variables Vars, we create a transition
system with states $S_1\times S_2\times 2^{vars}$ that simulates a
concurrent execution of the two programs.

The transition relation of the system is defined as follows. Either

$$
(s_1,s_2,v)\rightarrow (S_1',s_2,v_1)
$$

Where $s_1\rightarrow_1s_1'$ and $\rightarrow_1$ changes/checks the values $v$ into $v_1$ accordingly
or

$$
(s_1,s_2,v)\rightarrow (s_1,s_2',v_2)
$$

where $s_2\rightarrow_2s_2'$ and $\rightarrow_2$ changes/checks the values $v$
into $v_2$ accordingly. In words - one of the programs makes a step
while the other stands still.
