import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  updateProduct,
  getProduct,
  getAllProducts,
} from "../controllers/product";
import { validateProductId } from "../middlewares/productMiddleware";

const router = Router();

router.route("/createProduct").post(createProduct);
router.route("/getAllProducts").get(getAllProducts);
router.route("/getProduct").get(validateProductId, getProduct);
router.route("/updateProduct").patch(validateProductId, updateProduct);
router.route("/deleteProduct").delete(validateProductId, deleteProduct);

export default router;
