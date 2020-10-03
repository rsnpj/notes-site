---
title: List Patterns and Comprehension
lecturer: Lawrence
---

# Pattern matching

## Representations of lists

-   Every non-empty list is created by repeated use of the (:) operator
    "construct" that adds an element to the start of a list

    ```haskell
    [1,2,3,4] = 1 : (2: (3: (4: [])))
    ```

-   This is a representation of a linked list

-   Operations on lists such as indexing, or computing the length must
    therefore traverse the list

-   Operations such as reverse, length (!!) are linear in the length of
    the list

-   Getting the head and tail is constant time, as is (:) itself

## Pattern matching on lists

-   Lists can be used for pattern matching in function definitions

    ```haskell
    startsWithA :: [Char] -> Bool
    startsWithA ['a',_,_] = True
    startsWithA _ =False
    ```

-   Matches 3-element lists and checks if the first entry is the
    character ’a’

<Important>

Use patterns in the equations defining a function. Not in the type of function

Pattern matches in the equations don't change the type of the function. They just say how it should act on particular expressions

</Important>

-   How match ’a’ and not care how long the list is?

-   Can’t use literal list syntax. Instead, use list constructor syntax
    for matching

    ```haskell
    startsWithA :: [Char] -> Bool
    startsWithA ('a':_) = True
    startsWithA _ = False
    ```

-   `('a':_)` matches any list of length at least 1 whose
    first entry is ’a’

-   The wildcard match \_ matches anything else

-   This works with multiple entries too:

    ```haskell
    startsWithAB :: [Char] -> Bool
    startsWithAB ('a':'b':_) = True
    startsWithAB _ = False
    ```

## Binding variables in pattern matching

-   As well as matching literal values, we can also match a (list)
    pattern, and bind the values

    ```haskell
    sumTwo :: Num a => [a] -> a
    sumTwo (x:y:_) = x + y
    ```

-   Match lists of length at least two and sum their first two entries

    ```haskell
    sumTwo [1,2,3,4]
    -- introduces the bindings
    x = 1
    y = 2
    _ = [3,4]
    ```

-   Reminder: can’t repeat variable names in bindings (exception \_)

    ```haskell
    -- Not allowed
    sumThree (a:a:b:_) = a + a + b
    -- What you'd want to do here would be to have inputs a b and c, but only define through if a==b
    sumThree (a:b:c:_) | a==b = a+b+c
                       | otherwise = undefined
    -- Allowed
    second (_:a:_) = a
    ```

## What types of pattern can I match on?

-   Patterns are constructed in the same way that we would construct the
    arguments to the function

    ```haskell
    (&&) :: Bool -> Bool -> Bool
    True && True = True
    False && _ = False
    -- Used as
    a && b
    head :: [a] -> a
    head (x:_) = x
    -- Used as:
    head [1,2,3] == head(1:[2,3])
    ```

-   This is a general rule in constructing pattern matches "If I were to
    call the function, what structure do I want to match?"

-   Caveat: can only match "data constructors"

    ```haskell
    -- Not allowed
    last :: [a] -> a
    last(xs ++ [x]) = x
    ```

# Comprehensions

## Syntax

-   In maths, we often use comprehensions to construct new sets from old
    ones

    $$
    \{2,4\}=\{x | x \in\{1.5\} \wedge(x \bmod 2=0)\}
    $$

    "The set
    if all integers x between 1 and 5 such that x is even

-   Haskell supports similar notation for constructing lists

    ```haskell
    [x| x <- [1..5], x `mod` 2 ==0]
    ```

    "The list of all integers x where x is drawn from \[1..5\] and x is
    even"

-   `x <- [1..5]` is called a generator

-   Compare python comprehensions

    ```python
    [x for x in range(1,6) if (x%2)==0]
    ```

## Generators

-   Comprehensions can contain multiple generators, separated by commas

    ```haskell
    [(x,y) | x <- [1,2,3], y <- [4,5]]
    ```

-   Variables in the later generator can change faster, analogous to
    nested loops

    ```python
    l = []
    for x in [1,2,3]
        for y in [4,5]
            l.append((x,y))
    ## or
    [(x,y) for x in [1,2,3] for y in [4,5]]
    ```

-   Later generators can reference variables from earlier generators

    ```haskell
    [(x,y) | x <- [1..3], y <- [x..3]]
    ```

    "All pairs (x,y) such that $x,y\in \{1,2,3\}$ and $y\geqslant x$

## Guards

-   As well as binding variables to guards with generators, we can
    restrict the values using guards

-   A guard can be any function that returns a Bool

-   Cards and generators can be freely interspersed, but guards can only
    refer to variables to their left

```haskell
[(x,y) | x<- [1..3], even x,y <- [x..3]]
-- [](2,3), 2,3]
[(x,y) | x <- [1..3], y <- [x..3], even x, even y]
-- [(2,2)]
```

## Pattern matching in generators

-   The left hand side of a generator expression need not be a single
    variable, but allows pattern matching

-   We’ll illustrate this with the use of the library function zip

    ```haskell
    zip :: [a] -> [b] -> [(a,b)]
    zip [] _ = []
    zip _ [] = []
    zip  (x:xs) (y:ys) = (x,y) : zip xs ys
    ```
