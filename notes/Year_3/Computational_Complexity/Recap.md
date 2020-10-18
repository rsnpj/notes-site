---
title: Time Complexity Recap
lecturer: Andrei
---

# Turing Machines

<Definition name="Turing Machine">

A k-tape Turing machine is a 5-tuple $(Q,\Sigma, \delta, q_0, F)$, where

1. Q is a finite set of states
2. $\Sigma$ is a finite alphabet
3. $\delta$ is a transition function
4. $q_0\in Q$ is an initial state
5. $F \subseteq Q$ is a set of final states

</Definition>

Each tape contains a sequence of symbols from $\Gamma = \Sigma \cup \{\triangle\}$
($\triangle$ is a special blank symbol - all unoccupied cells are blank)

The transition function defines the action of the machine in each (non-final) state, for each collection of symbols being read:

$$
\delta:(Q \backslash F) \times \Gamma^{k} \rightarrow Q \times \Gamma^{k} \times\{L, S, R\}^{k}
$$

## Time complexity of a Turing machine

The most critical computational resource is often time, so the most useful complexity measure is often time complexity

<Definition name="Time complexity of a turing machine">

The time complexity of a Turing machine T is the function $Time_T$ such that $Time_T(x)$ is the number of steps taken by the computation $T(x)$

</Definition>

# Time complexity of a language

<Definition name="Time complexity of a language">

For any function f, we say that the **time complexity** of a decidable language $\mathcal{L}$ is $\mathcal{O}(f)$, or $\mathcal{L}$ is decidable in $\mathcal{O}(f)$ time, if there exists a TM T which decides $\mathcal{L}$, and constants $n_0$ and c such that for all inputs x with $|x|>n_0$

$$
Time_T(x)\leqslant cf(|x|)
$$

</Definition>

# Complexity classes

<Definition name="Time complexity class">

The time complexity class TIME[f] is defines to bt the class of all languages with time complexity in $\mathcal{O}(f)$

</Definition>

## The class P

<Definition name="P">

$$
\mathbf{P}=\bigcup_{k \geq 0} \operatorname{TIME}\left[n^{k}\right]
$$

</Definition>

-   The class P is said to be robust - it does not depend on the exact details of the computational model or encoding
-   The most direct way to show a problem is in P is to give a polynomial time algorithm which solves it

# Nondeterministic machines

If NT is a non-deterministic Turing Machine, then NT(x) denotes the tree of configurations which can be entered with input x, and NT accepts x if there is some accepting path in NT(x)

<Definition name="Time complexity of a non deterministic TM">

The time complexity of a non-deterministic Turing Machine NT is the function $NTime_{NT}$ such that $NTime_{NT}(x)$ is the number of steps in the longest branch of NT(x)

</Definition>

If not all branches halt, then it is undefined

## Nondeterministic time complexity

<Definition name="Nondeterministic Time complexity">

The nondeterministic time complexity class NTime[f] is defines to be the class of all languages with nondeterministic time complexity in $\mathcal{O}(f)$

</Definition>

<Definition name="NP">

$$
\mathrm{NP}=\bigcup_{k \geq 0} NTIME\left[n^{k}\right]
$$

</Definition>

# Polynomial-time reducibility

<Definition name="Polynomially Reducible">

Language $\mathcal{L}_1$ is polynomially reducible to $\mathcal{L}_2$, denoted $\mathcal{L}_1\leqslant\mathcal{L}_2$ if a polynomial-time computable function exists such that

$$
x\in \mathcal{L}_1 \Leftrightarrow f(x) \in \mathcal{L}_2
$$

</Definition>

<Lemma>

$$
\mathcal{L}_1\leqslant\mathcal{L}_2 \text{ and } \mathcal{L}_2\in P \Rightarrow \mathcal{L}_1 \in P
$$

</Lemma>

# Complete problems

-   Any complexity class can be partitioned into equivalence classes via polynomial-time reduction - each class contains problems that are reducible to each other
-   These equivalence classes are partially ordered by reduction
-   Problems in the maximal class are called **complete** - every problem in the class is polynomial time reducible to them

# NP completeness

-   NP complete problems are the hardest problems in NP
-   To show that $\mathcal{L}$ is NP-complete we must show that every language in NP can be reduced to $\mathcal{L}$ in polynomial time
-   However, once we have one NP complete language $\mathcal{L}_0$, we can show that any other language in $\mathcal{L}$ is NP-complete just by showing $\mathcal{L}_0\leqslant \mathcal{L}$

## Proving NP completeness

To prove NP completeness by reduction, do the following:

1. Describe the transformation (reduction function)
2. Show that the transformation works in polynomial time
3. Prove that the "yes" answer is preserved
4. Prove that the "no" answer is preserved

# Cook-Levin theorem

<Theorem>
Satisfiability is NP complete
</Theorem>

<Corollary>

**P=NP** iff Satisfiability is in **P**

</Corollary>

## Proof

-   Let $\mathcal{L}\in NP$, hence there is some nondeterministic NT that decides $\mathcal{L}$ in at most $p(|x|)$ steps
-   The idea is to construct, for every input x for NT, a boolean formula $\Phi_x$ that describes the entire computation NT(x), in such a way that the formula $\Phi_x$ can be satisfied iff there is an accepting path in NT(x)
-   If $\Phi_x$ is short enough, and can be constructed in polynomial time, then we get the required polynomial time reduction

### Assumptions about NT

Assume that NT uses:

-   $h+1$ symbols $\sigma_0, \sigma_1,...,\sigma_h$ (where $\sigma_0$ is the blank symbol)
-   $k+1$ states $q_0, q_1,...,q_k$ (where $q_0$ is the initial state and $q_1$ is the accepting state)
-   l instructions $r_1,...,r_l$ (distinct possible transitions)

Assume that every path in NT(x) has length $x_a=p(|x|)$ (the length of an accepting path for input x). For this:

-   Extend all shorter paths assuming that no further action is taken
-   Cut all longer paths, since such paths make no difference to whether or not x will be accepted

### Variables

We use Boolean variables to specify exactly the possible configurations at each time $t\leqslant t^* = x_a$

-   $P_{s,t}^i$ is **true** iff s-th cell contains symbol $\sigma_i$ at time t (describes **tape**)
    -   There are $(h+1)\cdot x_a \cdot x_a$ of such variables
-   $Q_t^i$ is **true** iff NT is in state $q_i$ at time t (describes **state**)
    -   There are $(k+1)\cdot x_a$ of them
-   $S_{s,t}$ is **true** if tape head is on the s-th dell at time t (describes **head**)
    -   There are $x_a \cdot x_a$ of them
-   $R_t^i$ is **true** if the machine implements instruction $r_i$ at time $t$ (describes **instructions**)
    -   There are $l\cdot x_a$ of them

### Formula

Now we write the formula

$$
\Phi_x=A\land B \land C \land D \land E \land F \land G \land H \land J \land K
$$

**A** says each cell contains exactly one symbol

$$
A_{s, t}=\left(P_{s, t}^{0} \vee P_{s, t}^{1} \vee \ldots \vee P_{s, t}^{h}\right) \wedge \bigwedge_{0 \leq i<j \leq h}\underbrace{\left(P_{s, t}^{i} \Rightarrow \neg P_{s, t}^{j}\right)}_{\text{One call can't contain two pieces of data}}
$$

Remember that $(X \Rightarrow Y)\equiv (\lnot X \lor Y)$

$$
A = A_{1,1}\land A_{1,2} \land ... \land A_{t^*,t^*}
$$

There are $\dfrac{(h+1)h}{2}\cdot x_a \cdot x_a$ clauses in A

**B** says the tape head scans exactly one cell

$$
B=B_1\land B_2 \land ... \land B_{t^*}
$$

$$
B_{t}=\left(S_{1, t} \vee \ldots \vee S_{t^{*}, t}\right) \wedge \bigwedge_{1 \leq i<j \leq t^{*}}\left(S_{i, t} \Rightarrow \neg S_{j, t}\right)
$$

**C** says that NT is in exactly one state

**D** says that NT implements exactly one instruction at each step

**E** says that at time 1, the input x is on the first n cells of the tape, the head is at position 1, and the state is $q_0$. If $x=\sigma_{s_1}\sigma_{s_2}...\sigma_{s_n}$ then

$$
E=Q_{1}^{0} \wedge S_{1,1} \wedge\left(\bigwedge_{1 \leq i \leq n} P_{i, 1}^{S_{i}}\right) \wedge\left(\bigwedge_{n+1 \leq i \leq t^{*}} P_{i, 1}^{0}\right)
$$

For the following variables we are defining

$$
r_u \equiv \delta(q_i,\sigma_j)=(q_i,\sigma_j,m)
$$

**F** says that $r_u$ is a valid transaction:

$$
\bigwedge_{s, t}\left(\left(S_{s, t} \wedge R_{t}^{u}\right) \Rightarrow\left(Q_{t}^{i} \wedge P_{s, t}^{j}\right)\right)
$$

**G** specifies the effect on the state

$$
R_t^u\Rightarrow Q^{i'}_{t+1}
$$

**H** specifies the correct symbol is written

$$
R_t^u \Rightarrow P^{j'}_{s,t+1}
$$

**J** specifies that the correct movement is made

$$
\left(R_{t}^{u} \wedge S_{s, t}\right) \Rightarrow S_{s+d(m), t+1}
$$

where $d(L)=-1, d(R)=1, d(S)=0$

**K** says that the accepting state $q_1$ is entered

$$
K=Q_1^1\lor ... \lor Q^1_{t^*}
$$

### Conclusion

-   We can construct formula $\Phi_x$ in polynomial time
-   If formula $\Phi_x$ is satisfiable then the values of the variables specify an accepting computation for x
-   Conversely, if there is an accepting computation for x, then the corresponding values will satisfy the formula $\Phi_x$
-   Hence, $x\in \mathcal{L}\Leftrightarrow \Phi_x \in L_{satisfiability}$
