import { Slide } from "react-awesome-reveal";


const Gallery = () => {
    const galleryImages = [
      "https://i.ibb.co/GRLgZgW/T1.jpg",
      "https://i.ibb.co/x6Tt7Rk/t2.webp",
      "https://i.ibb.co/WsFzDgZ/t3.jpg",
      "https://i.ibb.co/H4yXyZM/t4.jpg",
      "https://i.ibb.co/BZ4Ph1P/t5.jpg",
      "https://i.ibb.co/yVmhLyg/t6.jpg",
      "https://i.ibb.co/h7xk7fM/t7.jpg",
      "https://i.ibb.co/bsPpbmf/t8.jpg"
    ];

    return (
        <section className="py-12 max-w-7xl mx-auto">
            <Slide>
                <h2 className="text-4xl font-bold text-center text-blue-500 pb-12">Photo Gallery</h2>
            </Slide>
            <div className="grid grid-cols-1 mx-5 lg:mx-0 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="rounded-md shadow-md hover:opacity-75"
                />
              ))}
            </div>
        </section>
    );
};

export default Gallery;
