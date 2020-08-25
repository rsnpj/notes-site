---
title: Configuration Management
---

<Definition name="Configuration Management">
Concerned with the policies, processes and tools with managing changing software systems
</Definition>

You need CM because it is easy to lose track of what changes and
component versions have been incorporated into each system version

# Overview

Change management:

- Keeping track of requests for changes to the software for customers
  and developers, working out the costs and impact of changes, and
  deciding the changes should be implemented

Version management

- Keeping track of the multiple versions of software components and
  ensuring that changes made to components by different developers do
  not interfere with each other

System building

- The process of assembling program components, data and libraries,
  then compiling these to create an executable system

Release management:

- Preparing software for external release and keeping track of the
  system versions that have been released for customer use

# Change management

To be effective must:

- Identify areas of potential conflict

- Address the needs of everyone in the organisation

- Bridge the gap between the aspirations of managers and the people
  affected by the change

## Impact analysis

Factors in impact analysis:

- The consequence of not making the change

- The benefits of the change

- The number of users affected by the change

- The costs of making the change

- The product release cycle

# Version Management

<Definition name="Codelines">
A sequence of versions of source code with later versions in the sequence derived from earlier versions\\
Known as a branch in Git
</Definition>

<Definition name="Baselines">
Specifies the component versions that are included in the system plus a specification of the libraries used, configuration files etc
</Definition>

# System Building

This is just an automated build system, think `make` for C or any of the
build systems static site generators use

# Release management

- A system release is a version of a software system that is
  distributed to customers

- For mass market software it is usually possible to identify two
  types of release:

  - Major releases which deliver significant new functionality

  - Minor releases which repair bugs and fix customer problems that
    have been reported

- For custom software or software product lines, releases of the
  system may have to be produced for each customer and individual
  customers may be running several different releases of the system at
  the same time

# Release tracking and reproduction

When a system release is produced, it must be documented to ensure that
it can be recreated exactly in the future

- Customers may use a single release of these systems for many years
  and may require specific changes to a particular software system
  long after its original release date

To document a release, you have to record:

- The specific versions of the source code components that were used
  to create the executable code

- The versions of the operating system, libraries, compilers and other
  tools used to build the software

- And keep copies of the source code files, corresponding executables
  and all data and configuration files
