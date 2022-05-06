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
        <div className="flex flex-col justify-center h-full">
          <div className="text-lg text-center">
            <p className="mb-4 font-semibold">
              You will now be redirected to Stripe website to complete your
              onboarding progress...
            </p>
            <div className="mt-5 max-w-3xl mx-auto font-light">
              Strap is a trusted platform for financial services and financial
              products. It's used by over 1,000,000 financial institutions and
              financial services companies, including ...
            </div>
            <div className="max-w-3xl mx-auto items-center justify-center mt-10 trusted-by">
              <div className="grid grid-cols-3 gap-5">
                {maxLength(randomize(companies), 6).map((company, index) => (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: company.icon,
                    }}
                    key={index}
                    className="w-8/12 hover:grayscale-0 duration-300"
                  ></span>
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
