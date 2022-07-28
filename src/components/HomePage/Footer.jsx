import React from "react";
// styles
import { StyledTitles, StyledSubtitles } from "../../styles/childs";
import { StyledList, StyledFooter } from "../../styles/containers";
// MUI
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <StyledTitles>Developer</StyledTitles>
        <StyledSubtitles>Cintia Arce</StyledSubtitles>
      </div>
      <div>
        <StyledTitles>Technologies</StyledTitles>
        <StyledList>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <div className="item">
              <div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                  alt="react"
                  width="40"
                  height="40"
                />
              </div>
              <div className="tech">
                <KeyboardArrowUpIcon/>
                <span>React</span>
              </div>
            </div>
          </a>
          <a href="https://redux.js.org/">
            <div className="item">
              <div>
                <img
                  src="https://www.svgrepo.com/show/303557/redux-logo.svg"
                  alt="redux"
                  rel="noreferrer"
                  target="_blank"
                  width="40"
                  height="40"
                />
              </div>
              <div className="tech">
                <KeyboardArrowUpIcon/>
                <span>Redux</span>
              </div>
            </div>
          </a>
          <a href="https://mui.com">
            <div className="item">
              <div>
                <img
                  src="https://raw.githubusercontent.com/tia-cin/Portofolio/main/src/components/images/material-ui-logo%20(1).png"
                  alt="material-ui"
                  rel="noreferrer"
                  target="_blank"
                  width="40"
                  height="40"
                />
              </div>
              <div className="tech">
                <KeyboardArrowUpIcon/>
                <span>Material UI</span>
              </div>
            </div>
          </a>
        </StyledList>
      </div>
    </StyledFooter>
  );
};
