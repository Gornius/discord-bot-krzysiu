import type { ArgsOf, Client } from "discordx";
import { Discord, On } from "discordx";

@Discord()
export class SomeoneAskedKrzysiu {
    @On({ event: "messageCreate" })
    onSomeoneAskedKrzysu([message]: ArgsOf<"messageCreate">, client: Client) {
        if (message.content.toLocaleLowerCase().normalize("NFD").replace(/[^a-z0-9]+/g, '').includes('krzysiumozna')) {
            message.reply('Można. Gdyby to było złe to Bóg by inaczej świat stworzył.');
        }
    }
}
