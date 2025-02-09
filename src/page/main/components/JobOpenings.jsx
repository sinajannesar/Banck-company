import bag from "../../../assets/bag.png";
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
    <div>
      <div>
        <div className="mt-36 flex flex-col pb-20 text-left ">
          <h1 className="text-5xl text-lime-400 flex sm:items-center sm:justify-center lg:justify-start lg:text-left pb-4">
            Job Openings
          </h1>
          <p className="text-neutral-500   ">
            Explore exciting job openings at YourBank, where we value talent,
            innovation, and a passion for customer service. Join our team and be
            part of shaping <br /> a brighter future in the banking industry
          </p>
        </div>
        <div className="grid lg:grid-cols-2  sm:grid-cols-1 place-items-center gap-7">
          <div className="bg-neutral-900 rounded-3xl p-6 pl-12">
            <div className="space-y-3.5 ">
              <h1 className="text-neutral-300 text-3xl ">
                Relationship Manager
              </h1>
              <div className="flex text-neutral-300 gap-3">
                <p className="bg-neutral-950 rounded-full p-3">
                  Location : India
                </p>
                <p className="bg-neutral-950 rounded-full p-2 flex items-center ">
                  Department : Retail Banking
                </p>
              </div>
            </div>

            <div className="space-y-5 mt-13">
              <h1 className="text-2xl text-neutral-300 ">About This Job</h1>
              <p className="text-neutral-400 text-lg text-nowrap">
                As a Relationship Manager at YourBank, you will be responsible
                for developing <br /> and maintaining relationships with our
                valued customers. You will proactively <br /> identify their
                financial needs and offer tailored solutions to help them
                achieve <br /> their goals. We are seeking individuals with
                excellent communication skills, a <br /> strong sales acumen,
                and a passion for delivering exceptional customer service.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-5">
              <h1 className="text-2xl text-neutral-300">
                Requirements & Qualifications
              </h1>
              <div className="space-y-5">
                {value.map((value, index) => (
                  <div key={index} className="flex space-x-2.5">
                    <img
                      src={bag}
                      className="w-6 h-6 flex items-center justify-centerf"
                    />
                    <p className="text-neutral-400 ">{value.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <button className="rounded-full bg-lime-300 p-4 text-sm mt-12">
                Apply Now
              </button>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-3xl p-6 pl-12">
            <div className="space-y-3.5 ">
              <h1 className="text-neutral-300 text-3xl ">
                IT Security Specialist
              </h1>
              <div className="flex text-neutral-300 gap-3">
                <p className="bg-neutral-950 rounded-full p-3">
                  Location : India
                </p>
                <p className="bg-neutral-950 rounded-full p-2 flex items-center ">
                  Department: Information Technology
                </p>
              </div>
            </div>

            <div className="space-y-5 mt-13">
              <h1 className="text-2xl text-neutral-300 ">About This Job</h1>
              <p className="text-neutral-400 text-lg text-nowrap">
                As an IT Security Specialist at YourBank, you will be
                responsible for ensuring the <br /> security and integrity of our
                information systems. You will develop and <br /> implement security
                protocols, conduct vulnerability assessments, and respond <br /> to
                security incidents. We are seeking individuals with a strong
                technical <br /> background, knowledge of cybersecurity best practices,
                and a commitment to <br /> maintaining the confidentiality of customer
                data.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-5">
              <h1 className="text-2xl text-neutral-300">
                Requirements & Qualifications
              </h1>
              <div className="space-y-5">
                {value.map((value, index) => (
                  <div key={index} className="flex space-x-2.5">
                    <img
                      src={bag}
                      className="w-6 h-6 flex items-center justify-centerf"
                    />
                    <p className="text-neutral-400 ">{value.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <button className="rounded-full bg-lime-300 p-4 text-sm mt-12">
                Apply Now
              </button>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-3xl p-6 pl-12">
            <div className="space-y-3.5 ">
              <h1 className="text-neutral-300 text-3xl ">
                Relationship Manager
              </h1>
              <div className="flex text-neutral-300 gap-3">
                <p className="bg-neutral-950 rounded-full p-3">
                  Location : India
                </p>
                <p className="bg-neutral-950 rounded-full p-2 flex items-center ">
                  Department : Retail Banking
                </p>
              </div>
            </div>

            <div className="space-y-5 mt-13">
              <h1 className="text-2xl text-neutral-300 ">About This Job</h1>
              <p className="text-neutral-400 text-lg text-nowrap">
                As a Relationship Manager at YourBank, you will be responsible
                for developing <br /> and maintaining relationships with our
                valued customers. You will proactively <br /> identify their
                financial needs and offer tailored solutions to help them
                achieve <br /> their goals. We are seeking individuals with
                excellent communication skills, a <br /> strong sales acumen,
                and a passion for delivering exceptional customer service.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-5">
              <h1 className="text-2xl text-neutral-300">
                Requirements & Qualifications
              </h1>
              <div className="space-y-5">
                {value.map((value, index) => (
                  <div key={index} className="flex space-x-2.5">
                    <img
                      src={bag}
                      className="w-6 h-6 flex items-center justify-centerf"
                    />
                    <p className="text-neutral-400 ">{value.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <button className="rounded-full bg-lime-300 p-4 text-sm mt-12">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
