---
title: Introduction
---

<Definition name="Computer Network">
A group of devices that are connected to one
another in order to exchange information or share resources
</Definition>

# Overview

![image](/img/Year_2/Networks_and_Systems/Networks/Introduction/Overview.webp)

-   **Hosts** - End systems
-   **Communication links** - Fiber, copper, radio, satellite
-   **Bandwidth** - Transmission rate
-   **Packet switches** - Forward packets (routers and switches)
-   **Internet** - A network of networks
-   **Protocols** - Control sending, receiving of messages
-   **Internet standards**:
    -   RFC: Request for comments
    -   IETF: Internet Engineering Task Force

# What’s a protocol

Protocols define the format and order of messages sent and received
among network entities, and actions taken on message transmission and
receipt

# Access Network

## DSL

Use existing telephone line to central office DSLAM

-   data over DSL phone line goes to internet

-   voice over DSL phone line goes to telephone net

Asymmetric so much faster download than upload

## Cable network

![image](/img/Year_2/Networks_and_Systems/Networks/Introduction/Cable.webp)

HFC - hybrid fiber coax

Network of cable, fiber attaches hones to ISP router

-   Homes share access network to cable headend

-   Unlike DSL, which has dedicated access to central office

Shared line between a group of users

CMTS translates signal between the coaxial cable and the ISP

## Ethernet (Enterprise access networks)

![image](/img/Year_2/Networks_and_Systems/Networks/Introduction/Ethernet.webp)

## Home network

![image](/img/Year_2/Networks_and_Systems/Networks/Introduction/Home_Network.webp)

# Wireless Access Networks

Shared wireless access networks connects end system to router via base
station, aka "access point"

**Wireless LANs(802.11):** - Within Building (54-1300 Mbps)

**Wide-area wireless access** - 10s of km (1-10 Mbps)

# Physical media

**Bit**: Propagates between transmitter/reciever pairs

**Physical link**: What lies between the transmitter and reciever

**Guided media**: Signals propagate in solid media (usually cables or
fibers)

**Unguided media**: Signals propagate freely (radio etc)

## Coax, Fiber

**Twisted Pair**:

-   Two insulated copper wires

-   Cat5: 10Mbps, 1Gbps

-   Cat6: 10Gbps

**Coaxial cable**:

-   Two concentric copper conductors

-   Can achieve high data transmission rates

**Fiber optic cable**

-   Glass fibre carrying light pulses representing bits

-   High speed operation

-   Low error rate

## Radio

-   Signal carried in electromagnetic spectrum

-   No physical wire

-   Carry a signal for long distances

-   Propagation environment effects

    -   Reflection

    -   Obstruction by objects

    -   Interference

Classified into three groups

-   Very short distance

-   LAN

-   Wide area

# Network Security

**Network Security**

-   How bad actors can attack computer networks

-   How to defend networks against attacks

-   How to design architectures resistant to attacks

**Internet originally designed with little security**

-   Original vision: "a group of mutually trusting users attached to a
    transparent network"

-   Internet protocol designers playing "catch up"

-   Security considerations in all layers

**Bad actors can "sniff" packets**

-   Broadcast media

-   "Promiscuous" network interface reads/records all packets
