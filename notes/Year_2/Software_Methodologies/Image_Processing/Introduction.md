---
title: Introduction to Image Processing
lecturer: Ioannis
---

<Definition name="Assistive Imaging">
Enhancement, Restoration, representation or transformation of visual data to aid in visualisation and interpretation by humans or as pre-processing step for computer vision  
</Definition>

<Definition name="Computer Vision">
Automatic interpretation of visual data using computers without human intervention  
</Definition>

<Definition name="Image">
A multidimensional signal, commonly containing visual information (in general regularly sampled)  
</Definition>

**Pixel** - Picture Element

**Spatial Resolution**: $X\times Y$ (horizontal by vertical) dimensions
of the image

Direct computation gives the number of pixels used to cover the visual
space captured by the image relates to the sampling of the image signal

**Colour Resolution** - The dimension of the colour space - known as
quantization

**Temporal Resolution**: In continuous capture systems (e.g. video) the
number of images captured in a given time period

# Representational Requirements

Scenes have to be sampled (spatially, temporally) and quantized in what
is essentially an analogue to digital conversion.

The sampling must be high enough to preserve useful information in the
image. Quantisation must avoid aliasing

# Aliasing

As resolution is limited, there is aliasing effects.

![image](/img/Year_2/Software_Methodologies/Image_Processing/Introduction/Aliasing.webp)

An analogue signal will always suffer some form of aliasing in the
digitisation process - at some level

![image](/img/Year_2/Software_Methodologies/Image_Processing/Introduction/Aliasing1.webp)

Aliasing effects both the connectivity and topological measurement image
features - noise is introduced. Image processing algorithms must be able
to cope with the problems arising from this form of sampling noise

# Colour (or intensity) quantization

At each pixel there is a voltage reading on the image sensor that
relates to the amount and wavelength of light received.

It is discretised into a number of bins representing a level of
intensity.

# Image colour channels

Red, green abd blue light intensity for each (x,y) pixel gives an
{r,g,b} integer vector.

Colour image = 3-channel image (x,y,i) for i={0,1,2}

Greyscale = 1 channel

# Pixel co-ordinates

Greyscale images: image(x,y) = value

Colour images: image(x,y) = (r,g,b)

Pixel location: (x,y) position in the column by row coordinate system.

Positive co-ordinate system: origin = top left

Origin is not universal: OpenCV uses top left and:

column (c) = x co-ordinate

row (r) = y co-ordinate

# What do pixel values actually represent in image data?

**Intensity/colour**: Wavelength or intensity of light

**Infra-red**: Infra-red electromagnetic intensity

-   Near and far infra-red are different wavelengths

-   Visualisation may require colour mapping

**Medical CT/ MRI** - Pixel values are proportional to the absorption
characteristics of tissue in relation to a signal sent through the body

-   Segmentation

-   Visualisation of volumetric data

**Radar** - Pixel values are proportional to target distance from the
sensor and reflectivity

-   Calibrating values correspond to distance

-   Noise

**Depth/distance** - Pixel values encode distance of object/surface from
sensor

-   Explicit 3D information rather than just a 2D projection, but
    partial only view of the captured 3D object

**Scientific** - Pixel values encode measurements from a given sensor

-   Representation: positive and negative floating point image values

-   Visualisation: colour mapping/negative value scaling
