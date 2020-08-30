---
title: Memory Access Using Pointers
---

# Implementing variables

<Definition name="Variable">
A logical name for an allocated area of memory assigned to store a value of a certain type  
</Definition>

```c
int i = 10;
```

![image](/img/Year_2/Programming_Paradigms/Systems/Pointers/Basic_Integer.webp)

# Pointer variables

![image](/img/Year_2/Programming_Paradigms/Systems/Pointers/Pointer_Variable.webp)

-   ```c
    int i = 10;
    ```

-   value of `i` is `10`

-   The memory address of `i` is `&i` and has a value of `4`

-   A pointer variable stores a memory address:

    ```c
    int *p;
    p = &i;
    ```

-   now the pointer variable `p` stores the memory address of the
    integer variable `i`

# Pointers

![image](/img/Year_2/Programming_Paradigms/Systems/Pointers/Pointer.webp)

```c
int i = 10;   // simple variable
int *p = &i;  // pointer variable
```

-   You can read the address operator `&` as _address of_

```c
printf("%d %d\n", i, *p ) ;
```

-   This outputs `10 10`

-   You can read the indirection operator `*` as _value of_

# Basic pointer operations

```c
int i = 5; // declare an int variable
int *p;    // declare a variable pointer to an int

p = &i;    // & "address of"
```

-   Use indirection operator `*` to access and modify the value:

```c
*p = 7;      // assign value of 7 to i

*p = *p + 1; // add 1 to value of i
```

# The Indirection Operator: what not to do

-   Applying the indirection operator to an uninitialized pointer
    variable causes undefined behaviour:

    ```c
      int *p;
      printf("%d", *p);   /*** WRONG ***/
    ```

-   Assigning a value to `*p` is particularly dangerous:

    ```c
      int *p;
      *p = 1;   /*** DANGER ***/
    ```

# Pointer Assignment

-   C allows the use of the assignment operator to copy pointers of the
    same type

-   Assume that the following declaration is in effect:

    ```c
    int i, j, *p, *q;
    ```

-   Example of pointer assignment:

    ```c
    p = &i;
    ```

-   Another example of pointer assignment:

    ```c
    q = p;
    ```

-   `q` now points to the same place as `p`:

![image](/img/Year_2/Programming_Paradigms/Systems/Pointers/Double_Point.webp)

-   If `p` and `q` both point to `i`, we can change `i` by assigning a
    new value to either `*p` or `*q`:

    ```c
    *p = 1;
    ```

![image](/img/Year_2/Programming_Paradigms/Systems/Pointers/Double_Point1.webp)

```c
  *q = 2;
```

![image](/img/Year_2/Programming_Paradigms/Systems/Pointers/Double_Point2.webp)

-   Any number of pointer variables may point to the same object

# Pointers as Arguments

-   Previously we tried write a `swap()` function that could modify its
    arguments, but it didn’t work

-   By passing a pointer to a variable instead of the value of the
    variable, `swap()` can be fixed

# Swap

-   We want to write a simple function in C to swap the values of two
    integer variables, `x` and `y`

    ```c
    void swap(int a, int b) {
      int temp;

      temp = a;
      a = b;
      b = temp;
    }
    ```

-   Then call `swap(x,y);`

-   Does this work?

## A working solution

```c
void swap(int *a, int *b) {
  int temp;

  temp = *a;
  *a = *b;
  *b = temp;
}
```

-   Then call `swap(&x,&y);`

-   Remember C uses call by value, but by using pointers you can get
    around this problem as the pointer still points at the original data

# Pointers as Arguments

-   Arguments in calls of `scanf()` are pointers:

    ```c
      int i;
    ...
      scanf("%d", &i);
    ```

-   Without the `&`, `scanf()` would be supplied with the value of `i`

-   Although `scanf()`’s arguments must be pointers, it’s not always
    true that every argument needs the `&` operator:

    ```c
      int i, *p;
    ...
      p = &i;
      scanf("%d", p);
    ```

-   Using the `&` operator in the call would be wrong:

    ```c
      scanf("%d", &p);   /*** WRONG, would be the address of the pointer,
       rather than the address of the thing p points at ***/
    ```

# Arrays in C

```c
int a[10];
```

-   declares a fixed size array holding ten `int` values

    ![image](/img/Year_2/Programming_Paradigms/Systems/Pointers/Array.webp)

*   `a[i]` is the `i`th element of the array

*   `sizeof(a) = 10 * sizeof(int) = 40` bytes

*   The array is stored in memory as a single contiguous block that is
    40 bytes (10 `int`s) in size

*   Note that `sizeof(a) / sizeof(a[0])=10`

    -   This is a common way of checking the number of elements in an
        array.

    -   We can’t pass an array to a function, but we can pass a pointer
        to it. The line above will not work correctly on a pointer, so
        we will need to pass the length of the array too.

# Strings

-   Are represented as an array of characters

    ```c
    char a[] = "Hello worlds";
    char b[13];
    b = a; // Not allowed
    char *c;
    c = a;
    ```

-   will set pointer `c` to same address as `a`

-   assignment of an array to array is not supported in C

-   unlike `struct` as we saw last lecture

-   `strcpy(b,a);` first argument is the destination, ordered like
    assignment above

    -   need to `#include<string.h>`

```c
char a[] = "Hello";
strlen(a) = 5; // number of characters
sizeof(a) = 6; // includes the null character at the end
```

-   Strings are null terminated – important when allocating space to
    store them

    ```c
    printf("%s %c\n", a, a[0]);
    ```

-   Output is:

    ```c
    Hello H
    ```

-   If you use the variable `a` on its own, it represents the memory
    address of the start of the string

# Pointers, strings and arrays

![image](/img/Year_2/Programming_Paradigms/Systems/Pointers/String_Array.webp)

```c
char a[] = "Hello"; // sizeof = 6
char *a = "Hello"; // sizeof = 8  as pointers take 8 bytes
```

-   These are equivalent declarations, and create the identical bytes in
    memory, as shown above.

-   _Warning:_ using `sizeof(a)` will give `6` in the first case (the
    size of the array) and `8` in the second case (the size of the
    pointer).

-   In the second case, the string `"Hello"` is constant and cannot be
    modified.

-   Pointers and arrays are often used interchangeably

# Pointer arithmetic

-   Pointer arithmetic accounts for the base type of the items:

    ```c
    int a[10];
    int *pa;

    pa = &a[0];
    pa = a;
    ```

    ![image](/img/Year_2/Programming_Paradigms/Systems/Pointers/Pointer_Arithmetic.webp)

```c
pa = &a[1];
pa = (a+1);
```

![image](/img/Year_2/Programming_Paradigms/Systems/Pointers/Pointer_Arithmetic1.webp)

-   The two pairs of statements above are equivalent using array or
    pointer notation: `+1` translates to `+4` bytes (1 `int`)

# Strange but true

-   In C if I write `a[x]` this works by adding `x` to `a` to find the
    pointer

-   Hence `a[x]` is the same as `*(a+x)`

-   This seems fine if I write `a[2]`

-   But what if I write `2[a]`?

-   It compiles and works!

-   See `array.c`

# What about?

-   `a[-4]` ?

-   Interpreted as `*(a + -4)`

-   Is the following valid?

    ```c
    int *p;
    int i = 5;
    int j = 20;
    p = &i;
    printf("%d %d\n", p[0], p[1]);
    ```

-   What will the output be?

# Peeking at memory

-   Can look at bits of memory

-   See `peek.c`

-   Can find adjacent local variables and parameters

-   Easy to make mistakes

-   Cannot tell what data is by looking at it

# Breaking things

-   We can use random numbers to write random values in random places

-   See `break.c`

-   This can upset the system

-   Segmentation fault occurs: hardware tells OS a memory access is not
    allowed

-   Sometimes it goes on for a shockingly long time

-   Sometimes the last number is very strange: why?
