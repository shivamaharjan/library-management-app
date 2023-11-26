import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../config/firbase-config";
import { setBooks, setSelectedBook } from "./bookSlice";

export const addNewBookAction = (bookObj) => async (dispatch) => {
  try {
    // save this book to firebase/API call...
    const collectionRef = collection(db, "books");
    const docRefPromise = addDoc(collectionRef, bookObj);
    toast.promise(docRefPromise, {
      pending: "In Progress...",
    });
    await docRefPromise;
    toast.success("New Book added successfully");
  } catch (e) {
    console.log("error", e);
    toast.error(e.message);
  }
};
