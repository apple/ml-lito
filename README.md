# LiTo: Surface Light Field Tokenization

This website accompanies the research paper: 

**LiTo: Surface Light Field Tokenization, ICLR 2026.**<br>
[Jen-Hao Rick Chang*](https://scholar.google.com/citations?user=F5Z9kN4AAAAJ&hl=en), [Xiaoming Zhao*](https://xiaoming-zhao.com/), [Dorian Chan](https://dorianchan.com/), [Oncel Tuzel](https://scholar.google.com/citations?user=Fe7NTe0AAAAJ&hl=en).

### [Project Page](https://apple.github.io/ml-lito/) | [Paper](https://arxiv.org/abs/2603.11047)

## Abstract

We propose a 3D latent representation that jointly models object geometry and view-dependent appearance. Most prior works focus on either reconstructing 3D geometry or predicting view-independent diffuse appearance, and thus struggle to capture realistic view-dependent effects. Our approach leverages the fact that RGB-depth images provide samples of a surface light field. By encoding random subsamples of this surface light field into a compact set of latent vectors, our model learns to represent both geometry and appearance within a unified 3D latent space. This representation can reproduce view-dependent effects such as lighting reflections and Fresnel reflections under complex lighting. We further train a latent flow matching model on this representation to learn its distribution conditioned on a single input image, enabling the generation of 3D objects with appearances consistent with the lighting and materials in the input. Experiments show that our approach achieves higher reconstruction quality and better separation of geometry and appearance than existing methods.


## License

- Repository is released under [LICENSE](./LICENSE). 
- All generated samples provided here are licensed under [LICENSE_generated_samples](./LICENSE_generated_samples).

## Acknowledgements

Our codebase is built using multiple opensource contributions, please see [ACKNOWLEDGEMENTS](./ACKNOWLEDGEMENTS) for more details.


## Citations

```
@inproceedings{chang2026lito,
    author    = {Jen-Hao Rick Chang$^\ast$ and Xiaoming Zhao$^\ast$ and Dorian Chan and Oncel Tuzel},
    title     = {{LiTo: Surface Light Field Tokenization}},
    booktitle = {International Conference on Learning Representations},
    year      = {2026},
}
```