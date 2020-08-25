---
title: Geometric Transformations
---

# Transformations in Rendering Pipeline

Model Transform:

- Place the objects within a 3D scene

- Apply transformations to place objects

View transform:

- Place a virtual camera

- Define from where you would like to look at the 3D scene

Projection transform

- Change the type of virtual frustum

- Apply orthogonal/perspective projection

# Geometric transformation

Types:

- Translation - change position

- Scaling - change size

- Rotation - change orientation

- Shear - change shape

Implemented by a transformation matrix

## Translation and scaling

Translation: By vector addition

$$
\left[\begin{array}{l}{x} \\ {y}\end{array}\right]+\left[\begin{array}{l}{a} \\ {b}\end{array}\right]=\left[\begin{array}{l}{x+a} \\ {y+b}\end{array}\right]=\left[\begin{array}{l}{x^{'}} \\ {y^{\prime}}\end{array}\right]
$$

Scaling: Multiplication by constants

$$
\left[\begin{array}{l}{x^{\prime}} \\ {y^{\prime}}\end{array}\right]=\left[\begin{array}{ll}{a} & {0} \\ {0} & {b}\end{array}\right]\left[\begin{array}{l}{x} \\ {y}\end{array}\right]
$$

Rotation:

$$
\left[\begin{array}{l}{x^{\prime}} \\ {y^{\prime}}\end{array}\right]=\left[\begin{array}{cc}{\cos (\theta)} & {-\sin (\theta)} \\ {\sin (\theta)} & {\cos (\theta)}\end{array}\right]\left[\begin{array}{l}{x} \\ {y}\end{array}\right]
$$

Shearing:

$$
\left[\begin{array}{c}{x^{\prime}} \\ {y^{\prime}}\end{array}\right]=\left[\begin{array}{cc}{1} & {\operatorname{sh}_{x}} \\ {0} & {1}\end{array}\right]\left[\begin{array}{l}{x} \\ {y}\end{array}\right]+\left[\begin{array}{l}{0} \\ {0}\end{array}\right]
$$

Reflection along x axis:

$$
\left[\begin{array}{l}{x^{\prime}} \\ {y^{\prime}}\end{array}\right]=\left[\begin{array}{ll}{1} & {0} \\ {0} & {-1}\end{array}\right]\left[\begin{array}{l}{x} \\ {y}\end{array}\right]
$$

# Homogeneous Coordinates

Suppose we have a point (x,y) in the Euclidian plane. We can represent
this same point in the projective plane, and the characteristics of its
geometry and transformations are all preserved

$$
\text{Homogeneous}: (x,y,w) \rightarrow \text{Cartesian:}(\frac{x}{w},\frac{y}{w})
$$

- Point in 2D Cartesian+weight = Point P in 3D homogeneous coordinates

- Multiples of (x,y,w)

  - Form a line L in 3D

  - All homogeneous points on L represent same 2D Cartesian point

## Transformation Matrices using Homogeneous Coordinates

Rotation

$$
\left[\begin{array}{ccc}{\cos (\theta)} & {-\sin (\theta)} & {0} \\ {\sin (\theta)} & {\cos (\theta)} & {0} \\ {0} & {0} & {1}\end{array}\right]
$$

Scale

$$
\left[\begin{array}{lll}{a} & {0} & {0} \\ {0} & {b} & {0} \\ {0} & {0} & {1}\end{array}\right]
$$

Translation

$$
\left[\begin{array}{ccc}{1} & {0} & {T_{x}} \\ {0} & {1} & {T_{y}} \\ {0} & {0} & {1}\end{array}\right]
$$

Rotation about Z axis

$$
\left[\begin{array}{c}{x^{\prime}} \\ {y^{\prime}} \\ {z^{\prime}} \\ {1}\end{array}\right]=\left[\begin{array}{cccc}{\cos \theta} & {-\sin \theta} & {0} & {0} \\ {\sin \theta} & {\cos \theta} & {0} & {0} \\ {0} & {0} & {1} & {0} \\ {0} & {0} & {0} & {1}\end{array}\right]\left[\begin{array}{l}{x} \\ {y} \\ {z} \\ {1}\end{array}\right]
$$

Rotation around X axis

$$
\left[\begin{array}{c}{x^{\prime}} \\ {y^{\prime}} \\ {z^{\prime}} \\ {1}\end{array}\right]=\left[\begin{array}{cccc}{1} & {0} & {0} & {0} \\ {0} & {\cos \theta} & {-\sin \theta} & {0} \\ {0} & {\sin \theta} & {\cos \theta} & {0} \\ {0} & {0} & {0} & {1}\end{array}\right]\left[\begin{array}{l}{x} \\ {y} \\ {z} \\ {1}\end{array}\right]
$$

Rotation around Y axis

$$
\left[\begin{array}{c}{x^{\prime}} \\ {y^{\prime}} \\ {z^{\prime}} \\ {1}\end{array}\right]=\left[\begin{array}{cccc}{\cos \theta} & {0} & {\sin \theta} & {0} \\ {0} & {1} & {0} & {0} \\ {-\sin \theta} & {0} & {\cos \theta} & {0} \\ {0} & {0} & {0} & {1}\end{array}\right]\left[\begin{array}{l}{x} \\ {y} \\ {z} \\ {1}\end{array}\right]
$$

3D Translation

$$
\left[\begin{array}{c}{x^{\prime}} \\ {y^{\prime}} \\ {z^{\prime}} \\ {1}\end{array}\right]=\left[\begin{array}{cccc}{1} & {0} & {0} & {a} \\ {0} & {1} & {0} & {b} \\ {0} & {0} & {1} & {c} \\ {0} & {0} & {0} & {1}\end{array}\right]\left[\begin{array}{l}{x} \\ {y} \\ {z} \\ {1}\end{array}\right]
$$

3D Scaling

$$
\left[\begin{array}{c}{x^{\prime}} \\ {y^{\prime}} \\ {z^{\prime}} \\ {1}\end{array}\right]=\left[\begin{array}{cccc}{a} & {0} & {0} & {0} \\ {0} & {b} & {0} & {0} \\ {0} & {0} & {c} & {0} \\ {0} & {0} & {0} & {1}\end{array}\right]\left[\begin{array}{l}{x} \\ {y} \\ {z} \\ {1}\end{array}\right]
$$
