export interface UserRow {
    id: number,
    name: string,
    email: string
}

export function getUserPrivacyPreferences(userId: number, callback: (err: Error | null, privacyPreferences?: any) => void) {
    throw new Error("Function not implemented.");
}

export function getFriends(user: UserRow, callback: (err: Error | null, friends?: any[]) => void) {
    throw new Error("Function not implemented.");
}