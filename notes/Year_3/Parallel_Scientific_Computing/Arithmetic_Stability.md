---
title: Arithmetic Stability of an Implementation
lecturer: Tobias
---

Let $f_M(x)$ be the outcome of an implementation of $f(x)$ evaluated on a machine, i.e. $f_M(x)$ is subject to round-off errors. The absolute error is

$$
e=f_M(x)-f(x)
$$

The relative error is

$$
\dfrac{e}{f(x)}=\dfrac{f_M(x)-f(x)}{f(x)}=\dfrac{f_M(x)}{f(x)}-1
$$

<Definition name="Algorithmic Stability">

The accumulation of round off errors doesn't explode

</Definition>
