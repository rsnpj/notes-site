---
title: Boolean Algebra
lecturer: Magnus
---

# Boolean Operations

There are $2^{2^k}$ possible boolean operations on k inputs

## XOR

![image](/img/Year_1/CSys/DEMA/Boolean/XOR.webp)

![image](/img/Year_1/CSys/DEMA/Boolean/XOR2.webp)

![image](/img/Year_1/CSys/DEMA/Boolean/XOR3.webp)

# Functionally complete sets

Any logic circuit can be constructed from just the 3 operators:

-   AND, OR, NOT

-   They form a functionally complete set

-   It has been shown that NOR gates alone form a functionally complete
    set

## NOR Gates

**AND**: $A\cdot B = \overline{(\overline{A+A})+(\overline{B+B})}$

**OR**: $A + B = \overline{(\overline{A+B})+(\overline{A+B})}$

**NOT**: $\overline{A}=\overline{A+A}$

![image](/img/Year_1/CSys/DEMA/Boolean/NOR.webp)

## NAND Chips

NAND gates are easier to make (use less silicon for same performance)
than NOR gates, so are often used as universal gates

# Digital Design Principles

Digital design is all about managing the complexity of huge numbers of
interacting elements. Some principles help humans do this:

-   Abstraction: Hiding details when they aren't important.

-   Discipline: Restricting design choices to make things easier to
    model, design and combine. E.g. the logic families and the digital
    abstraction.

The three --y's:

-   Hierarchy: dividing a system into modules and submodules

-   Modularity: well-defined functions and interfaces for modules

-   Regularity: encouraging uniformity to modules can be swapped or
    reused.

## Circuits

A circuit has:

-   one or more discrete valued input terminals

-   one or more discrete valued output terminals

-   a specification of the relationship between inputs and outputs

-   a specification of the delay between inputs changing and outputs -
    performance specification responding

The circuit is made up of elements and nodes:

-   An **element** is itself a circuit with inputs, outputs and specs.

-   A **node** is a wire joining elements, whose voltage conveys a
    discrete valued variable.

## Combinatorial Logic

We wish to design very large circuits to perform functions for us.
Arbitrary circuits can include short circuits and instability, so we
restrict what we allow, firstly to combinational logic (and later
sequential logic). Combinational logic rules:

-   **Individual gates** are combinational circuits.

-   Every circuit **element** must be a combinational circuit.

-   Every node is either an input to the circuit or connecting to
    **exactly one output** of a circuit element

-   The circuit has **no cyclic paths** -- every path through the
    circuit visits any node at most once.

# Boolean Algebra

-   The algebra of 0/1 variables.

-   Used for specifying the function of a combinational circuit

-   Used to analyse and simplify the circuits required to give a
    specified truth table.

Variables are represented by letters, e.g. A, B, C...

The complement or inverse of a variable is written with a bar, e.g. $\overline{A}$.

A variable or its complement is called a literal, e.g. A,
$\overline{A}$, B or $\overline{B}$.

The AND of several literals is called a **product** or **implicant**,
e.g. ABC or AC,

Products may be written $A\cdot B\cdot C$, ABC, $A\cap B\cap C$ or
$A\land B\land C$.

A **minterm** is a product involving all the inputs to a function.

The OR of several literals is called a **sum** or **implicant**, e.g.
A+B+C or A+C,

Sums may be written A+B+C, $A\cup B\cup C$ or $A\lor B\lor C$.

A **maxterm** is a sum involving all the inputs to a function.

## Truth Table to Boolean Equation

**Sum of products form:**

Every Boolean expression can be written as minterms **ORed together**:

$$
(A\cdot B \cdot C)+(A\cdot \overline{B} \cdot \overline{C})+(\overline{A}\cdot B \cdot C)
$$

**Product of sums form:**

Also every boolean expression can be written as maxterms **ANDed together**

$$
(\overline{A}+\overline{B}+\overline{C})+(\overline{A}+B+C)\cdot(A+B+\overline{C})
$$

## Truth Table to SOP (Sum of Products)

| X     | Y     | Z     | F(X,Y,Z) |
| ----- | ----- | ----- | -------- |
| **0** | **0** | **0** | 1        |
| 0     | 0     | 1     | 0        |
| 0     | 1     | 0     | 0        |
| **0** | **1** | **1** | 1        |
| 1     | 0     | 0     | 0        |
| **1** | **0** | **1** | 1        |
| **1** | **1** | **0** | 1        |
| 1     | 1     | 1     | 0        |

**OR** together the 1 values of the function, to give SOP form

$$
F(X, Y, Z)=\bar{X} \cdot \bar{Y} \cdot \bar{Z}+\bar{X} \cdot Y \cdot Z+X \cdot \bar{Y} \cdot Z+X \cdot Y \cdot \bar{Z}
$$

-   The minterms are true only for the combination of inputs

## Example

$$
Y=\bar{A} \bar{B} \bar{C}+A \bar{B} \bar{C}+A \bar{B} C
$$

![image](/img/Year_1/CSys/DEMA/Boolean/Example.webp)

This layout can be used for any sum-of-products expression. It is how programmable logic arrays are laid out

$$
Y=\bar{B} \bar{C}+A \bar{B}
$$

![image](/img/Year_1/CSys/DEMA/Boolean/Example2.webp)

The simplified expression gives the same logical output with much less hardware

## Boolean Algebra

Two equivalent expression for the same logical formula:

$$
\begin{array}{l}
\mathrm{F}(\mathrm{X}, \mathrm{Y}, \mathrm{Z})=(\mathrm{X}+\mathrm{Y}+\overline{\mathrm{Z}})(\mathrm{X}+\overline{\mathrm{Y}}+\mathrm{Z})(\overline{\mathrm{X}}+\mathrm{Y}+\mathrm{Z})(\overline{\mathrm{X}}+\overline{\mathrm{Y}}+\overline{\mathrm{Z}}) \\
\mathrm{F}(\mathrm{X}, \mathrm{Y}, \mathrm{Z})=\overline{\mathrm{X}} \cdot \overline{\mathrm{Y}} \cdot \overline{\mathrm{Z}}+\overline{\mathrm{X}} \cdot \mathrm{Y} \cdot \mathrm{Z}+\mathrm{X} \cdot \overline{\mathrm{Y}} \cdot \mathrm{Z}+\mathrm{X} \cdot \mathrm{Y} \cdot \overline{\mathrm{Z}}
\end{array}
$$

Which is simpler?

Is there another equivalent expression that is simpler than either?

We will use Boolean algebra and Karnaugh maps to produce the simplest
equivalent expression that can then be turned into circuitry

# Axioms of Boolean Algebra

|     | Axiom                    |     | Dual Axiom       | Name         |
| --- | ------------------------ | --- | ---------------- | ------------ |
| A1  | B=0 if $B\neq 1$         | A1' | B=1 if $B\neq 0$ | Binary Field |
| A2  | $\overline{0}=1$         | A2' | $\overline{1}=0$ | NOT          |
| A3  | $0\cdot 0=0$             | A3' | 1+1=1            | AND/OR       |
| A4  | $1\cdot 1=1$             | A4' | 0+0=0            | AND/OR       |
| A5  | $0\cdot 1 = 1\cdot 0 =0$ | A5' | 1+0-0+1=1        | AND/OR       |

Axioms cannot be proven -- they are defined or assumed.

Each axiom has a dual obtained by interchanging AND and OR, and 0 and 1.

# Theorems of several variables

![image](/img/Year_1/CSys/DEMA/Boolean/SeveralVar.webp)
![image](/img/Year_1/CSys/DEMA/Boolean/SeveralVar2.webp)

# De Morgans

Proof of two variable case:

$$
\overline{A\cdot B}=\overline{A}+\overline{B}
$$

Proof

| A   | B   | $A\cdot B$ | $\overline{A\cdot B}$ | $\overline{A}$ | $\overline{B}$ | $\overline{A}+\overline{B}$ |
| --- | --- | ---------- | --------------------- | -------------- | -------------- | --------------------------- |
| 0   | 0   | 0          | 1                     | 1              | 1              | 1                           |
| 0   | 1   | 0          | 1                     | 1              | 0              | 1                           |
| 1   | 0   | 0          | 1                     | 0              | 1              | 1                           |
| 1   | 1   | 1          | 0                     | 0              | 0              | 0                           |
