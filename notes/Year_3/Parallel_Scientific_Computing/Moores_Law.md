---
title: Introduction to Parallel Scientific Computing
lecturer: Tobias
---

<Definition name="Moore's scaling">

The cost to put transistors onto a chip decreases with the number of transistors on the circuit. From a certain point on, the manufacturing cost rises again, since the integration of all the transistors becomes expensive. So there is a sweet spot of transistors per chip. This complexity increases at a rate of roughly a factor of 2 per year.[^1]

</Definition>

[^1]: Moore, G.E., 1965. Cramming more components onto integrated circuits.

This was later corrected to 18 months.

<Definition name="Dennard scaling">

[^2]The power cost to drive a chip follows roughly

$$
P=\alpha \cdot CFV^2
$$

-   C - Capacitance (encodes the size of transistor)
-   F - Frequency
-   V - Voltage

</Definition>

[^2]: Dennard, R.H., Gaensslen, F.H., Yu, H.N., Rideout, V.L., Bassous, E. and LeBlanc, A.R., 1974. Design of ion-implanted MOSFET's with very small physical dimensions. IEEE Journal of Solid-State Circuits, 9(5), pp.256-268.

To bring in a more powerful machine, we need to bring down the power envelope. We have only three options to achieve this:

1. Reduce the voltage
2. Reduce transistor size
3. Reduce the frequency

This law ignores that transistors suffer from leakage - power lost.

## Parallelism

Types of parallelism

-   **Vector Parallelism**

    Do one operation on multiple pieces of data in one abstract step

-   **Shared memory parallelism**

    CPUs have many cores

-   **Distributed memory parallelism**

    Supercomputers consists of thousands of compute nodes speaking together on a network

Going further down the list, a greater speedup is available.

GPGPUs can also be used as accelerators to speed up computation
