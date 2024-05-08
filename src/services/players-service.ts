import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as playerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await playerRepository.findAllPlayers();
    let response = null;
    if (data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    }
    return response;
};

export const getPlayerByIdService = async (id: number) => {
    const data = await playerRepository.findPlayerById(id);
    let response = null;
    if (data) {
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent();
    }
    return response;
};

export const setPlayerService = async (player: PlayerModel) => {
    let response = null;
    if (player) {
        await playerRepository.insertPlayer(player);
        response = await httpResponse.created();
    } else {
        response = await httpResponse.badRequest();
    }
    return response;
}

export const deletePlayerService = async (id: number) => {
    let response = null;
    const isDeleted = await playerRepository.deletePlayerById(id);
    if (isDeleted) {
        response = await httpResponse.ok({ Message: "Deleted" });
    } else {
        response = await httpResponse.badRequest();
    }      
    return response;
};

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    let response = null;
    const data = await playerRepository.modifyPlayerById(id, statistics);
    if(Object.keys(data).length === 0) {
        response = await httpResponse.badRequest();
    } else {
        response = await httpResponse.ok(data);
    }
    return response;
};