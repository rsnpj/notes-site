---
title: Wireless MAC
lecturer: Donald
---

# Elements of a wireless network

Wireless hosts:

-   Laptop, smartphone

-   Run applications

-   May be stationary or mobile

Base station:

-   Typically connected to wired network

-   Relay - responsible for sending packets between wired network and
    wireless host(s) in its "area"

Wireless link:

-   Typically used to connect mobile(s) to base station

-   Also used as backbone link

-   Multiple access protocol coordinates link access

-   Various data rates, transmission distances

Infrastructure mode:

-   Base station connects mobiles into wired network

-   Handoff: mobile changes base station providing connection into wired
    network

Ad hoc mode:

-   No base stations

-   Nodes can only transmit to other nodes within link coverage

-   Nodes organize themselves into a network: route among themselves

| Standard | Frequency Range   | Data Rate       |
| -------- | ----------------- | --------------- |
| 802.11b  | 2.4 GHz           | Up to 11 Mbps   |
| 802.11a  | 5 GHz             | Up to 54 Mbps   |
| 802.11g  | 2.4 GHz           | Up to 54 Mbps   |
| 802.11n  | 2.4 GHz and 5 GHz | Up to 450 Mbps  |
| 802.11ac | 5GHz              | Up to 1300 Mbps |

# Wireless Link Characteristics

Important differences from wired link

-   **Decreased signal strength**: radio signal attenuates as it
    propagates through matter

-   **Interference from other sources**: standardized wireless network
    frequencies shared by other devices interfere as well

-   **Multipath propagation**: radio signal reflects off object ground,
    arriving at destination at slightly different times

Make communication across a wireless link much more difficult

<Definition name="Hidden Terminals">
Senders that cannot sense each other but nonetheless collide at intended receiver
</Definition>

Multiple wireless senders and receivers create additional problems
(beyond multiple access)

## Hidden terminal problem

![Hidden terminal](/img/Year_2/Networks_and_Systems/Networks/Wireless/hidden_terminal.webp)

-   B,A hear each other

-   B,C hear each other

-   A,C can’t hear each other, means A,C unaware of their interference
    at B

## Signal Attenuation

![Signal Attenuation](/img/Year_2/Networks_and_Systems/Networks/Wireless/signal_attenuation.webp)

-   B,A hear each other

-   B,C hear each other

-   A,C can’t hear each other interfering at B

<Definition name="Exposed Termnals">
Senders who can sense each other but still transmit safely (to different receivers)
</Definition>

Exposed terminals will cause collisions but it won’t matter as the data
gets to where it is intended anyway

# 802.11 LAN architecture

Wireless host communicates with base station:

-   Base station = access point (AP)

Basic Service Set (BSS) (aka "cell") in infrastructure mode contains:

-   Wireless hosts

-   Access point (AP): base station

-   Ad hoc mode: hosts only

    # 802.11: Channels, association

    802.11b: 2.4 GHz - 2.485 GHz spectrum divided into 11 channels at
    different frequencies

-   AP admin chooses frequency for AP

-   Interference possible: channel can be same as that chosen by
    neighbouring AP

Host must **associate** with an AP

-   Scans channels, listening for **beacon frames** containing AP’s name
    (SSID) and MAC address

-   Selects AP to associate with

-   May perform authentication

# 802.11: passive/active scanning

## Passive Scanning

![Passive Scanning](/img/Year_2/Networks_and_Systems/Networks/Wireless/passive_scanning.webp)

1.  Beacon frames sent from APs

2.  Association request frame sent: H1 to selected AP

3.  Association response frame sent from selected AP to H1

## Active Scanning

1.  Probe request frame broadcast from H1

2.  Probe response frames sent from APs

3.  Association request frame sent: H1 to selected AP

4.  Association response frame sent from selected AP to H1

# 802.11: multiple access

-   Avoid collisions: 2+ nodes transmitting at same time

-   802.11: CSMA - sense before transmitting - don’t collide with
    ongoing transmission by another node

-   802.11: no collision detection

    -   Difficult to receive (sense collisions) when transmitting due to
        weak received signals (fading)

    -   Can’t sense all collisions in any case: hidden terming, fading

    -   Goal: avoid collisions: CSMA/CA

# IEEE 802.11 MAC Protocol: CSMA/CA

**802.11 sender**

1.  If sense channel idle for DIFS then transmit entire frame (no CD)

2.  If sense channel busy then

    -   Start random backoff time

    -   Timer counts down while channel idle

    -   Transmit when timer expires

    -   If no ACK, increase random backoff interval, repeat 2

**802.11 receiver**

-   If frame received OK return ACK after SIFS (ACK needed due to hidden
    terminal problem)

Idea: allow sender to "reserve" channel rather than random access of
data frames: avoid collisions of long data frames

-   Sender first transmits small request-to-send (RTS) packets to BS
    (base station using CSMA

    -   RTSs may still collide with each other (but they’re short)

-   BS broadcasts clear-to-send CTS in response to RTS

-   CTS heard by all nodes

    -   Sender transmits data frame

    -   Other stations defer transmissions

<Important>
Avoid data frame collisions completely using small reservations packets
</Important>

# 802.11 frame: addressing

![addressing](/img/Year_2/Networks_and_Systems/Networks/Wireless/addressing.webp)

![addressing](/img/Year_2/Networks_and_Systems/Networks/Wireless/addressing1.webp)

![addressing](/img/Year_2/Networks_and_Systems/Networks/Wireless/addressing2.webp)
