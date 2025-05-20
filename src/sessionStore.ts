interface SessionData {
  step: number;
  data: {
    name?: string;
    email?: string;
    interest?: string;
  };
}

const sessions: Record<string, SessionData> = {};

export function getSession(userId: string): SessionData {
  if (!sessions[userId]) {
    sessions[userId] = { step: 0, data: {} };
  }
  return sessions[userId];
}

export function clearSession(userId: string): void {
  delete sessions[userId];
}
