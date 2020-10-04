---
title: Timing and Advanced Adders
lecturer: Magnus
---

# Timing

-   A buffer doesn't change if an output is high or low, it just makes
    it either full high or full low

In any physical gate or circuit there is a delay between the input
changing and the output adjusting appropriately.

![Timing](/img/Year_1/CSys/DEMA/Timing/timing.webp)

-   Note that the lines are not vertical, they rise between low and high

**Propagation delay: $t_{pd}$**: The max delay before the output is
stable

**Contamination delay $t_{cd}$**: The min delay before the output
changes

![Timing delay](/img/Year_1/CSys/DEMA/Timing/delay.webp)

Delay is caused by:

-   Capacitance and resistance in a circuit

-   Speed of light limitation

Reasons why $t_{pd}$ and $t_{cd}$ may be different:

-   Different rising and falling delays

-   A circuit may have multiple inputs and outputs, some of which are
    faster than others

-   Circuits slow down when hot and speed up when cold

# Critical paths

![Critical paths](/img/Year_1/CSys/DEMA/Timing/critical_path.webp)

In a circuit the critical path is the path determining the propagation
delay of the circuit - i.e. the longest path in the circuit

$$
t_{pd}=2t_{pd\_AND}+t_{pd\_OR}
$$

The short path is the path
determining the contamination delay of the circuit - i.e. the shortest
path in the circuit

$$
t_{cd}=t_{cd\_AND}
$$

# Glitches

Sometimes the output can temporarily move to an incorrect value before
stabilising.

This is called a glitch.

![Glitches](/img/Year_1/CSys/DEMA/Timing/glitch.webp)

With a=0,b=1 and c=1. If b falls to 0, the output will change from 1 to
0 to 1.

# Mux delays

![Mux delays](/img/Year_1/CSys/DEMA/Timing/mux_delay.webp)

-   Tristate D - Data

-   Tristate S - Selector

-   The different speeds for different changes need to be taken into
    account for whatever the use is

# Adder

The full adder circuit we have looked at takes 3 gate delays for the carry out to be computed

![Adder](/img/Year_1/CSys/DEMA/Timing/adder.webp)

If we can precompute the first level, there are only 2 gate delays once the carry in arrives

# Ripple adder

The computation of the carry bit ripples through the chained adders

![Ripple adder](/img/Year_1/CSys/DEMA/Timing/ripple_adder.webp)

A k bit ripple adder will take 3+2(k-1)=2k+1 gate delays to compute C<sub>out</sub>. So a 32 bit adder takes 65 gate delays

-   3 time steps for 1st carry, then 2 time steps for each after that as
    the first level is pre computed

# Faster Adders - idea

![Faster Adders idea](/img/Year_1/CSys/DEMA/Timing/faster_adders.webp)

**Key idea**: for later bits pre-compute the outcome with both carry in and no carry in, then quickly select the right answer

Faster addition at the expense of more circuitry

-   This uses $c_4$ for the multiplexor and makes large additions much
    faster, at the expense of more circuitry

# Carry-Lookahead Adder

Define two functions

-   **Generate** - G(A,B)=1 if A and B would cause C<sub>out</sub> even if C<sub>in</sub>=0
-   **Propagate** - P(A,B)=1 if A and B would cause C<sub>out</sub> if C<sub>in</sub>=1

G(A,B)= A AND B

P(A,B) = A OR B

Carry occurs if it is either generated or there is carry in and it is propagated

$$
C_{out}=G(A,B)+P(A,B)\cdot C_{in}
$$

![Carry-Lookahead Adder](/img/Year_1/CSys/DEMA/Timing/carry-lookahead1.webp)

$$
C_{\text {out }}=G_{4}+P_{4} G_{3}+P_{4} P_{3} G_{2}+P_{4} P_{3} P_{2} G_{1}+P_{4} P_{3} P_{2} P_{1} \cdot C_{\text {in }}
$$

We can compute every $P_i$ and $G_i$ in one gate delay

So we can compute C<sub>out</sub> (and all the intermediate carries) in 3 gate delays

We could compute the full sum in 3 gate delays

![full sum in 3 gate delays](/img/Year_1/CSys/DEMA/Timing/carry-lookahead3.webp)

# Partial Full Adder

![Partial Full Adder](/img/Year_1/CSys/DEMA/Timing/partial_adder.webp)

# MSI Chip

![MSI Chip](/img/Year_1/CSys/DEMA/Timing/MSI.webp)

# More on the carry-lookahead adder

We could create a CLA which adds n-bit numbers in constant gate delay. It would require order $n^2$ gates and gates taking order n inputs. This is impractical for large n

**First solution:** chain 4-bit CLAs

![chain 4-bit CLAs](/img/Year_1/CSys/DEMA/Timing/carry-lookahead21.webp)

The carry now ripples along the chain 4 times as fast as originally

# 2 Level Carry-Lookahead Adder

Rather than letting the carry ripple through the CLAs, we can precompute whether it would be generated or propagated by each CLA

![2 Level Carry-Lookahead Adder](/img/Year_1/CSys/DEMA/Timing/2-level-lookahead.webp)

We now have a 16-bit 2-level CLA

Gate delays:

-   1 gate delay to compute the first level Gs and Ps
-   2 gate delays to compute the second level Gs and Ps
-   2 gate delays to compute carries
-   1 gate delay to compute sums

A standard 16 bit ripple carry adder would take 33 gate delays

These 16 bit adders could be chained to given an n-bit adder with gate delay 2(n/16)+4

Alternately, a 3 (or more) level CLA could be used to create an n-bit adder with delay $\mathcal{O}(\log n)$ and not too much circuitry

# Example

![Example](/img/Year_1/CSys/DEMA/Timing/example.webp)

# Summary

-   $t_{pd}$ - propagation delay (time until last answer comes in)

-   $t_{cd}$ - contamination delay (time before any change)

-   $t_{pcq}$ - max time until recorded after tick

-   $t_{ccq}$ - How long before the value is recorded after the tick

-   $t_{setup}$ - time stable at least this long before tick

-   $t_{hold}$ - time stable at least this long after tick

# Improving clock speed

-   Putting registers in allows you to reduce the long delays, allowing
    a faster clock speed

-   Work like a production line by separating the jobs

-   Allows 1st half to work on next calculation while 2nd half is
    working on the end of the calculation

-   First half takes less time than all of previous one, allowing for a
    faster clock speed

-   So overall a calculation takes 2 clock ticks, so the latency will be
    larger, but the time for a large number of calculations will reduce
    drastically

-   If you keep adding registers it keeps getting better, but the
    resources required mean that you get diminishing returns
