import "./styles/main.css";
import companies from "./companies";

function App() {

  const randomize = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const maxLength = (array, length) => {
    return array.slice(0, length);
  };

  return (
    <div class="dashboard__wrapper">
      <aside class="dashboard__sidebar"></aside>
      <main class="dashboard__main">
        <div className="flex flex-col justify-between h-full">
          <div className="text-lg">
            <p className="mb-4">
              FTX initially focused on creating an exchange for institutional
              traders and crypto-native investors who were early adopters in the
              cryptocurrency market. The company built a robust product
              portfolio, including crypto derivatives, options, volatility
              products, prediction markets, leveraged tokens, and an OTC desk.
              After two years of rapid growth, FTX turned its attention to the
              broader consumer investor community.
            </p>
            <p className="mb-4">
              “We want FTX to become a trusted mainstream experience. To
              accomplish that, we need to deliver checkout experiences that are
              as clean as the experiences consumers have come to expect from
              leading retailers,” said Tristan Yver, head of strategy at FTX.
              “We partnered with Stripe to help us transform what could be
              suboptimal crypto experiences into ones that exceed consumer
              expectations.”
            </p>
          </div>
          <div className="trusted-by">
            <div className="trusted-by__title">
            <h2 className="text-lg font-mono ml-5 text-slate-400 uppercase mb-4">
                <a className="underline" target="_blank" href="https://stripe.com/docs/security/stripe">Strap</a> Is Trusted by
              </h2>
               {/* 5 to 6 icons is suggested */}
              <div className="grid grid-cols-5 gap-5">
                {maxLength(randomize(companies), 5).map((company, index) => (
                  <a
                    dangerouslySetInnerHTML={{
                      __html: company.icon,
                    }}
                    key={index}
                    href={company.url}
                    target="_blank"
                    className="filter grayscale w-8/12 hover:grayscale-0 duration-300"
                  ></a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;


// function getCompayDetails() {
//   const svg = document.querySelector(
//     ".CustomerProfile__customerLogo"
//   ).innerHTML;
//   const link = window.location.href;

//   return {
//     icon: svg,
//     url: link,
//   };
// }