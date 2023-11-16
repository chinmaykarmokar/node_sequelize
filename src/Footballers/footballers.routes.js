import express from "express";
import { 
    createFootballer,
    updateFootballer,
    getAllFootballers,
    getSingleFootballer,
    filterFootballersByTeamAndAge
} from "./footballers.controller.js";

const router = express.Router();

router.post("/createFootballer", createFootballer);
router.post("/updateFootballer/:id", updateFootballer);
router.get("/allFootballers", getAllFootballers);
router.get("/singleFootballer/:id", getSingleFootballer);
router.get("/filteredFootballers/:team/:age", filterFootballersByTeamAndAge);

export const footballersRouter = router;