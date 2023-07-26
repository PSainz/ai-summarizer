import React from "react";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with <strong>Ai-summarize</strong>, an open-source
        article summarizer that transforms lengthy articles into clear and
        concise summaries
      </h2>
      <h3
        className="url_input peer"
        style={{ width: "60%", marginTop: "20px", textAlign: "center" }}
      >
        Example link:
        https://medium.com/@tkmh/how-i-built-surf-status-2ca2ca8a6fbf
      </h3>
    </header>
  );
};

export default Hero;
