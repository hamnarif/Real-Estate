export function useMLS() {
  const search = async (query: Record<string, string>) => {
    return { results: [], query };
  };
  return { search };
}


