import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { team } from '@/data';
const TeamSection = () => {
  return (
    <section className="bg-gray-50 py-16">
    <div className="container mx-auto px-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Dedicated Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
          
            <div className="relative group">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-80 "
              />
           
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center px-4">
                  {member.name} is an exceptional {member.role} known for their dedication and expertise. Reach out to them for more!
                </p>
              </div>
            </div>
  
            {/* Content */}
            <div className="p-6 text-center relative -mt-10 bg-white rounded-t-3xl">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <div className="flex justify-center space-x-4 mt-4">
            
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default TeamSection;
