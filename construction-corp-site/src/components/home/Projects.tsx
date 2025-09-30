import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "オフィスビル",
      image: "/images/modern-office.png",
      description: "最新設備を備えた快適なオフィス空間を実現しました。",
    },
    {
      id: 2,
      title: "住宅団地",
      image: "/images/Residential Complex.png",
      description: "住みやすさと環境に配慮した住宅街を開発しました。",
    },
    {
      id: 3,
      title: "ショッピングモール",
      image: "/images/shopping-mall.png",
      description: "地域の暮らしを豊かにする大型商業施設を建設しました。",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-10 text-brand-dark">
          実績紹介
        </h2>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-light rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-serif">
                  {project.title}
                </h3>
                <p className="text-base text-gray-700 font-sans">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            loop={true} 
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="bg-gray-light rounded-lg shadow-md overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 font-serif">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-700 font-sans">
                      {project.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
