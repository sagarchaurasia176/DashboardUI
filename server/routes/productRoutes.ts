import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  updateProduct,
  getProduct,
  getAllProducts,
} from "../controllers/product";

// data
import {
  validateProductId,
  validateProductDetails,
  validateProductUpdate,
} from "../middlewares/productMiddleware";

const router = Router();

router.route("/getProduct").get(validateProductId, getProduct);
router.route("/updateProduct").patch(validateProductUpdate, updateProduct);
router.route("/deleteProduct").delete(validateProductId, deleteProduct);
router.route("/createProduct").post(validateProductDetails, createProduct);
router.route("/getAllProducts").get(getAllProducts);

export default router;
