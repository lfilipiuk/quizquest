import LandingCard from "../ui/LandingCard";

import landingImage1 from "../../assets/landing-card-1.png";
import landingImage2 from "../../assets/landing-card-2.png";
import landingImage3 from "../../assets/landing-card-3.png";
import landingImage4 from "../../assets/landing-card-4.png";
import {Link} from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className={"max-w-4xl md:mx-auto mx-2"}>
        <header className={"flex flex-col gap-5 my-10"}>
          <h1 className={"font-medium text-center md:text-4xl text-3xl mx-auto w-3/4 md:my-5"}>
            Become a top-tier
            <span className={"block"}>developer with fun quizzes</span>
          </h1>
          <p className={"text-slate text-center text-xl md:w-3/5 w-4/5 mx-auto"}>
            {" "}
            Quizzes to help you master development theory with ease. Learning
            has never been so fun and so easy.
          </p>
          <Link
            className={
              "py-3 px-6 w-44 rounded-full bg-quizBlue text-white font-medium w-40 shadow-lg mx-auto text-center md:mb-10 hover:-translate-y-0.5 transition duration-300 ease-in-out"
            }
            to={"/home"}
          >
            Start learning
          </Link>
        </header>

        <main>
          <div className={"grid md:grid-cols-2 gap-6"}>
            <LandingCard
              title={"Many quizzes."}
              subtitle={
                "From basics though intermediate concepts, all the way to mastery."
              }
              background={"bg-red-50"}
              image={landingImage1}
            />

            <LandingCard
              title={"Simple learning experience."}
              subtitle={
                "Get a question and decide if you know or not."
              }
              background={"bg-green-50"}
              image={landingImage2}
            />

            <LandingCard
              title={"New quizzes added regularly."}
              subtitle={
                "Have an idea for a quiz? Let us know and we’ll add it."
              }
              background={"bg-cyan-50"}
              image={landingImage3}
            />

            <LandingCard
              title={"Level up."}
              subtitle={
                "Gain points, buy rewards, learn with friends. Coming soon."
              }
              background={"bg-orange-50"}
              image={landingImage4}
            />
          </div>

          <div className={"text-center text-slate text-lg my-10"}>
            <p>+ a lot more...</p>
          </div>
        </main>

        <footer>
          <div className={"bg-quizBlue text-white md:p-8 p-4 flex items-center justify-items-end rounded-xl flex-col md:flex-row"}>
            <div className={'max-w-xl'}>
              <h2 className={"text-3xl font-medium my-2"}>Ready to level up?</h2>
              <p>
                {" "}
                Quizzes to help you master development theory with ease.
                Learning has never been so fun and so easy.
              </p>
            </div>
            <Link
              className={
                "py-3 px-6 md:w-44 w-full md:h-12 rounded-full bg-white text-black font-medium shadow-lg mx-auto text-center mt-5 md:mt-0 hover:-translate-y-0.5 transition duration-300 ease-in-out"
              }
              to={"/home"}
            >
              Start learning
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
