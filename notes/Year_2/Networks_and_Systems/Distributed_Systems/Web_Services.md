---
title: From middleware to web services
lecturer: Freddie
---

# Middleware for system integration

RPC, Java RMI and Python PYRO

-   Closely follow the traditional program development process that
    creased an application based on

    1.  Program libraries integration

    2.  Parameter passing

-   Do not require developers to deal with socket programming when
    implementing programs that support remote communication

-   Have a performance issue due to synchronous communication

CORBA

-   Still follow the programming library approach

-   Similar to Java RMI: provide object request broker (ORB) define the
    interface definition language (IDL)

-   Integrate components developer by different programming languages

# Message-Oriented Middleware (MOM)

-   We need something more loosely coupled

-   Communication using messages

-   Messages stored in message queues

-   Message servers decouple client and server

-   Various assumptions about message content

-   Provides data persistence, if server goes down, when it comes back
    up it will send the info again

![image](/img/Year_2/Networks_and_Systems/Distributed_Systems/Web/MOM.webp)

## Properties of MOM

Asynchronous interaction

-   Client and server are only loosely coupled

-   Messages are queued

-   Good for application integration

Support for reliable delivery service

-   Keep queues in persistent storage

Processing of messages by intermediate message server(s)

-   May do filtering, transforming, logging

-   Networks of message servers

Natural for database integration

Choose which requests get processed and combine duplicate requests into
one request (in a similar way to multicasting)

# Java Message Service (JMS)

-   API specification to access MOM implementations

-   Two modes of operations

-   Point to point

    -   One to one communication

-   Publish/subscribe

    -   One to many communication

-   JMS server implements JMS API

-   JMS clients connect to JMS servers

-   Java objects can be serialised to JMS messages

# Web services

Use well known web standards for distributed computing

Communication

-   Message content expressed in XML

-   Simple Object Access Protocol (SOAP) - lightweight protocol for
    sync/async communication

Service description

-   Web Services Description Language (WSDL) - interface description for
    web services

Service Discovery

-   Universal Description Discovery and Integration (UDDI) - directory
    with web service description in WSDL

![image](/img/Year_2/Networks_and_Systems/Distributed_Systems/Web/Web_Services.webp)

## Attributed of Web-Services

Web based protocols - Web services based on HTTP are designed to work
over the public internet. The use of HTTP for transport means these
protocols can traverse firewalls, and can work in a heterogeneous
environment

Interoperability - SOAP defines a common standard that allows differing
systems to interoperate

XML based - The Extensible Markup Language is a standard framework for
creating machine readable documents

# REST and JSON

REST

-   An architectural style, treating the web as a resource centric
    application

-   Each URL in a RESTful application represents a resource

JSON

-   An open standard format that uses human readable text to transmit
    data objects consisting of attribute-value pairs

-   Provide lightweight communication
