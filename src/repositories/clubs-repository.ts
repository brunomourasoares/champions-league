import { ClubModel } from "../models/clubs-model";
import fs from "fs";
import path from "path";

const pathData = path.join(__dirname, "../data/clubs.json");
const charCodification = "utf-8";

export const findAllClubs = async (): Promise<ClubModel[]> => {
    const data = fs.readFileSync(pathData, charCodification);
    const clubs: ClubModel[] = JSON.parse(data);
    return clubs;
};