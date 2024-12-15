import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { DiscordSDK } from "@discord/embedded-app-sdk";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let auth: { access_token: any; user?: { username: string; discriminator: string; id: string; public_flags: number; avatar?: string | null | undefined; global_name?: string | null | undefined }; scopes?: ("bot" | "rpc" | "identify" | "connections" | "email" | "guilds" | "guilds.join" | "guilds.members.read" | "gdm.join" | "messages.read" | "rpc.notifications.read" | "rpc.voice.write" | "rpc.voice.read" | "rpc.activities.write" | "webhook.incoming" | "applications.commands" | "applications.builds.upload" | "applications.builds.read" | "applications.store.update" | "applications.entitlements" | "relationships.read" | "activities.read" | "activities.write" | "dm_channels.read" | -1 | "guilds.channels.read" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "applications.commands.permissions.update" | "applications.commands.update" | "relationships.write" | "voice" | "role_connections.write" | "presences.read" | "presences.write" | "openid" | "dm_channels.messages.read" | "dm_channels.messages.write" | "gateway.connect" | "account.global_name.update" | "payment_sources.country_code" | "sdk.social_layer")[]; expires?: string; application?: { id: string; description: string; name: string; icon?: string | null | undefined; rpc_origins?: string[] | undefined } } | null;

const app = createApp(App)

app.use(createPinia())
app.use(router)

const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

/*setupDiscordSdk().then(() => {
    console.log("Discord SDK is authenticated");

    // We can now make API calls within the scopes we requested in setupDiscordSDK()
    // Note: the access_token returned is a sensitive secret and should be treated as such
    appendVoiceChannelName();
    appendGuildAvatar();
});
*/
app.mount('#app')



async function setupDiscordSdk() {
    await discordSdk.ready();
    console.log("Discord SDK is ready");

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
    const response = await fetch("/.proxy/api/token", {
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


async function appendVoiceChannelName() {
    const app = document.querySelector('#app');

    let activityChannelName = 'Unknown';

    // Requesting the channel in GDMs (when the guild ID is null) requires
    // the dm_channels.read scope which requires Discord approval.
    if (discordSdk.channelId != null && discordSdk.guildId != null) {
        // Over RPC collect info about the channel
        const channel = await discordSdk.commands.getChannel({ channel_id: discordSdk.channelId });
        if (channel.name != null) {
            activityChannelName = channel.name;
        }
    }

    // Update the UI with the name of the current voice channel
    const textTagString = `Activity Channel: "${activityChannelName}"`;
    const textTag = document.createElement('p');
    textTag.textContent = textTagString;
    app.appendChild(textTag);
}

async function appendGuildAvatar() {
    const app = document.querySelector('#app');

    // 1. From the HTTP API fetch a list of all of the user's guilds
    const guilds = await fetch(`https://discord.com/api/v10/users/@me/guilds`, {
        headers: {
            // NOTE: we're using the access_token provided by the "authenticate" command
            Authorization: `Bearer ${auth.access_token}`,
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());

    // 2. Find the current guild's info, including it's "icon"
    const currentGuild = guilds.find((g) => g.id === discordSdk.guildId);

    // 3. Append to the UI an img tag with the related information
    if (currentGuild != null) {
        const guildImg = document.createElement('img');
        guildImg.setAttribute(
            'src',
            // More info on image formatting here: https://discord.com/developers/docs/reference#image-formatting
            `https://cdn.discordapp.com/icons/${currentGuild.id}/${currentGuild.icon}.webp?size=128`
        );
        guildImg.setAttribute('width', '128px');
        guildImg.setAttribute('height', '128px');
        guildImg.setAttribute('style', 'border-radius: 50%;');
        app.appendChild(guildImg);
    }
}
