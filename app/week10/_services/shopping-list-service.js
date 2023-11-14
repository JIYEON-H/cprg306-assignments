import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function addItem(userId, itemObj) {
  //was addNewItem
  try {
    let userItemsCollectionRef = collection(db, "users", userId, "items");
    let addItemPromise = await addDoc(userItemsCollectionRef, itemObj);
    //console.log(addItemPromise.id);
    return addItemPromise.id;
  } catch (error) {
    console.log(error);
  }
}

export async function dbGetItems(userId, updateItemList) {
  //was getShoppingList
  let userItemsCollectionRef = collection(db, "users", userId, "items");
  let collectionSnapshot = await getDocs(userItemsCollectionRef);
  let itemList = [];
  collectionSnapshot.forEach((doc) => {
    //console.log(doc.id, " - ", doc.data());
    let thisItem = {
      id: doc.id,
      ...doc.data(),
    };
    console.log(doc.id, " - ", doc.data());
    itemList.push(thisItem);
  });
  console.log(itemList);
  // return itemList;
  updateItemList(itemList); //search more info
}
