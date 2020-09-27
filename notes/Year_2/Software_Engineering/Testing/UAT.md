---
title: User Acceptance Testing (UAT)
lecturer: David
---

Consist of a set of tests:

- Drawn up by the customer’s test designers/end-users

- Derived from the requirements specification

- Forming the final test activity before the system is approved for
  delivery

# Why do UAT?

- To provide confidence that the system delivered to the customer is
  the one that they need. So the customer acts as the test oracle

- Testing is done from the customer’s perspective and based upon their
  understanding of the requirements

- Ensures that the set of acceptance criteria have a pivotal role for
  driving the project

  - The criteria should be well understood by the customer,
    development team and project manager

  - Ideally they are made explicit in the contract

# Operational benefits of UAT

- Reduces the risk of subsequent operational system failure

- Validates manuals and other documentation

- Checks handling of error conditions

- Tests the system on the operational platform so wa can assess the
  impact our software has on existing systems and resources, and vice
  versa

# UAT Focus

- Key goal is to gain acceptance of the system by its end-user
  stakeholders

- To achieve this, the system should:

  - Fulfil the intended purpose(s) and fit the business case

  - Provide evidence and results under the specified conditions of
    use

  - Be clearly and correctly documented

  - Be reliable and stable

  - Have no unintended side-effects

# Types of UAT

UAT is typically approached in three ways:

- For a **benchmark test**, the customer prepares a set of test cases
  that represent typical operational scenarios - the tests may then be
  performed with actual users or a specified testing team, who also
  evaluate the outcomes

- A **pilot test** involves installing the system on an experimental
  basis and letting users employ it as if it were permanently
  installed, relying upon everyday use to test all the functions - so
  less formal and structured than a benchmark test

- In **parallel testing** the new system runs alongside an existing
  one, addressing compatibility and function testing

# Prerequisites

## Determine whether to start UAT

- Earlier testing must be successfully completed

- The developers must have confidence that the system is operational
  and ready for delivery

- Managers must have confidence that there will be no embarrassment,
  so operate on the principle of least surprise

## Assign roles

- The development team and customer need to agree about assigning
  roles and responsibilities

- In particular, should decide on who has the following roles

  - UAT team leader

  - Development team leader

  - Senior User/ User Representative

  - Testers

# Key steps

Phase 1: Planning:

- Prepare a test plan

- Review the test plan with participants and stakeholders

- Arrange sign-off procedures

Phase 2: Preparing tests, Test Data and Training

- Prepare the tests (test cases)

- Prepare the scripts (test scenarios)

- Prepare the test data

- Conduct user testing

- Establish the test environment

- Confirm availability of resources

Phase 3: Executing and Controlling:

- Run the tests (scripts and test cases)

- Record the results

- Log problems and monitor the resolution

- Fix problems and re-test (not a good thing for UAT)

Phase 4: Closure:

- Arrange for formal acceptance of the system

- Perform system hand-over

# Challenges of UAT

<Definition name="Coverage">
Ensuring that all aspects of a system are covered by the tests. Difficult to have a really formal record of this
</Definition>

<Definition name="Regression Testing">
There end users are employed to exercise the system, it can be difficult to ensure that regression testing is performed rigorously
</Definition>

**Training** - The end users do need to have a good understanding of
their role and the activities that they need to perform
