---
title: A simplistic machine model
lecturer: Tobias
---

<Definition name="von Neumann Architecture">

An architecture consisting of:

-   Control Unit
-   Arithmetic logic unit (ALU)
-   Main Memory
-   Bus

</Definition>

The control unit and ALU are often integrated into one piece.

The ALU has registers, these are fast local memory which can hold one piece of data.

# Blueprint of a computer's execution workflow

<Definition name="Machine code">

Simple instructions which a control unit can directly use to instruct the von Neumann machine parts

</Definition>

<Definition name="Cross-compilation">

Instructing a compiler to produce machine instructions for another machine rather than the one you are on

</Definition>

Calculation process:

-   Control unit asks the bus to bring the needed values into the ALU registers
-   Control unit tells the ALU to add, compare or multiply the values
-   The result is deposited by the ALU in one register
-   The controller instructs the bus to bring the result back from the registers into the memory

<Definition name="Single instruction single data (SISD)">

[^1]Runs one single instruction at a time. Furthermore runs this instruction on a single piece of data or a pair of entries.

[^1]: Flynn, M.J., 1966. Very high-speed computing systems. Proceedings of the IEEE, 54(12), pp.1901-1909.

</Definition>

# Flaws

The ALU has to wait for the memory as the registers are much faster than main memory, this is called the von Neumann bottleneck
