---
title: Natural Deduction for Propositional Logic
lecturer: Daniel
---

# Proof Systems for Propositional Logic

-   What we would like from a proof system

    -   **Completeness** - Using our proof system, we should be able to
        prove all the tautologies

    -   **Soundness** - All theorems proved by our proof system should
        be tautologies

-   A **proof system** defines the proofs (valid mathematical arguments)
    of the system - it is a collection of **rules of inference**

-   These rules of inference can be applied to infer new formulae from
    old

-   Henceforth, we consider propositional logic to consist only of those
    formulae build using the connectives $\land \lor \lnot \Rightarrow$

    -   With other connectives, such as $\Leftrightarrow$, abbreviations

-   An **argument form** in propositional logic is a sequence of
    formulae

    $\varphi_1,\varphi_2,...,\varphi_n,\psi$\
    and such an argument form is valid if:

    -   Whenever a truth assignment f is s.t.
        $\varphi_1,\varphi_2,...,\varphi_n$ evaluate to true under f
        then $\psi$ necessarily evaluates to true under f

-   An argument form can also be written in the form
    $\varphi_1,\varphi_2,...,\varphi_n\vdash\psi$ when it is referred to
    as a **sequent**

-   The rule of inference corresponding to the above argument form is:
-   $\varphi_1,\varphi_2,...,\varphi_n\Rightarrow \psi$

    and if the above argument form is valid then this rule of inference
    is a **tautology**

-   The most well known rule of inference for propositional logic is the
    law of detachment

# Applying rules of inference

-   Of course, when applying a rule of inference we can substitute
    arbitrary formulae for p and q

    ![Applying rules of inference](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/Fig1.webp)

-   Similarly, given any rule of inference
    $\varphi_1,\varphi_2,...,\varphi_n\Rightarrow\psi$

    -   We can apply this rule by substituting **any** formula for
        **any** propositional variable, so long as the same formula is
        substituted for the same variable

    -   Thus, a valid argument form yields an infinite collection of
        tautologies

# Other rules of inference

![Other rules of inference](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/Fig2.webp)

For all these diagrams, if the two statements on the top are true, then
the statement on the bottom must be true.

# Rules of inference in action

# An alternative approach

-   We could write down all possible truth assignments on A,W,I,P,S and
    D, and:

    -   Retain only those for which

        $A\land W\Rightarrow I,A\lor P,W\lor S, \lnot I$ and
        $D\Rightarrow \lnot (P\lor S)$

        are true

    -   Then check to see that for all of these retained truth
        assignments we have that $\lnot D$ is true

-   However, this would mean that $2^6=64$ different truth assignments
    need to be checked

-   Consequently, the proof-theoretic approach can be significantly more
    efficient than the truth table approach, especially when there is many propositional variables

-   Of course knowing which rules of inference to apply which formulae
    so that we get a speedy proof is another difficulty that needs to be
    overcome

# Natural Deduction

-   The proof system **natural deduction** consists of a collection of
    valid rules of inference and is used to obtain proofs of sequence of
    the form:

    $\varphi_1,\varphi_2,...,\varphi_n\vdash \psi$

-   We assume that we are given $\varphi_1,\varphi_2,...,\varphi_n$ as
    **premises**. We hope to apply our rules of inference from the proof
    system to obtain $\psi$

-   Rules for conjunction:

    ![Rules for conjunction](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/Conjunction.webp)

-   Rules for double negation:

    ![Rules for double negation](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/Negation.webp)

-   Note

    -   In general $\varphi_1$ and $\varphi_2$ are formulae and not
        necessarily propositional variables

    -   All of our rules are valid

# A simple proof

-   Here is the proof of the sequent
    $p,\lnot\lnot (q\land r)\vdash \lnot \lnot p \land r$ using the
    rules we have introduced so far

| Index | Formula                 | Rule             |
| ----- | ----------------------- | ---------------- |
| 1     | p                       | premise          |
| 2     | $\lnot\lnot (q\land r)$ | premise          |
| 3     | $\lnot\lnot p$          | $\lnot \lnot i1$ |
| 4     | $q\land r$              | $\lnot\lnot e 2$ |
| 5     | r                       | $\land e2 4$     |
| 6     | $\lnot\lnot p\land r$   | $\land i 3 5$    |

-   Note that the validity of the rules means that

    -   If p and $\lnot \lnot(q\land r)$ are true under some truth
        assignment then $\lnot \lnot p\land r$ is necessarily true under
        this truth assignment

-   We often say that a sequent is **valid** if it can be proved

# More rules

-   Rule for eliminating implication

    ![Rule for eliminating implication](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/Fig3.webp)

-   Rule for introducing implication

    ![Rule for introducing implication](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/Fig4.webp)

-   The box doesn't imply $\varphi_1$ is true, just that the stuff below
    the line is true if the stuff above the line is true

-   In order to apply the rules $\Rightarrow i$

    -   To start with the intended premise $\varphi_1$, as the first
        line of the box

    -   Continue until we prove $\varphi_2$

    -   Close the box and write our implication
        $\varphi_1\Rightarrow\varphi_2$

-   Thereafter we are not allowed to use any formula in the box. Once a
    box has closed then the formula within it are no longer available to
    us

# Proof using boxes

-   Here is a proof of the sequent
    $p\Rightarrow q, q\Rightarrow r \vdash p \Rightarrow r$

    ![proof of the sequent using boxes](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/Fig5.webp)

-   Note that it is possible

    -   For a proof to involve more than one box

    -   For boxes to be nested within each other

-   Note that boxes cannot overlap

    -   We cannot **open** a box and then **open** another box, then
        **close** the first box before **closing** the second box

# More than one box

-   Here is a proof of the sequent
    $(p\land q)\Rightarrow r \vdash p\Rightarrow(q\Rightarrow r)$

    ![proof of the sequent using more than one box](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/Fig6.webp)

-   Note that the structure of the formula we wish to prove helps to
    determine the structure/tactics of our proof

# More rules

-   Rules for introducing disjunction

    ![Rules for introducing disjunction](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/v-introduction.webp)

-   Rules for eliminating disjunction

    ![Rules for eliminating disjunction](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/v-elimination.webp)

-   In order to apply the rule $\lor$e, we use boxes as previously

    -   But now there is a box starting with each disjunct $\varphi$ and
        $\psi$

    -   Each box needs to end with the same intended formula, $\chi$

# A proof using $\lor$ elimination

![A proof using $\lor$ elimination](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/v_proof1.webp)

-   Assume that p is true, so the RHS is true

-   $p\lor r$ is true

-   Open box assuming q is true

-   Eliminate the implies symbol from the LHS

-   Shown that no matter if p or q is true, the statement $p\lor r$ will
    be true

-   It has been shown that if $p\lor q$ is true, that $p\lor r$ is true,
    so $(p\lor q)\Rightarrow (p\lor r)$ will always be true

![A proof using $\lor$ elimination](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/v_proof2.webp)

-   Basically trying to build the RHS from the LHS

# More rules

-   Rules for negation

    ![Rules for negation](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/negation_rules.webp)

-   The symbol $\bot$, known as bottom, represents a contradiction, in
    natural deduction if one has a contradiction then one can infer
    **any** formula

-   Rules for introducing negation

    ![Rules for introducing negation](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/introduce_negation.webp)

# A proof using rules for negation

![A proof using rules for negation](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/negation_proof1.webp)

-   $p\land\lnot p\Rightarrow \varphi$ holds as $p\land\lnot p$ will
    always be false, and if the LHS of an implication is false, then the
    whole statement will be true

-   Lines $2\rightarrow 5$ say $x\Rightarrow(y\Rightarrow x)$

![Second proof using rules for negation](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/negation_proof2.webp)

# A derived rule

-   We can derive other rules in natural deduction

-   Consider modus tollens
    $\varphi\Rightarrow\psi, \lnot\psi\vdash\lnot\varphi$

    ![A derived rule](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/modus_tollens.webp)

-   Note that we can use derived rules just as if they were rules of
    natural deduction

    -   e.g., in a proof with

        -   a line reading $\varphi\Rightarrow\psi$

        -   and another line reading $\lnot\psi$

    -   we could immediately infer $\lnot\psi$ and write modus tollens
        as an explaining remark

# More derived rules

-   Proof by contradiction is the principle "if from $\lnot\varphi$ I
    can prove $\bot$ then I can deduce $\varphi$"

-   Here is a proof that this principle can be applied in natural
    deduction

    ![More derived rules](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/ProofByContradiction.webp)

-   We denote reductio ad absurdum by RAA

# More derived rules

-   The law of excluded middle states that either $\varphi$ is true or
    $\lnot\varphi$ is true

-   Here is a proof of it

    ![More derived rules](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/MiddleStates.webp)

-   We denote the law of excluded middle by LEM

# Some facts about Natural Deduction

-   Natural deduction is sound and complete

-   Let $\varphi_1,\varphi_2,...,\varphi_m$ and $\psi$ be formulae

-   Soundness

    -   If the sequent $\varphi_1,\varphi_2,...\varphi_m\vdash\psi$ is
        provable then the formula
        $\varphi_1\land\varphi_2\land...\land\varphi_m\Rightarrow\psi$
        is a tautology

-   Completeness

    -   If
        $\varphi_1\land\varphi_2\land...\land\varphi_m\Rightarrow\psi$
        is a tautology then the sequent
        $\varphi_1,\varphi_2,...\varphi_m\vdash\psi$ is provable

-   A **theorem** is a formula $\psi$ for which the sequent $\vdash\psi$
    is provable, thus, the soundness and completeness of natural
    deduction tells us that every theorem is a tautology and every
    tautology is a theorem

# Proving Theorems

-   Here is a proof that the sequent
    $(p\Rightarrow(\lnot p\lor q))\lor (p\Rightarrow\lnot q)$ is a
    theorem

    ![Proving Theorems](/img/Year_1/MCS/Propositional_Logic/Natural_Deduction/ProvingTheorems.webp)
