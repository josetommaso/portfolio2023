import Link from "next/link";
import { motion } from "framer-motion";
import { transition1 } from "@/transitions";
import Head from "next/head";
import Project from "@/components/Project";
import { useEffect } from "react";

const projects = [
  {
    file: "baibito.jpg",
    alt: "Baibito is an AI-powered parenting assistant that provides real-time advice and support for parents, helping them with baby care, development, and parenting guidance",
    techs: ["Next.js", "Tailwind CSS", "Clerk Auth", "OpenAI API", "Langchain"],
    description:
      "AI-powered parenting assistant providing personalized guidance and support for parents 24/7.",
    project_url: "https://baibito.com",
  },
  {
    file: "normativaintuitiva.jpeg",
    alt: "Normativa Intuitiva - AI-powered platform for construction regulations consultation, helping architects and engineers access Spanish building codes and standards",
    techs: ["Next.js", "Tailwind CSS", "Clerk Auth", "OpenAI API", "Langchain"],
    description:
      "AI-powered platform that helps architects and engineers quickly access and understand Spanish construction regulations and building codes.",
    project_url: "https://normativaintuitiva.com",
  },
  {
    file: "finddrink.jpg",
    alt: "Website with a search bar and a list of drinks. Search recipes of your favourites drinks.",
    techs: ["ReactJS", "ContextAPI", "Bootstrap 4"],
    description: "Find you favourites drink recipes with this tool.",
    github_url: "https://github.com/josetommaso/findadrink",
    project_url: "https://findmeadrink-react.netlify.app",
  },
  {
    file: "cryptoprice.jpg",
    alt: "simple web app and user-friendly tool that allows users to quickly and easily check the current market value of various cryptocurrencies",
    techs: ["ReactJS", "Custom Hooks", "CSS"],
    description:
      '"CryptoPriceFinder" is a simple and user-friendly tool that allows users to quickly and easily check the current market value of various cryptocurrencies.',
    github_url:
      "https://github.com/josetommaso/crypto-price-app/tree/master/src/components",
    project_url: "https://crypto-prices-react.netlify.app",
  },
];

const removeStyles = () => {
  const removeStyles = requestAnimationFrame(() => {
    const ul = document.querySelector("#ulAnimation");
    ul.removeAttribute("style");
  });
};

const Portfolio = () => {
  useEffect(() => {
    removeStyles();
  }, []);

  return (
    <>
      <Head>
        <title>Jose Tommaso - Portfolio</title>
      </Head>
      <motion.section
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: "0" }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
        className="section"
      >
        <div className="container mx-auto h-full px-6 lg:px-20">
          <div className="lg:grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 lg:items-center gap-8 lg:gap-24 lg:min-h-screen h-full pt-36 pb-14 transform-none">
            <article className="mb-10 lg:mb-0">
              <h1 className="h1">Portfolio</h1>
              <p className="text-lg text-white">
                Welcome to my portfolio! Here you&apos;ll find some examples of
                my work, showcasing my skills, specifically in ReactJS. Take a
                look at some of my favorite projects and see for yourself what I
                can do. If you like what you see, feel free to get in touch.
                Thanks for visiting!
              </p>
              <Link href="/contact" className="btn btn-primary mt-8">
                Get in touch
              </Link>
            </article>
            <motion.ul
              id="ulAnimation"
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: "0" }}
              exit={{ opacity: 0, y: "-80%" }}
              onAnimationComplete={removeStyles}
              transition={transition1}
              className="grid grid-rows-2 grid-cols-2 gap-2 list-none rounded-xl overflow-hidden"
            >
              {projects.map((project, i) => (
                <Project key={i} project={project} />
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Portfolio;
