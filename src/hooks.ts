import { useEffect, useState } from "react";

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  });
};
