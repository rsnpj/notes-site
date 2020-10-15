---
title: Floating Point Numbers
lecturer: Tobias
---

Computers use a fixed number of bytes per number, typically 4 or 8, to store values from $\mathbb{R}$. We may have an insufficient number of bytes to represent our values, so we will approximate.

# Fixed point formats

A simple scheme would to have a given number of digits (e.g. 4) and a specific point to place the decimal point (e.g. half way), so you could represent three as `0300`, which would translate to 03.00.

This works well for some things like currency, but isn't suitable for scientific computing, as numbers like 1/3 can't be well represented as they would be `0033`, which is far from the true value.

## Relative and absolute error

Let $x_M$ be the machine's representation of $x$

**Absolute round-off error:**

$$
e=|x_M-x|
$$

**Relative round-off error**

$$
\epsilon=\dfrac{e}{|x|}
$$

<Definition name="Quantisation">

Mapping a range of numbers onto one representative number

</Definition>

# Floating point numbers

## Normalisation

A normalised number representation is as follows:

$$
\hat{x}=(-1)^s\Bigg(1+\sum_{i=1}^{S-1}\hat{x}_i2^{-i}\Bigg)\cdot 2^{E}
$$

-   S - sign bit
-   E - exponent

After moving the 1 to the front, we can remove it as it can be implied

## Precision

| Type   | Sign | Exponent | Significand | Total Bits |
| ------ | ---- | -------- | ----------- | ---------- |
| Single | 1    | 8        | 23          | 32         |
| Double | 1    | 11       | 52          | 64         |

<Definition name="Biased Exponent">

Instead of storing E, store E+127 to account for negative numbers

</Definition>

`NaN` is set by setting all of the exponent bits and any bit of the significand. As there is a sign bit, this gives us both `+NaN` and `-NaN`

$\infty$ is set by setting the significand to one and setting all the bits of the exponent. As we don't store the leading one in the significant, this means all zeros in the significand and all ones in the exponent. Again we have positive and negative.

<Definition name="Denormalised value">

If the biased exponent equals zero and the significand's bits are not zero, we have a denormalized floating point value

</Definition>

<Definition name="Machine Precision">

The upper bound on the relative error

</Definition>

<Definition name="Floating Point Overflow">

When you add two floating point numbers and their result exceeds the range that can be represented

</Definition>
