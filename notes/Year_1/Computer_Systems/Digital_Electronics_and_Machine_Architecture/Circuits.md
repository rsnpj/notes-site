---
title: Circuits
---

# Key Circuits

Combinatorial/Combinational Circuits:

- **Adders** - Add the contents of two registers

- **Decoders** - Use a binary number to activate a single line (select
  one out of many things based on a number of inputs)

- **Multiplexors** - Use a binary number to select an input

Sequential circuits:

- Latches/flip-flops - basic memory element

# Half adder

Based on the simple binary addition rules

![image](/img/Year_1/CSys/DEMA/Circuits/half_adder.png)

# Adder

Input is not just A and B, but A, B and the carry from the previous bit
Use two half-adders: Add A and B first, then add in the carried bit:

![image](/img/Year_1/CSys/DEMA/Circuits/adder.png)

# Chaining adders

Full adders can be chained to give more bits of input

![image](/img/Year_1/CSys/DEMA/Circuits/chain_adder.png)

# Subtractor

Using twos compliment negative we can subtract numbers. Flip each of the
bits with a not gate. Set the carry in to 1 in order to add 1

![image](/img/Year_1/CSys/DEMA/Circuits/subtractor.png)

# Decoder

This is used to identify which piece of memory is being talked about
when giving an address

This is what a decoder does:

- N inputs. 2N outputs.

- Only one output is high at a time.

- Which one depends on the input

![image](/img/Year_1/CSys/DEMA/Circuits/decoder.png)

Larger decoders require multi-input AND gates to be construct in
two-level logic.

This requires a lot of circuitry for large decoders.

Can create deeper circuits with fewer transistors, at the cost of slower
response.

# Multiplexor

![image](/img/Year_1/CSys/DEMA/Circuits/multiplexor.png)

- This allows us to select between data streams

# Tristate

![image](/img/Year_1/CSys/DEMA/Circuits/tristate.png)

- Driven low - connected to low voltage line

- Driven high - connected to high voltage line

- Floating - not connected to anything

- This helps when there are weak signals in the circuit

## Inverting Tristate

![image](/img/Year_1/CSys/DEMA/Circuits/inverting_tristate.png)

- Means the output is driven directly from either the high or low
  voltage line.

- Makes the driven signal strong

- When not enabled get floating output

- Actual tristate just an inverted inverted tristate

# Mux

![image](/img/Year_1/CSys/DEMA/Circuits/mux.png)

- Using tristate gates a much more efficient multiplexor can be formed

- Multiplexors can also be made using hierarchical logic, chaining
  them together

# Building a simple ALU

![image](/img/Year_1/CSys/DEMA/Circuits/ALU.png)

- The mux is used for the subraction part of the circuit as it can
  invert the data line

- Using the two control bits you can decide between ADD, SUBTRACT,
  AND, OR.
