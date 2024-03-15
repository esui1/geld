import { useEffect, useState } from "react";
import axios from "axios";
import { Eye } from "@/assets/eye";

export default function Sidebar() {
  const [category, setCategory] = useState([]);
  const fetchCategories = () => {
    axios.get("http://localhost:8000/category").then((response) => {
      setCategory(response.data);
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      {category.map((category) => (
        <div className="flex gap-3 items-center">
          <Eye />
          <h1>{category.name}</h1>
        </div>
      ))}
    </>
  );
}
