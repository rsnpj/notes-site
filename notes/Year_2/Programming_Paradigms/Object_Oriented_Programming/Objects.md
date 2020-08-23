---
title: Objects First with Java
---

# Methods and Parameters

- Objects have operations which can be invoked (Java called them
  methods)

- Methods may have parameters to pass additional information needed to
  execute

- In Java methods are not "first class" (can’t pass them around)

- Many instances can be created from a single class

- An object have attributed: values stored in fields

- The class defines what field an object has, but each object stores
  its own set of values (the state of the object)

# Basic class structure

```java
public class ClassName
{
    Fields
    Constructors
    Methods
}
```

# Fields

- Fields store values for an object

- They are also known as instance variables

- Use the inspect option to view an object’s fields

- Fields define the state of an object

# Constructors

- Constructors initialise an object

- They have the same name as their class

- They store initial values into the fields

- They often receive external parameter values for this

```java
public TicketMachine(int ticketCost)
{
    price = ticketCost;
    balance = 0;
    total = 0;
}
```

# Accessor methods

- Methods implement the behaviour of objects

- Accessors provide information about an object

- Methods have a structure consisting of a header and a body

- The header defines the method’s signature
  `public int getPrice()`

* The body encloses the method’s statement

```java
return price;
```

# Mutator methods

- Have a similar method structure: header and body

- Used to mutate (i.e. change) an object’s state

- Achieved through changing the value of one or more fields

  - Typically contain assignment statements

  - Typically receive parameters

```java
balance=balance+amount
```

# Printing from methods

```java
System.out.println("String")
```

# If statements

```java
if(perform some test) {
    //Do these statements if the test gave a true result
}
else {
    //Do these statements if the test gave a false result
}
```

# Local variables

Fields are one sort of variable

- They store values through the life of the object

- They are accessible throughout the class

Methods can include shorter lived variables

- They exist only as long as the method is being executed

- They are only accessible from within the method

## Scope and life time

- The scope of a local variable is the block it’s declared in

- The lifetime of a local variable is the time of execution of the
  block it’s declared in

## Local variable syntax

```java
public int refundBalance()
{
    int amountToRefund; // note there is no visibility modifier here
    amountToRefund = balance;
    balance = 0;
    return amountToRefund;
}
```
