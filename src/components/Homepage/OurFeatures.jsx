export default function OurFeatures() {
  return (
    <div>
      <div>
        <div className="mt-36 flex flex-col pb-20 ">
          <h1 className="text-5xl text-white flex sm:items-center sm:justify-center lg:justify-start lg:text-left pb-4">
            Our <span className="text-lime-400"> Features</span>
          </h1>
          <p className="text-neutral-300 z-20">
            Experience a host of powerful features at YourBank, including
            seamless online banking, secure transactions, and personalized
            financial insights, all designed to enhance your banking experience
          </p>
        </div>
      </div>
      <div>
        <div className="text-neutral-300 text-sm bg-neutral-900 ">
          <button className=" hover:text-lime-400">Online Banking</button>
          <button className=" hover:text-lime-400">Financial Tools</button>
          <button className=" hover:text-lime-400">Customer Support</button>
        </div>
      </div>
    </div>
  );
}
