---
title: CPU Architecture
---

# Components of a CPU

![image](/img/Year_1/CSys/DEMA/CPU_Architecture/cpu_components.jpg){width="6cm"}

5 major components

- **Memory** - RAM - "the mailboxes"

- **Registers** - The special memory locations that can be accessed
  very fast. 3 registers are shown: the Instruction register (IR), the
  Program Counter (PC) and the Accumulator

- **Arithmetic/Logic Unit** - "the calculator"

- **Buses** - bundles of tiny wires that carry data between
  components. The three most important buses are the address,data and
  control buses

- **Control Unit** - Responsible for directing the flow of
  instructions and data within the CPU

In the diagram the Decoder and Multiplexor comprise the Control Unit

# Registers

"Work space" of the CPU

Storage locations in the CPU, often with a defined purpose and wired to
perform that purpose

Hold a binary value for

- Storage

- Manipulation

- Calculation

Manipulated directly by the Control Unit

Vary in size from 1 to 128 bits

## Accumulator

This is considered part of the ALU

These are general purpose registers used for:

- Holding data

- Holding interim and final results of arithmetic operations

- Holding data waiting to be transferred between different memory
  locations

- Holding data waiting to be transferred between I/O and memory

## Registers in the Control Unit

### Program Counter

Holds the address of the next instruction to be executed

### Instruction Register (IR)

Holds the actual instruction being executed

### Flags

1 bit registers used to keep track of special conditions e.g. Arithmetic
Carry, Overflow

Flags are grouped together into one or more status registers (SR)

## Memory management

### Memory Address Register

Holds the address of a memory location to be accessed, always written
to, never from

Hardwired with an address bus to the ram, activate it to get the correct
data

### Memory Data Register

Holds the value that is being stored to or retrieved from the memory
location currently addressed by the MAR

May be written to or from

Also known as the Memory Buffer Register

# Buses

Bus - A physical connection that makes it possible to transfer data from
one location in a system to another is called a bus

A bus is a group of electrical conductors (**lines**) used to carry
signals

- **Data Bus** - Transfer Data

- **Control Bus** - Controls what bits of circuitry are active

- **Address Bus** - Activates the right part of the RAM to get data
  out of

- **Power Bus** - Feed power to all parts of the chip

## Point-to-point

Bus carries the signal from a specific source to a specific destination
e.g. Home PC to Printer

## Broadcast

Bus used to carry signals to many different devices

## Bus Interface Bridges

Allows communications between the different buses, for example USB or
PCIe
