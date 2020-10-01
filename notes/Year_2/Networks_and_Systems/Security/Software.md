---
title: Software Security
lecturer: Chris
---

# Types of memory

<Definition name="DRAM">
{`
1 Transistor per bit
* Slow
* Cheap
`}
</Definition>

<Definition name="SRAM">
{`
4+ Transistors per bit
* Fast
* Expensive
* Takes up space on die
`}
</Definition>

# Computer Architecture

![Computer Architecture](/img/Year_2/Networks_and_Systems/Security/Software/Computer_Architecture.webp)

# GPU

**GDDR5** is "slow" and cheap

# The Stack

![The Stack](/img/Year_2/Networks_and_Systems/Security/Software/stack.webp)

-   When a program thread starts, the operating system reserves some
    amount of space for the stack - stack memory does not grow during
    runtime

The stack being full is cased by

-   Badly written recursive functions

-   Too much local memory allocated (especially with multi-threading)

# The Heap

![The Heap](/img/Year_2/Networks_and_Systems/Security/Software/heap.webp)

-   Memory is not guaranteed to be initialised to zero

-   Can malloc memory to same size of some sensitive data

-   Stack is in registers, heap is in main memory

# Understanding the platform

-   The key to writing good, secure software is to understand the
    platform

-   Hardware is the base platform (for software)

-   Lots of things get in the way
