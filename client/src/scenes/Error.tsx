import { Box } from "@mui/material";

const Error = () => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box color="grey" fontSize="3rem">
        Error 404
      </Box>

      <Box color="grey" fontSize="2rem">
        Page Not Found!
      </Box>
    </Box>
  );
};

export default Error;
