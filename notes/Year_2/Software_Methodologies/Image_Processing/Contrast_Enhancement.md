---
title: Point intensity transforms for contrast enhancement
---

# Functional point transforms

Processing each pixel value, p, individually using a mathematical
function

$$
p'=f(p)
$$

as a point transform operator transforms the image
from one state to another

![image](/img/Year_2/Software_Methodologies/Image_Processing/Contrast_Enhancement/functional.png)

Also known as intensity transform functions

# Image enhancement

Goal: make the image look better so we can view and process the visual
information with greater clarity

Image enhancement is subjective. It depends on

- The information required by the visual task

- The physical characteristics of the image

- The user’s prior knowledge/experience

- The user’s intuition and judgement

Evaluation methodology: perceived quality of results

Common poor image characteristics: poor lighting and noise

# Dynamic range

<Definition name="Range of a sensor">
The set of all possible intensity values of the images it captures
</Definition>

A good image should utilise the full (or most of the) sensor’s range

<Definition name="Dynamic range of a sensor">
The largest (possible) signal value divided by the smallest (possible) signal value
</Definition>

Increasing the dynamic range improves contrast

# Conventions

Pixels can either be represented as:

- Floats from 0 to 1

- Integers from 0 to 255

# Logarithmic transform

The logarithmic transform replaces each pixel value with its logarithm

$$
I_{\text {output}}(i, j)=\log I_{\text {input}}(i, j)
$$

In practice, we control the range using the function:

$$
I_{\text {output}}(i, j)=c \cdot \log \left[1+\left(e^{\sigma}-1\right) I_{\text {input}}(i, j)\right]
$$

with scaling parameters $\sigma$ and c $\sigma$ controls the range of
values onto which the logarithmic function is applied

c normalises the output to the range \[0,255\]. That is,

$$
c=\dfrac{255}{R}
$$

Where R is the maximum of

$$
\log \left[1+\left(e^{\sigma}-1\right) I_{\text {input}}(i, j)\right]
$$

![image](/img/Year_2/Software_Methodologies/Image_Processing/Contrast_Enhancement/log.png)

The dynamic range of this scene exceeded that of the sensor/camera (dark
foreground - bright background)

As a result of a (usually automatic) decision on the camera exposure,
the dynamic range of the dark parts was compressed

![image](/img/Year_2/Software_Methodologies/Image_Processing/Contrast_Enhancement/log1.png)

The logarithmic transform in this example:

- brightens the foreground (which consists of dark pixels) spreading
  low pixel values over a wider range

- compresses the background pixel range (the bright high values)

Applying the logarithmic transform yields poor results: information loss
and worse visualisation

# Application: X-ray images

X-ray sensors return values given by an exponential function

$$
I(i, j)=I_{o} \cdot \exp (-f(i, j))
$$

$I_o$ is the X-ray source intensity

f = material attenuating properties (object thickness and material
density)

The logarithmic transform cancels the exponent

$$
\log I_{o u t}=\log \left[I_{o} \cdot(\exp (-f(i, j))]\right.
$$

As a result, the image gives a linear mapping of the material properties

# Exponential transform

The exponential transform is the inverse of the logarithmic transform

It replaces each pixel value with its exponent

$$
I_{\text {output}}(i, j)=\exp \left(I_{\text {input}}(i, j)\right)
$$

In practice, we use a variable basis and scaling

$$
I_{\text {output}}(i, j)=\mathrm{c} \cdot\left[(1+\alpha)^{I_{\text {input}}(i, j)}-1\right]
$$

where $1+\alpha$ is the basis and c the scaling factor

$I_{input}(i,j)=0$ gives

$$
I_{\text {output}}(i, j)=\mathrm{c} \cdot\left[(1+\alpha)^{I_{\text {input}}(i, j)}\right]=c
$$

We subtract 1 to prevent offset in output

Basis $>1$ is required for functions suitable for out purpose (decrease
the dynamic range of dark regions - increase the dynamic range of bight
regions)

![image](/img/Year_2/Software_Methodologies/Image_Processing/Contrast_Enhancement/exp.png)

The exponential transform decreases the dynamic range of dark regions
whilst increasing the dynamic range in light regions\
Enhances detail in high value (bright) areas

# Power-law (’raise to power’) transform

Raise each pixel value to a fixed power

$$
I_{\text {output}}(i, j)=c \cdot\left(I_{\text {input}}(i, j)\right)^{r}
$$

for $r>1$ it enhances (spreads) high value intensities whilst
compressing low value intensities

For $r<1$ it enhances (spreads) low value intensities whilst compressing
high value intensities

The ’power-law’ transform has similar effect the logarithmic (when
$r<1$) or to the exponential (when $r>1$)

# Application: gamma correction

The power-law transform is used in digital photography to correct the
tonality of an image

r is traditionally called the gamma value, and the process gamma
correction

The transform $f(x)=x^\gamma$ with $\gamma<1$ weights the intensities
towards higher (brighter) values

- an underexposed photo can be corrected using gamma correction with
  $\gamma<1$

The transform $f(x)=x^y$ with $\gamma>1$ weights the intensities toward
lower(darker) values

- An overexposed photo can be corrected using gamma correction with
  $\gamma>1$

![image](/img/Year_2/Software_Methodologies/Image_Processing/Contrast_Enhancement/gamma.png)
