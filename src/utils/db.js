import { db } from './firebase';
import { collection, addDoc, getDocs, query, where, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';

// Save Contact Form
export const saveContact = async (contactData) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...contactData,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving contact:', error);
    return { success: false, error: error.message };
  }
};

// Save Newsletter Subscriber
export const saveSubscriber = async (email) => {
  try {
    const q = query(collection(db, 'subscribers'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      return { success: false, error: 'Email already subscribed' };
    }
    
    const docRef = await addDoc(collection(db, 'subscribers'), {
      email,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving subscriber:', error);
    return { success: false, error: error.message };
  }
};

// Save Appointment
export const saveAppointment = async (appointmentData) => {
  try {
    const docRef = await addDoc(collection(db, 'appointments'), {
      ...appointmentData,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving appointment:', error);
    return { success: false, error: error.message };
  }
};

// Get All Blogs
export const getBlogs = async () => {
  try {
    const blogsSnapshot = await getDocs(collection(db, 'blogs'));
    const blogs = [];
    blogsSnapshot.forEach((doc) => {
      blogs.push({ id: doc.id, ...doc.data() });
    });
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

// Get Blogs by Category
export const getBlogsByCategory = async (category) => {
  try {
    const q = query(collection(db, 'blogs'), where('category', '==', category));
    const blogsSnapshot = await getDocs(q);
    const blogs = [];
    blogsSnapshot.forEach((doc) => {
      blogs.push({ id: doc.id, ...doc.data() });
    });
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs by category:', error);
    return [];
  }
};

// Add Blog Post (Admin)
export const addBlog = async (blogData) => {
  try {
    const docRef = await addDoc(collection(db, 'blogs'), {
      ...blogData,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding blog:', error);
    return { success: false, error: error.message };
  }
};
