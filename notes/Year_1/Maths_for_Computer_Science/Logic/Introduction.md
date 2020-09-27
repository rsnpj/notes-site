---
title: Introduction to Logic
lecturer: Daniel
---

# What is logic?

There are two parts of logic

- Formal Language - Making statements about certain objects

- Formal System - Reasoning about the properties of objects

Objective of logic:

- To carry out **precise** and **rigorous** arguments about
  **assertions** and **proofs** and to **implement** these arguments
  and **proofs**

- We need a **language** whose structure (**syntax**) can be
  **precisely** described and whose meaning (**semantics**) can be
  **unambiguously** defined

**Proof System** - A system of **deduction** by which **proofs** can be
constructed

**Semantics** - A notion of **meaning** by which the **truth** of some
property of some object can be determined

**Propositional logic**- Joining propositions to create more complicated
propositions

**First order logic** - Statement is broken down into a subject and a
**predicate**, the predicate **modifies** the subject

Logic comprises of 3 components:

- **Syntax** - The definition of the formulae of the logic

- **Semantics** - The association of meaning and truth to the formulae
  of the logic

- **Proof System** - The manipulation of formulae according to a
  system of rules

What is desired from these components is:

- **Completeness** - All the "true" (semantics) formulae should be
  "provable" (syntax, proof system)

- **Soundness** - A formula that is "provable" (syntax, proof
  system) should be "true" (semantics)

# Logic in action

## Programming languages

**Syntax** - Exactly which combinations of symbols constitute a legible
program

## Circuits

**Logic Gate** - Performs a Boolean operation on digital inputs and
provides the result of this operation as an output

**Logic Circuit** - A collection of logic gates connected together

**Truth Table** - A model of the intended behaviour of a logic gate

Propositional logic can be used to create a truth table

A specification of a logic circuit as a truth table may be incomplete
due to a large circuit with multiple combinations that could be given,
and not all need to be tested

## Databases

**Database** - A structured collection of logical records

**Database Query Language** - A language for asking and answering
questions of the structured data

The expressive power of SQL is very closely related to that of predicate
logic

## Formal Methods

**Formal Methods** - The use of mathematically based techniques for the
specification and verification of computer systems - these prove that
programs have certain property and don't just rely on testing

**Model Checking** - A branch of formal methods where a computer system
is modelled as a mathematical structure then a specific property that
this system might have is expressed by a formula of some logic

Model checking used for rapid prototyping systems

Examples of use of formal methods:

- Microprocessor design

- Design of data-communications protocol software

- Critical Software

- Operating Systems
