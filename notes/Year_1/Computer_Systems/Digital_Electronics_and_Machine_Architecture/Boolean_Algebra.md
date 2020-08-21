---
title: Boolean Algebra
---

# Boolean Operations

There are $2^{2^k}$ possible boolean operations on k inputs

## XOR

![image](/img/Year_1/CSys/DEMA/Boolean/XOR.png)

![image](/img/Year_1/CSys/DEMA/Boolean/XOR2.png)

![image](/img/Year_1/CSys/DEMA/Boolean/XOR3.png)

# Functionally complete sets

Any logic circuit can be constructed from just the 3 operators:

- AND, OR, NOT

- They form a functionally complete set

- It has been shown that NOR gates alone form a functionally complete
  set

## NOR Gates

![image](/img/Year_1/CSys/DEMA/Boolean/NOR.png)

## NAND Chips

NAND gates are easier to make (use less silicon for same performance)
than NOR gates, so are often used as universal gates

# Digital Design Principles

Digital design is all about managing the complexity of huge numbers of
interacting elements. Some principles help humans do this:

- Abstraction: Hiding details when they aren't important.

- Discipline: Restricting design choices to make things easier to
  model, design and combine. E.g. the logic families and the digital
  abstraction.

The three --y's:

- Hierarchy: dividing a system into modules and submodules

- Modularity: well-defined functions and interfaces for modules

- Regularity: encouraging uniformity to modules can be swapped or
  reused.

## Circuits

A circuit has:

- one or more discrete valued input terminals

- one or more discrete valued output terminals

- a specification of the relationship between inputs and outputs

- a specification of the delay between inputs changing and outputs -
  performance specification responding

The circuit is made up of elements and nodes:

- An **element** is itself a circuit with inputs, outputs and specs.

- A **node** is a wire joining elements, whose voltage conveys a
  discrete valued variable.

## Combinatorial Logic

We wish to design very large circuits to perform functions for us.
Arbitrary circuits can include short circuits and instability, so we
restrict what we allow, firstly to combinational logic (and later
sequential logic). Combinational logic rules:

- **Individual gates** are combinational circuits.

- Every circuit **element** must be a combinational circuit.

- Every node is either an input to the circuit or connecting to
  **exactly one output** of a circuit element

- The circuit has **no cyclic paths** -- every path through the
  circuit visits any node at most once.

# Boolean Algebra

- The algebra of 0/1 variables.

- Used for specifying the function of a combinational circuit

- Used to analyse and simplify the circuits required to give a
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

![image](/img/Year_1/CSys/DEMA/Boolean/TruthToBool.png)

## Truth Table to SOP (Sum of Products)

![image](/img/Year_1/CSys/DEMA/Boolean/TruthToSOP.png)

- The minterms are true only for the combination of inputs

- Note that the diagram above has the wrong row highlighted, make
  modifications myself.

## Example

![image](/img/Year_1/CSys/DEMA/Boolean/Example.png)

![image](/img/Year_1/CSys/DEMA/Boolean/Example2)

## Truth Table to POS

![image](/img/Year_1/CSys/DEMA/Boolean/TruthToPOS.png)

- These are specified so that the situation does not come up that you
  are on a 0 row

## Boolean Algebra

Two equivalent expression for the same logical formula:

![image](/img/Year_1/CSys/DEMA/Boolean/BoolForm.png)

Which is simpler?

Is there another equivalent expression that is simpler than either?

We will use Boolean algebra and Karnaugh maps to produce the simplest
equivalent expression that can then be turned into circuitry

# Axioms of Boolean Algebra

![image](/img/Year_1/CSys/DEMA/Boolean/Axioms.png)

Axioms cannot be proven -- they are defined or assumed.

Each axiom has a dual obtained by interchanging AND and OR, and 0 and 1.

# Theorems of several variables

![image](/img/Year_1/CSys/DEMA/Boolean/SeveralVar.png)
![image](/img/Year_1/CSys/DEMA/Boolean/SeveralVar2.png)

# De Morgans

![image](/img/Year_1/CSys/DEMA/Boolean/DeMorgan.png)
