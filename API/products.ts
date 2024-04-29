import { collection, getDocs } from "firebase/firestore";
import { app, db } from "../firebase/firebase";

export default async function getProducts() {
  const productsCol = collection(db, "products");
  const productSnapshot = await getDocs(productsCol);
  const productList = productSnapshot.docs.map((doc) => doc.data());


  import("firebase/analytics").then(({ getAnalytics, logEvent }) => {
    const analytics = getAnalytics(app);
    logEvent(analytics, "get_products", {
      number_of_products: productList.length,
    });
  });
  
  return productList;
}
