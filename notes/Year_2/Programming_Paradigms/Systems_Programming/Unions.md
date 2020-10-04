---
title: Unions
lecturer: Konrad
---

-   A `union`, like a structure, consists of one or more members,
    possibly of different types

-   The compiler allocates only enough space for the largest of the
    members, which overlay each other within this space

-   Assigning a new value to one member alters the values of the other
    members as well

## Memory use

-   The structure `s` and the union `u` differ in just one way

-   The members of `s` are stored at different addresses in memory

-   The members of `u` are stored at the same address

    ```c
    union {
      int i;
      double d;
    } u;

    struct {
      int i;
      double d;
    } s;
    ```

## Accessing members

-   Members of a union are accessed in the same way as members of a
    structure:

    ```c
    u.i = 82;
    u.d = 74.8;
    ```

-   Changing one member of a union alters any value previously stored in
    any of the other members

-   Storing a value in `u.d` causes any value previously stored in `u.i`
    to be lost

-   Changing `u.i` corrupts `u.d`

## Properties

-   The properties of unions are almost identical to the properties of
    structures

-   Like structures, unions can be copied using the `=` operator, passed
    to functions and returned by functions

## Initialization

-   By default, only the first member of a union can be given an initial
    value

-   How to initialize the i member of u to 0:

    ```c
    union {
      int i;
      double d;
    } u = {0};
    ```

## Designated initializers

-   Designated initializers can also be used with unions

-   A designated initializer allows us to specify which member of a
    union should be initialized:

    ```c
    union {
      int i;
      double d;
    } u = {.d = 10.0};
    ```

-   Only one member can be initialized, but it doesn’t have to be the
    first one

## For space-saving

-   Unions can be used to save space in structures

-   Suppose that we’re designing a structure that will contain
    information about an item that’s sold through a gift catalogue

-   Each item has a stock number and a price, as well as other
    information that depends on the type of the item:

| Item    | Information                               |
| ------- | ----------------------------------------- |
| Books:  | Title, author, number of pages            |
| Mugs:   | Design                                    |
| Shirts: | Design, colors available, sizes available |

-   A first attempt at designing the `catalog_item` using `struct`:

    ```c
    struct s_catalog_item {
      int stock_number;
      double price;
      int item_type;
      char title[TITLE_LEN+1];
      char author[AUTHOR_LEN+1];
      int num_pages;
      char design[DESIGN_LEN+1];
      int colors;
      int sizes;
    };
    ```

```c
struct u_catalog_item {
  int stock_number;
  double price;
  int item_type;
  union {
    struct {
      char title[TITLE_LEN+1];
      char author[AUTHOR_LEN+1];
      int num_pages;
    } book;
    struct {
      char design[DESIGN_LEN+1];
    } mug;
    struct {
      char design[DESIGN_LEN+1];
      int colors;
      int sizes;
    } shirt;
  } item;
};
```

## Accessing nested structure

-   This nesting of unions does make accessing the struct fields a
    little more complex:

    ```c
    struct s_catalog_item  c;

    c.title

    struct u_catalog_item c;

    c.item.book.title
    ```

# Using Enumerations to Declare “Tag Fields”

-   Enumerations can be used to mark which member of a union was the
    last to be assigned

-   In the number structure, we can make a kind member an enumeration
    instead of an `int`:

    ```c
    struct number {
      enum {INT_KIND, DOUBLE_KIND} kind;
      union {
        int i;
        double d;
      } u;
    };
    ```

```c
struct number a_number ={INT_KIND, {10}};

if (a_number.kind == INT_KIND)
  printf("a_number is %d value %d \n",
     a_number.kind, a_number.u.i );

a_number.kind = DOUBLE_KIND;

a_number.u.d = 150.03;
if (a_number.kind == DOUBLE_KIND)
  printf("a_number is %d value %6.3f \n",
     a_number.kind, a_number.u.d );
```

# Creating new types

-   `typedef` can be used to assign names to types

    ```c
    typedef unsigned char byte;
    byte b1 = 12;
    ```

-   You can use this with `struct`s and `union`s too

    ```c
    typedef struct coords {
      int x;
      int y;
    } point;
    point p1={5,4};

    typedef union id_thing {
      int i;
      double d;
    } number;
    number n = {.d =10.0};
    ```
