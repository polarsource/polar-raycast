import { Detail } from "@raycast/api";
import { useEffect } from "react";
import { authenticate } from "./oauth";

export default function Command() {
  useEffect(() => {
    authenticate();
  }, []);

  return <Detail markdown="# Hello World" />;
}
