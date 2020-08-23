---
title: Structures
---

- Collections of one or more variables forming a new data structure,
  the closest thing C has to an O-O class

- The elements of a structure (its _members_) aren’t required to have
  the same type

- The members of a structure have names; to select a particular
  member, we specify its name

- In some languages, structures are called records, and members are
  known as fields

# Structure: example

- For example a 2D point has `x` and `y` components but it is useful
  to create a single data structure to group them:

- Declares template for a point

  ```c
  struct point {
    int x;
    int y;
  };
  ```

- With members `x` and `y`

# Structures

```c
struct point {
  int x;
  int y;
};
```

- Create an instance of the point data structure:

  ```c
  struct point a_point;
  ```

- Initialise a `struct`:

  ```c
  struct point a_point = {5, 6};
  ```

- Access to variable members of the structure:

  ```c
  a_point.x = 4;
  a_point.y = 3;
  ```

# Structure and scope

```c
struct point {
  int x;
  int y;
};
```

- Each structure represents a new scope

- Any names declared in that scope won’t conflict with other names in
  a program

- In C terminology, each structure has a separate name space for its
  members

# Operations on structures

- The `.` used to access a structure member is actually a C operator

- It takes precedence over nearly all other operators

- Example:

  ```c
  z = 20*a_point.x;
  ```

- The `.` operator takes precedence over the `*` operator

# Assignment of structures

- The other major structure operation is assignment:

  ```c
  point2 = point1;
  ```

- The effect of this statement is to copy `point1.x` into `point2.x`,
  `point1.y` into `point2.y` and so on

- The structures must have compatible types

# Nested structures

- Declare a template for a rect(angle)

  ```c
  struct rect{
    struct point pt1;
    struct point pt2;
  };
  ```

- Create an instance of the point data structure:

  ```c
  struct rect a_window;
  ```

- Access to variable members of the structure:

  ```c
  a_window.pt1.x = 4;
  ```
