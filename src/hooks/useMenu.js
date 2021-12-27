import React, { useState } from "react";

export default function useAuth() {
  const [showMenu, setShowMenu] = useState(false);

  return { showMenu, setShowMenu };
}
