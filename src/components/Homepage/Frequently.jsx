export default function FrequentlyAsked() {
    return (
      <div className="mt-36 relative">
        <div className="text-center">
          <h1 className="text-gray-300 md:text-5xl text-3xl">
            <span className="text-lime-400">Frequently </span>Asked Questions
          </h1>
          <p className="text-gray-400 lg:text-lg md:text-base sm:text-xs mt-5">
            Still have any questions? Contact our team via 
            support@yourbank.com
          </p>
        </div>
  
        <div className="relative overflow-hidden flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-stretch mt-10 ">
            {[
              {
                question: "How do I open an account with YourBank?",
                answer:
                  "Opening an account with YourBank is easy. Simply visit our website and click on the Open an Account button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.",
              },
              {
                question: "What documents do I need to provide to apply for a loan?",
                answer:
                  "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.",
              },
              {
                question: "How can I access my accounts online?",
                answer:
                  "Accessing your accounts online is simple and secure. Visit our website and click the 'Login' button. Enter your username and password to access your accounts. If you have not registered for online banking, click on the 'Enroll Now' button and follow the registration process. If you need assistance, our customer support team is available to guide you.",
              },
              {
                question: "Are my transactions and personal information secure?",
                answer:
                  "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 lg:p-10 w-fit flex flex-col items-center"
              >
                <div className=" ">
                  <h1 className="text-neutral-300 pb-4 lg:text-xl  sm:text-lg">{item.question}</h1>
                  <div className="h-[1px] bg-neutral-800"></div>
                  <p className="text-neutral-400 pt-4 lg:text-lg sm:text-sm lg:max-w-3xl">{item.answer}</p>
                </div>
              </div>
            ))}
            
          </div>
  
        </div>
        <div className="flex justify-center relative">
          <button className=" z-20 text-gray-300 px-6 py-3 rounded-full border border-neutral-900  hover:bg-neutral-700 transition flex items-center">
            Load All FAQs <span className="ml-2">▼</span>
          </button>

          <div className="absolute z-10 bottom-0 left-0 w-full h-72 bg-gradient-to-t from-neutral-950 via-black/80 to-transparent pointer-events-none"></div>

        </div>

        
      </div>
    );
  }
  