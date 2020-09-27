---
title: Scene Construction and Projection
lecturer: Freddie
---

# World and Local Coordinate Systems

<Definition name="Local Coordinates">
Each object is constructed on a dedicated coordinate system
</Definition>

<Definition name="World Coordinates">
Apply a single coordinate system to all objects globally.
</Definition>

The purpose of this is to reduce complication for 3D scene construction

# View Transform

Shift the origin of the world coordinate system to the view origin. The
view origin is where our eye (or virtual camera) is located with respect
to the world origin

The purpose of this is to allow a user (application) to specify how 2D
rendered images of a 3D scene will be generated

# Projection Transform

**Visible Region** - Define which part of a 3D scene will be currently
visible

**Object appearance** - Modify or preserve object shape properties

![image](/img/Year_2/Software_Methodologies/Computer_Graphics/Scene/Projection_Transform.webp)

# Define a view frustum

Projection transform is done based on a view frustum and it is defined
by six planes (near, far, top, bottom, right and left)

![image](/img/Year_2/Software_Methodologies/Computer_Graphics/Scene/View_Frustum.webp)

# Types of View Frustum

-   The shape and extent of the frustum determines the type of view
    projection from the 3D scene space to the 2D screen

-   If the far and near planes have the same dimensions, then the
    frustum will determine an orthographic projection. Otherwise, it
    will be a perspective projection

![image](/img/Year_2/Software_Methodologies/Computer_Graphics/Scene/Frustum_Shape.webp)

# Viewport Transform

Map projected view to the available space in the computer screen, i.e.
viewport, typically referring to the canvas

![image](/img/Year_2/Software_Methodologies/Computer_Graphics/Scene/Viewport_Transform.webp)

**NDC** - Normalized Device Coordinates. Its x and y coordinates
represent the location of your vertices on a normalised 2D screen space

# Model-View-Projection Transformation

![image](/img/Year_2/Software_Methodologies/Computer_Graphics/Scene/Model-View-Projection_Transformation.webp)

# Scene Graph

Scene Graph

-   Is a collection of nodes in a graph or tree structure

-   A tree node may have many children but often only a single parent,
    with the effect of a parent applied to all its child nodes

-   An operation performed on a group automatically propagates its
    effect to all of its members
