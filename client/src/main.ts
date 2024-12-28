// CSS
import '@/assets/index.css'

// Vue
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Discord
import { DiscordSDK } from "@discord/embedded-app-sdk";

// WebSocket + Discord SDK
export let auth: { access_token: string; user?: { username: string; discriminator: string; id: string; public_flags: number; avatar?: string | null | undefined; global_name?: string | null | undefined }; scopes?: ("bot" | "rpc" | "identify" | "connections" | "email" | "guilds" | "guilds.join" | "guilds.members.read" | "gdm.join" | "messages.read" | "rpc.notifications.read" | "rpc.voice.write" | "rpc.voice.read" | "rpc.activities.write" | "webhook.incoming" | "applications.commands" | "applications.builds.upload" | "applications.builds.read" | "applications.store.update" | "applications.entitlements" | "relationships.read" | "activities.read" | "activities.write" | "dm_channels.read" | -1 | "guilds.channels.read" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "applications.commands.permissions.update" | "applications.commands.update" | "relationships.write" | "voice" | "role_connections.write" | "presences.read" | "presences.write" | "openid" | "dm_channels.messages.read" | "dm_channels.messages.write" | "gateway.connect" | "account.global_name.update" | "payment_sources.country_code" | "sdk.social_layer")[]; expires?: string; application?: { id: string; description: string; name: string; icon?: string | null | undefined; rpc_origins?: string[] | undefined } } | null;
export const socket : WebSocket = new WebSocket("/.proxy/api");
export const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);


// App + Store
const app = createApp(App)
app.use(createPinia())
app.use(router)


// Discord SDK setup
setupDiscordSdk()

// App setup
app.mount('#app')



async function setupDiscordSdk() {
    await discordSdk.ready();

    // Authorize with Discord Client
    const { code } = await discordSdk.commands.authorize({
        client_id: import.meta.env.VITE_DISCORD_CLIENT_ID,
        response_type: "code",
        state: "",
        prompt: "none",
        scope: [
            "identify",
            "guilds",
            "applications.commands"
        ],
    });

    // Retrieve an access_token from your activity's server
    // Note: We need to prefix our backend `/api/token` route with `/.proxy` to stay compliant with the CSP.
    // Read more about constructing a full URL and using external resources at
    // https://discord.com/developers/docs/activities/development-guides#construct-a-full-url
    const response = await fetch("/.proxy/api/discord/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            code,
        }),
    });
    const { access_token } = await response.json();

    // Authenticate with Discord client (using the access_token)
    auth = await discordSdk.commands.authenticate({
        access_token,
    });

    if (auth == null) {
        throw new Error("Authenticate command failed");
    }
}
