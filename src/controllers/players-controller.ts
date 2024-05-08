import { Request, Response } from 'express';
import * as playerService from '../services/players-service';
import { StatisticsModel } from '../models/statistics-model';

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await playerService.getPlayerService();
    res.status(httpResponse.statuscode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await playerService.getPlayerByIdService(id);
    res.status(httpResponse.statuscode).json(httpResponse.body);
};

export const setPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await playerService.setPlayerService(bodyValue);
    if (httpResponse) {
        res.status(httpResponse.statuscode).json(httpResponse.body);
    }
};

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await playerService.deletePlayerService(id);
    res.status(httpResponse.statuscode).json(httpResponse.body);    
};

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyValue: StatisticsModel = req.body;
    const httpResponse = await playerService.updatePlayerService(id, bodyValue);
    res.status(httpResponse.statuscode).json(httpResponse.body);    
};
