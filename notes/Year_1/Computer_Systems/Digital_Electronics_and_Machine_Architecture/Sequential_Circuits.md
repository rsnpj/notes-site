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

![NOR latch](/img/Year_1/CSys/DEMA/Sequential/figure2.webp)

-   Both inputs "usually" set to 0
-   If input S (set) has a pulse of 1, the output becomes 1
-   The output remains 1 even when the pulse is over
-   If input R(reset) has a pulse of 1, the output becomes 0
-   The output remains 0 even when the pulse is over
-   If the output is already 1, a pulse on S will not change it. If it is already 0, a pulse on R will not change it
-   Latches can be used to store a single bit of memory

This circuit has two stable states for a given input - it is called bistable

![NOR latch truth-table](/img/Year_1/CSys/DEMA/Sequential/figure3.webp)

### NAND latch

![NAND latch](/img/Year_1/CSys/DEMA/Sequential/figure4.webp)

-   Latches can also be built from NAND gates
-   In this case the usual state for the inputs is 1, so the inputs are denoted with bars

# D Latch

In a latch a pulse on set or reset indicates what the new state should be, and when it should change

Designing circuits becomes easier if we can separate what and when

![D latch](/img/Year_1/CSys/DEMA/Sequential/figure5.webp)

D - data input, Defines what the new value should be

CLK - clock input. Defines when the new value should arise

-   The output will be updated to whatever the data is whenever the
    clock gives a pulse

# D Flip Flop

In the D-latch the output can change whenever the clock is high. Even better is we can make it change only at the moment the clock goes high

![D Flip Flop](/img/Year_1/CSys/DEMA/Sequential/figure6.webp)

D flip-flop copies D to Q on the rising edge of the clock, and remembers its sate at all other times

-   Whenever the clock is low, the data will transmit through the
    master, when the clock is high, the data will not transmit through
    the master

![D flip flop Register](/img/Year_1/CSys/DEMA/Sequential/figure7.webp)

# Enabled Flip Flop

Incorporates an additional input (enable) to control whether the data is loaded into the register or not

![Enabled Flip Flop](/img/Year_1/CSys/DEMA/Sequential/figure8.webp)

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

![Flip Flop Design](/img/Year_1/CSys/DEMA/Sequential/figure9.webp)

Direct design can make more space efficient flip flops. Here 20 transistors

# Example

How would a latch and flip flow behave in the following setting?

![Exapmle](/img/Year_1/CSys/DEMA/Sequential/figure10.webp)

# Problem Circuits

![Problem Circuits](/img/Year_1/CSys/DEMA/Sequential/figure11a.webp)

The gates have a delay of 1ns

How does this circuit behave?

Suppose X=0, then Y=1 and Z=0, so X=1

This is an **unstable** or **astable** circuit
![Problem Circuits Figure 1](/img/Year_1/CSys/DEMA/Sequential/figure11b.webp)

An improved D latch? Fewer gates, so fewer transistors!

![Problem Circuits figure 2](/img/Year_1/CSys/DEMA/Sequential/figure12.webp)

Leads to race conditions - behaviour depends on which of the two routes through the circuits carries signal the fastest

Logically identical circuits may exhibit different behaviour depending on technicalities of the gate construction or at certain temperatures

The problems are caused by outputs being fed back into inputs: the circuits contain loops or cyclic paths

To avoid this we insert registers into cyclic paths:

-   The registers contain the state of the circuit
-   They break the paths
-   They only update on a clock change
-   We say they are **synchronised** to the clock

If the clock is sufficiently slow, so that all inputs to the registers have settled before the next clock edge, then race conditions can't arise

# Synchronous Circuits

A synchronous sequential circuit consists of interconnected elements such that:

-   Every circuit is either a register or a combinational circuit
-   At least one circuit element is a register
-   All registers receive the same clock signal
-   Every cyclic path contains at least one register

A synchronous sequential circuit has:

-   A discrete set of states $\{S_0\ldots S_{k-1}\}$
-   A clock input, whose rising edge indicates when a state change occurs
-   A functional specification which details the next state and all outputs for each possible current state and set of inputs

![Synchronous Circuits](/img/Year_1/CSys/DEMA/Sequential/figure14.webp)

# Examples

Which are synchronous sequential circuits?

![Synchronous Circuits example](/img/Year_1/CSys/DEMA/Sequential/figure15.webp)

<details>
  <summary>Answer</summary>
  b,d,e,g
</details>

# Timing

The dynamic discipline restricts us to using circuits satisfying timing constraints that allow us to combine components

![Timing](/img/Year_1/CSys/DEMA/Sequential/figure16.webp)

-   ccq - contamination clock to q
-   pcq - propagation clock to q
-   t<sub>setup</sub> - time before rising edge during which inputs must be stable
-   t<sub>hold</sub> - time after rising edge during which inputs must be stable
-   t<sub>ccq</sub> - time until output starts to change
-   t<sub>pcq</sub> - time by which the output has stabilised

With these constraints we can think of signals as discrete in time as well as logic

# Setting Time

![Setting Time](/img/Year_1/CSys/DEMA/Sequential/figure17.webp)

-   The clock frequency determines how fast the computer operates
-   Register 2 will not get an answer until the clock ticks a second time

Time between ticks (T<sub>C</sub>) must be at least t<sub>pcq</sub>+t<sub>pd</sub>+t<sub>setup</sub>

Rearranging that we see that

$$
t_{pd}<T_c-(t_{pcq}+t_{setup})
$$

t<sub>pcq</sub>+t<sub>setup</sub> is called the sequencing overhead

The clock speed and sequencing overhead are normally fixed and the designer must work with them

Designers must get all elements of combinational logic to work within the bound on t<sub>pd</sub> in order for the circuit to be reliable

There is also a minimum delay requirement:

-   D2 must hold its value for at least t<sub>hold</sub> time after the rising edge
-   It could be as soon as t<sub>ccq</sub>+t<sub>cd</sub>
-   Designers have a min delay requirement t<sub>cd</sub>>t<sub>hold</sub>-t<sub>ccq</sub>
-   Often, in order to allow direct connection of flip flops t<sub>hold</sub>< t<sub>ccq</sub>

![Setting Time Figure](/img/Year_1/CSys/DEMA/Sequential/figure18.webp)

![Setting Time](/img/Year_1/CSys/DEMA/Sequential/figure19.webp)

# Example

![Timing example](/img/Year_1/CSys/DEMA/Sequential/figure20.webp)

_What is the max clock frequency?_

_Are there hold time violations?_

-   Critical path goes through all 3 gates

    -   $CL_{pd}=120ps$

-   $T_c\geqslant80+120+50=250ps$

-   $1/250ps$ = 4GHz

There would be a hold time violation

# Fixing the hold time violation

![Fixing hold time violation](/img/Year_1/CSys/DEMA/Sequential/figure21.webp)

_What is the max clock frequency now?_

_Are there hold time violations?_

# Metastable States

Suppose the input D to a flip flop is connected to a button

If D is unpressed or pressed when the clock rises, Q will be set to a stable state.

If F is in the process of being pressed when the clock rises, Q may be set to a metastable state.

The state will br driven to 1 or 0 eventually, but it may take time

![Metastable States](/img/Year_1/CSys/DEMA/Sequential/figure22.webp)

# Synchronizers

![Synchronizers](/img/Year_1/CSys/DEMA/Sequential/figure23.webp)

A pair of flip-flops can be used to synchronise the input with the clock.

The value of D2 may be intermediate if D is not synchronised

If the resolution time of F1 is small enough compared to the clock rate, Q will be synchronised

# Pipelining

![Pipelining](/img/Year_1/CSys/DEMA/Sequential/figure24.webp)

Insert an additional register into the circuit

![Inserting additional register](/img/Year_1/CSys/DEMA/Sequential/figure25.webp)

Insert another register in the circuit

![Inserting another register](/img/Year_1/CSys/DEMA/Sequential/figure26.webp)

-   Doing this gives higher latency, but greater throughput
