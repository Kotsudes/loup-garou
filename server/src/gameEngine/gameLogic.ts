import { ETeams, Role, Villager } from "@/gameEngine/roles/player";
import { DogWolf } from "@/gameEngine/roles/dogWolf";
import { setTimeout } from "timers/promises";
import { WAITING_TIME } from "@/libs/const";
import { WebSocket } from "ws";

export class Game {

    public id: string;
    private players: Villager[] = [];
    public spectators: WebSocket[] = [];
    private roles: {quantity: number,role: Role}[] = [];
    private isDay = true;
    private isFirstNight = true;

    constructor(id: string) {
        this.id = id;
    }

    public getPlayers() {
        return this.players;
    }

    public getWerewolfs() {
        return this.players.filter(player => player.getTeam() === ETeams.WEREWOLF);
    }

    public getPlayersByRole(role: Role) {
        return this.players.filter(player => player.getRole()?.getName() === role.getName());
    }

    public getPlayersByID(id: string) {
        return this.players.filter(player => player.getId() === id);
    }

    removePlayerByToken(token: string) {
        throw new Error("Method not implemented.");
    }

    public getRoles() {
        return this.roles;
    }
    
    public setRoles(roles: {quantity: number,role: Role}[]) {
        this.roles = roles;
    }

    public getIsDay() {
        return this.isDay;
    }

    public inverseDay() {
        this.isDay = !this.isDay;
    }

    public removePlayer(username: string) {
        this.players = this.players.filter(player => player.getName() !== username);
    }

    public addPlayer(player: Villager) {
        this.players.push(player);
    }

    public mostVotesPlayers() {
        const maxVotes = Math.max(...this.players.map(player => player.getVoteCount()));
        return this.players.filter(player => player.getVoteCount() === maxVotes);
    }

    public async startNight() {
        console.log("startNight");
        if (this.isFirstNight) {
            this.getPlayersByRole(new DogWolf()).map(player => {
                console.log("player", player);
            }
            );
            await setTimeout(WAITING_TIME)

        }

        // Fin de la nuit
        if (this.isFirstNight) {
            this.isFirstNight = false;
        }
    }

    public startDay() {
        // Annonce des morts de la nuit
        // Résolution des rôles / états 
        // Reset des valeurs de la nuit
        // Debut du vote
    }

    public resolveVote() {
        switch (this.mostVotesPlayers().length) {
            case 0:
                // Résolution des rôles / états 
                // Fin du jour
                break;
            case 1:
                this.mostVotesPlayers()[0].die();
                // Résolution du rôle
                // Résolution des rôles / états 
                // Fin du jour
                break;
            default:
                // Récupération des joueurs à égalité
                // Nouveau vote (Si maire départageur, départage par le maire alone)
                break;
        }
    }

}