import * as React from "react";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";

export default function MenuListComposition() {
  return (
    <Stack direction="row">
      <Paper sx={{width: '100%'}}>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Messages</MenuItem>
          <MenuItem>Friends</MenuItem>
        </MenuList>
      </Paper>
    </Stack>
  );
}
