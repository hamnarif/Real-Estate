export function useLeads() {
  const submitLead = async (data: Record<string, string>) => {
    return { ok: true, data };
  };
  return { submitLead };
}


