---
title: Sequential Circuits
lecturer: Magnus
---

# Circuits

Sequential Circuits:

-   Output depends on history as well as current input
-   i.e. the circuit has memory
-   Can be modelled as finite-state machines
-   In generate hard to analyse
-   Fundamental components: latches and flip flops, each store 1 bit

We consider synchronous sequential circuits made from combinatorial components interleaved with banks of flip flops containing the state of the circuits

# SR Latch

## NOR latch

![image](/img/Year_1/CSys/DEMA/Sequential/figure2.webp)

-   Both inputs "usually" set to 0
-   If input S (set) has a pulse of 1, the output becomes 1
-   The output remains 1 even when the pulse is over
-   If input R(reset) has a pulse of 1, the output becomes 0
-   The output remains 0 even when the pulse is over
-   If the output is already 1, a pulse on S will not change it. If it is already 0, a pulse on R will not change it
-   Latches can be used to store a single bit of memory

This circuit has two stable states for a given input - it is called bistable

![image](/img/Year_1/CSys/DEMA/Sequential/figure3.webp)

### NAND latch

![image](/img/Year_1/CSys/DEMA/Sequential/figure4.webp)

-   Latches can also be built from NAND gates
-   In this case the usual state for the inputs is 1, so the inputs are denoted with bars

# D Latch

In a latch a pulse on set or reset indicates what the new state should be, and when it should change

Designing circuits becomes easier if we can separate what and when

![image](/img/Year_1/CSys/DEMA/Sequential/figure5.webp)

D - data input, Defines wat the new value should be

CLK - clock input. Defines when the new value should arise

-   The output will be updated to whatever the data is whenever the
    clock gives a pulse

# D Flip Flop

In the D-latch the output can change whenever the clock is high. Even better is we can make it change only at the moment the clock goes high

![image](/img/Year_1/CSys/DEMA/Sequential/figure6.webp)

D flip-flop copies D to Q on the rising edge of the clock, and remembers its sate at all other times

-   Whenever the clock is low, the data will transmit through the
    master, when the clock is high, the data will not transmit through
    the master

![image](/img/Year_1/CSys/DEMA/Sequential/figure7.webp)

# Enabled Flip Flop

Incorporates an additional input (enable) to control whether the data is loaded into the register or not

![image](/img/Year_1/CSys/DEMA/Sequential/figure8.webp)

EN can control the input with a multiplexor, or can control the clock. This is called a gated clock.

Gated clocks can cause timing errors and glitches on the clock

-   Therefore the 1st diagram is the best one to use as by using the end
    gate, timing errors can be included

# Flip Flop Design

How many transistors are needed to build the D flip-flop

-   A NAND or NOR gate uses four transistors
-   A NOT gate uses two transistors
-   An AND gate is built from a NAND and a NOT, so it uses six transistors
-   The SR latch uses two NOR gates, or eight transistors
-   The D latch uses an SR latch, two AND gates, and a NOT gate, or 22 transistors
-   The D flip flop uses two D latches and a NOT gate, or 46 transistors

![image](/img/Year_1/CSys/DEMA/Sequential/figure9.webp)

Direct design can make more space efficient flip flops. Here 20 transistors

# Example

![image](/img/Year_1/CSys/DEMA/Sequential/figure10.webp)

# Problem Circuits

![image](/img/Year_1/CSys/DEMA/Sequential/figure11.webp)

![image](/img/Year_1/CSys/DEMA/Sequential/figure12.webp)

![image](/img/Year_1/CSys/DEMA/Sequential/figure13.webp)

# Synchronous Circuits

![image](/img/Year_1/CSys/DEMA/Sequential/figure14.webp)

# Examples

![image](/img/Year_1/CSys/DEMA/Sequential/figure15.webp)

b,d,e,g,

# Timing

![image](/img/Year_1/CSys/DEMA/Sequential/figure16.webp)

-   ccq - contamination clock to q

-   pcq - propagation clock to q

# Setting Time

![image](/img/Year_1/CSys/DEMA/Sequential/figure17.webp)

![image](/img/Year_1/CSys/DEMA/Sequential/figure18.webp)

![image](/img/Year_1/CSys/DEMA/Sequential/figure19.webp)

# Example

![image](/img/Year_1/CSys/DEMA/Sequential/figure20.webp)

-   Critical path goes through all 3 gates

    -   $CL_{pd}=120ps$

-   $T_c\geqslant80+120+50=250ps$

-   $1/250ps$ = 4GHz

There would be a hold time violation

# Fixing the hold time violation

![image](/img/Year_1/CSys/DEMA/Sequential/figure21.webp)

# Metastable States

![image](/img/Year_1/CSys/DEMA/Sequential/figure22.webp)

# Synchronizers

![image](/img/Year_1/CSys/DEMA/Sequential/figure23.webp)

# Pipelining

![image](/img/Year_1/CSys/DEMA/Sequential/figure24.webp)

![image](/img/Year_1/CSys/DEMA/Sequential/figure25.webp)

![image](/img/Year_1/CSys/DEMA/Sequential/figure26.webp)

-   Doing this gives higher latency, but greater throughput
