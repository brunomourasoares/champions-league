import { Router } from "express";
import * as playerController from "./controllers/players-controller";
import * as clubsController from "./controllers/clubs-controller";

const router = Router();
router.get("/players", playerController.getPlayer);
router.post("/players", playerController.setPlayer);
router.delete("/players/:id", playerController.deletePlayer);
router.patch("/players/:id", playerController.updatePlayer);
router.get("/players/:id", playerController.getPlayerById);

router.get("/clubs", clubsController.getClubs);

router.use((req, res) => {
    res.status(404).json({ Error: 404, Message: "Endpoint Not Found!" });
});

export default router;