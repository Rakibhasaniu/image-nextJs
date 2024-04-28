import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Image Optimizations</h1>
      <h2 className="text-center text-2xl">Regular Image Tag</h2>
      <img
        className="mx-auto"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmOyih_tViji8DAORiLGCtJk84vYaaUax_cHpkKS_u_SAEM6P1KLNFUN0I6zrMWaSxK3s&usqp=CAU"
        alt=""
      />
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmOyih_tViji8DAORiLGCtJk84vYaaUax_cHpkKS_u_SAEM6P1KLNFUN0I6zrMWaSxK3s&usqp=CAU"
        width={500}
        height={500}
        alt="image"
      />
    </div>
  );
};

export default GalleryPage;
