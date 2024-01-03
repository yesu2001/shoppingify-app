export const addNewNewItem = (data, itemsList, setItemsList) => {
  console.log(data);
  const newItemsList = itemsList.map((item) =>
    item.name === data.category
      ? {
          ...item,
          items: [data, ...item.items],
        }
      : item
  );
  console.log(newItemsList);
  setItemsList(newItemsList);
};
