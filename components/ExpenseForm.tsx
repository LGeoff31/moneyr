import React, { useState } from "react";
import {
  Stack,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Select,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { LoadingButton } from "@mui/lab";

export enum Category {
  Food = "Food & Dining",
  Health = "Health & Fitness",
  Clothes = "Clothing",
  Entertainment = "Entertainment",
  Bills = "Bills & Tax",
  Transport = "Transportation",
  Other = "Other",
}

const zip = (a: any, b: any) => a.map((k: any, i: any) => [k, b[i]]);

const ExpenseForm: React.FunctionComponent<{
  submitAction: (
    title: string,
    value: number,
    category: Category,
    description: string
  ) => Promise<void>;
}> = ({ submitAction }) => {
  const [title, setTitle] = useState<string>("");
  const [value, setValue] = useState<number | "">("");
  const [category, setCategory] = useState<Category | "">("");
  const [description, setDescription] = useState<string>("");
  const [processingSubmit, setProcessingSubmit] = useState(false);

  const innerHandleSubmit = async () => {
    //validate all the inputs
    if (value === "") {
      return "BAD";
    }
    if (category === "") {
      return "BAD";
    }
    setProcessingSubmit(true);
    await submitAction(title, value, category, description);
    setTitle("");
    setValue("");
    setDescription("");
    setCategory("");
    setProcessingSubmit(false);
  };
  const isTitleOrDescriptionValid = (inputString: string) =>
    inputString.length <= 0;
  const isValueValid = (value: any) => !(typeof value === "number");
  return (
    <form>
      <Navbar />
      <Typography padding={3} className="finances" variant="h3" color="#22324f">
        Add an Expense
      </Typography>
      <Typography padding={1} className="finances" variant="body1" color="grey">
        How much spending did you do today?
      </Typography>
      <Stack
        display="flex"
        spacing={2}
        direction="column"
        justifyContent="space-evenly"
        alignItems={"center"}
        textAlign={"center"}
        paddingTop="30px"
      >
        <TextField
          variant="outlined"
          label="Title"
          placeholder="Ex. Shopping"
          value={title}
          sx={{ width: "80vw" }}
          onChange={(e) => setTitle(e.target.value)}
          required
          error={isTitleOrDescriptionValid(title)}
        />
        <Stack direction="row">
          <TextField
            variant="outlined"
            label="Value"
            placeholder="$0"
            value={value}
            onChange={(e) => setValue(parseFloat(e.target.value))}
            sx={{ width: "50vw" }}
            required
            error={isValueValid(value)}
            helperText={isValueValid(value) ? "Only Numbers Allowed" : ""}
          />
          <FormControl>
            <InputLabel required id="demo-simple-select-label">
              Category
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              value={category}
              sx={{ width: "30vw" }}
              onChange={(e: SelectChangeEvent) =>
                setCategory(e.target.value as Category)
              }
            >
              {zip(Object.keys(Category), Object.values(Category)).map(
                ([k, v]: any) => (
                  <MenuItem key={v} value={v}>
                    {v}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </Stack>
        <TextField
          variant="outlined"
          label="description"
          placeholder="Ex. Today, I bought new vibrant sunglasses that suit me!"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ width: "80vw" }}
          required
          error={isTitleOrDescriptionValid(description)}
        />

        <LoadingButton
          variant="contained"
          onClick={innerHandleSubmit}
          loading={processingSubmit}
          color="success"
        >
          Submit
        </LoadingButton>
      </Stack>
      <Footer />
    </form>
  );
};

export default ExpenseForm;
