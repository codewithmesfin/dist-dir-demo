import { GetStaticPaths, GetStaticProps } from "next";
import { Project, projects } from "@/data/projects"; // Adjust the import path
import Image from "next/image";
import Link from "next/link";
import { HiLocationMarker, HiClock, HiCurrencyDollar } from "react-icons/hi";
import { FaStar, FaRegStar } from "react-icons/fa"; // For star ratings
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  
  const clientRating = 4; 

  return (
    <>
   <Header/>

    <div className="bg-primary text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px]">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-center">{project.title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        {/* Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              This is a detailed overview of the project. Add descriptive text
              here that explains the purpose, scope, and execution of the
              project.
            </p>
          </div>

          
          <div>
            <h2 className="text-3xl font-semibold mb-6">Key Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Location */}
              <div className="bg-secondary  shadow-slate-100 border-slate-100 border p-4 rounded-lg flex items-center gap-4">
                <HiLocationMarker className="text-4xl text-blue-500" />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-300">{project.location || "N/A"}</p>
                </div>
              </div>
             
              <div className="bg-secondary shadow-md shadow-slate-100 border-slate-100 border p-4 rounded-lg flex items-center gap-4">
                <HiClock className="text-4xl text-yellow-500" />
                <div>
                  <h3 className="font-semibold text-lg">Duration</h3>
                  <p className="text-gray-300">{project.duration || "N/A"}</p>
                </div>
              </div>
              {/* Client Rates */}
              <div className="bg-secondary shadow-md shadow-slate-100 border-slate-100 border p-4 rounded-lg flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <HiCurrencyDollar className="text-4xl text-green-500" />
                  <div>
                    <h3 className="font-semibold text-lg">Client Rates</h3>
                    <p className="text-gray-300">${project.rates || "N/A"}</p>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  {Array.from({ length: 5 }, (_, index) =>
                    index < clientRating ? (
                      <FaStar key={index} className="text-yellow-400 text-xl" />
                    ) : (
                      <FaRegStar
                        key={index}
                        className="text-gray-500 text-xl"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl text-center font-semibold mb-6">Gallery</h2>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {[project.image, project.image, project.image].map((img, index) => (
              <div
                key={index}
                className="relative w-full h-64 overflow-hidden rounded-lg"
              >
                <Image
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="flex justify-center">
          <div className="bg-secondary shadow-lg shadow-slate-100 border-slate-100 border rounded-lg p-8 w-full max-w-lg flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-600 mb-4">
              <Image
                src="/CEO2.jpg" 
                alt="Client Profile"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <p className="italic text-lg text-gray-300 leading-relaxed">
              The team exceeded our expectations. The project was completed on
              time and with excellent quality
            </p>
            <p className="mt-4 font-semibold">- John Doe</p>
          </div>
        </div>

        {/* Back to Projects */}
        <div className="mt-12 text-center">
          <Link href="/#projects">
          <button className="bg-orange-400 text-white py-2 px-6 rounded-lg hover:bg-primary border-black border shadow-md shadow-black focus:outline-none focus:ring-2 focus:ring-primary">Back to Projects</button>
              
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const project = projects.find((p) => p.id === parseInt(id as string));

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project },
  };
};

export default ProjectDetail;
