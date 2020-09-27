---
title: Texture Mapping
lecturer: Freddie
---

- A method for adding surface details

- Aims at increasing realism

  - Relying on mesh geometry to create such details is expensive

  - Lighting/shading models are not enough

- Associate 2D information with 3D surface

# Texture and 3D object

- Texture image: 2D array of colour values (Texels)

- Assigning texture coordinates (s,t) at vertex with object
  coordinates (x,y,z,w)

  - Use interpolated (s,t) for texel lookup at each pixel

  - Use the retrieved colour value to modify a polygon’s colour (or
    other surface properties)

  - Can be done manually or automatically

<Definition name="Texture Atlas">
A large image containing a collection of sub-images, each of which is a texture for some part of an object
</Definition>

# Types of texture mapping methods

<Definition name="Mapping">
Identify the correspondence between a texel and a screen pixel
</Definition>

There are two types of mapping methods

<Definition name="Forward texture mapping">
Compute 3D positions of the texture points and then project them onto the image plane
</Definition>

<Definition name="Inverse Texture Mapping">
Select every pixel in the image plane and identify which point of the texture image is projected there
</Definition>

# Coordinate systems in CG application

<Definition name="Parametric Coordinates">
A logical coordinate system for processing the surface and the internal space of a 3D object
</Definition>

<Definition name="Texture Coordinates">
Used to identify points in the image to be mapped
</Definition>

<Definition name="Local or World Coordinates">
Used to position 3D objects
</Definition>

<Definition name="Window Coordinates">
Where the final output image is really produced
</Definition>

# Types of texture mapping

## Forward Texture Mapping

Mapping from texture coordinates to points on a surface, need three
functions:

$$
x=x(s,t)$$ $$y=y(s,t)$$ $$z=z(s,t)
$$

Main Problem - Adjacent texture points may project onto non adjacent image points, thus
creating a non coloured image area

## Backwards texture mapping

Given a point on an object, we identify to which point in the texture
map it corresponds, need a map of the form

$$
s=s(x,y,z)$$ $$t=t(x,y,z)
$$

Good - Make sure every object has a corresponding texel, particularly
visibility of an object point is considered.

Bad - Such functions are difficult to find in general

## Two part mapping process

Map a texture image to a complicated shape to create texture mapping
coordinates (UV map is difficult)

Break the texture mapping into two parts

- Map the texture to a simple intermediate surface

- The textured intermediate surface is then mapped to the object

## Second mapping

Map from intermediate object

- Normals from intermediate to actual

- Normals from actual to intermediate

- Vectors from center of intermediate

# MIP Mapping

Use an image pyramid to precompute coarse versions of a texture, store
the whole pyramid in a single block of memory. This helps with
aliasing.

Advantages of MIP mapping

- Reduce memory consumption of running application

- Support anti aliasing, offering better output quality of a CG
  application

- Only 1/3 more space required

# Normal Mapping

Normal vectors encoded as an image. Generate visually 3D effect by
applying lighting to perturbed normal vectors on the object surface.

# Bump mapping

- Treat the texture as a single valued height function

- Compute the normal from the partial derivatives in the texture

- The heights encode the amount by which to perturb N in the (u,v)
  directions of the parametric space describing the object surface

# Normal Map vs Bump Map

Bump Map:

- Texture (greyscale) encodes height

- Modifies the geometric normal

- Harder to implement

- Easier to specify

Normal map:

- Texture (RGB) encodes normal directly

- Replaces the normal

- Easier to implement

- Harder to specify

# Displacement Mapping

- Use texture map to actually move surface points

- Geometry must be displaced before visibility is determined

- Done as a preprocess or with complicated vertex/fragment shader
  implementation

# Environment Maps

- We can simulate reflections by using the direction of the reflected
  ray to index a spherical texture map at "infinity"

- Assumes that all reflected rays begin from the same point

# Light mapping

- Realistic lighting can be achieved

- Every single bit of expensive lighting calculation is done
  pre-process time, avoiding overhead

- At run times, all calculations are done by hardware and so is very
  fast

- Visual quality of the lighting is directly dependent on the size of
  the light map texture(s)

- For every triangle, a diffuse texture map is applied first and then
  a light map is usually modulated with it

# Fog maps

- Dynamic modification of light maps

- Put fog objects into the scene

- Compute where they intersect with geometry and paint the fog density
  into a dynamic light map

- Apply the fog map as with a light map
