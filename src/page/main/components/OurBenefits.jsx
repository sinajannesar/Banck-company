import film from "../../../assets/Icon Container2.png";
import data from "../../../assets/Icon Container.png";
import kif from "../../../assets/Container.png";
import lamp from "../../../assets/lamp.png";
export default function OurBenefits() {
  const value = [
    {
      img: film,
      title: "Competitive Compensation",
       description:
       "We provide a competitive salary package that recognizes the skills and \n expertise of our employees. YourBank believes in rewarding exceptional \n performance and offering opportunities for financial growth.",
    },
    {
      img: lamp,
      title: "Health and Wellness",
      description:
        "We prioritize the health and well-being of our employees by providing \n comprehensive medical, dental, and vision insurance plans. We also offer \n wellness programs, gym memberships, and resources to support a healthy \n lifestyle.",
    },
    {
      img: kif,
      title: "Retirement Planning",
      description:
        "YourBank is committed to helping employees plan for their future. We offer \n a retirement savings plan with a generous employer match to help them \n build a secure financial foundation for the long term.",
    },
    {
      img: data,
      title: "Work-Life Balance",
      description:
        "We understand the importance of maintaining a healthy work-life balance.\n YourBank offers flexible work arrangements, paid time off, parental leave, \n and other programs that support employees in managing their personal \n and professional commitments.",
    },
  ];

  return (
    <div>
      <div>
        <div className="mt-36 flex flex-col pb-20 text-left ">
          <h1 className="text-5xl text-white flex sm:items-center sm:justify-center lg:justify-start lg:text-left pb-4">
            Our <span className="text-lime-400"> Benefits</span>
          </h1>
          <p className="text-neutral-500 z-20  ">
            At YourBank, we value our employees and are dedicated to their
            well-being and success. We offer a comprehensive range of benefits
            designed to <br /> support their personal and professional growth.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-24 sm:grid-cols-1 place-items-center ">
          {value.map((value, index) => (
            <div key={index} className="flex flex-col h-full">
              <div className="bg-neutral-900 rounded-3xl p-12 flex-1">
                <div className="flex items-center space-x-5 ">
                  <img src={value.img} alt="" />
                  <h1 className="text-neutral-300 sm:text-5xl lg:text-2xl ">
                    {value.title}
                  </h1>
                </div>

                <p className="text-neutral-500 sm:text-sm lg:text-lg text-wrap">
                {value.description.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
