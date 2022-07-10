import { createContext, useEffect, useState } from "react";

export const ListsContext = createContext({
  lists: JSON.parse(localStorage.getItem("lists")) || [
    { list: "main", listId: 1 },
  ],
  setLists: () => null,
  submitNewList: () => null,
});

export const ListsContextProvider = ({ children }) => {
  const INITIAL_LISTS = JSON.parse(localStorage.getItem("lists")) || [
    { list: "main", listId: 1 },
  ];
  const [lists, setLists] = useState(INITIAL_LISTS);

  const id = Math.random();

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const submitNewList = (e, list, setList) => {
    e.preventDefault();
    setLists([...lists, { list, listId: id }]);
    setList("");
  };

  const value = { lists, setLists, submitNewList };

  return (
    <ListsContext.Provider value={value}>{children}</ListsContext.Provider>
  );
};
