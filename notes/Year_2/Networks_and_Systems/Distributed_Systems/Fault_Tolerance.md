---
title: Fault Tolerance
---

<Definition name="Fault Tolerance">
    Ability of a system to continue error-free operation even in the presence of unexpected fault
</Definition>

# Approaches based on redundancy

- Apply duplication to increase system reliability

- System architecture approach

  - Incorporate Active or Passive replication

  - Design server configuration and number of replicated servers

  - Could be expensive due to requiring extra hardware

- Operational approach

  - Replicate system operations to offer fault tolerance

    - Time redundancy

    - Component redundancy

    - Information redundancy

    - Communication redundancy

## Time redundancy

- Perform the same operation multiple times

- No fault if getting the same result each time

- Detect temporary faults but not permanent ones

- Impact system performance

![image](/img/Year_2/Networks_and_Systems/Distributed_Systems/Fault_Tolerance/Time_Redundancy.png)

## Component redundancy

Replicate component and compare outputs:

- Introduce two or more independent running components which provide
  the same functionalities

- Impose little or no performance impact

N-Version Programming (NVP):

- Design diversity - implementing multiple versions of the program

- Tolerate hardware and software faults, but not correlated faults

![image](/img/Year_2/Networks_and_Systems/Distributed_Systems/Fault_Tolerance/Component_Redundancy.png)

## Information Redundancy

Encode outputs with error detection or correcting code\
Advantage:

- Less hardware is required than replicating module

- Support fault detection

Drawback

- Added complexity in design

- Fault recovery capability may be limited

# Communication Failures

Client is unable to locate server

- Use an exception handler (programming language dependent)

- Check out available/update servers from a directory service

Client request to server is lost:

- Apply timeout to await server reply then re-send

- If multiple requests appear to get lost assume "can’t locate server"
  error

Server crashes after receiving client request

- Server may stop before or after returning the info, or before ACK

- Store user request in the FE

- Rebuild or use alternate server to retry request

- Give up and report failure

Server reply to client is lost

- Apply timeout to await server reply

# General Workflow towards fault tolerance

- Error (or fault) detection and diagnosis

- Failure isolation - system must be able to isolate the failure to
  the offending component

- Error containment - confine the effects of hardware or software
  faults to the region where they occur

- Recovery - move the system to a state that does not contain the
  error

# Backwards recovery

<Definition name="Backward Recovery">
    Move the system back to a failure free state
</Definition>

Checkpointing

- Each DS component periodically saves its state, which contains
  sufficient information to restart component execution

<Definition name="Global Checkpoint">
    To support state saving, a consistent global checkpoint can be set up, which comprises a set of N local checkpoints, one from each DS component, forming a consistent system state
</Definition>

- Component execution can be restarted upon failure by following the
  saved checkpoints

- The most recent consistent checkpoint is called the recovery line

## Types of checkpointing

<Definition name="Uncoordinated Checkpointing">
    Each process takes its checkpoints independently
</Definition>

<Definition name="Coordinated Checkpointing">
    Processes coordinate process checkpoints in order to save a global consistent state
</Definition>

<Definition name="Communication induced checkpointing">
    Force each process to take checkpoints based in information piggybacked from the application it receives from other processes 
</Definition>

## Domino effect

<Definition name="Domino Effect">
    Cascaded rollback which causes the system to roll back too far in the computation
</Definition>

As a consistent state is needed, if the checkpoints are not synchronised
(as in uncoordinated checkpointing) there might need to be a huge
rollback in order to have a state they can roll back to

# Forward Recovery

<Definition name="Forward Recovery">
    Find a new state from which the system can continue operation
</Definition>

Methods to avoid stopping the system:

<Definition name="Self checking components">
  Switch from a failed to a non failed component executing the same task code  
</Definition>

<Definition name="Fault Masking">
    Error compensation is continuously applied
</Definition>

<Definition name="Error compensation/resilience">
    Using an algorithm that has redundancy such as multiple processes sending redundant data
</Definition>

<Definition name="Data Prediction">
    Simulate application response
</Definition>

# Comparison between forward and backward recovery

## Backward Recovery

- Require no knowledge about the error

- Only need to mainatin some prior error free state

- Application independent

- Limitations: resource/time consumption, domino effect

## Forward Recovery

- Efficient in terms of time and storage space

- Require knowledge of error

- Application dependent

- Use when significant system delay is not acceptable

# Measurement of system quality

<Definition name="Reliability">
    The extent to which a system yields expected results on repeated trials
</Definition>

Reliability is measured by the mean time between failures (MTBF)

<Definition name="Availability">
    The fraction of the time the system yields expected results, this is reduced by downtime, repair and preventative maintenance
</Definition>

Availability is measured as follows

$$
A=\dfrac{MTBF}{MTBF+MTTR}
$$

where MTTR is mean time to repair

# Goals

| System Type                 | Issues                                  | Goal                                       | Examples           | Techniques                                                                      |
| --------------------------- | --------------------------------------- | ------------------------------------------ | ------------------ | ------------------------------------------------------------------------------- |
| Long life systems           | Difficult or expensive to repair        | Maximise MTBF                              | Satellites         | Dynamic Redundancy                                                              |
| Reliable real time systems  | Error or delay catastrophic             | Fault masking capability                   | Air bags           | Triple module redundancy                                                        |
| High availability systems   | Downtime very costly                    | High availability                          | Stock exchange     | No single point of failure, self checking pairs, fault isolation                |
| High integrity systems      | Data corruption very costly             | High data integrity                        | Banking database   | Checkpointing, time redundancy, error detection and correction, redundant disks |
| Mainstream Low-Cost Systems | Reasonable level of failures acceptable | Meet failure rate expectations at low cost | Personal computers | Often none                                                                      |
