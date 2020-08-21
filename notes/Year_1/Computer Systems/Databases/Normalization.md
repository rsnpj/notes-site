---
title: Functional dependencies and normalization
---

# Two approaches to database design

- Top down approach: Entity-Relationship (ER) model

  - A graphical description of the DB

  - Start with a set of requirements

  - Identify the entities that you need to represent data about

  - Identify the attributes of those entities

- At the next step we construct the Relational data model

- Bottom up approach

  - Start with initial tables and attributes

  - analyse the relationships among the attributes

  - Re-design the tables and attributes in a "better" way

  - This becomes tricky for large databases

  - We need a formalization of this approach

# Well designed relational databases

- No redundancy: every data item is stored once

  - e.g. keep the address of the customer only in one place

  - exception of foreign keys (they act as pointers)

  1.  Minimise the amount of space required

  2.  Simplify maintenance of the database

- If an item is stored twice (or more), then:

  - every time we update it, we need to change it in many places

  - we may have inconsistencies (two different values for the same
    item)

- Purpose of normalisation

  - every relation represents a "real world" entity

  - single valued columns

  - avoid redundancy

  - data is easy to update correctly

# Redundancy

- **Set valued** attributes in the ER diagram: result in multiple rows
  in the corresponding table

- **Dependencies** between attributes cause redundancy

# Data anomalies: terminology

**Redundancy**: repeating data in multiple different locations

**Modification anomaly**: failure to maintain all existing instances of
a specific value

**Deletion anomaly**: losing other values as a side effect when you
delete data

**Insertion anomaly**: when new data items are inserted, we need to add
must more irrelevant data

# Decomposition

- **Schema refinement (decomposition)**: uses two (or more) relations
  to store the original relation

- No update anomalies

# Normalization theory

- The result of ER modelling: needs further refinement to reduce data
  redundancy

- **Decomposition** of the relations (tables)

  - this can be done manually for a small DB

  - For a larger DB we need a formalization of the approach

- Functional dependencies among data items:

  - Strongly affect the data anomalies

  - The fundamentals of the underlying **normalization theory**

  - Specify which are the **candidate/primary/foreign keys**
    (**entity integrity** and **referential integrity**)

  - Specify which attributes combine in the new tables

# Relational keys

- **Candidate key**: a minimal (not minimum) set of attributes whose
  values uniquely identify the tuples

- **Primary key**: The candidate key selected to identify rows
  uniquely with the table

- **Alternate key**: Those candidate key(s) not selected as primary
  key

- **Simple key**: The key consists of one attribute

- **Composite key**: The key consists of several attributes

# Functional data dependencies

- Functional data dependency

  - Describes the relationship among attributes in the same relation

  - Let A and B be two sets of attributes; we say that "B is
    **functionally dependent** on A" (denotes $A\rightarrow B$) if
    each value of A is associated with exactly one value of B

- Informally: if we know the attribute values of the set A then we
  know the (unique) values for the set B

- The attribute values of B can be determined by

  1.  Calculation

  2.  Lookup

- In a functional data dependency ($A\rightarrow B$)

  - **determinant**: the set of all attributes on the left hand side
    (i.e. A)

  - **dependant**: the set of all attributes on the right hand side
    (i.e. B)

- **Full** functional dependency $A\rightarrow B$:

  - B is functionally dependent on A

  - B is not functionally dependent on any proper subset of A

- **Partial** functional dependency $A\rightarrow B$:

  - B is functionally dependent on A

  - B remains functionally dependent on at least one proper subset
    of A

- **Transitive** functional dependency:

  - If there exist functional dependencies $A\rightarrow B$ and
    $B\rightarrow C$

  - Then the functional dependency $A\rightarrow C$ also exists and
    is called **transitive**

- By the definition of relational keys

  - A candidate key is a minimal set of attributes which
    functionally determine all attributes in a relation

- How can we determine all functional dependencies?

  - Some of them are obvious from the semantics

  - some others follow from specification/discussions with customers

- Let F be a set of functional dependencies

- The closure of F (denotes $F^+$) is the set of all functional
  dependencies that are implied by the dependencies in F

# The closure of a set F of dependencies

- To compute the closure $F^+$ of F we need a set of inference rules

- Armstrong's axioms

  1.  Reflexivity: if $B\subseteq A$, then $A\rightarrow B$

  2.  Augmentation: if $A\rightarrow B$ then $A,C\rightarrow B,C$

  3.  Transitivity: if $A\rightarrow B$ and $B\rightarrow C$ then
      $A\rightarrow C$

- These inference rules are complete

  - Given a set X of functional dependencies, all dependencies
    implied by X can be derived from X using these rules

- And sound

  - no additional functional dependencies (which are not implied
    by X) can be derived using these rules

- These properties can be proved by definition of a functional
  dependency

- Further rules can be derived from Armstrong's axioms:

  - Decomposition: if $A\rightarrow B,C$ then $A,b$ and $A,C$

  - Union: if $A\rightarrow B$ and $A\rightarrow C$ then
    $A\rightarrow B,C$

  - Composition: if $A\rightarrow B$ and $C\rightarrow D$ then
    $A,c\rightarrow B,D$

- For example, proof of the Union rule using the axioms:

  - $A\rightarrow B$, augmentation with
    $C\Rightarrow A,C \rightarrow B,C$

  - $A\rightarrow C$ augmentation with
    $A\Rightarrow A,A\rightarrow A,C$ (i.e. $A\rightarrow A,C$)

  - Transitivity from the last two dependencies:
    $A\rightarrow A,C \rightarrow B,C$

- To compute the closure $F^+$ of F

  - Apply repeatedly Armstrong's axioms (or the above 3 extra rules)
    to get the closure of F

# Functional data dependencies

- Let F be a set of transitive dependencies

- Let A be a set of attributes in a relation

- The closure of A under F (denoted $A^+$):

  - The set of all attributes that can be implied by the attributes
    of A using functional dependencies from F

- We can compute the closure $A^+$ (under F)

  - Similarly to the closure $F^+$

  - Start with the functional dependencies of F, which have
    attributes A on the left hand side

  - Repeatedly apply Armstrong's axioms

- By the definition of relational keys:

  - A candidate key is a minimal set of attributes such that $A^+$
    (under $F^+$) includes all attributes in a relation

# Construction of the Relational Data model

- Bottom-up approach: Normalization

  - start with the initial tables and attributes (from the ER model)

  - analyse the relationships among the attributes

  - re-design the tables and attributes in a "better" way:

    - decompose the tables into more tables (schema refinement)

    - ensure entity and referential integrity

- Purpose of normalization

  - every relation represents a "real world" entity

  - single-valued columns

  - avoid redundancy (i.e. repetitions)

    - Minimise the amount of space required

    - Simplify maintenance of the database

  - Data can be updated correctly to avoid update anomalies

# Data update anomalies

![image](/img/Year_1/CSys/Databases/Normalization/anomalies.png)

- Modification anomaly:

  - we want to change the address of branch B003

  - we must update it in many places (due to redundancy)

  - problem: if we do not update one of them $\Rightarrow$
    inconsistent data

- Deletion anomaly:

  - we want to delete staff with staffNo SA9 from the database

  - this is the last staff member in branch B007

  - Problem: we loose the details of this branch $\Rightarrow$
    incomplete data

- Insertion anomaly

  - We want to add a new branch, which has no staff yet

    $\Rightarrow$ we must add Null into the attributes related to
    staff

  - staffNo is aa private key $\Rightarrow$ violation of entity
    integrity

# Functional data dependencies

The fundamentals of normalization theory:

- Functional data dependency:

  - Let A and B be two sets of attributes; we say that

    "B is functionally dependent on A" (denoted $A\rightarrow B$)

    if each value of A determines exactly one value of B

- In a functional data dependency $(A\rightarrow B)$:

  - determinant: the set of all attributes on the left hand side
    (i.e. A)

  - dependent: the set of all attributes on the right hand side
    (i.e. B)

- By the definition of relational keys:

  - a candidate key is a minimal set of attributes, which
    functionally determine all attributes in a relation

  - among all candidate keys, we choose (any) one of them to serve
    as the primary key

# Functional dependencies

- **Full** functional dependency $A\rightarrow B$

  - B is functionally dependent on A

  - B is not functionally dependent on any proper subset of A

  - Example: staffNo$\rightarrow$ sName

- Partial functional dependency $A\rightarrow B$:

  - B is functionally dependent on A

  - B remains functionally dependent on at least one proper subset
    of A

  - Example: staffNo,sName $\rightarrow$ branchNo

- Transitive functional dependency:

  - Functional dependencies $A\rightarrow B$ and $B\rightarrow C$

  - Then the functional dependency $A\rightarrow C$ is called
    **transitive**

# Normalization process

- Normalization is a multi-stage process

  - The result of each stage is called a Normal form

  - at each stage: check whether specific criteria are satisfied. If
    not: re-organise the data

- We study the first 3 normal forms which are most important for
  practical applications

![image](/img/Year_1/CSys/Databases/Normal_Forms.png)

# First Normal Form (1NF)

- Repeating group:

  - an attribute (or group of attributes) that occurs with multiple
    values for a single occurence of the primary key

- A table is in the un-normalised form (UNF):

  - when it contains one or more repeating groups

  - This does not conform with the definition of a relation

- A table is in the First Normal Form (1NF) if it has:

  - no repeating groups (every cell has one value)

  - No identical rows

How to bring a table into 1NF

- One alternative would be:

  - Repeat the appropriate columns horizontally

  - Problem: a table must have a fixed number of columns

  - We need a fixed (large) upper limit on the number of repetitions

  - Many of these new columns would be empty $\Rightarrow$ waste of
    space

  - Complicated querying: we need to search many columns to find the
    right item

- Another alternative would be:

  - For every multi valued attribute: one long string containing the
    whole list of items

  - the same problems: long strings, difficult querying

- First method: one table solution

  - enter appropriate data into the empty columns (by repeating
    data)

    ![image](/img/Year_1/CSys/Databases/Normalization/1NF.png)

  - The resulting table is in 1NF, but still: we introduced a lot of
    redundancy (by repeating data)

- Second method: two tables solution

  - place the repeating data in a separate relation

  - in the new relation place a copy of the original primary key

  - this key now becomes a foreign key (to refer to the original
    relation)

  - iterate until no repeated groups remain

  ![image](/img/Year_1/CSys/Databases/Normalization/1NF1.png)

- The resulting tables are in 1NF with much less redundancy than
  before

# Second normal form (2NF)

- A table is in the Second Normal Form (2NF) if:

  - it is in 1NF and

  - there are no partial functional dependencies i.e. every non key
    attribute is dependent on the whole primary key

- Non-key attributes: all attributes that are not a part of the
  primary key

- 2NF applies to relations with composite keys

- When the primary key only has one attribute (single key) if the
  table is in 1NF $\Rightarrow$ it is also in 2NF

- How to bring a table into 2NF

  - Remove the partially dependent attributes

  - place them in a new relation, along with the copy of their
    determinant
