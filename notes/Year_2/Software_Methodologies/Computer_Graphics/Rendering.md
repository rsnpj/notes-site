---
title: Graphics Pipeline for Interactive Rendering
---

# Rendering in Computer Graphics

Rendering pipeline comprises of operations converting 3D geometry into a
2D pixel representation for display

Two types:

-   Fixed Function - Use a standard set of operations to efficiently
    generate pixel representation from 3D polygons based on their
    visibility

-   Programmable - Focus on the flexibility in programming and the
    utilisation of the parallel processing capability of the GPU

Fixed Function Pipeline

![image](/img/Year_2/Software_Methodologies/Computer_Graphics/Rendering/Fixed-Function.webp)

Programmable Rendering Pipeline

![image](/img/Year_2/Software_Methodologies/Computer_Graphics/Rendering/programmable.webp)

# Local and World Coordinate

-   **Geometry Database** - Each object in the scene is first created
    using a software program in its local coordinate system

-   **World coordinate transformation** - Transforms each object to a
    common world coordinate system

# Back Face Removal

Remove surfaces of a solid object which are facing away from the viewer.
They may contribute to approximately half of the total number of
surfacers in a scene

<Definition name="Front Faces">
Object surfaces facing the viewer
</Definition>

<Definition name="Back faces">
Object surface facing away from the viewer
</Definition>

# Clipping

Clipping is a process to determine the portion of an object lying inside
(or outside) a region called the clip region

<Definition name="Clip region">
Typically either a window on a screen or a view volume
</Definition>

The Cohen-Sutherland Line-Clipping Algorithm works by dividing the area
around the clip region as follows

![image](/img/Year_2/Software_Methodologies/Computer_Graphics/Rendering/Clipping.webp)

-   This allows us to quickly identify lines to be trivially
    accept/reject

-   If both ends of the line are in the clip region then the line can be
    accepted

-   If two of the code words of a line have the same bit set to 1, the
    line is completely outside and can be rejected

-   Otherwise, the line needs to be clipped

# Rasterization

Break a primitive into pixel fragments

![image](/img/Year_2/Software_Methodologies/Computer_Graphics/Rendering/Rasterization.webp)

-   Consider rasterizing a triangle $(v_1,v_2,v_3)$

-   Interpolate $v_1$ and $v_2$ to produce an interpolated point for
    each row of pixels between $v_1$ and $v_2$

-   We do the same for $v_1$ and $v_3$ as well as $v_3$ and $v_2$

-   Each pair of interpolated points on a row is called a scanline

-   We then interpolate between the pair of interpolated points to form
    pixel fragments

-   Interpolate along the primitive edges followed by the interior
    pixels between pairs of interpolated points (scanlines)

-   Such interpolation is referred to as bilinear interpolation

# Primitive Drawing on a 2D screen

Painter’s algorithm

-   Paint distance parts of a scene before parts which are nearer to
    users, however this can have ambiguity

## Z-Buffering

The most popular hidden surface removal method is the z-buffer method,
which is implemented by the majority of existing graphics accelerators

The z-buffer method requires two buffers:

-   z-buffer (or depth buffer): determine the nearest primitive fragment
    at each screen pixel

-   image buffer: store the colour value of the nearest primitive
    fragment at each pixel

Finally, the shading step computes the colour of each visible primitive
at each pixel location based on some shading methods

# Specular lighting

-   Bright spot on the object

-   Resultant reflection of the incident light concentrates in a local
    region

Calculation

$$
\text{Specular Lighting } = K_s\times I \times \cos^n(\phi)
$$

-   $K_s$ - Specular reflection coefficient
-   $N$: surface normal at P
-   $I$: light intensity
-   $\phi$: angle between V and R
-   $\cos^n(\phi)$ - The large the value of N, the smaller the cos value

![image](/img/Year_2/Software_Methodologies/Computer_Graphics/Rendering/Specular_Lighting.webp)
