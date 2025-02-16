export default function Ghablfooter() {
  return (
    <div className="flex flex-col w-fit h-fit  sm:items-center sm:text-center sm:gap-8 lg:flex-row  justify-center border border-neutral-800 bg-neutral-900 lg:ml-60  p-10 lg:p-20 mt-36 rounded-2xl lg:mb-10 ">
      <div>
        <h1 className="lg:text-4xl sm:text-2xl text-neutral-100 lg:text-nowrap sm:text-wrap">
          Start your Career with
          <span className="text-lime-400"> YourBank today</span>!
        </h1>
        <p className="text-neutral-400 text-sm lg:text-lg mt-4">
          Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
          pellentesque elit. Pellentesque eget ut imperdiet nulla <br />{" "}
          penatibus. Nascetur viverra arcu sed amet cursus purus.
        </p>
      </div>
      <button className="text-neutral-900 bg-lime-300 hover:bg-lime-200 transition-all text-nowrap rounded-4xl p-3 sm:self-center">
        Open Account
      </button>
    </div>
  );
}
