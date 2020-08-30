---
title: Lexical Analysis
---

The role of a lexical analyser

-   The first phase of a compiler

-   Reads input characters

-   Groups them into lexemes

-   Produces as output a sequence of tokens

-   The stream of tokens is sent to the parser

-   When it discovers the lexeme for a new identifier it enters this
    lexeme into the symbol table

## Lexical Analysis vs Parsing

Lexical analysis and syntax analysis are separate phases

-   Simplicity of design

    -   Simplify each task separately

-   Improved compiler efficiency

    -   Apply specialised techniques for each step

-   Compiler portability

    -   Different lexical analysers for specific devices

# Tokens vs Lexemes

Token

-   A notation representing the kind of lexical unit, e.g.

    -   A keyword

    -   An identifier

-   Consists of a pair of:

    -   A token name

    -   An (optional) attribute value

-   The tokens are given as input to the parser

Pattern of a token

-   A description of the form of its lexemes, e.g.

    -   For a keyword, the sequence of its characters

    -   For an identifier: a description that matches many strings

The lexeme of a token

-   A sequence of characters in the source program that matches the
    pattern of the token

-   The lexical analyser identifies a lexeme as an instance of a token

# Attributes of tokens

In cases when many lexemes match with a specific token

-   The compiler must know which lexeme was found in the source program

-   The lexical analyser provides to the parser

    -   The token name

    -   Additional information that specifies the particular lexeme
        represented by the token (attribute value)

Token names - influence parsing decisions

Attribute names - influence the transition of the token after the
parsing (in the semantic analysis)

Identifiers(token name is id):

-   Its lexeme (i.e. the sequence of its characters)

-   Its type (e.g. integer, float, boolean)

-   The line of the source program it has been found(in order to report
    error messages)

-   etc

All this information is stored in the symbol table

# Recognition of tokens

The source program can have several keywords:

-   e.g. if, then, else, for

-   They are reserved words, i.e. can not be used as identifiers

-   Their tokens have no attribute value

Patterns of tokens can be:

-   Expressed by regular expressions

-   Defined by regular definitions (i.e. no recursive definitions)

Syntax of a program can be expressed by a context free grammar

A simple context free grammar for branching statements:

![image](/img/Year_2/Networks_and_Systems/Compiler_Design/Lexical_Analysis/context-free-grammar.webp)

Terminal symbols of the grammar:

-   The token names, e.g. if, then, else, relop, id, number

-   number: a "constant"; relop: for a "comparison operator"

Regular definitions for these operators

![image](/img/Year_2/Networks_and_Systems/Compiler_Design/Lexical_Analysis/regular_definitions.webp)

Important notes:

-   A superscript + means one or more

-   A superscript \* means zero or more

-   A question mark at the end of brackets means optional

There is also an additional rule for stripping out whitespace

$$
ws\rightarrow (\text{ blank }|   \text{ tab }  |  \text{ newline } )
$$

All tokens with their attribute value and their corresponding lexemes

![image](/img/Year_2/Networks_and_Systems/Compiler_Design/Lexical_Analysis/attribute_value.webp)

# Transition diagrams

-   When we scan the source diagram to identify lexemes, we need two
    pointers

    -   `lexemeBegin`: marks the beginning of the current lexeme

    -   `forward`: scans ahead until a pattern match is found

-   Patterns for tokens can be

    -   Expressed by regular expressions, and thus

    -   Recognised by a DFA

-   We model the recognition of a pattern by a transition diagram (a
    special type of a DFA)

    -   States represent all the current information between
        `lexemeBegin` and `forward`

    -   Actions are attached to the final states (to be performed after
        the lexeme has been scanned)

-   Types of actions attached to the final states:

    -   Return a specific token name and attribute value

    -   Retract the forward pointer one position (indicated by an \*)

    -   Just proceed to the next character (for empty spaces),etc

    -   This is an example of a transition diagram for the token relop

![image](/img/Year_2/Networks_and_Systems/Compiler_Design/Lexical_Analysis/transition_diagram.webp)

# Keywords vs Identifiers

-   Keywords like for, if then else are reserved words and so can't be
    declared as identifiers even though they look like identifiers

-   Usually we look for identifier lexemes with a transition diagram

    ![image](/img/Year_2/Networks_and_Systems/Compiler_Design/Lexical_Analysis/lexemes.webp)

Two ways to handle reserved words:

1.  Install the reserved words initially in the symbol table, then:

    -   The corresponding entry in the symbol table stored information
        that this is a reserved word

    -   When we scan a lexeme, a call to installID

        -   Checks in the symbol table whether this lexeme is a reserved
            word

        -   It adds it in the symbol table (as an id) only if its not
            already there

2.  Create separate transition diagrams for each reserved word, example
    for then

    ![image](/img/Year_2/Networks_and_Systems/Compiler_Design/Lexical_Analysis/reserved_word.webp)

    -   We must check that the scanned word ends after reading then,
        otherwise it might be an identifier containing the word then

    -   For each new lexeme:

        -   First run the transition diagrams for reserved words

        -   If no accepts, the token can be recognised as id

# Pattern Matching

There exist tools to automatically generate a lexical analyser just by
specifying the regular expressions to describe patterns to tokens

An example of this is Lex, it performs as follows:

-   Lists some patterns (regular expressions) with some order

-   Scans the input

    -   Until it finds the longest prefix of the input that matches one
        of the patterns

    -   If it matches many patterns, it chooses the first one in the
        order

-   Returns the corresponding token to the parser

Suppose Lex has three patterns

![image](/img/Year_2/Networks_and_Systems/Compiler_Design/Lexical_Analysis/recognise.webp)

It composes a single equivalent NFA that recognises all of them

![image](/img/Year_2/Networks_and_Systems/Compiler_Design/Lexical_Analysis/combined.webp)

As it moves ahead:

-   It calculates the set of states it is at each point

-   It simulates the NFA until there are no next states

-   After that:

    -   There can not be any longer prefix

    -   It looks backward, until it finds a set of states that includes
        a final state

    -   It picks the accepting state associated with the earliest
        pattern

    -   It returns this pattern
