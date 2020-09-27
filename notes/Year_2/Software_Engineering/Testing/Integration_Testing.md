---
title: Integration Testing
lecturer: David
---

- When unit testing has demonstrated a suitable level of correctness
  for our components, we need to start combining these

- **Big Bang** - Stick all the components together and hope it works

- **Phased** - Begin testing before all components are ready

# Types of integration

## Bottom up integration

- Aim to complete unit testing for components at the lowest level of
  hierarchy first

- Test the next level of components, using the lowest ones

- Continue with this to complete system level

This does assume that there is a component hierarchy

Need to create a set of component drivers to test each level by
providing the necessary calls

Devising an oracle for this is often relatively tractable

**Issues**

- Helps identify sources of problems quite well

- Lower level components get tested first and key ones at the top
  level only get tested later

## Top down integration

- Involves testing with the key components at the top of the hierarchy

- Since lower level elements may not be ready or tested, can use a
  stub which emulates the missing component in a simplified manner for
  each one.

- Testing of components in the middle may need stubs and drivers

**Issues**

- Writing the stubs and drivers may be quite complex

- Needs the support of an effective test harness to aid configuration,
  and also collection of test outputs. (call the correct stubs and
  drivers at the right time)

- Devising an oracle can be quite challenging

## Sandwich integration

- Combine top down and bottom up to work from both ends, reducing the
  number of stubs needed

# Continuous builds

- Maintain a single source repository

- Automate the build

- Make the build self testing

- Require everyone to commit every day

- Keep the build fast

- Ensures visibility to all participants
