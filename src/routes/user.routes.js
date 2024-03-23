import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([ //middleware to upload files
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "images",
            maxCount: 8
        }
    ]),
    registerUser
)

export default router;