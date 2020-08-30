---
title: Floating Point
---

Sometimes we need to deal with numbers outside the usual range:

**Floating point** is very like scientific notation
The typical floating point representation has three fields:

|              |                                 |
| ------------ | ------------------------------- |
| The sign bit | S                               |
| The exponent | e                               |
| The mantissa | M (Also called the significand) |

These are used to represent the number:

$$
\textrm{+ or - } M \times2^e
$$

Single precision (32 bit) floating point numbers have:

-   1 bit sign

-   8 bit exponent

-   23 bit mantissa

![image](/img/Year_1/CSys/DEMA/Floating_Point/float.webp)

## The sign bit, S

-   0 indicates a positive number

-   1 indicates a negative number

## The exponent, e

Value in range -126 to 127

Stored with a **bias**: 127 is added giving a number between 1 and 254

The 8 bit exponent field can store values in the range 0 to 255, but 0
and 255 have **special meanings**:

-   Exponent field 0 with mantissa 0 gives the number 0

-   Exponent field 0 with a non-zero mantissa: "subnormal numbers" -
    below the threshold of numbers normally dealt with in floating point
    representation

-   Exponent field 255 with mantissa 0 gives + or - infinity

-   Exponent field 255 with non-zero mantissa: not a number

## The mantissa, M

Some binary number like 1.10101010110

Always scaled so that the radix point is after the leading 1

Hence we need not store the leading 1 (we can assume it is there)

We only store 23 bits of the fractional part

## Example

![image](/img/Year_1/CSys/DEMA/Floating_Point/float.webp)

-   Sign 0 - a positive number

-   Exponent field is 124, so e is 124-127=-3

-   Mantissa field is 010\... so the actual mantissa is calculated to
    1.25

-   $1.25\times2^{-3}=1.25/8=0.15625$

## Example 2

-12.375

$12.375_{10}=1100.011_2$

$1100.011 = 1.100011\times 2^3$

-   Sign is 1 to represent a negative

-   Mantissa is 1.100011, we will store 100011000\...

-   Exponent is 3, we will store $130_{10}=1000 0010_2$ after adding the
    bias of 127. Exponent is 3 to shift the radix point 3 places to the
    left so that the number starts 1. etc

11000001010001100000000000000000

## More on floating point

### Error in truncation

What is the binary FP representation of $0.1_{10}$?

$0.1_{10} = 0.0001100110011001100110011…_2$

So the FP has e = -4; M = 1.10011001100110011001101 (limited to 23
digits)

which is actually 0.100000001490116119384765625, this is a **rounding
error**.

### Error in overflow/underflow

Minimum positive number is $2^{-126}$, the **underflow level**.

Maximum positive number is ($2-2^{-23}$) $\times 2^{127}$, the
**overflow level**.

Floating Point Operations should return the closest FP number to the
answer. E.g.
$1.1\times2^{123} – 1.10101\times2^{-23} = 1.1\times2^{123}$. In this
the number being subtracted is too small to make a difference to such a
large number
