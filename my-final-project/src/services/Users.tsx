import { UserData } from "../components/Contact-list/UserData";
import { ContactData } from "../store/features/ContactSlice";

const GetUsersData = async() => {
    try {
        const response = await fetch(`https://reqres.in/api/users/?per_page=12`);
        const json = await response.json();
        const users = json.data;
        return users;
    }
    catch(e) {
        throw new Error('Error searching users');
    }  
}

export const MapContactsData = async() => {
    const storedJson = sessionStorage.getItem("reduxContactList");
    if (storedJson) {
        const contactData: ContactData[] = JSON.parse(storedJson);
        return contactData;
    }
    const users = await GetUsersData();
        const contacts: ContactData[] = users.map((item: UserData) => {
            return {
              email: item.email,
              firstName: item.first_name,
              lastName: item.last_name,
              avatar: item.avatar,
              isFavorite: false,
              id: item.id
            }
          });
    const json = JSON.stringify(contacts);
    sessionStorage.setItem("reduxContactList", json);
    return contacts;
}