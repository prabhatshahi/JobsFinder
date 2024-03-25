import app from "./app.js";
import cloudinary from "cloudinary";
app.listen(process.env.PORT, () => {
  console.log(`server Running on port  ${process.env.PORT}`);
});
