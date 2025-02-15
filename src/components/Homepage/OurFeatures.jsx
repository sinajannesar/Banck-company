import flesh from "../../assets/flesh.png";

export default function OurFeatures() {
  const features = [
    {
      title: "24/7 Account Access",
      description:
        "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
    },
    {
      title: "Mobile Banking App",
      description:
        "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
    },
    {
      title: "Secure Transactions",
      description:
        "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
    },
    {
      title: "Bill Pay and Transfers",
      description:
        "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
    },
  ];

  return (
    <div>
      <div>
        <div className="mt-36 flex flex-col pb-20 items-center">
          <h1 className="text-5xl text-white flex sm:justify-center lg:justify-start lg:text-left pb-4 ">
            Our <span className="text-lime-400"> Features</span>
          </h1>
          <p className="text-neutral-400 z-20">
            Experience a host of powerful features at YourBank, including
            seamless online banking, secure transactions, and personalized
            financial insights, all designed to enhance your banking experience.
          </p>
        </div>
      </div>

      <div className="flex gap-8 justify-center lg:flex-row flex-col">
        <div className="text-neutral-300 text-sm bg-neutral-900 inline-flex flex-col gap-6 p-12 rounded-2xl text-nowrap h-fit">
          <button className="p-4 hover:text-lime-400 hover:bg-neutral-950 border border-neutral-800 rounded-full">
            Online Banking
          </button>
          <button className="p-4 hover:text-lime-400 hover:bg-neutral-950 border border-neutral-800 rounded-full">
            Financial Tools
          </button>
          <button className="p-4 hover:text-lime-400 hover:bg-neutral-950 border border-neutral-800 rounded-full">
            Customer Support
          </button>
        </div>

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 text-neutral-300 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-neutral-900 rounded-2xl p-12">
              <div className="flex justify-between items-center">
                <h1 className="lg:text-2xl sm:text-lg text-nowrap">{feature.title}</h1>
                <a href="#">
                  <img src={flesh} alt="icon" />
                </a>
              </div>
              <p className="text-neutral-400 mt-8 max-w-xl lg:text-lg sm:text-sm sm:text-center lg:text-left">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
