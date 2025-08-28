export function useAlerts() {
  const enable = async (type: 'price' | 'daily' | 'neighbourhood') => {
    return { ok: true, type };
  };
  return { enable };
}


