import { Box, Divider } from "@material-ui/core";

export default function DividerText({children}) {
  return (
    <Box display="flex" alignItems="center">
      <Box flexGrow={1}>
        <Divider />
      </Box>
      <Box px={2}>{children}</Box>
      <Box flexGrow={1}>
        <Divider />
      </Box>
    </Box>
  );
}
