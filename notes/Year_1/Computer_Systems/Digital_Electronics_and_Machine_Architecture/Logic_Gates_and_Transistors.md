---
title: Logic Gates and Transistors
lecturer: Magnus
---

# Transistors

A transistor is just an electronically controlled switch: 2 ports (d and
s) are connected depending on the voltage of 3rd (g)

![image](/img/Year_1/CSys/DEMA/Gates/Fig1.webp)
The most common transistor is the MOSFET (Metal Oxide Semiconductor
Field Effect Transistor)

Silicon (a semiconductor) is a poor conductor of electricity: all the
available electrons(4) are used to form bonds with neighbouring atoms\
Impurities (dopants) provide extra electrons or electron holes which
increase conductivity

![image](/img/Year_1/CSys/DEMA/Gates/Fig2.webp)

In n type silicon it has a negative charge overall as there is a free
electron in the lattice

In p type silicon an additional electron is ripped from the silicon
atom, causing the lattice to have an overall positive charge. This lack
of an electron can float around in the substrate, and acts like a
positive charge.

The n type is a more efficient carrier.

## Diodes

At a junction between p-type and n-type silicon, current can only flow
from p type to n-type. This is a diode.

![image](/img/Year_1/CSys/DEMA/Gates/Fig3.webp)

-   Attach a negative charge near the p type, the holes will be
    attracted. This will cause a depleted region in the middle. A
    positive charge near the n type would pull the charge away from the
    middle. In this area in the middle current cannot flow.

-   Note that with enough voltage charge will be carried whatever way
    intended

## Capacitors

A **capacitor** is two pieces of conductive material separated by an
insulator

If a positive voltage is applied to one side, it accumulates charge Q
and the other side accumulates the opposite charge -Q.

It takes time and energy to charge and discharge a capacitor

-   The charges attract each other, and so is maintained when taken away

-   Applying a sufficiently high voltage at one end the electrons will
    be pulled in the intended way

## More detail about transistors

### nMOS transistor

![image](/img/Year_1/CSys/DEMA/Gates/nMOS.webp)

When the gate g is at $V_{DD}$, the capacitor effect draws negative
charge (electrons) to the surface, and create a temporary channel of n
type silicon, which allows current to flow from source to drain

-   In its natural state there is no conduction

-   By raising the gate voltage to a sufficiently high voltage a
    capacitance effect will be created between the gate and the p type
    substrate (rip electrons off atoms and pull through the substrate to
    create a layer of floating electrons between the source and drain.

### pMOS transistor

A pMOS transistor is the opposite: on at g low and off at g high

![image](/img/Year_1/CSys/DEMA/Gates/pMOS.webp)

-   This is the same design as the nMOS transistor, but with the doped
    silicon the other way round

-   The nMOS transistor is more efficient and so can be made slightly
    smaller

# Binary Addition

This is achieved using gates implementing boolean algebra

Boolean algebra: An algebra of 2 values, 0 and 1

Basic Operations

-   0 and 0=0

-   0 and 1=0

-   1 and 0=0

-   1 and 1=1

## Truth Tables

### AND

![image](/img/Year_1/CSys/DEMA/Gates/AND.webp)

### OR

![image](/img/Year_1/CSys/DEMA/Gates/OR.webp)

### NOT

![image](/img/Year_1/CSys/DEMA/Gates/NOT.webp)

# From transistors to gates

## NOT

![image](/img/Year_1/CSys/DEMA/Gates/NOTTrans.webp)

## NAND

![image](/img/Year_1/CSys/DEMA/Gates/NANDTrans.webp)

# Beneath the digital abstraction

The chip does not really deal with 0s and 1s. The voltages are real
numbers typically between 0V and 5V.

We can take 0V to indicate output 0 and 5V to indicate output 1, but we
need to tolerate **noise**. It is obvious if the value is close to one
of the extremes, but what if it was 2.5V?

# Supply Voltage

The low voltage in the system is 0V

Historically the high voltage ($V_{DD}$) was 5V, but more modern
transistors use lower voltages to save power and avoid overloading
transistors

The mapping of the continuous voltage measured at any point in the
circuit to the discrete 0 and 1 of the digital abstraction is governed
by defining **logic levels**

## Logic Levels

![image](/img/Year_1/CSys/DEMA/Gates/LogicLevels.webp)

-   It is best for logic levels in a system to all be the same so that
    the components can best interoperate with each other.

## Transfer characteristics

![image](/img/Year_1/CSys/DEMA/Gates/TransferChar.webp)

-   An ideal inverter would output $V_{DD}$ for outputs up to $V_{DD}/2$
    and output 0 for inputs above $V_{DD}/2$

-   Real circuits are not ideal

-   A reasonable choice of logic levels is at the points where the slope
    is -1

## The static Discipline

![image](/img/Year_1/CSys/DEMA/Gates/StatDis.webp)

# Moore's Law

Transistor density doubles in 2 years or computer processing power
doubles every 18 months
