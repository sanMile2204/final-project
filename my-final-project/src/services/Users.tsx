export const GetUsersData = async() => {
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