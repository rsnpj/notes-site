---
title: GPU Programming with WebGL
lecturer: Freddie
---

<Definition name="Polygon model/mesh">
Comprises a set of connected polygons to represent an object
</Definition>

# Why WebGL

-   Cross-platform, browser-based

-   Hardware-based rendering

-   Support programmable rendering pipeline

-   Zero setup effort before you start programming

# GPU Programming

GPU

-   Typically comprises of hundreds to thousands of processors

-   Process graphics primitives in parallel

Programmable rendering pipeline

-   Vertex shader and fragment shader are programmable

-   GPU programming is also called shader programming

# Programmable rendering pipeline

![Programmable rendering pipeline](/img/Year_2/Software_Methodologies/Computer_Graphics/WebGL/pipeline.webp)

Pixels - Colour info

Fragment - Single point with more information than a pixel, e.g.
lighting effects

# Shaders

Vertex shader:

-   Manipulates per-vertex data such as vertex coordinates, normals,
    colors, and texture coordinates

Fragment shader:

-   Deals with surface points for processing

-   Main goal: calculate colour for each pixel that will display on the
    screen

Rasterization process:

-   A black box (non programmable) generates fragments from outputs of
    vertex shader

# Data Structures

<Definition name="Vertex Buffer Objects (VBOs)">
Contain the data that WebGL requires to describe the geometry that is going to be rendered
</Definition>

<Definition name="Index Buffer Objects (IBOs)">
Contain integers that use as references pointing to data in VBOs, in order to enable the reuse of the same vertex
</Definition>

Attributes, uniforms and varyings are the three types of variables that
you will find when programming with shaders

<Definition name="Attributes">  
Input variables used in the vertex shader (dynamic)
</Definition>

<Definition name="Uniforms">
Input variables available for the vertex shader and the fragment shader (static)
</Definition>

<Definition name="Varyings">
Used for passing data from the vertex shader to the fragment shader
</Definition>
