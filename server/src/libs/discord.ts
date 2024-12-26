import fetch from "node-fetch";

// Fonction pour obtenir l'username Discord
export async function getDiscordUsername(accessToken: string): Promise<string | null> {
    try {
        const response = await fetch('https://discord.com/api/v10/users/@me', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des informations de l\'utilisateur Discord');
        }

        // Récupère le username de la réponse
        const data = await response.json();
        return data.username;
    } catch (error) {
        console.error(error);
        return null;
    }
};


export async function getDiscordAccessToken(code: string): Promise<string> {
    const response = await fetch(`https://discord.com/api/oauth2/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            client_id: process.env.VITE_DISCORD_CLIENT_ID || "",
            client_secret: process.env.DISCORD_CLIENT_SECRET || "",
            grant_type: "authorization_code",
            code: code,
        }),
    });

    // Retrieve the access_token from the response
    // @ts-expect-error The response is a JSON object
    const { access_token } = await response.json();
    return access_token;
}