const baseURL = "https://jsonplaceholder.typicode.com/users";

export async function getUserContacts() {
    try {
        const response = await fetch(baseURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching user contacts:", error);
        throw error;
    }
}