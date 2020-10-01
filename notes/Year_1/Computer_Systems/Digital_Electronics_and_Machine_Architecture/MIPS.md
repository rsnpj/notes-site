---
title: MIPS
lecturer: Magnus
---

# Introduction

MIPS - Microprocessor without Interlocked Pipeline Stages

Underlying design principles:

-   Simplicity favours regularity

-   Make the common case fast

-   Smaller is faster

-   Good design demands good compromises

# 32 Bit RISC Processor

-   Around 80 instructions in the instruction set

-   32 general purpose registers \$r0 - \$r31

-   \$r0 is special and always contains the value 0

-   The MIPS processor has a super pipelined architecture - each
    instruction is broken down into a sequence of 'micro' instructions

# Design principles

MIPS is a reduced instruction set computer (RISC), with a small number
of simple instructions. Other architectures, such as intel's x86 are
complex instruction set computers (CISC)

-   Simplicity favours regularity

    -   Consistent instruction format: same number of operands (two
        sources and one destination) is easier to encode and handle in
        hardware

-   Make the common use case fast

    -   MIPS includes only simple, commonly used instructions

    -   Hardware to decode and execute instructions can be simple, small
        and fast

    -   More complex instructions (that are less common) performed using
        multiple simple instructions

-   Smaller is faster

    -   MIPS includes only a small number of registers

        | Name        | Register No | Usage                   |
        | ----------- | ----------- | ----------------------- |
        | \$0         | 0           | The constant 0          |
        | \$at        | 1           | Assembler temporary     |
        | \$v0 - \$v1 | 2-3         | Function return values  |
        | \$a0 - \$a3 | 4-7         | Function arguments      |
        | \$t0 - \$t7 | 8-15        | Temporaries             |
        | \$s0 = \$s7 | 16-23       | Saved variables         |
        | \$t8-\$t9   | 24-25       | More temporaries        |
        | \$k0-\$k9   | 26-27       | OS Temporaries          |
        | \$gp        | 28          | Global Pointer          |
        | \$sp        | 29          | Stack pointer           |
        | \$fp        | 30          | Frame pointer           |
        | \$ra        | 31          | Function return address |

-   Good design demands good compromises

    -   Multiple instruction formats allow flexibility, for example
        some use 3 operands, some 2

    -   Number of instruction formats kept small to adhere to design
        principles 1 and 3

    -   Other formats appear in assembler, but are transformed into
        machine code to fit with this format

# Instruction Types

## R Type

![R Type](/img/Year_1/CSys/DEMA/MIPS/R-Type.webp)

3 Register Operands:

-   `rs,rt`: source registers
-   `rd`: destination register

Other fields:

-   `op`: the operation code or opcode (0 for R-type instructions)
-   `funct`: the function, with opcode, tells the computer what operation to perform
-   `shamt`: the shift amount for shift instructions, otherwise 0

![R Type example](/img/Year_1/CSys/DEMA/MIPS/R-Type1.webp)

### Example

```nasm
s11 $s0, $s1, 5
```

"shift bits in register 15 5 places and put it in register 15"

Field values:

| op  | rs  | rt  | rd  | shamt | funct |
| --- | --- | --- | --- | ----- | ----- |
| 0   | 0   | 17  | 16  | 5     | 0     |

## I Type

![I type ](/img/Year_1/CSys/DEMA/MIPS/I-Type.webp)

3 Operands:

-   `rs,rt`: register operands
-   `imm`: 16 bit two's complement immediate

Other fields:

-   `op`: the operation code or opcode (0 for R-type instructions)

### Example

```nasm
addi, $s0, $s1, 5
```

"Add value in register 17 and '5' and put the answer in register 16"

**Field values**:

| op  | rs  | rt  | imm |
| --- | --- | --- | --- |
| 8   | 17  | 16  | 5   |

## J Type

![J type](/img/Year_1/CSys/DEMA/MIPS/J-Type.webp)

-   26-bit address operand: `addr`
-   Used for jump instructions, `j`
-   Rarely used in assembly
-   Typically use the R type instruction `jr name` or `jr $s0`

# Addressing

_How do we address the operands_

## Register Only

```
add $s0, $s1, $s2
```

## Immediate

(16 bit two's complement integer)

```
addi $s0, $s1, 5
ori $t3, $t7, 0xFF
```

## Base addressing

Address of operand is given by base address + signed immediate

```
lw $s0 0($sp)
sw $s0, -12($t0)
```

## PC relative

Jump so far from the current position

```
beq $t0, $0, 3
```

There is the 3 at the end of the pc relative jump because it jumps 3
lines ahead in the program

**Obtaining memory addresses** - declare data at the beginning of the program and look up addresses of variables

```nasm
.data
string1: .space 10
string2: .asciiz "Oh:"
var1: .word 1234

.text
.globl main
main:
lw $s0, var1
la $a0, string1
```

# Loading 32 Bit words

How, if you only have 16 bit immediates?

-   Load the first 16 bits with a special command, then add the rest
-   E.g. want to add `0xFEDC8765`
-   First add `0xFEDC0000` then add `0x00008765`

```nasm
lui $s0, 0xFEDC
ori $s0, $s0, 0x8765
```

This loads half into the left half of the bits, and the other half into
the right half

# OS Calls

Set call type in register `$v0` e.g. `ori $v0, $0, 10`

| Service        | Code | Arguments/results                                                          |
| -------------- | ---- | -------------------------------------------------------------------------- |
| `print_int`    | 1    | \$a0 = integer to be printed                                               |
| `print_float`  | 2    | \$f12 = float to be printed                                                |
| `print_double` | 3    | \$f12 = double to be printed                                               |
| `print_string` | 4    | \$a0 = address of string in memory                                         |
| `read_int`     | 5    | integer returned in \$v0                                                   |
| `read_float`   | 6    | float returned in \$v0                                                     |
| `read_double`  | 7    | double returned in \$v0                                                    |
| `read_string`  | 8    | \$a0 = memory address of string input buffer \$a1 = length f string buffer |
| `sbrk`         | 9    |                                                                            |
| `exit`         | 10   |                                                                            |

# Multiplication and Division

32 x 32 multiplication, 64 bit result:

-   `mult $s0, $s1`
-   Result in special registers `lo`, `hi`

32-bit division, 32 bit quotient, remainder

-   `div $s0, $s1`
-   Quotient in `lo`
-   Remainder in `hi`

Moves from `lo`/`hi` special registers

-   `mflo $s2`
-   `mfhi $s3`

# MIPS Function Calls

![MIPS Function Calls](/img/Year_1/CSys/DEMA/MIPS/Function.webp)

# Conventions

Caller:

-   Passes arguments to callee, using registers `$a0-$a4`
-   Jumps to calee - using `jal`

Calee:

-   Performs the function
-   Returns result to caller - using registers `$v0-$v1`
-   Returns to point of call - using `jr` to `$ra`
-   Must not overwrite registers or memory needed by caller

The stack:

-   A dynamically sized chunk of memory
-   `$sp` always contains the address of the head of the stack

To add to the stack

-   Move the stack down one pos
-   Write the value

```
addi $sp, $sp, -4
sw $s0, 0($sp)
```

To pop from the stack

-   Read the value
-   Move the stack pointer up one pos

```
addi $sp, $sp, 4
lw $s0, 0($sp)
```

Recursive call:

-   Must preserve `$ra` so that prior call can return to the correct place
-   So store it on stack before calling a function
-   Reinstate it afterwards

Caller:

-   Put arguments in `$a0-$a3`
-   Save any needed registers
-   `jal` callee
-   Restore registers
-   Look for result in `$v0`

Callee

-   Save registers that might be disturbed
-   Perform function
-   Put result in `$v0`
-   Restore registers
-   `jr $ra`

# Example - Factorials

![Factorials example](/img/Year_1/CSys/DEMA/MIPS/Example.webp)
