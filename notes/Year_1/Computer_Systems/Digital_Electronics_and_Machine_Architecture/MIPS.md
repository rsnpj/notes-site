---
title: MIPS
---

# Introduction

MIPS - Microprocessor without Interlocked Pipeline Stages

Underlying design principles:

-   Simplicity favours regularity

-   Make the common case fast

-   Smaller is faster

-   Good design demands good compromises

# 32 Bit RISC Processor

-   Around 80 instructions in the instruction set

-   32 general purpose registers \$r0 - \$r31

-   \$r0 is special and always contains the value 0

-   The MIPS processor has a super pipelined architecture - each
    instruction is broken down into a sequence of 'micro' instructions

# Design principles

MIPS is a reduced instruction set computer (RISC), with a small number
of simple instructions. Other architectures, such as intel's x86 are
complex instruction set computers (CISC)

-   Simplicity favours regularity

    -   Consistent instruction format: same number of operands (two
        sources and one destination) is easier to encode and handle in
        hardware

-   Make the common use case fast

    -   MIPS includes only simple, commonly used instructions

    -   Hardware to decode and execute instructions can be simple, small
        and fast

    -   More complex instructions (that are less common) performed using
        multiple simple instructions

-   Smaller is faster

    -   MIPS includes only a small number of registers

        ![image](/img/Year_1/CSys/DEMA/MIPS/register.webp)

-   Good design demands good compromises

    -   Multiple instruction formats allow flexibility, for example
        some use 3 operands, some 2

    -   Number of instruction formats kept small to adhere to design
        principles 1 and 3

    -   Other formats appear in assembler, but are transformed into
        machine code to fit with this format

# Instruction Types

## R Type

![image](/img/Year_1/CSys/DEMA/MIPS/R-Type.webp)

![image](/img/Year_1/CSys/DEMA/MIPS/R-Type1.webp)

![image](/img/Year_1/CSys/DEMA/MIPS/R-Type2.webp)

## I Type

![image](/img/Year_1/CSys/DEMA/MIPS/I-Type.webp)

![image](/img/Year_1/CSys/DEMA/MIPS/I-Type1.webp)

## J Type

![image](/img/Year_1/CSys/DEMA/MIPS/J-Type.webp)

# Addressing

![image](/img/Year_1/CSys/DEMA/MIPS/Addressing.webp)

There is the 3 at the end of the pc relative jump because it jumps 3
lines ahead in the program

![image](/img/Year_1/CSys/DEMA/MIPS/Addressing1.webp)

# Loading 32 Bit words

![image](/img/Year_1/CSys/DEMA/MIPS/32-Bit.webp)

This loads half into the left half of the bits, and the other half into
the right half

# OS Calls

![image](/img/Year_1/CSys/DEMA/MIPS/OS-Call.webp)

# Multiplication and Division

![image](/img/Year_1/CSys/DEMA/MIPS/Mult.webp)

# MIPS Function Calls

![image](/img/Year_1/CSys/DEMA/MIPS/Function.webp)

# Conventions

![image](/img/Year_1/CSys/DEMA/MIPS/Conventions.webp)

![image](/img/Year_1/CSys/DEMA/MIPS/Conventions1.webp)

![image](/img/Year_1/CSys/DEMA/MIPS/Conventions2.webp)

![image](/img/Year_1/CSys/DEMA/MIPS/Conventions3.webp)

# Example - Factorials

![image](/img/Year_1/CSys/DEMA/MIPS/Example.webp)
