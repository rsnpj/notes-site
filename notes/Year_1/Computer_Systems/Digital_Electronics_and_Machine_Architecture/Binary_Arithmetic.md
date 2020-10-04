---
title: Binary Arithmetic
lecturer: Magnus
---

# Binary Addition

$$
\begin{array}{r}
\phantom{0}111\phantom{000}\\
\phantom{00}11100\\
\underline{+\phantom{0}01110}\\
\phantom{0}101010
\end{array}
$$

# Overflow

Suppose the accumulator in your CPU is an 8 bit register

It has 11010010 in it

You execute the instruction ADD 01010000

What happens?

$$
\begin{array}{r}
\phantom{0}11010010\\
\underline{+01010000}\\
100100010
\end{array}
$$

The answer **doesn't fit** in the register. This should
trigger a flag in the **status register**, but can cause errors

# Binary Multiplication

$$
\begin{array}{r}
\phantom{0000}11100\\
\underline{\times 01110}\\
\phantom{0000}00000\\
\phantom{000}111000\\
\phantom{00}1110000\\
\phantom{0}11100000\\
\underline{000000000}\\
110001000
\end{array}
$$

This can be efficiently accomplished with **left-shift**
and **add** operations

# Negative Numbers

\*How can we represent **negative numbers using only bits?\***

Common Solutions:

## Signed Magnitude Representation

-   Add a single bit flag: 0 for positive or 1 for negative

    -   **0**000 0110=6

    -   **1**000 0110=-6 (Not 134)

-   Similar in concept to a minus sign

-   Have two values for 0: 1000 0000 and 0000 0000

-   Makes binary arithmetic messy

## Ones Compliment

-   The negative of a number is represented by flipping each bit

-   For example 0100 1001=65 becomes 1011 0110=-65

-   The higher order bit still indicates the sign of the number

-   Still has two representations for zero: 00000000 and 11111111

-   Makes binary addition a bit simpler

-   Due to this method, only get 7 bits of data in a byte

## Twos Compliment

-   A negative number is obtained by flipping each bit and adding 1

-   For example 0100 1001=65 becomes 1011 0111=-65

-   The higher order bit still indicates the sign of the number

-   One representation for 0: 00000000

-   Makes binary arithmetic much simpler

-   Allows counting by addition in the way you would expect

## Add a bias

-   For k-bit numbers add a bias of $2^{k-1}-1$ then store in normal
    binary (So for 8-bit add $2^7-1=127$

-   Can store numbers between $-(2^{k-1}-1)$ and $2^{k-1}$ (-127
    and 128)

-   For example -65 stored as -65+127=62 becomes 0011 1110

-   The higher order bit **does not indicate** the sign of the number in
    the normal way

-   Used in storing floating point numbers for some reason

## More on Twos compliment

We will stick with **twos compliment**

We need to be careful about how many bits we are using to represent a
number:
In this method, the leading zeros are important, and so cannot be
ignored

|         |                      |                       |
| ------- | -------------------- | --------------------- |
| 4 Bits: | $3_{10}=0011_2$      | $-3_{10}=1101_2$      |
| 8 Bits: | $3_{10}=0000 0011_2$ | $-3_{10}=1111 1101_2$ |

Subtracting is now the same as adding: 10-3=10+(-3)

$10_{10}=0000 1010_2, 3_10=0000 0011_2$

$0000 1010 - 0000 0011=0000 1010 + 1111 1101=1 0000 0111$ (Overflow so
$0000 0111$)

Note that 10000000 is its own negative, but is taken to be -128
