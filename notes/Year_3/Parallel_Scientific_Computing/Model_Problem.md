---
title: Our model problem
lecturer: Tobias
---

# N-body problem

Given N bodies in space, they interact with each other through gravity. Let body 1 be described by its position $p_1=(p_{x,1},p_{y,1},p_{z,1})^T \in \mathbb{R}^3$ and it's mass $m_1$

Furthermore, it has a certain velocity $v_1=(v_{x,1},v_{y,1},v_{z,1})^T \in \mathbb{R}^3$. Body 2 is described in the same way. Body 1 experiences a force

$$
F_1=G\dfrac{m_1\cdot m_2}{|p_1-p_2|^2_2}\cdot \dfrac{(p_2-p_1)}{|p_1-p_2|_2}
$$

Note that:

$$
|p_1-p_2|_2=\sqrt{(p_{x,1}-p_{x,2})^2,(p_{y,1}-p_{y,2})^2,(p_{z,1}-p_{z,2})^2}
$$

and

$$
p_{2}-p_{1}=\left(\begin{array}{l}
p_{x, 2}-p_{x, 1} \\
p_{y, 2}-p_{y, 1} \\
p_{z, 2}-p_{z, 1}
\end{array}\right)
$$

If there are more than two objects, then Body 1 also gets a contribution from the rest of the objects. The forces simply sum up. We also know that [^1]

[^1]: Newton, I., Motte, A., Machin, J.: The Mathematical Principles of Natural Philosophy , B. Motte, 1729.

$$
\delta_t v_1(t)=\dfrac{F_1}{m_1}
$$

$$
\delta_t p_1(t)=v_1(t)
$$

Assume we had a force $\hat{F}$ and we computed its directional force as $\hat{F}(p_2-p_1)$. This would yield a force with a direction. However, the further away the two bodies from each other the bigger this vector. This is not what we want, so we need to normalise the direction vector. We have to make it unit length, this is achieved by the division through $|p_1-p_2|_2$. We end up with a normalisation of $r^{-3}$ overall. Oner of the *r*s is removed again via the direction vector.

<Definition name="Ordinary differential equation">

A differential equation containing one or more functions of **one independent variable** and the derivatives of those functions

</Definition>

# Time discretisation

<Definition name="Discretisation">

Creating a model in discrete time increments from one with continuous time

</Definition>

This is done as otherwise a computer can't simulate every infinitely small detail in practice.

Our computer program simulation the space bodies then reads is as follows:

```c
// only the declaration here
void calcForce(
    double pAx, pAy, pAz, // position body A [in]
    double pBx, pBy, pBz, // position body B [in]
    double& Fx, double& Fy, double& Fz // force [out]
);
    // time stepping loop
    ...
double t = 0.0;
while (t < T) { // we assume T is defined
    for (int n=0; n<N; n++) { // for every body in system
    // reset forces
    force[n][0] = 0.0; force[n][1] = 0.0;
    force[n][2] = 0.0;
    for (int m=0; m<N; m++) { // compute interactions
        if (n!=m) {  // but only with other objects
            double Gx, Gy, Gz;
            calcForce( p[n][0], p[n][1], p[n][2],p[m][0], p[m][1], p[m][2], Gx, Gy, Gz
            );
            force[n][0] += Gx; // accumulate forces
            force[n][1] += Gy; force[n][2] += Gz;
        }
    }  // forces are there, now we can
}  // update particles (don’t mix)
for (int n=0; n<N; n++) {  // for every body in system
    p[n][0] += dt * v[n][0];
    p[n][1] += dt * v[n][1];
    p[n][2] += dt * v[n][2];
    v[n][0] += dt * F[n][0]/m[n];
    v[n][1] += dt * F[n][1]/m[n];
    v[n][2] += dt * F[n][2]/m[n];
}
```

This algorithm is implementing **explicit Euler**, discussed later in the course

# Numerical vs analytical solutions

<Definition name="Analytical solution">

Solving an equation via formula rewrites such as integration rules

</Definition>

<Definition name="Numerical solution">

Solving an equation for one set of initial values right from the start

</Definition>

In the most part computers yield numerical solutions, the exception to this are **computer algebra systems**, but we will not be studying these in this course.
