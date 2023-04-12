import React from "react";
import { Stack } from "@mui/material";
import { AiOutlineHome } from "react-icons/ai";
import { categories } from "../../utils/data";
import { Link } from "react-router-dom";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowX: "auto",
      height: {sx: 'auto', md: "auto" },
      flexDirection: { md: "row" },
      gap:"10px"
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#717171",
          color: "white",
        }}
        key={category.name}
      >
        <span style={{ color: "white", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{color: "white"}}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
