import { useState } from "react";
import { GetUsersData } from "../services/Users";
import { UserData } from "../models/UserData";

export function useGetUsers() {
    const [responseUsers, setResponseUsers] = useState<UserData[]>([]);
    const [error, setError] = useState(null);

    const getUsers = async() => {
        try {
            setError(null);
            const newUsers = await GetUsersData();
            setResponseUsers(newUsers);
        }
        catch(e: any) {
            setError(e.message);
        }

    }

    return { users: responseUsers, getUsers };
}