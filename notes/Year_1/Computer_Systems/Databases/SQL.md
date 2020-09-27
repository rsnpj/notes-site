---
title: SQL
lecturer: George
---

# Database languages

-   A good database language should allow users to:

    -   Create the database, define relation structures

    -   Perform basic data management

    -   Perform simple and complex queries

-   All these tasks with minimal user effort!

    -   Syntax/command structure should be easy to learn

    -   Users should concentrate on which queries to make (not how they
        are implemented)

-   The language should be portable:

    -   Conform to a recognized standard

    -   We can use the same language with many DBMS's

-   SQL: (structured query language)

    -   The most common database language

    -   simple syntax/ easy to learn and use

    -   It has two components: DDL & DML

-   Data Definition Language (DDL)

    -   Allows users to define the database

    -   Define the schema for each relation (attributes/types)

    -   Define the domain of each attribute

    -   Specify integrity constraints

-   Data Manipulation Language (DML)

    -   Allows users to insert/update/delete/retrieve data from the DB

    -   Query Language: the part of the DML that involves data retrieval

# Two types of query languages

-   SQL: formal definition of a new relation from existing relations in
    the DB

-   Relational algebra: specifies how to build a new relation from
    existing relations in the DB

-   Their place in the big picture

![image](/img/Year_1/CSys/Databases/SQL/overview.webp)

# Writing SQL statements

-   SQL statements consist of:

    -   Reserved words: a fixed part of SQL

    -   User defined words: made up by the user

-   SQL Statements

    -   Case insensitive (both upper/lower case)

    -   Except for literal character data (i.e. data entries)

-   SQL is free-format

    -   Parts of statements do not have to be written in specific
        locations on the screen

-   However:

    -   More readable with systematic indentation and lineation

    -   Each clause should begin on a new line

    -   Start of a clause should line up with the start of other clauses

    -   If a clause has several parts, they should each appear on
        separate lines and be indented under the start of clause

# Data Manipulation Language (DML)

-   We mainly look at DML aspects of SQL

-   To create a database in MySQL

    -   either use DDL command

    -   or just use the interactive tools of phpMyAdmin

-   Main statements of interest in DML:

    -   `SELECT` - to query data in the database

    -   `INSERT` - To insert new data into an existing table

    -   `UPDATE` - To update data in an existing table

    -   `DELETE` - To delete data from an existing table

# Writing SQL commands

-   Literals (character data/ numericals) are constants used in SQL
    statements

-   All non numeric literals must be enclosed in single quotes

-   All numeric literals must not be enclosed in quotes

-   Notation:

    -   UPPER-case letters represent **reserved** words

    -   lower-case letters represent **user-defined** words

    -   a vertical bar (\|) indicates a choice among **alternatives**

    -   curly braces $\{a\}$ indicate a required element

    -   square braces \[a\] indicate an optional element

    -   ellipsis (\...) indicates optional repetition (0 or more)

# Examples of syntax

All examples are based on the following tables:

![image](/img/Year_1/CSys/Databases/SQL/example.webp)

## Simple queries

The sequence of processing in a `SELECT-FROM-WHERE` statement is:

-   `SELECT`: specifies which columns are to appear in the output

-   `FROM`: specifies the table or tables to be used

-   `WHERE`: filters the rows subject to some condition

    -   `GROUP BY`: forms groups of rows with the same column value

    -   `HAVING`: filters the groups subject to some condition

    -   `ORDER BY:` specifies the order of the output

SELECT and FROM are mandatory

## Syntax

```sql
SELECT [ALL|DISTINCT] column1[,column2,column3,...]
FROM table1[,table2,table3,...]
[WHERE 'conditions']
[GROUP BY 'column-list']
[HAVING 'conditions']
[ORDER BY 'column-list' [ASC|DESC]]
```

Example:

```sql
SELECT staffNo, fName, IName, position, sex, DOB, salary, branchNo FROM staff;
```

-   The above statement will select the (whole) specified columns from
    the staff table

Note that if you want to place more queries at once, remember to put a
semicolon at the end of each SQL statement. The ; indicates that your
SQL statement has finished and the next one can start

# SELECT

## Example 1

-   _List full details of all staff (all columns, all rows)_

    ```sql
    SELECT staffNo, fName, IName, position, sex, DOB, salary, branchNo FROM Staff
    ```

-   Alternative

    ```sql
    SELECT * FROM Staff
    ```

## Example 2

_Produce a list of salaries for all staff, showing only: staff number,
first name, last name and salary_

```sql
SELECT staffNo, fName, IName, salary FROM Staff
```

This command creates a new table from the table Staff containing the
designated columns in the specified order.

The rows are NOT ordered

## Example 3

\*Produce a list of monthly salaries for all staff, showing only staff
number, first name, last name and **monthly salary\***

```sql
SELECT staffNo, fName, IName, salary/12 FROM Staff
```

We can leave the column name blank or use an "AS" clause

```sql
SELECT staffNo, fName, IName, salary/12 AS 'Month Salary' FROM Staff
```

# SELECT & FROM clause review

```sql
SELECT first_column_name, second_column_name
FROM table_name
WHERE first_column_name>12000
```

-   Next to the SELECT keyword:

    -   the column name(s) specify which will be returned

    -   as many columns as we like

    -   or \* to return all columns

-   Next to the FROM keyword:

    -   The table name(s) specifies the table that will be required to
        retrieve the results

-   Next to the (optional) WHERE keyword:

    -   the condition(s) specifies which rows will be returned
        (filtering the rows)

# DISTINCT

-   In normalized relational tables there are no repeated rows

-   But the use of SELECT may have duplicate rows

    ```sql
    SELECT propertyNo FROM Viewing
    ```

    ![image](/img/Year_1/CSys/Databases/SQL/duplicate.webp)

-   Use DISTINCT to eliminate duplicates

    ```sql
    SELECT DISTINCT propertyNo FROM Viewing
    ```

## SELECT Statement, Example 4 (DISTINCT)

List all branch numbers for all branches

```sql
SELECT branchNo FROM Staff
```

With use of DISTINCT:

```sql
SELECT DISTINCT branchNo FROM Staff
```

# SELECT statement (WHERE)

-   We often need to restrict the rows that are retrieved

-   The WHERE clause is followed by a search conditions (predicates)

    -   Comparisons: compare values of two expressions

    -   Range

        -   BETWEEN/NOT BETWEEN

        -   tests whether the values falls within a specified range

    -   Set membership

        -   IN/NOT IN

    -   Pattern matching

        -   LIKE/NOT LIKE

# Range conditions

```sql
SELECT staffNo, salary
FROM staff
WHERE salary BETWEEN 20000 AND 30000
```

Is there same as

```sql
SELECT staffNo, salary
FROM staff
WHERE salary >= 20000 AND Salary <= 30000
```

Note that this is inclusive

# Set membership conditions

_List all managers and supervisors_

```sql
SELECT staffNo, fName, IName, position
FROM Staff
WHERE position IN ('Manager','Supervisor')
```

This is just to make syntax nicer, it is equivalent to:

```sql
SELECT staffNo, fName, IName, position
FROM Staff
WHERE position='Manager' OR position='Supervisor'
```

# Pattern matching (LIKE)

-   Sometimes we want to search within a string

-   SQL has two special pattern matching symbols

    -   \% represents an arbitrary sequence of zero or more characters
        (called wildcard)

    -   \_ represents an arbitrary single character

-   LIKE 'H%' means:

    -   first character must be H, but the rest can be anything

-   LIKE 'H\_\_\_' means:

    -   exactly 4 characters, first character must he H

-   LIKE '%e' means:

    -   any sequence of characters, ending at 'e'

-   NOT LIKE 'H%' means:

    -   The first character can not be 'H'

Find all owners with the string 'Glasgow' in their address

```sql
SELECT ownerNo, fName, IName, address, telNo
FROM PrivateOwner
WHERE address LIKE '\%Glasgow\%'
```

# Combining conditions and Boolean Operations

-   The logical AND operator:

    -   both sides of the condition must be true

-   The logical OR operator:

    -   at least one of the two sides must be true

-   They can be used in two (or more) conditions in the WHERE clause

```sql
SELECT fName, IName, position, salary
FROM staff
WHERE position = 'Manager' OR position='Supervisor
```

```sql
SELECT fName, IName, position, salary
FROM staff
WHERE salary>=24000 AND title='Manager'
```

These two operators can also be used combined

# ORDER BY clause

-   In the resulting table of a SELECT query the rows are NOT ordered

-   ORDER BY can be used to sort the rows

    -   according to the values of a particular set of columns

    -   can be ascending/descending

    -   ordering appears regardless of whether that column appears in
        the result

General format:

```sql
SELECT column1
FROM 'list-of-tables'
ORDER BY 'column-list' [ASC|DESC]
```

We can also sort according to multiple columns:

-   first sort according to the first column

-   among rows with the same value in the first column, sort according
    to the second column etc

# Aggregate functions

Aggregate functions:

-   Operate on a single column

-   return a single (numeric) value

![image](/img/Year_1/CSys/Databases/SQL/Aggregate.webp)

## Examples

_How many properties cost more than £350 to rent_

```sql
SELECT COUNT (DISTINCT propertyNo) AS myCount
FROM PropertyForRent
WHERE rent>350
```

# GROUP BY clause

-   Aggregate functions are similar to the totals at the bottom of a
    report

-   Often we need also "subtotals" in reports at the bottom of some
    part of the report

-   GROUP BY can be used to:

    -   partition the data into groups

    -   produce a single summary row (e.g. "subtotal") for each group

_Find the number of staff working in each branch and sum of their
salaries_

```sql
SELECT branchNo,
    COUNT(staffNo) AS myCount
    SUM(Salary) AS mySum
FROM staff
GROUP BY branchNo
ORDER BY branchNo
```

# SQL Syntax

Basis syntax of SQL queries:

```sql
SELECT [ALL|DISTINCT] column1[,column2,column3,...]
FROM table1[,table2,table3,...]
[WHERE "conditions"];
```

-   The "conditions" in the `WHERE` clause can be:

    -   A comparison predicate (e.g. `salary >10000`)

    -   A range predicate (e.g. `salary BETWEEN 10000 AND 30000`)

    -   A set membership predicate (e.g. `position IN('Manager','Worker')`)

    -   A pattern matching predicate (e.g. `address LIKE '%Glaskow%'`)

    -   Combinations of the above with `AND` and `OR`

-   But it can also be the result of another (independent) query (called
    subquery)

-   Three types of subquery:

    1.  A single-value (scalar) subquery (single column & single row )

        ```sql
        SELECT COUNT(*) AS myCount
        FROM PropertyForRent
        WHERE rent>350
        ```

    2.  A multiple value subquery (one column & multiple rows)

        ```sql
        SELECT staffNo
        FROM Staff
        WHERE position='Manager'
        ```

    3.  A table subquery (multiple columns/rows)

        ```sql
        SELECT clientNo, viewDate
        FROM Viewing
        WHERE propertyNo='PG4' AND comment IS NULL
        ```

# Subquery

_List staff who work in branch at '163 Main St'_

```sql
SELECT staffNo, fName, IName, position
FROM Staff
WHERE branchNo=
    (SELECT branchNo
     FROM Branch
     WHERE street='163 Main St')
```

-   The inner `SELECT`:

    -   Finds the branch number of the branch in 163 main street

    -   Only one such branch (with branchNo='B003')$\Rightarrow$ scalar
        subquery

-   The outer `SELECT` is equivalent with:

    ```sql
    SELECT staffNO, fName, IName, position
    FROM Staff
    WHERE branchNo='B003'
    ```

_List all staff whose salary is greater than the average salary, and show by how much_

-   If we know that the average salary is 17000, then:

    ```sql
    SELECT staffNo, fName, IName, position,
        salary-17000 AS SalDiff
    FROM Staff
    WHERE salary>17000
    ```

-   We cannot write `WHERE salary>AVG(salary)`

-   Instead, we use a subquery

    ```sql
    SELECT staffNo, fName, IName, position
        salary-(SELECT AVG(salary) FROM Staff) AS SalDiff
    FROM Staff
    WHERE salary>(SELECT AVG(salary) FROM Staff)
    ```

# Nested Queries

Example - (scalar subquery and multi-value subquery) - use of the
operator `IN`:

_List the properties that are handled by staff who work in the branch
with the address '163 Main St'_

```sql
SELECT propertyNo, street, city, postcode, type, rooms, rent
FROM PropertyForRent
WHERE staffNo IN (SELECT staffNo
        FROM Staff
        WHERE branchNo=
            (SELECT branchNo
             FROM branch
             WHERE street='163 Main St'))
```

-   From the innermost query outwards:

    -   The first query selects the branch number of the branch at 163
        Main St

    -   The second selects the staff working at this branch

    -   Many staff $\Rightarrow$ in the outermost query we use `IN` ("="
        is not possible)

-   In multi value subqueries:

    -   Use of the operator `ANY` (or `SOME`) before the subquery means the
        WHERE condition is true if it is satisfied by at least one value
        returned by the subquery

_Find all staff whose salary is larger than the salary of at least one
member of staff at Branch B003_

```sql
SELECT staffNo, fName, IName, position, salary
FROM Staff
WHERE salary> SOME(SELECT salary
           FROM Staff
           WHERE branchNo='B003')
```

An alternative would be:

```sql
WHERE salary>(SELECT MIN(salary)
          FROM Staff
          WHERE branchNo='B003')
```

# Multi-Table Queries

-   All examples so far have a major limitation: the whole information
    belongs to a single table

-   We can extend queries to multiple tables either with subqueries that
    query different tables:

    _List all Durham staff with salary greater than the average
    London-salary_

    ```sql
    SELECT staffNo, fName, IName, position
    FROM DurhamStaff
    WHERE salary>(SELECT AVG(salary) FROM LondonStaff)
    ```

-   Or by using a join operation:

    -   Link data from two (or more) tables together (in a single query)

    -   Include more than one table in the FROM clause

    -   Separate these tables with a comma

# Joins

-   In joins, usually

    -   Include a `WHERE` clause to specify the joined columns

    -   We keep in the search only those rows which have the same values
        in the specified columns

    -   For clarity, in the `SELECT` clause, we can putt the table name
        before the column name (e.g. Staff.staffNo)

    -   Also possible to use an alias for a table in the `FROM` clause
        (useful for distinguishing column names in case of ambiguity)

    -   Alias is separated from table name with a space

-   Usually the syntax is

    ```sql
    SELECT "list-of-columns"
    WHERE table1,table2,...
    WHERE "search conditions"
    ```

_List the details of all clients who have viewed a property, along with
any comment supplied_

```sql
SELECT Client.ClientNo, Client.fname, Client.IName, Viewing.propertyNo, Viewing.comment
FROM Client, Viewing
WHERE Client.clientNo=Vieweing.clientNo
```

Using an alias:

```sql
SELECT c.clientNo, c.fName, c.IName, v.propertyNo, v.comment
FROM Client c, Vieweing v
WHERE c.clientNo=v.clientNo
```

This type of join is also known as a natural inner join:

-   Keeps the rows that coincide in the specified columns (in the `WHERE`
    clause)

-   Ignores all rows that do not meet the join conditions

-   The most common type of Join

## Three table Join

_For each branch, list staff who manage properties, including the city
in which branch is located and the properties they manage_

```sql
SELECT b.branchNo, b.city, s.staffNo, s.fName, s.IName, p.propertyNo
FROM Branch b, Staff s, PropertyForRent p
WHERE b.branchNo=s.branchNo AND s.staffNo=p.staffNo
ORDER BY b.branchNo, s.staffNo, p.propertyNo
```

An alternative formulation of this is

```sql
FROM (Branch b JOIN Staff s USING branchNo)
    JOIN PropertyForRent p USING staffNo
```

## Inner Joins

-   Instead of demanding the same column values in the matching columns
    we can demand different relations between the column values\
    _List all Durham-Staff who have salary 10% more than some staff
    member in London_

    ```sql
    SELECT dur.staffNo,dur.fName,dur.IName, dur.position, dur.salary
    FROM DurhamSaff dur, LondonStaff lon
    WHERE dur.salary>1.1*lon.salary
    ```

-   This type of join is an inner join:

    -   We add the term "natural", if we demand equality for the
        columns with the same name in the two tables (e.g.
        dur.salary=lon.salary)

    -   Inner joins still ignore all rows that do not meet the join
        conditions

## Outer Joins

-   Inner join: If one row of a table is unmatched, the row is omitted
    from the output table

-   Outer join: It retains (some of) the rows that do not satisfy the
    join conditions

-   Left outer join: It retains the rows of the left table that are
    unmatched with rows from the right table

-   Right outer join: Retain the unmatched rows of the right table

-   Full outer join: Retain the unmatched rows of both tables

### Example

![image](/img/Year_1/CSys/Databases/SQL/example1.webp)

**Left outer Join**

_List the branch offices which have any properties that are in the same
city_

```sql
SELECT b.*,p.*
FROM Branch b LEFT JOIN PropertyForRent p
    ON b.bCity=p.pCity
```

| branchNo | bCity       | propertyNo | pCity    |
| -------- | ----------- | ---------- | -------- |
| B003     | Glasgow     | PG4        | Glasgow  |
| **B004** | **Bristol** | **NULL**   | **NULL** |
| B002     | London      | PL94       | London   |

-   Includes the Bristol row of the left table unmatched with rows from
    the right table

-   No rows corresponding to the properties in Aberdeen

**Right outer join**

_List all properties and any branch offices that are in the same city_

```sql
SELECT b.*,p.*
FROM Branch b RIGHT JOIN PropertyForRent p
    ON b.bCity=p.pCity
```

| branchNo | bCity    | propertyNo | pCity        |
| -------- | -------- | ---------- | ------------ |
| **NULL** | **NULL** | **PA14**   | **Aberdeen** |
| B003     | Glasgow  | PG4        | Glasgow      |
| B002     | London   | PL94       | London       |

-   Includes the Aberdeen-row of the right table unmatched with rows
    from the left table

-   No rows corresponding to branches in Bristol

**Full outer join**
_List the branch offices and properties that are in
the same city, along with any unmatched branches or properties_

```sql
SELECT b.*,p.*
FROM Branch b FULL JOIN PropertyForRent p
    ON b.bCity=p.pCity
```

| branchNo | bCity       | propertyNo | pCity        |
| -------- | ----------- | ---------- | ------------ |
| **NULL** | **NULL**    | **PA14**   | **Aberdeen** |
| B003     | Glasgow     | PG4        | Glasgow      |
| **B004** | **Bristol** | **NULL**   | **NULL**     |
| B002     | London      | PL94       | London       |

# Database Updates

Three SQL statements for modifying the contents of the (existing) tables
in the database

-   `INSERT`: adds new rows of data into the table

    ```sql
    INSERT INTO TableName [columnList]
    VALUES (data ValueList)
    ```

-   `UPDATE`: Modifies existing data in a table

    ```sql
    UPDATE TableName
    SET columnName1=dataValue1[,columnName2=dataValue2]
    [WHERE searchCondition]
    ```

-   `DELETE`: Removes rows of data from a table

    ```sql
    DELETE FROM TableName
    [WHERE searchCondition]
    ```

# Data Definition Language Overview

Basic commands

-   `CREATE`: create a new table

    -   Assign a name to the table and define the names and domains of
        each of the columns in the table

-   `ALTER`: Amend the relation schema (i.e. table structure)

    -   If it is necessary to change the structure of a table because of
        design error, or just because the design has changed

-   Specify integrity and referential constraints

    -   `PRIMARY KEY, FOREIGN KEY`

-   `DROP`: Delete a table.

-   `CREATE VIEW`: define a virtual table

    -   Virtual relation (table) that appears to the user

    -   It is derived from a query on a \"real table\"

# Main domain types in SQL

-   **CHAR(n)**: character string of fixed length n

-   **VARCHAR(n)**:character string of variable length at most n

-   **BIT(n)**: bit string of fixed length n

-   **INTEGER**: large positive/negative integer values

-   **SMALLINT**: small positive/negative integer values (up to 32767)

-   **NUMERIC(p,d)**: a (positive/negative) decimal number with at most:

-   Precision p (total number of all digits)

-   Scale d: total number of decimal digits

# Other domain types in SQL

We can define also our custom domain types specifically for out needs

Change name of a known type

```sql
CREATE DOMAIN Postcode AS VARCHAR(8);
```

With additional constraints

```sql
CREATE DOMAIN SexType AS CHAR(1)
    CHECK(VALUE IN ('M','F'));
```

More complex (nested) definitions

```sql
CREATE DOMAIN StaffNumber AS VARCHAR(5)
    CHECK(VALUE IN(SELECT staffNo
            FROM Staff))
```

# Constraints

-   Referential actions when defining a table (i.e. for `FOREIGN KEY`)

    -   `ON UPDATE` (what to do when the corresponding primary key is
        updated)

    -   `ON DELETE` (what to do when the corresponding primary key is
        deleted)

-   Available options for these actions

    -   `CASCADE` (when update/delete: update the foreign key/delete the
        tuple)

    -   `SET NULL` (when update/delete: set the foreign key to `NULL`)

    -   `SET DEFAULT` (when update/delete: set the foreign key to the
        default value)

    -   `NO ACTION` (when update/delete: do nothing - this is dangerous)

# Create Table Construct

-   An SQL relation is defined using the create table command:

    ```sql
    CREATE TABLE R(
        Attribute1 Domain1 [NOT NULL|UNIQUE],
        Attribute2 Domain2 [NOT NULL|UNIQUE],
        ...,
        Integrity & Referential constraints)
    ```

-   A good strategy:

    -   Before the `CREATE TABLE R(...)`it is always safe to write
        `DROP TABLE R`;

-   Two options for `DROP TABLE R`

    -   `RESTRICT` (the `DROP` is rejected if there are other objects
        that depend for their existence upon the continued existence
        of R)

    -   `CASCADE` (default option: the `DROP` is proceeds anyway and SQL
        drops all dependant objects, and upon all dependent objects)

# Defining Views

-   View: a relation (table) that:

    -   Depends on other relations and

    -   Is not physically stored as a table

-   Main use of views

    -   For presenting different information to different users

    -   Simplify complex queries

```sql
CREATE VIEW Developers AS
    SELECT name, project
    FROM Employee
    WHERE department='Development'
```
