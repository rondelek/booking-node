import { Autocomplete, Box, TextField } from "@mui/material";

export default function SearchInput({ options, label }) {
  return (
    <Box className="flex-column space-y-8">
      <Autocomplete
        sx={{ width: 240 }}
        options={options}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            {option.image && (
              <img loading="lazy" width="20" src={option.image} alt="" />
            )}
            {option.label}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
            }}
            sx={{
              backgroundColor: "white",
            }}
          />
        )}
      />
    </Box>
  );
}
