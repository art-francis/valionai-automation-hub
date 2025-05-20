
const About = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About ValionAI
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              ValionAI stands for Value, Innovation, and AI. We help businesses and agencies implement AI-powered automation to grow with confidence.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of AI specialists and business consultants work together to deliver solutions that create measurable impact. With expertise across multiple industries, we're committed to making advanced AI technology accessible and valuable for organizations of all sizes.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -z-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl -top-10 -left-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="ValionAI Team" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
