import { Request, Response } from 'express';
import * as clubsService from '../services/clubs-service';

export const getClubs = async (req: Request, res: Response): Promise<void> => {
    const response = await clubsService.getClubService();
    res.status(response.statuscode).json(response.body);
};