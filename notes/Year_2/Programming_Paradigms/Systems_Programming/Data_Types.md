---
title: Data Types
lecturer: Konrad
---

- Every C variable must have a type (strongly typed language)

  - `char`: a single byte – often used to store a character

  - `short`: an integer type, represents small whole numbers

  - `int`: an integer type, represents whole numbers

  - `long`: an integer type, represents large whole numbers

  - `long long`: an integer type, represents very large whole
    numbers (C99 onwards)

  - `float`: single precision floating point number

  - `double`: double precision floating point number

  - `long double`: extended precision floating point number
    (whatever the CPU has to handle doubles)

  - a few others

- On 64-bit Linux systems these require 1,2,4,8,8,4,8 and 16 bytes
  respectively

- Size in bytes needed for memory management and I/O

# Data type qualifiers

- Compiler can choose size of integers subject to:

  - `short int` and `int` are at least 16 bits (2 bytes)

  - `long int` is at least 32 bits (4 bytes)

- On 64-bit Linux:

| Type        | Size    | Range                                        |
| ----------- | ------- | -------------------------------------------- |
| `char`      | 1 byte  | -128 to 127                                  |
| `short int` | 2 bytes | -32768 to +32767                             |
| `int`       | 4 bytes | -2147483648 to +2147483647                   |
| `long int`  | 8 bytes | -9223372036854775808 to +9223372036854775807 |

# `signed` vs `unsigned`

- `signed`/`unsigned`: applies to `char` or integer types.

- `unsigned` integers are always positive or 0

| Type            | Size                    | Range        |
| --------------- | ----------------------- | ------------ |
| `signed char`   | 8 bits (1 byte) integer | \[-128,127\] |
| `unsigned char` | 8 bits (1 byte) integer | \[0,255\]    |

- By default integers will be signed, char varies between computers

- the files `<limits.h>` and `<float.h>` specify what limits apply on
  a given system

- they are system and architecture dependent

# Overflow

Anything crazy can happen when you overflow or underflow, so don’t do it

# Constants

| Format   | Type                                          |
| -------- | --------------------------------------------- |
| `1234`   | `int` constant                                |
| `1234L`  | `long int` constant                           |
| `1234UL` | `unsigned long int` constant                  |
| `1.234`  | floating point (`double`)                     |
| `1.2e-3` | floating point in exponent form (`double`)    |
| `037`    | octal (base 8) constant = decimal `31`        |
| `0x1F`   | hexadecimal constant (base 16) = `31` decimal |

---

## Character constants

- These are integer values that are written as a character in single
  quotes

- e.g. `'0'` = `48` in the ASCII character set

- These can also include escape characters:

  - `'\n'` newline character
  - `'\a'` alert (bell) character
  - `'\t'` horizontal tab
  - `'\0'` `NULL` character

- Example:

  ```c
  #define BELL '\a'
  ```

- On UNIX, you can run the `man ascii` command for more information.
  (Press `q` to exit.)

## String constants

- These are zero or more characters in double quotes

- Technically this is an array of chars _and_ it has a `NULL`
  character at the end of the string `'\0'`

  ```c
  char a[]="Hello";
  char a[]={'H','e','l','l','o','\0'};
  ```

- This means that: `'x'` is not the same as `"x"` (i.e. `{'x','\0'}`)

  ```c
  #include<string.h>
  char a[]="x";
  char b='x';
  strlen(a) = 1 // returns number of characters
  sizeof(b) = 1 // returns number of bytes
  sizeof(a) = 2
  ```

# Enumerations

- In many programs, we’ll need variables that have only a small set of
  meaningful values

- A variable that stores the suit of a playing card should have only
  four potential values: “clubs”, “diamonds”, “hearts”, and “spades”

- A “suit” variable can be declared as an integer, with a set of codes
  that represent the possible values of the variable:

  ```c
  int s; /* s will store a suit */
  ...
  s = 2; /* 2 represents "hearts" */
  ```

- Problems with this technique:

  - We can’t tell that `s` has only four possible values

  - The significance of `2` isn’t apparent

- Using macros to define a suit “type” and names for the various suits
  is a step in the right direction:

  ```c
  #define SUIT     int
  #define CLUBS    0
  #define DIAMONDS 1
  #define HEARTS   2
  #define SPADES   3
  ```

- An updated version of the previous example:

  ```c
  SUIT s;
  ...
  s = HEARTS;
  ```

- Problems with this technique:

  - There’s no indication to someone reading the program that the
    macros represent values of the same “type”

  - If the number of possible values is more than a few, defining a
    separate macro for each will be tedious

  - The names `CLUBS`, `DIAMONDS`, `HEARTS` and `SPADES` will be
    removed by the preprocessor, so they won’t be available during
    debugging

- C provides a special kind of type designed specifically for
  variables that have a small number of possible values

- An enumerated type is a type whose values are listed (“enumerated”)
  by the programmer

- Each value must have a name (an enumeration constant)

- Enumerations are declared like this:

  ```c
  enum {CLUBS, DIAMONDS, HEARTS, SPADES} s1, s2;
  ```

- The names of the constants must be different from other identifiers
  declared in the enclosing scope

- Enumeration constants are similar to `#define` constants directive,
  but not equivalent

- If an enumeration is declared inside a function, its constants won’t
  be visible outside the function

- Behind the scenes, C treats enumeration variables and constants as
  integers

- By default, the compiler assigns the integers `0`, `1`, `2`, …to the
  constants in a particular enumeration

- In the suit enumeration, `CLUBS`, `DIAMONDS`, `HEARTS` and `SPADES`
  represent `0`, `1`, `2` and `3`, respectively

## Enumerations as Integers

- The programmer can choose different values for enumeration
  constants:

  ```c
  enum suit {CLUBS = 1, DIAMONDS = 2, HEARTS = 3,
    SPADES = 4};
  ```

- The values of enumeration constants may be arbitrary integers,
  listed in no particular order:

  ```c
  enum dept {RESEARCH = 20, PRODUCTION = 10,
    SALES = 25};
  ```

- It’s even legal for two or more enumeration constants to have the
  same value

- When no value is specified for an enumeration constant, its value is
  one greater than the value of the previous constant

- The first enumeration constant has the value `0` by default

- Example:

  ```c
  enum EGA_colors {BLACK, LT_GRAY = 7, DK_GRAY,
    WHITE = 15};
  ```

- `BLACK` has the value `0`, `LT_GRAY` is `7`, `DK_GRAY` is `8` and
  `WHITE` is `15`
