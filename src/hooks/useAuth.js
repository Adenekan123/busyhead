import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const local_isAuth = localStorage.getItem("isAuth");
const initialState = local_isAuth != null ? true : false;

export default function useAuth() {
  const [isAuth, setIsAuth] = useState(initialState);

  return { isAuth, setIsAuth };
}
