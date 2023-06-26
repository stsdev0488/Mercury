import { useEffect, useState } from "react";
import { Container, Box, Button, Link, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { JokeDetail } from "@components";
import { TJoke } from "@types";
import { theme } from "@theme/theme";

function App() {
  const [getButtonClicked, setGetButtonClicked] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [joke, setJoke] = useState<TJoke | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const handleGetJoke = async () => {
      try {
        setJoke(null);
        setError(false);
        setLoading(true);
        const { data } = await axios.get<TJoke>(
          "https://official-joke-api.appspot.com/jokes/random"
        );
        setJoke(data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (getButtonClicked) {
      handleGetJoke();
      setGetButtonClicked(false);
    }
  }, [getButtonClicked]);

  const handleGetJoke = () => {
    setGetButtonClicked(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ paddingTop: [10, 10, 15] }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            color="success"
            variant="contained"
            disabled={loading}
            onClick={handleGetJoke}
          >
            Get A New Random Joke
          </Button>
          <Link
            href="https://github.com/15Dkatz/official_joke_api"
            target="_blank"
            sx={{ color: "info.main" }}
          >
            View API Docs
          </Link>
        </Box>
        <Box mt={10}>
          {loading && (
            <Typography
              color="#666666"
              fontSize={[16, 16, 18]}
              lineHeight={[1.5, 1.5, 1.75]}
              textAlign="center"
              paddingY={[6, 6, 8]}
            >
              LOADING YOUR JOKE...
            </Typography>
          )}
          {joke && <JokeDetail joke={joke} />}
          {error && (
            <Typography
              color="error.main"
              fontSize={[16, 16, 18]}
              fontWeight={700}
              lineHeight={[1.5, 1.5, 1.75]}
              textAlign="center"
            >
              THERE WAS AN ERROR LOADING YOUR JOKE.
            </Typography>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
