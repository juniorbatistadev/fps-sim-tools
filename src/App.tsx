import { Box, List, ListItem, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Box className="w-full h-screen flex flex-col items-center justify-center bg-slate-700">
        <Box className="m-auto w-1/2 text-gray-300">
          <p className="text-2xl font-semibold">Hi Dev!</p>

          <p>
            The main goal of this project is to build tools to help people build
            rosters and help decide ratings fro players. Here is the stack we
            will be using for this project:
          </p>
          <ul className="list-disc ml-4 mt-3">
            <li> React</li>
            <li> MUI</li>
            <li> React Router</li>
            <li> Tailwind CSS</li>
          </ul>
        </Box>
      </Box>
    </>
  );
}

export default App;
