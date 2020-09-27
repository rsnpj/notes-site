---
title: Abstraction Techniques
lecturer: Steven
---

# Abstract classes and methods

- Abstract methods have abstract in the signature

- Abstract methods have no body

- Abstract methods make the class abstract

- Abstract classes can’t be instantiated

- Concrete subclasses complete the implementation

# Multiple inheritance

- Having a class inherit directly from multiple ancestors

- Each language has its own rules

- Java forbids it for classes

- Java permits it for interfaces - no competing implementation

# Interfaces as types

- Implementing classes don’t inherit code

- However implementing classes are subtypes of the interface type

- So, polymorphism is available with interfaces as well as classes

# Features of interfaces

- All methods are abstract

- There are no constructors

- All methods are public

- All fields are public, static and final

# Interfaces as specifications

- Strong separation of functionality form implementation - though
  parameter and return types are mandated

- Clients interact independently of the implementation - but clients
  can choose from alternative implementations

# Example of an interface

```java
public interface Actor
{
    /**
    * Perform the actor's regular behavior.
    * @param newActors A list for storing newly created
    *                  actors.
    */
    void act(List<Actor> newActors);

    /**
    * Is the actor still active?
    * @return true if still active, false if not.
    */
    boolean isActive();
}
```
