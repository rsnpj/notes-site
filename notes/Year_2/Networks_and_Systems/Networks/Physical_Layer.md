---
title: Physical Layer
---

# Bandwidth

Bandwidth is the physical property fo the transmission medium

<Definition name="Baseband">
The signal that runs from 0 to a maximum frequency. Has very narrow and near-zero frequency range. Used in wires
</Definition>

<Definition name="Passband">
Signals that occupy the higher range of frequency and pass through frequency filter(s). Used in wireless spectrum
</Definition>
## Signal Bandwidth

Bandwidth of analogue and digital signals are measured differently:

- Analogue signal bandwidth is measured in terms of its frequency (Hz)

- Digital signal bandwidth is measured in terms of bit rate (bps)

# Digital Modulation

Digital signals (0,1) are encoded by low and high voltage

There are many digital encoding schemes

![image](/img/Year_2/Networks_and_Systems/Networks/Physical/Modulation.png)

## NRZ Encoding (Non-Return-to-Zero)

<Definition name="NRZ Encoding">
{`
* A high voltage represents a 1 and a low voltage represents a 0
* The voltage does not return to zero, it changes only when the bit value changes
`}

</Definition>

- Problem: having long runs of consecutive bits with the same value
  (no changes in voltage) the constant signal values can’t synchronize
  the communicating devices

- Especially with long runs of either 0 or 1, there is no change to
  resynchronise so it is likely that the clocks would get out of sync

## NRZI Encoding

- NRZI attempts to alleviate the problem in NRZ scheme

<Definition name="NRZI encoding">
{`
* 0 is encoded as no change in the level. 1 is encoded depending on the current state of the line
* 1 is encoded as an inverting of the current state
`}
</Definition>

- This fixes the problem of sending consecutive 1s but not consecutive
  0s

## Bipolar Encoding

<Definition name="Bipolar Encoding">
{`
* 0 is represented by a zero voltage, neither high nor low
* 1 is represented by either positive voltage or negative voltage
  * It is inverted based on the last transmission of 1
  * It is represented by a negative voltage if it was represented by a positive voltage when it was last transmitted, and vice versa
`}
</Definition>

For this, over a long enough message, the sum of the voltages is zero,
this is called a "balanced encoding" and is desirable in some
applications

## Manchester Encoding

<Definition name="Manchester Encoding">
{`
* A high to low voltage represents a 1 and a low to high voltage represents a 0
* Uses signal changes to transmit a bit and achieves synchronisation
* This is equivalent to an XOR of the clock signal and the NRZ encoding. The clock is at twice the frequency of the NRZ
`}
</Definition>

- Twice the bandwidth of NRZ is required

# Multiplexing

- Channels are often shared by multiple signals

- Different ways to accomplish multiplexing:

## Frequency Division Multiplexing

- Refactor the signals to start at different frequencies

- Sit them side by side on the frequency spectrum on the same channel,
  so they don’t interfere with each other

- Put a small region in-between adjacent frequency bands to avoid
  interference

![image](/img/Year_2/Networks_and_Systems/Networks/Physical/FDM.png)

1.  The original bandwidths

2.  The bandwidths raised in frequency

3.  The multiplexed channel

## Wavelength Division Multiplexing

- The same as FDM but for optical fibres instead of wireless signals

![image](/img/Year_2/Networks_and_Systems/Networks/Physical/WDM.png)

## Time division multiplexing

- Intersperse the channels in some sequence, leave a guard time to be
  able to separate out information

![image](/img/Year_2/Networks_and_Systems/Networks/Physical/TDM.png)

## Code Division Multiple Access

- Nice and clean mathematical method allows every transmitter to use
  the entire channel all the time

- The individual transmissions are blended (or extracted by a
  receiver) using coding theory

- Imagine that we have four transmitters called, from now on, stations

- Each station has a chip (i.e. a code), which is a four bit vector

- These codes are chosen so that the dot product of any of these codes
  with any other of the codes is 0 i.e. they are orthogonal to each
  other

- Transmitting the stations chip sequence a 1

- Transmitting the negation of a stations chip sequence is a 0
