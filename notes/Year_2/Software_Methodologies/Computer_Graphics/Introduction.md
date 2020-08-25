---
title: Introduction to Computer Graphics
---

Study methods for digitally synthesizing and manipulating visual content
and the generation of 2D images for display

Although it often refers to 3D computer graphics, it also studies 2D
computer graphics and certain image processing.

# Modern Graphics hardware setting

- Typically, the CPU runs graphics applications, e.g. a computer game
  and continuously generates graphics commands

- These commands are buffered and executed by the graphics processor
  one at a time

# Graphics processor

A graphics processor accepts graphics commands from the CPU and executes
them

Graphics commands may include:

- Draw point

- Draw polygon

- Draw text

- Clear frame buffer

- Change drawing colour

It draws the rendered results into the frame buffer

# Types of graphics commands

A graphics processor handles two types of drawing commands

**2D graphics commands**

- Based on 2D coordinates

- When objects overlap each other in x and y, the current object being
  drawn will obscure objects drawn previously

- Frame buffer operations, such as copy/move/clear contents

**3D Graphics commands:**

- Based on 3D coordinates

- When objects overlap each other in x and y, the z values of the
  object determine their visibility

# Frame Buffer

<Definition name="Frame Buffer">
A memory space that stores a grid. Each grid cell stores an intensity or colour value and is mapped to a pixel on the screen
</Definition>

<Definition name="Frame Buffering">
To support interactive graphics applications, more than one frame buffer is required. While an image in the frame buffer is being displayed, the next image can be rendered into the other frame buffer
</Definition>

# Stereoscopic vision

<Definition name="Stereopsis">
The impression of depth that is perceived when a scene is viewed with both eyes. 
This has application in VR headsets. 
In many cases this needs 4 frame buffers to allow for double buffering and displaying to both eyes, however with the example of a google cardboard it just needs 2 as it is just displaying to 1 screen.
</Definition>
