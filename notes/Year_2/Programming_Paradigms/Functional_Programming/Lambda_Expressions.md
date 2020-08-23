---
title: Lambda Expressions
---

## Nameless function

- As well as giving functions name, we can also construct them without
  names using lambda expressions

  ```haskell
  -- the nameless function that takes a number x and returns x+x
  \x -> x+x
  ```

- Use of a $\lambda$ for nameless functions comes from lambda
  calculus, which is a theory of functions

- There is a whole formal system on reasoning about computation using
  $\lambda$ calculus

- It is also a way of formalising the idea of lazy evaluation

## Use cases for unnamed functions

- Formalises idea of functions defined using currying

  ```haskell
  add x y = x + y
  -- Equivelently
  add = \x -> (\y -> x+y)
  ```

- The latter form emphasises the idea that add is a function of one
  variable that returns a function

- Also useful when returning a function as a result

  ```haskell
  const :: a -> b -> a
  const x _ =x
  -- Or, perhaps more naturally
  const x = \_ -> x
  ```

  In this function const eats an a and returns a function which eats a
  b and always returns the same a

- What good is a function which always returns the same value?

- Often when using higher-order functions, we need a base case that
  always returns the same value

  ```haskell
  length' :: [a] -> Int
  length' xs = sum(map(const 1) xs)
  ```

  The length of a list can be obtained by summing the result of
  calling const 1 on every item in the list

- We will see more of this when we look at higher order functions

- Also useful where the function is only used once

  ```haskell
  -- Generate the first n positive odd numbers
  odds : [Int] -> [Int]
  odds n = map f[0..n-1]
      where
          f x = x*2 + 1
  ```

- Can be simplified (removing the where clause)

  ```haskell
  odds : [Int] -> [Int]
  odds n = map(\x -> x*2 +1) [0..n-1]
  ```

## Translating between the two forms

- It is always possible to translate between named functions and
  arguments, and the approach using $\lambda$ expressions of one
  argument

- Just move the arguments to the right hand side and put it inside a
  $\lambda$, repeat with the remained until you’re done

  ```haskell
  f a b c = ...
  -- Move formal aguments to right hand side with a lambda
  f \a b c ->
  -- Move remaining arguments into new lambdas
  f = \a -> (\b -> (\c -> ...))
  ```

- Which option fits more naturally is often a style choice

- Pattern matching is supported in the argument list in exactly the
  same way as normal functions

  ```haskell
  head = \(x:_) -> x
  ```

- I sometimes find it easier to think about composing functions or
  currying by explicitly writing $\lambda$ expressions
