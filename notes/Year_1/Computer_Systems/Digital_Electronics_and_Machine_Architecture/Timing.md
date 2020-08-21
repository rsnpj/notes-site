---
title: Timing and Advanced Adders
---

# Timing

- A buffer doesn't change if an output is high or low, it just makes
  it either full high or full low

In any physical gate or circuit there is a delay between the input
changing and the output adjusting appropriately.

![image](/img/Year_1/CSys/DEMA/Timing/timing.png)

- Note that the lines are not vertical, they rise between low and high

**Propagation delay: $t_{pd}$**: The max delay before the output is
stable

**Comtamination delay $t_{cd}$**: The min delay before the output
changes

![image](/img/Year_1/CSys/DEMA/Timing/delay.png)

Delay is caused by:

- Capacitance and resistance in a circuit

- Speed of light limitation

Reasons why $t_{pd}$ and $t_{cd}$ may be different:

- Different rising and falling delays

- A circuit may have multiple inputs and outputs, some of which are
  faster than others

- Circuits slow down when hot and speed up when cold

# Critical paths

![image](/img/Year_1/CSys/DEMA/Timing/critical_path.png)

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

![image](/img/Year_1/CSys/DEMA/Timing/glitch.png)

With a=0,b=1 and c=1. If b falls to 0, the output will change from 1 to
0 to 1.

# Mux delays

![image](/img/Year_1/CSys/DEMA/Timing/mux_delay.png)

- Tristate D - Data

- Tristate S - Selector

- The different speeds for different changes need to be taken into
  account for whatever the use is

# Adder

![image](/img/Year_1/CSys/DEMA/Timing/adder.png)

# Ripple adder

![image](/img/Year_1/CSys/DEMA/Timing/ripple_adder.png)

- 3 time steps for 1st carry, then 2 time steps for each after that as
  the first level is pre computed

# Faster Adders - idea

![image](/img/Year_1/CSys/DEMA/Timing/faster_adders.png)

- This uses $c_4$ for the multiplexor and makes large additions much
  faster, at the expense of more circuitry

# Carry-Lookahead Adder

![image](/img/Year_1/CSys/DEMA/Timing/carry-lookahead.png)

![image](/img/Year_1/CSys/DEMA/Timing/carry-lookahead1.png)

![image](/img/Year_1/CSys/DEMA/Timing/carry-lookahead2.png)

![image](/img/Year_1/CSys/DEMA/Timing/carry-lookahead3.png)

# Partial Full Adder

![image](/img/Year_1/CSys/DEMA/Timing/partial_adder.png)

# MSI Chip

![image](/img/Year_1/CSys/DEMA/Timing/MSI.png)

# More on the carry-lookahead adder

![image](/img/Year_1/CSys/DEMA/Timing/carry-lookahead21.png)

# 2 Level Carry-Lookahead Adder

![image](/img/Year_1/CSys/DEMA/Timing/2-level-lookahead.png)

![image](/img/Year_1/CSys/DEMA/Timing/2-level-lookahead1.png)

# Example

![image](/img/Year_1/CSys/DEMA/Timing/example.png)

# Summary

- $t_{pd}$ - propagation delay (time until last answer comes in)

- $t_{cd}$ - contamination delay (time before any change)

- $t_{pcq}$ - max time until recorded after tick

- $t_{ccq}$ - How long before the value is recorded after the tick

- $t_{setup}$ - time stable at least this long before tick

- $t_{hold}$ - time stable at least this long after tick

# Improving clock speed

- Putting registers in allows you to reduce the long delays, allowing
  a faster clock speed

- Work like a production line by separating the jobs

- Allows 1st half to work on next calculation while 2nd half is
  working on the end of the calculation

- First half takes less time than all of previous one, allowing for a
  faster clock speed

- So overall a calculation takes 2 clock ticks, so the latency will be
  larger, but the time for a large number of calculations will reduce
  drastically

- If you keep adding registers it keeps getting better, but the
  resources required mean that you get diminishing returns
