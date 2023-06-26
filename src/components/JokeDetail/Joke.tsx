import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { TJoke } from "@types";

type TJokeDetail = {
  joke: TJoke;
};

const JokeDetail = ({ joke }: TJokeDetail) => {
  const [visiblePunchline, setVisiblePunchline] = useState<boolean>(false);

  const handleToggleVisiblePunchline = () => {
    setVisiblePunchline((prev) => !prev);
  };

  return (
    <Box>
      <Box position="relative" maxHeight={[160, 160, 240]} overflow="hidden">
        <Typography color="secondary" fontSize={[300, 300, 400]} lineHeight={1}>
          “
        </Typography>
        <Typography
          color="black"
          fontSize={[20, 20, 30]}
          position="absolute"
          top={[50, 50, 65]}
          left={[50, 50, 65]}
        >
          {joke.setup}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          color="primary"
          variant="contained"
          onClick={handleToggleVisiblePunchline}
        >
          {visiblePunchline ? "Hide Punchline" : "Show Punchline"}
        </Button>
      </Box>
      {visiblePunchline && (
        <Box
          position="relative"
          maxHeight={[160, 160, 240]}
          overflow="hidden"
          mt={[4, 4, 8]}
        >
          <Typography
            color="secondary"
            fontSize={[300, 300, 400]}
            lineHeight={1}
            textAlign="right"
          >
            ”
          </Typography>
          <Typography
            color="black"
            fontSize={[20, 20, 30]}
            position="absolute"
            top={[50, 50, 65]}
            right={[50, 50, 65]}
            textAlign="right"
          >
            {joke.punchline}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export { JokeDetail };
