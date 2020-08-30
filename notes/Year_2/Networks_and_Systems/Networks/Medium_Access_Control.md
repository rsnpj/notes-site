---
title: Medium Access Control
---

# The MAC Sublayer

MAC is a layer responsible for determining who transmits next, i.e. who
gets next access to the channel

# Key Issue

We have a single physical layer medium for network communication, it may
be a wire or it may be part of the wireless spectrum, but multiple
connected nodes all want (or try) to use it at once to transmit/receive

## Why is this a problem

If we nodes transmit at the same time on the transmission medium the
transmissions interfere with each other and become corrupted

# Channel Allocation Problem

Single channel is shared by several stations:

-   This channel can be allocated to only one transmitting user at a
    time

-   Two different methods of channel allocation:

    -   Static channel allocation

    -   Dynamic channel allocation

# Static Channel Allocations

<Definition name="In time division multiplexing">
Each user gets the entire transmission capacity for a fixed time interval
</Definition>

<Definition name="In Frequency Division Multiplexing">
Each user gets a portion of the transmission capacity for the whole time
</Definition>

![image](/img/Year_2/Networks_and_Systems/Networks/MAC/TDM_vs_FDM.webp)

The limitations of static channel allocation

-   Works only for a fixed number of users

-   Data traffic is very often bursty i.e. long time no data and for a
    short time high data

-   If many users do not use their allocated channel capacity, most of
    the channels will be idle most of the time

# Dynamic Channel Allocations

-   In this method, no user is assigned fixed frequency or fixed time
    slot

-   All users are dynamically assigned frequency or time slot, depending
    upon the requirements of the user

-   Many protocols have been defined to handle the access to shared
    link. They are organized in various different groups

    -   Random Access Protocols

        -   There is no rule that decides which station should send next

        -   If two stations transmit at the same time, there is a
            collision and the frames are lost

    -   Controlled Access Protocols

    -   Limited Contention Protocols

    -   Channelization Protocols

# Random Access Protocols

## ALOHA

-   Protocol developed for communication over radio link

-   Collision occurs when two stations transmit simultaneously

### Pure ALOHA

-   Stations transmit frames whenever they have data to send

-   Collisions

    -   When two stations transmit simultaneously, there is a collision
        and frames are lost

    -   Whenever two frames try to occupy the channel at the same time,
        there is a collision and both the frames are lost

    -   If the first bit of a new frame overlaps with the last bit of a
        frame, both frames will be lost and both will have to be
        retransmitted

### Slotted ALOHA

-   In slotted ALOHA, the time is divided into frame-sized slots

-   A station can send a frame only at the beginning of the slot, and
    only one frame is sent in each slot

-   If any station is not able to place the frame onto the channel at
    the beginning of th slot, it has to wait until the next time slot

-   There is a possibility of a collision if two stations try to send at
    the beginning of the same time slot

## Carrier Sense Multiple Access

-   CSMA was developed to overcome the problems of ALOHA

-   CSMA is based on the principle of "carrier sense"

    -   The station senses the carrier or channel before transmitting a
        frame

    -   I.e. station checks whether the channel is idle or busy - if
        busy then don’t send

    -   Chances of collision reduce greatly if a station checks the
        channel before trying to use it

-   Chance of a collision still exists because of propagation delay

-   A frame transmitted by one station takes some time to reach the
    other station

-   In the meantime, other station may sense the channel to be idle and
    transmit a frame

-   This results in a collision

-   There are three types of CSMA protocols:

    -   1-persistent (greedy) - sends as soon as idle

    -   Non-persistent - waits a random time then tries again

    -   p-persistent - sends with probability p when idle

### 1-Persistent CSMA

-   In this method, station that wants to transmit data, continuously
    senses the channel to check whether the channel is idle or busy

-   If the channel is busy, station waits until it becomes idle

-   When the station detects an idle channel, it immediately transmits
    the frame

-   When a collision occurs, the station waits a random amount of time
    and starts all over again

-   This method has the highest chance of collision because two or more
    stations may find channel to be idle at the same time, and then will
    transmit their frames at the same time

### Non-Persistent CSMA

-   A station that has a frame to send senses the channel

-   If the channel is idle, it sends immediately

-   If the channel is busy, it waits a random amount of time and then
    senses the channel again

-   Reduces the chance of collision because the stations wait for a
    random amount of time

-   Unlikely that two or more stations will wait for the same amount of
    time and will retransmit at the same time

-   Introduces longer delays

### P-Persistent CSMA

Used in slotted channels (slotted ALOHA)

-   Sense the channel

-   If the channel is busy, then wait until the next time slot and start
    over

-   If the channel is idle, then with probability p transmit with
    probability (1-p) defer until the next slot and start over

## CSMA/CD

-   In **Carrier Sense Multiple Access with Collision Detection**, the
    station that sends its data on the channel continues to sense the
    channel while data is transmitted

-   If collision is detected, the station aborts its transmission and
    waits for a random amount of time and sends its data again

-   As soon as a collision is detected, the transmitting station
    releases a jam signal

-   Jam signal alters all other stations. Stations are not supposed to
    transmitted immediately after the collision has occurred

-   CSMA/CD improvement is to detect/abort collisions

    -   Reduced contention times improve performance

    -   A station who detects a collision immediately stops transmitting

    -   Afterwards it waits a random time and tries again

## Comparing the protocols

![image](/img/Year_2/Networks_and_Systems/Networks/MAC/Compare-Protocols.webp)

# Controlled Access Protocols

-   In these protocols, the stations consult each other to find which
    station has a right to send

-   They are collision-free protocols

-   A station cannot send unless it has been authorised by other
    stations

-   There are three types of controlled access protocol

## Bitmap

-   Before sending any data, all stations state if they have data

    -   Senders 0,1,2,...,n send their status one-by-one in order

    -   i.e. sender sets a bit in the contention slot if they have data

    -   Senders which announced they had data send in turn

    -   Repeat

## Token passing

Token sent round ring defines the sending order

-   Station with token may send a frame before passing

-   Idea can be used without ring too, e.g. token bus

## Binary countdown

Binary countdown improves on the bitmap protocol

-   Stations send their address in contention slot

-   The channel ORs bits; stations give up when they send a 0 but see a
    1

-   Station that sees it full address is next to send
