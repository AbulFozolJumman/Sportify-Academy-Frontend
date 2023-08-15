import { Slide } from "react-awesome-reveal";

const Gallery = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-10">
        <hr className="border-dotted border-2 border-green-300 w-64 mx-auto"></hr>
        <Slide>
          <h2 className="text-4xl font-bold text-center text-blue-500">Photo Gallery</h2>
        </Slide>
        <hr className="border-dotted border-2 border-green-300 w-64 mx-auto mb-8 mt-2"></hr>
        <div className="-m-1 flex flex-wrap flex-col md:flex-row md:-m-2">
          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center hover:rotate-[360deg] duration-700"
                src="https://i.ibb.co/bsPpbmf/t8.jpg" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center hover:rotate-[360deg] duration-700"
                src="https://i.ibb.co/x6Tt7Rk/t2.webp" />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center hover:rotate-[360deg] duration-700"
                src="https://i.ibb.co/yVmhLyg/t6.jpg" />
            </div>
          </div>
          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center hover:rotate-[360deg] duration-700"
                src="https://i.ibb.co/H4yXyZM/t4.jpg" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center hover:rotate-[360deg] duration-700"
                src="https://i.ibb.co/BZ4Ph1P/t5.jpg" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center hover:rotate-[360deg] duration-700"
                src="https://i.ibb.co/WsFzDgZ/t3.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
