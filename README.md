# Store for Prosthetic Arms

An intuitive web application for ordering prosthetic arms with customizable arm length and material color.

> [!NOTE]
> This project was made as a part of my 6th semester project at TU

Although the site is focused on prosthetic arms, this project can be extended to loading and customizing any kind of 3D model.

Since I was working working with the Electronics Engineering department for this project, the 3D models I had access to were in SolidWork's `SLDASM` format.

To load these proprietary SolidWorks format files to the web, I had to first convert them to `STEP` files, followed by a conversion to the `GLTF` format. From their, I used the [`gltf2jsx`](https://github.com/pmndrs/gltfjsx) project to convert them to `GLB` files linked to `TSX` components.

If you would like to learn more about the project, you should probably look at these [slides](https://docs.google.com/presentation/d/1yzAGtNsKP1dFGIaE75qEuR0bYRvoaOhPUyfg9PLlXvY/edit?usp=sharing) that I made for the project presentation. These contain the Why's and What's of the project.

![Screenshot](https://i.ibb.co/bb2mxvQ/Screenshot-2024-05-02-093240.png)

> [!IMPORTANT]
> Special thanks to Aman Uddin & Shivam Karmakar, my friends from Mechanical Engineering department at TU, for helping with the SolidWorks models!
