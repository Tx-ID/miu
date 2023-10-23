import { BaseInteraction, ChannelType, ChatInputCommandInteraction, CommandInteraction, Interaction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("generate")
    .setDescription("Generates something.")
    .addSubcommand(sub =>
        sub
            .setName("welcome")
            .setDescription("Server welcome embed.")
            .addChannelOption(option =>
                option
                    .setName("target")
                    .setDescription("Target channel for the embed.")
                    .setRequired(true)
                    .addChannelTypes(ChannelType.GuildText)
            )
    );

export async function execute(interaction: ChatInputCommandInteraction) {
    if (interaction.options.getSubcommand() === 'welcome') {
        interaction.channel?.send("welcome works");
    }
    return interaction.reply({
        content: "Successfully created welcome.",
        ephemeral: true,
    });
}