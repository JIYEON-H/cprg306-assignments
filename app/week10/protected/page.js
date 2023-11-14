"use client";

import getShoppingList, {
  addNewItem,
} from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  if (user) {
    const items = getShoppingList(user.uid);
    console.log(items);
  }

  let newItem = {
    name: "Onions",
    category: "Produce",
    quantity: 4,
  };

  return (
    <main>
      <header>
        <h1>Protected Page</h1>
      </header>
      <section>
        {user ? (
          <div>
            <p>You are logged in! This page is protected</p>
            <button onClick={() => addNewItem(user.uid, newItem)}>add</button>
          </div>
        ) : (
          <p>You must be logged in to view this page</p>
        )}
      </section>
    </main>
  );
}
