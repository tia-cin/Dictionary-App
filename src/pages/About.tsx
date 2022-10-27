import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

export const About: React.FC = () => {
  return (
    <div className="h-screen pt-20">
      <div className="text-center my-5 mb-8">
        <h1 className="font-bold text-2xl">About the App</h1>
        <p className="px-20 mx-20 text-lg">
          Enter a word in our searcher and explore all possible definitions
          about your request. Detailed information about the word is displayes
          such as Definitions, Dynamic examples, phonetic, synonyms and
          antonyms.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="text-center my-5 mx-8">
          <h2 className="font-semibold text-2xl">About the API</h2>
          <div>
            <a href="https://github.com/meetDeveloper/googleDictionaryAPI">
              <GitHubIcon sx={{ color: "black", fontSize: "3em" }} />
            </a>
            <a href="https://dictionaryapi.dev/">
              <LanguageIcon sx={{ color: "black", fontSize: "3em" }} />
            </a>
          </div>
        </div>
        <div className="text-center my-5 mx-8">
          <h2 className="font-semibold text-2xl">About the Developer</h2>
          <div>
            <a href="https://github.com/tia-cin">
              <GitHubIcon sx={{ color: "black", fontSize: "3em" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
