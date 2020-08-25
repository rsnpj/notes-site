---
title: Maintenance
---

# Types of maintenance

<Definition name="Corrective Maintenance">
Fixed/repaired
</Definition>

<Definition name="Adaptive Maintenance">
Adapted to changing needs
</Definition>

<Definition name="Perfective Maintenance">
Improved in performance or maintainability
</Definition>

<Definition name="Preventive Maintenance">
Improved by fixing bugs before they activate
</Definition>

# Maintenance problems

Staff problems:

- Limited understanding

- Management priorities

- Morale

Technical problems:

- Artifacts and paradigms

- Testing difficulties

# Process metrics

May be used to assess maintainability:

- Number of requests for corrective maintenance

- Average time required for impact analysis

- Average time taken to implement a change request

- Number of outstanding change requests

# Techniques for maintenance

<Definition name="Program Comprehension">
Reading and understanding programs in order to implement change
</Definition>

<Definition name="Reverse Engineering">
Analyse software to identify the components and their inter-relationships to produce call graphs and control flow graphs
</Definition>

<Definition name="Migration">
Modify to run in a different environment
</Definition>

<Definition name="Re-engineering">
Restructuring or rewriting part or all of a legacy system without changing its functionality to make it easier to maintain
</Definition>

# Re-engineering

![image](/img/Year_2/Software_Engineering/Maintenance/re-engineering.png)

## Refactoring vs re-engineering

Refactoring is a continuous process of improvement throughout the
development and evolution process. It is intended to avoid the structure
and code degradation that increases the costs and difficulties of
maintaining a system.

Re-engineering takes place after a system has been maintained for some
time and maintenance costs are increasing. You use automated tools to
process and re-engineer a legacy system to create a new system that is
more maintainable.

# Legacy systems

Multiple strategies for legacy systems:

- Scrap the system completely

- Continue maintaining the system

- Transform the system by re-engineering to improve its
  maintainability

- Replace the system with a new system

## Legacy system categories

|                         | Low quality            | High quality                           |
| ----------------------- | ---------------------- | -------------------------------------- |
| **Low business value**  | Scrap the system       | Replace with COTS, scrap or maintain   |
| **High business value** | Re-engineer or replace | Continue in operation with maintenance |
