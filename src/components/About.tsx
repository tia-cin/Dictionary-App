import React from "react";
// MUI
import { Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

export const About: React.FC = () => {
  return (
    <Grid container alignItems="center" direction="column">
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        sx={{ my: "2em" }}
      >
        <Typography variant="h2">About the App</Typography>
        <Typography variant="subtitle1">
          Enter a word in our searcher and explore all possible definitions
          <br />
          about your request. Detailed information about the word is displayes
          <br />
          such as Definitions, Dynamic examples, phonetic, synonyms and
          <br />
          antonyms. Each of those has its own definitions
        </Typography>
      </Grid>
      <Grid item sx={{ my: "2em" }}>
        <Typography variant="h2">About the API</Typography>
        <Grid container justifyContent="center">
          <a
            href="https://github.com/meetDeveloper/googleDictionaryAPI"
            style={{ textDecoration: "none", margin: "1em" }}
          >
            <GitHubIcon sx={{ color: "black", fontSize: "3em" }} />
          </a>
          <a
            href="https://dictionaryapi.dev/"
            style={{ textDecoration: "none", margin: "1em" }}
          >
            <LanguageIcon sx={{ color: "black", fontSize: "3em" }} />
          </a>
        </Grid>
      </Grid>
      <Grid item sx={{ my: "1em" }}>
        <Typography variant="h2">About the Developer</Typography>
        <Grid container justifyContent="center">
          <a
            href="https://github.com/tia-cin"
            style={{ textDecoration: "none", margin: "1em" }}
          >
            <GitHubIcon sx={{ color: "black", fontSize: "3em" }} />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};
