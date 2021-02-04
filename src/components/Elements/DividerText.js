import { Box, Divider } from "@material-ui/core";

export default function DividerText(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box flexGrow={1}>
        <Divider />
      </Box>
      <Box px={2}>{props.children}</Box>
      <Box flexGrow={1}>
        <Divider />
      </Box>
    </Box>
  );
}
