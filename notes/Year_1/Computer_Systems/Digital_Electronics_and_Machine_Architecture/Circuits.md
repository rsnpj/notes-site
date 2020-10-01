---
title: Circuits
lecturer: Magnus
---

# Key Circuits

Combinatorial/Combinational Circuits:

-   **Adders** - Add the contents of two registers

-   **Decoders** - Use a binary number to activate a single line (select
    one out of many things based on a number of inputs)

-   **Multiplexors** - Use a binary number to select an input

Sequential circuits:

-   Latches/flip-flops - basic memory element

# Half adder

Based on the simple binary addition rules:

-   0 + 0 = 0
-   0 + 1 = 1
-   1 + 0 = 1
-   1 + 1 = 0 (with carry)
-   Carry + 0 + 0 = 1
-   Carry + 0 + 1 = 0 with Carry
-   Carry + 1 + 0 = 0 with Carry
-   Carry + 1 + 1 = 1 with Carry

**Inputs**: A,B

**Outputs**: Sum, Carry

| A   | B   | Sum | Carry |
| --- | --- | --- | ----- |
| 0   | 0   | 0   | 0     |
| 0   | 1   | 1   | 0     |
| 1   | 0   | 1   | 0     |
| 1   | 1   | 0   | 1     |

![Half adder](/img/Year_1/CSys/DEMA/Circuits/half_adder.webp)

# Adder

Input is not just A and B, but A, B and the carry from the previous bit
Use two half-adders: Add A and B first, then add in the carried bit:

![Full adder](/img/Year_1/CSys/DEMA/Circuits/adder.webp)

# Chaining adders

Full adders can be chained to give more bits of input

![Chaining adders](/img/Year_1/CSys/DEMA/Circuits/chain_adder.webp)

# Subtractor

Using twos compliment negative we can subtract numbers. Flip each of the
bits with a not gate. Set the carry in to 1 in order to add 1

![Subtactor](/img/Year_1/CSys/DEMA/Circuits/subtractor.webp)

# Decoder

This is used to identify which piece of memory is being talked about
when giving an address

This is what a decoder does:

-   N inputs. 2N outputs.

-   Only one output is high at a time.

-   Which one depends on the input

![Decoder](/img/Year_1/CSys/DEMA/Circuits/decoder.webp)

Larger decoders require multi-input AND gates to be construct in
two-level logic.

This requires a lot of circuitry for large decoders.

Can create deeper circuits with fewer transistors, at the cost of slower
response.

# Multiplexor

![Multiplexor](/img/Year_1/CSys/DEMA/Circuits/multiplexor.webp)

The multiplexor has $k+2^k$ inputs and 1 output

The first k inputs (selector) represent a binary number

The output takes the value of the remaining input indexed by this binary number

Consider many memory locations connected to inputs. Using the selector we can select which is loaded into a register connected to the output

-   This allows us to select between data streams

# Tristate

![Tristate](/img/Year_1/CSys/DEMA/Circuits/tristate.webp)

-   Driven low - connected to low voltage line

-   Driven high - connected to high voltage line

-   Floating - not connected to anything

-   This helps when there are weak signals in the circuit

## Inverting Tristate

![Inverting tristate](/img/Year_1/CSys/DEMA/Circuits/inverting_tristate.webp)

-   Means the output is driven directly from either the high or low
    voltage line.

-   Makes the driven signal strong

-   When not enabled get floating output

-   Actual tristate just an inverted inverted tristate

# Mux

![Mux](/img/Year_1/CSys/DEMA/Circuits/mux.webp)

-   Using tristate gates a much more efficient multiplexor can be formed

-   Multiplexors can also be made using hierarchical logic, chaining
    them together

# Building a simple ALU

![Building a simple ALU](/img/Year_1/CSys/DEMA/Circuits/ALU.webp)

-   The mux is used for the subraction part of the circuit as it can
    invert the data line

-   Using the two control bits you can decide between ADD, SUBTRACT,
    AND, OR.
