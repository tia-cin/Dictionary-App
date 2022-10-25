import React from "react";
import { License } from "../types";
import { Grid, List, ListItem, Typography } from "@mui/material";

interface WordCreditsProps {
  license: License;
  sourceUrls: Array<string>;
}

export const WordCredits: React.FC<WordCreditsProps> = ({
  license,
  sourceUrls,
}) => {
  return (
    <Grid item container>
      {license && sourceUrls && (
        <Grid item container justifyContent="space-around" sx={{ my: "2em" }}>
          {license && (
            <Grid item>
              <Typography variant="subtitle1">License</Typography>
              <a href={license.url}>
                <p>{license.name}</p>
              </a>
            </Grid>
          )}
          {sourceUrls && (
            <Grid item>
              <Typography variant="subtitle1">Sourse URLs:</Typography>
              <List>
                {sourceUrls &&
                  sourceUrls.map((u, i) => (
                    <ListItem key={i}>
                      <a href={u}>{u}</a>
                    </ListItem>
                  ))}
              </List>
            </Grid>
          )}
        </Grid>
      )}
    </Grid>
  );
};
