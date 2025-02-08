export default function Job_Listings() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-36 flex flex-col pb-20">
        <h1 className="text-white text-5xl pb-4  ">
          Our <span className="text-lime-400">Values</span>
        </h1>
        <p className="text-white z-20 ">
          At YourBank, our values form the foundation of our organization and
          guide our actions. We believe in upholding the highest standards of
          integrity,
          <br /> delivering exceptional service, and embracing innovation. These
          values define our culture and shape the way we work together to
          achieve our goals.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-20">
        <div className="flex  ">
          <div className="bg-lime-400 w-[1px]"></div>
          <div>
            <h1 className="text-neutral-600 text-6xl">Integrity</h1>
            di
            <p className="text-neutral-400">
              We conduct ourselves with utmost honesty, transparency, and
              ethical behavior. We <br /> believe in doing what is right for our
              customers, colleagues, and stakeholders, even <br /> when faced
              with difficult choices.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="bg-lime-400 w-[1px]"></div>
          <div>
            <h1 className="text-neutral-600 text-6xl">Customer Centricity</h1>
            <p className="text-neutral-400">
              Our customers are at the heart of everything we do. We are
              dedicated to <br /> understanding their needs, providing
              personalized solutions, and delivering <br /> exceptional service
              that exceeds expectations.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="bg-lime-400 w-[1px]"></div>
          <div>
            <h1 className="text-neutral-600 text-6xl">Customer Centricity</h1>
            <p className="text-neutral-400">
              We foster a collaborative and inclusive work environment, where
              teamwork and <br /> diversity are celebrated. By leveraging the unique
              strengths and perspectives of our <br /> employees, we drive innovation
              and achieve greater success together.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="bg-lime-400 w-[1px]"></div>
          <div>
            <h1 className="text-neutral-600 text-6xl">Innovation</h1>
            <p className="text-neutral-400">
              We embrace change and constantly seek innovative solutions to meet
              the evolving <br /> needs of our customers. We encourage our employees to
              think creatively, challenge <br /> conventions, and explore new ideas to
              drive the future of banking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
