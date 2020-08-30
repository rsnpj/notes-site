---
title: Transport Layer
---

# Transport-layer services

## Transport services and protocols

-   Provide logical communication between app processes running on
    different hosts, in contrast the network layer just communicates
    between hosts, not processes on hosts

-   Transport protocols run in end systems

    -   Send side: breaks up app messages into segments, passes to
        network layer

    -   Receive side: reassembles segments into messages, passes to app
        layer

-   More than one transport protocol available to apps:

    -   Internet: TCP and UDP

## Transport vs network layer

<Definition name="Network Layer">
Logical communication between **hosts**
</Definition>

<Definition name="Transport Layer">
Logical communication between **processes**. Relies on and enhances network layer services
</Definition>

## Internet transport-layer protocols

TCP (Transmission Control Protocol):

-   Reliable, in-order delivery

-   Congestion control

-   Flow control, ack., timer

-   Connection setup

UDP(User Datagram Protocol):

-   Unreliable, unordered delivery

-   No-frills extension of "best-effort" IP

-   Services not available

    -   Delay guarantees

    -   Bandwidth guarantees

TCP and UDP extend IP delivery service between hosts to delivery service
between processes $\rightarrow$ transport layer multiplexing and
demultiplexing

# Multiplexing and demultiplexing

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/multiplexing.webp)

<Important>
{`
In the network layer it is called a packet \n
In the transport layer it is called a segment
`}
</Important>

-   Host receives IP datagrams

-   Each datagram has source IP address, destination IP address

-   Each datagram carries one transport-layer segment

-   Each segment has source, destination port number

-   Host uses IP addresses and port numbers to direct segment to
    appropriate socket

-   Each socket has a unique identifier

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/segment.webp)

## Connectionless multiplexing and demultiplexing

-   All sockets have host-local port \#

-   Assigned automatically, or via `bind()`

-   `serverSocket,bind((ip, port))`

-   When host receives UDP segment:

    -   Checks destination port \# in segment

    -   Directs UDP segment to socket with that port \#

If two UDP segments have different source IP addresses and/or source
port numbers but same dest IP and port \#, they will be directed to same
process via same process via same socket as dest

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/demultiplexing.webp)

## Connection-oriented multiplexing and demultiplexing

TCP socket identified by 4-tuple

-   Source IP address

-   Source port number

-   Destination IP address

-   Destination port number

Demux: receiver used all four values to direct segment to appropriate
socket

Server host may support many simultaneous TCP sockets:

-   Each socket identified by its own 4-tuple

-   Two arriving TCP segments with different source IP/ \#Port will be
    directed to two different sockets

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/connection.webp)

<Important>
With TCP we have a different socket for each connection
</Important>

# Connectionless transport: UDP

-   "No frills", "bare bones" internet transport protocol

-   "Best effort" service, UDP segments may be

    -   Lost

    -   Delivered out-of-order to app

-   Connectionless:

    -   No handshaking between sender/receiver

    -   Each UDP segment handled independently of others

-   UDP use:

    -   Streaming multimedia apps (loss tolerant, rate sensitive)

-   Reliable transfer over UDP

    -   Add reliability at application layer

    -   Application-specific error recovery

## Segment Header

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/udp.webp)

# Principles of reliable data transfer

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/1rdt.webp)

Note that reliable data transfer protocol is not a standard, it is just
for us to look at academically

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/1rdt1.webp)

# Reliable data transfer

We will:

-   Incrementally develop sender, receiver sides of reliable data
    transfer protocol (rdt)

-   Consider only unidirectional data transfer - but control info will
    flow on both directions

-   Use finite state machines (FSM) to specify sender, receiver

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/rdt.webp)

## rdt1.0: reliable transfer over a reliable channel

Underlying channel perfectly reliable:

-   No bit errors

-   No loss of packets

Separate FSMs for sender, receiver:

-   Sender sends data into underlying channel

-   Receiver reads data from underlying channel

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/rdt1.webp)

## rdt2.0

### Channel with bit errors

-   Underlying channel may flip bits in packet, checksum to detect bit
    errors

-   The question: how to recover from errors:

    -   Acknowledgements (ACKs): receiver explicitly tells sender that
        packet received OK

    -   Negative acknowledgements (NAKs): receiver explicitly tells
        sender that packet had errors

    -   Sender retransmits packet on receipt of NAK

    -   Using ACKs and NAKs is known as ARQ (Automatic Repeat reQuest)
        protocols

        -   Error detection. Sender embeds extra bits in packets

        -   Feedback. Receiver provide sender with feedback

        -   Retransmission. Retransmit erroneous packets

-   New mechanisms in `rdt2.0` (beyond `rdt1.0`)

    -   Error detection

    -   Feedback: control msgs (ACK (1), NAK(0)) from receiver to sender

### FSM specification

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/FSM.webp)

### Operation with no errors

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/operation_with_no_errors.webp)

### Error scenario

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/error_scenario.webp)

### Fatal flaw

What happens if ACK/NAK corrupted:

-   Sender doesn’t know what happened at receiver

-   Can’t just retransmit: possible duplicate

Handling duplicates:

-   Sender retransmits current packet if ACK/NAK corrupted

-   Sender adds **sequence number** to each packet

-   Receiver discards (doesn’t deliver up) duplicate packet

Stop and wait:

-   Sender sends one packet, then waits for the receiver response

## rdt3.0

### Channels with errors and loss

New assumption:

-   Underlying channel can also lose packets (data, ACKs)

    -   Checksum, seq. \#, ACKs, retransmissions will be of help, but
        not enough

Approach:

-   Sender waits "reasonable" amount of time for ACK

    -   Retransmits if no ACK received in this time

    -   If no packet (or ACK) just delayed (not lost):

        -   Retransmission will be duplicate, but seq. \#’s already
            handles this

        -   Receiver must specify seq \# of packet being ACKed

    -   Requires countdown timer

### Sender

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/rdt_sender.webp)

### In action

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/rdt_in_action.webp)

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/rdt_in_action1.webp)

# Pipelined protocols

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/pipelined_protocols1.webp)

**Pipelining** has the following consequences for reliable data transfer
protocols:

-   Range of sequence numbers must be increased

    -   Unique sequence number and there may be multiple, in-transit,
        unacknowledged packets

-   Multiple packet buffering at sender and/or receiver

    -   Sender buffers packets that have been transmitted but not yet
        acknowledged

    -   Buffering of correctly received packets

-   Range of sequence numbers needed and the buffering requirements will
    depend on the manner in which a data transfer protocol responds to
    lost, corrupted, and overly delayed packets

Two generic forms of pipelined protocols:

<Definition name="Go-back-N">
{`
* Sender can send multiple packets without waiting for ACK
* Sender can have up to N unacked packets in pipeline
* Receiver only sends cumulative ack, doesn't ack packet if there's a gap (so if it acks packet 4, it means it has packet 1,2,3 and 4)
* Sender has timer for oldest unacked packet, when timer expired, retransmit all unacked packets
`}
</Definition>

<Definition name="Selective Repeat">
{`
* Sender can have up to N unacked packets in pipeline
* Receiver sends individual ack for each packet
* Sender maintains timer for each unacked packet, when timer expires, retransmit only that unacked packet
* 
`}
</Definition>

## GBN(Go Back N) in action

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/GBN.webp)

## Selective repeat

-   Receiver individually acknowledges all correctly receives packets.
    Buffers packets, as needed, for eventual in-order delivery to upper
    layer

-   Sender only resends packets for which ACK not received. Sender timer
    for each unACKed packet

-   Sender window

    -   N consecutive seq \#’s

    -   Limits seq \#s of sent, unACKed packets

Sender:

-   Data from above:

    -   If next available seq \# in window, send packet

-   timeout(n)

    -   Resend packet n, restart timer

-   Mark packet n as received

-   If n smallest unACKed packet, advance window base to next unACKed
    seq \#

Receiver:

-   `packet n in [rcvbase, rcvbase+N-1]`

    -   Send ACK(n)

    -   Out-of-order: buffer

    -   In-order: deliver( also deliver buffered, in-order packets),
        advance window to next not-yet-received packet

-   `packet n in [rcvbase-N, rcvbase-1]`

    -   Ack(n)

-   Otherwise:

    -   Ignore

### Selective repeat in action

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/selective_repeat_action.webp)

### Selective repeat dilemma

Example:

-   Finite range of seq \# s: 0,1,2,3

-   Window size=3

    -   Receiver sees no difference in two scenarios

    -   Duplicate data accepted as new in (b)

![image](/img/Year_2/Networks_and_Systems/Networks/Transport/selective_repeat_dilemma.webp)

Note: That curtain is there to show that there is a lack of knowledge
between the sender and receiver
