---
title: Types and Classes
---

# Types

- Mathematics and programming rely on the notion of types

- Tell us how to interpret a variable

- Provide restrictions on valid operations

```java
int a = 4;
int b = 3;

double c = a/b;

/* c=1.0 */
```

```java
double a = 4;
double b = 3;

double c = a/b;

/* c=1.33333... */
```

The result depends on input types
Since computers represent everything as sequences of bits, types are
also required to define what these bit streams mean.

Types are required to know what a bit sequence means

- **Implementation** - Find the correct implementation of, for example
  ’+’

- **Correctness** - Check whether an operation on some data is valid
  and/or well-defined or check whether a code fragment is correct
  (type safety)

- **Documentation** - Document the code’s semantics (for the reader)

## Types in Haskell

Haskell is **strongly, statically typed** - every well-formed expression
has exactly one type, these types are known at compile time

- `Bool` the two logical values `True` and
  `False`

- `Bool -> Bool` the set of all functions that take
  `Bool` as input and produce a `Bool` as output

- We will see more standard types soon

### Attaching Types

Haskell’s notation for "e is of type T" is spelt

```haskell
e :: T
-- False is of type Bool
False :: Bool
-- not is of type Bool -> Bool
not :: Bool -> Bool
```

### What type does X have?

Every valid expression is Haskell must have a valid type.

You can ask GHCi what the type of the expression is with the command
`type expr`

```haskell
Prelude> :type sum
sum :: Num a => [a] -> a
```

## All the types in Haskell

- `Bool` - Logical values
- `Char` - Single Characters
- `String` - Strings of characters
- `Int` - fixed-precision integers
- `Integer` - Arbitrary-precision integers
- `Float` - Floating-point numbers

## List Types

A list is a sequence of values of the same type\
The type of the elements is unrestricted, for example we can have lists
of lists

```haskell
[['a'],['b','c']] :: [[Char]]
```

## Tuple types

A tuple is a sequence of values of different types

```haskell
(False,True) :: (Bool, Bool)
(False, 'a', True) :: (Bool, Char, Bool)
```

# Type Checking

## Statically Typed Language

We check correctness at translation time. Invalid types mean
"translation error"

```haskell
-- Invalid
foo = 1 + "f"
```

## Dynamically Typed Language

We check correctness at run time

Invalid types only detected if we "use them"

```python
def foo():
    return 1 + "f"
```

## How the translator determines the type of expression

**Explicit Annotation**: Programmer annotates all variables with type
information (C/Java)

**Type inference**: Translator infers the types of variables based on
the operations used (e.g. Haskell/ML)

**Duck typing**: Translator/runtime just tries the operation, if it
succeeds, that was a valid type

# Functions Have Types

## Programming With Functions

**Functions of one argument "unary"** Map from one type to another

```haskell
not :: Bool -> Bool
and :: [Bool] -> Bool
```

**Functions of two arguments "binary** Map from two types to another

```haskell
add :: (Int, Int) -> Int
```

# Currying

**Currying** - Turn a function of n arguments into a function of n-1
arguments

Why currying?

- Easier to reason about and prove things with functions of only one
  variable

- Flexibility in programming makes composing functions simpler

- Related to partial evaluation where we bind some variables in an
  n-ary function to a value

## Function types

A function is a mapping from values of one type to values of another
type, for example

```haskell
not :: Bool -> Bool
add :: (Int, Int) -> Int
```

## Curried Functions

Functions with multiple arguments are also possible by returning
functions as results

```haskell
add' :: Int -> (Int -> Int)
add' x y = x+y
```

Add and add’ produce the same final result, but add takes its two
arguments at the same time, whereas add’ takes them one at a time

# Simple functions

```haskell
foo :: Int -> Int
foo x = x + 3
```

Two parts

1.  Type declaration `foo :: Int -> Int`
2.  Definition `foo x = x + 3`

Any type declaration you write will be checked by the type inference
engine. Error if incorrect

Reasoning about types is a core part of understanding (and writing)
Haskell code so always decorate function definitions with their type

Syntax conventions:

- Function application is so important that it is written as quietly
  as possible: with whitespace

- All functions are called in prefix form: "`foo a b`" not
  "`a foo b`"

- But there is special syntax for binary functions

# Binary functions

All binary functions (which have type `a -> b -> c`) can be
written as infix functions

## Symbol only names

Names consisting only of symbols

```haskell
1 + 2 -- infix notation
(+) 1 2 -- prefix notation
False && True  -- infix notation
(&&) False True -- prefix notation
```

## "Normal" names

Names with alpha-numeric characters

```haskell
mod 3 2 -- prefix notation
3 `mod` 2 -- infix notation using backticks
```

# Conditional Expressions

As in most programming languages, functions can be defined using
conditional expressions

```haskell
abs :: Int -> Int
abs n = if n >= 0 then n else -n
-- you always have to have the else branch
-- avoids ambiguity problems in the type checker
```

# Guarded Equations

As an alternative to conditions, functions can also be defined using
guarded equations

```haskell
abs n | n >= 0    =n
      | otherwise = -n
```

Otherwise is True

# Pattern Matching

Many functions have a particularly clear definition using pattern
matching on their arguments

```haskell
not :: Bool -> Bool
not False = True
not True = False
```

Functions can often be defined in many different ways using pattern
matching. For example

```haskell
(&&) :: Bool -> Bool -> Bool
True && True = True
False && False = False
False && True = False
False && False = False
```

Or more compactly

```haskell
True && True = True
_    && _    = False
```

And more efficiently

```haskell
True  && b = b
False && _ = False
```

\_ is a wildcard - matches anything

# Polymorphism

Recall that haskell is strictly typed, which looks like a problem for
length

```haskell
length [True, False, True] -- :: [Bool] -> Int ?
length [1,2,3] -- :: [Int] -> Int
```

Polymorphic types solve this problem

```haskell
Prelude> :type length
length :: [a] -> Int
```

This says that length takes a list of values of any type a and returns
an int

## Contrast with OO Languages

<Definition name="Parametric Polymorphism">
Write a single implementation of a function that applies generically and identically to values of any type
</Definition>

<Definition name="ad-hoc polymorphism">
Write a single implementation of a function that applies generically and identically to values of any type
</Definition>

<Definition name="Subtype polymorphism">
Relate datatypes by some "substitutability". Write a function for a supertype instance. Now all subtypes can use it. This is duck typing
</Definition>

# Haskell Classes

<Important>
The words class and instance are the same as in object oriented programming languages, but their meaning is very different
</Important>

<Definition name="Class">
A collection of types that support certain, specified overloaded operations called methods
</Definition>

<Definition name="Instance">
A concrete type that belongs to a class and provided implementations of the required methods  
</Definition>

- Compare: type "a collection of related values"

- This is not like subclassing and inheritance in Java/C++

- Closest to a combination of Java interfaces and generics

- Also similar to C++ "Concepts"

## Type classes

```haskell
Num -- Numeric Types
Eq -- Equality Types
Ord -- Ordered Types
```

## Defining Classes

We define the interface the type should support

```haskell
class Foo a where:
    isfoo :: a -> Bool
```

Now we say how types implement this

```haskell
instance Foo Int where
    isfoo _ = False

instance Foo Char where
    isfoo c = c `elem` ['a' .. 'c']
```

- Can add new interfaces to old types, and new types to old interfaces

- Contrasted to Java, where if I implement a new interface it is very
  difficult to make existing classes implement it

- Classes (interfaces) can provided default implementation

- Example, the `Eq` class representing equality requires
  both (==) and (/=)

- Since `a == b` $\Leftrightarrow$ `not (a /= b)`,
  we can provide default implementations and only require that an
  instance implements one

```haskell
class Eq a where
    (==) :: a -> a -> Bool
    x == y = not (x /= y)
    (/=) :: a -> a -> Bool
    x /= y = not (x == y)

-- instance for MyType only needs to provide one of (==) or (/=)
instance Eq MyType where
    x == y = ..
```
