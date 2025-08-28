export async function triggerWorkflow(name: string, payload: unknown) {
  return { ok: true, name, payload };
}


