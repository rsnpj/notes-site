---
title: Network Core
lecturer: Donald
---

# The network core

-   Mesh of interconnected routers

-   Packet-switching: hosts break application-layer messages into
    packets

    -   Forward packets from one router to the next, across links on
        path from source to destination

    -   Each packet transmitted at full link capacity

# Packet-switching

## Store-and-forward

![Packet-switching](/img/Year_2/Networks_and_Systems/Networks/Core/packet-switching.webp)

-   Takes L/R seconds to transmit (push out) L-bit packet into link at R
    bps

-   Store and forward: **entire packet** must arrive at router before it
    can be transmitted on next link

-   End-end delay = 2L/R (assuming zero propagation delay)

## Queuing delay, loss

![Queuing delay](/img/Year_2/Networks_and_Systems/Networks/Core/queue.webp)

If arrival rate (in bits) to link exceeds transmission rate of link for
a period of time

-   Packets will queue, wait to be transmitted on link

-   Packets can be dropped (lost) if memory (buffer) fills up

# Two key network-core functions

**Routing**: Determines source-destination route taken by packets

**Forwarding**: Move packets from router’s input to appropriate router
output

# How do loss and delay occur?

Packets queue in router buffers

-   Packet arrival rate to link (temporarily) exceeds output link
    capacity

-   Packets queue, wait for turn

![loss](/img/Year_2/Networks_and_Systems/Networks/Core/loss.webp)

# Four sources of packet delay

![loss](/img/Year_2/Networks_and_Systems/Networks/Core/loss1.webp)

$$
d_{nodal}=d_{proc}+d_{queue}+d_{trans}+d_{prop}
$$

$d_{proc}$: nodal processing (delay in one router to process the packet)

-   Check bit errors

-   Find information to determine where to send packet

-   Determine output link

-   Typically < msec

$d_{queue}$: queuing delay

-   Time waiting at output link for transmission

-   Depends on congestion level of router

$d_{trans}$: Transmission delay

-   How long it takes the packet to get out of the router

-   L: Packet length (bits)

-   R: Link bandwidth (bps)

-   $d_{trans}$=L/R

$d_{prop}$: Propagation delay:

-   Time for transmission of data between the routers

-   d: length of physical link

-   s: propagation speed ($\sim 2\times 10^8 m/s$)

-   $d_{prop}=d/s$

## Caravan Analogy

![Caravan Analogy](/img/Year_2/Networks_and_Systems/Networks/Core/caravan.webp)

Cars "propagate" at

-   100 km/hr

-   Toll booth takes 12 seconds to service car (bit transmission)

-   car $\sim$ bit; caravan $\sim$ packet

_These caravans aren’t actually caravans, instead a group of cars_

Time to "push" entire caravan through toll booth onto
highway=$12\times 10=120$ seconds

Time for last car to propagate from 1st to 2nd toll booth =1hr

# Packet Loss

-   Queue (aka buffer) preceding link in buffer has finite capacity

-   Packet arriving to a full queue dropped (aka lost)

-   Lost packet may be retransmitted by previous node, bu source end
    system, or not at all

![Packet Loss](/img/Year_2/Networks_and_Systems/Networks/Core/packet_loss.webp)

# "Real" internet delays and routes

-   What do "real" internet delay & loss look like?

-   `traceroute` program: provides delay measurement from source to
    router along end-end internet path towards destination. For all i:

    -   Sends three packets to router i on path towards destination

    -   Router i will return packets to sender

    -   Sender times interval between transmission and reply

![delays and routes](/img/Year_2/Networks_and_Systems/Networks/Core/delay_and_routes.webp)

# Alternative core: circuit switching

![circuit switching](/img/Year_2/Networks_and_Systems/Networks/Core/circuit_switching.webp)

End resources allocated to, reserved for "call" between source and
destination

-   In diagram, each link has four circuits. Call gets 2nd circuit in
    top link and 1st circuit in right link

-   Dedicated resources: no sharing. Circuit-like (guaranteed)
    performance

-   Circuit segment idle if not being used by call (no sharing)

-   Commonly used in traditional telephone networks

# Protocol "layers"

Protocols determine the format and order of messages between devices.
Protocol layering has conceptual and structural advantages.

**Protocol Stack**: Protocols of the various layers

## Why layering?

Dealing with complex systems:

-   Explicit structure allows identification, relationship of complex
    system’s pieces

-   Modularization eases maintenance, updating of system

    -   Change of implementation of layer’s service transparent to rest
        of system

## Internet Protocol Stack

-   **Application**: Supporting network applications

    -   FTP, SMTP, HTTP

-   **Transport**: process-process data transfer

    -   TCP, UDP

-   **Network**: Routing of datagrams from source to destination

    -   IP, Routing Protocols

-   **Link**: Data transfer between neighbouring network elements

    -   Ethernet, 802.11, PPP

-   **Physical**: Bits "on the wire"

![Internet Protocol Stack](/img/Year_2/Networks_and_Systems/Networks/Core/IP_Stack.webp)

## ISO/OSI Reference Model

-   **Presentation**: allow applications to interpret meaning of data
    e.g. encryption, compression, machine specific conventions

-   **Session**: Synchronization, checkpointing, recovery of data
    exchange

-   Internet stack "missing" these layers. These services if needed must
    be implemented in application

![OSI Reference Model](/img/Year_2/Networks_and_Systems/Networks/Core/OSI.webp)
