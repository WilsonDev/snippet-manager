const sortById = (a: { id: number }, b: { id: number }) => a.id < b.id ? 1 : -1;

export { sortById };
