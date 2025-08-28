export async function login(email: string, password: string) {
  return { token: 'mock', email };
}
export async function logout() {
  return { ok: true };
}


