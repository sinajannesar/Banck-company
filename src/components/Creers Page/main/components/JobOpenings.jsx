import bag from "../../../../assets/bag.png";

export default function JobOpenings() {
  const value = [
    { text: "Bachelor's degree in Business, Finance, or a related field" },
    {
      text: "Minimum of 3 years of experience in sales or relationship management in the banking industry",
    },
    { text: "Proven track record of meeting and exceeding sales targets" },
    { text: "Excellent interpersonal and negotiation skills" },
    { text: "Strong knowledge of banking products and services" },
  ];

  return (
    <div className="mt-36 pb-20">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl text-lime-400 pb-4">Job Openings</h1>
        <p className="text-neutral-500 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
          Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. 
          Join our team and be part of shaping a brighter future in the banking industry.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-7 mt-10">
        
        {["Relationship Manager", "IT Security Specialist", "Relationship Manager"].map((title, index) => (
          <div key={index} className="bg-neutral-900 rounded-3xl p-8 space-y-6">
            <div className="space-y-3">
              <h1 className="text-neutral-300 text-3xl">{title}</h1>
              <div className="flex flex-wrap text-neutral-300 gap-3">
                <p className="bg-neutral-950 rounded-full px-4 py-2">Location: India</p>
                <p className="bg-neutral-950 rounded-full px-4 py-2">
                  {title === "IT Security Specialist" ? "Department: IT Security" : "Department: Retail Banking"}
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-2xl text-neutral-300 mb-3">About This Job</h1>
              <p className="text-neutral-400 leading-relaxed text-base">
                {title === "IT Security Specialist"
                  ? "As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents."
                  : "As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals."}
              </p>
            </div>

            <div>
              <h1 className="text-2xl text-neutral-300 mb-4">Requirements & Qualifications</h1>
              <div className="space-y-3">
                {value.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img src={bag} className="w-6 h-6" alt="icon" />
                    <p className="text-neutral-400">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button className="rounded-full bg-lime-300 px-6 py-3 text-sm hover:bg-lime-200 transition-all">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
