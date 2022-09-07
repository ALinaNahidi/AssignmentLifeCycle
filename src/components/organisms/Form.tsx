import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import * as React from "react";
import ImageByAge from "../atoms/imageByAge";
import GirlIcon from "@mui/icons-material/Girl";
import ManIcon from "@mui/icons-material/Man";
import styled from "@emotion/styled";


interface FormProps {}

const TextAndImageContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "60rem",
  marginLeft: "15rem",
  marginTop: "4rem",
});

 

const InnerContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  width: "30rem",
});


export default function Form(props: FormProps) {
  const [gender, setGender] = React.useState("male");
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState<number>();

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handleAgeChange = (event: any) => {
    setAge(event.target.value);
  };
  const handleGender = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };
  return (
    <div>
      <TextAndImageContainer>
        <InnerContainer>
          <TextField
            label="Name"
            id="name"
            className="textfield"
            onChange={handleNameChange}
          />
          {name.length !== 0 && (
            <>
              <TextField
                label="Age"
                id="age"
                type="number"
                onChange={handleAgeChange}
              />
              <FormControl sx={{ margin: "0" }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={gender}
                  label="Gender"
                  onChange={handleGender}
                >
                  <MenuItem value={"male"}>
                    <ManIcon fontSize="medium" />
                    Male
                  </MenuItem>
                  <MenuItem value={"female"}>
                    <GirlIcon fontSize="medium" />
                    Female
                  </MenuItem>
                </Select>
              </FormControl>
            </>
          )}
        </InnerContainer>
        {age && <ImageByAge age={age} gender={gender} />}
      </TextAndImageContainer>
    </div>
  );
}
