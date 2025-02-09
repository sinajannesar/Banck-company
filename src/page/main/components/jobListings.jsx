export default function JobListings() {
  const values = [
    {
      title: "Integrity",
      description:
        "We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.",
    },
    {
      title: "Customer Centricity",
      description:
        "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.",
    },
    {
      title: "Collaboration",
      description:
        "We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.",
    },
    {
      title: "Innovation",
      description:
        "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-36 flex flex-col pb-20 text-left sm:text-center sm:items-center">
        <h1 className="text-white text-5xl flex sm:items-center sm:justify-center  pb-4">
          Our <span className="text-lime-400">Values</span>
        </h1>
        <p className="text-white z-20 sm:text-sm sm:text">
          At YourBank, our values form the foundation of our organization and
          guide our actions. We believe in upholding the highest standards of
          integrity, delivering exceptional service, and embracing innovation.
          These values define our culture and shape the way we work together to
          achieve our goals.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-20 place-items-center ">
        {values.map((value, index) => (
          <div key={index} className="flex gap-7">
            <div className="bg-lime-400 w-[1px]"></div>
            <div>
              <h1 className="text-neutral-600 sm:text-5xl lg:text-6xl">{value.title}</h1>
              <p className="text-neutral-400 sm:text-sm lg:text-lg">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
