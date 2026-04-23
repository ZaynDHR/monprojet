export const store = {
  activeCategory: "All" as string,
  searchQuery: "" as string,
  bookmarks: [] as number[],
  ratings: {} as Record<number, number>,
  visitCounts: {} as Record<number, number>,
  submittedResources: [] as Resource[]
}
