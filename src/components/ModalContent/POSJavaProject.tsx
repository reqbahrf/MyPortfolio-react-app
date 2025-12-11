import ShowcaseGenerator from '../ShowcaseGenerator';
import { motion } from 'motion/react';
import slide1Java from '/assets/java-project/slide1.webp';
import slide2Java from '/assets/java-project/slide2.webp';
import slide3Java from '/assets/java-project/slide3.webp';
import slide4Java from '/assets/java-project/slide4.webp';
import slide5Java from '/assets/java-project/slide5.webp';
import slide6Java from '/assets/java-project/slide6.webp';

const POSJavaProject = () => {
  const features = [
    {
      title: 'Login Interface',
      description:
        "Shows a login screen set against the backdrop of the actual physical store. It features input fields for credentials, a dropdown for user type (Owner is visible), and a Show Password option. This ensures only authorized personnel can access the system's functions.",
      image: slide1Java,
    },
    {
      title: 'Point of Sale (POS) Interface - Product List',
      description:
        "This is the cashier's main screen. Product List (Left Panel): Displays product details (ID, Product_Name, Price, Available_Stock). The list shows common Filipino dishes like Tapsilog, Pork sisig, Lugaw Supreme, and other variants. A Search function helps cashiers quickly find items.",
      image: slide2Java,
    },
    {
      title: 'Point of Sale (POS) Interface - Order and Transaction',
      description:
        'Order Cart (Middle Panel): Lists items added to the current order (Item, Qty, Price). Includes action buttons: Select, Delete, and Clear for managing the order. Transaction Panel (Bottom Right): Calculates the Total amount, accepts the Cash input, and displays the calculated Change. Buttons for Pay and Print finalize the sale. Top Sales: A small widget in the bottom right tracks the best-selling products.',
      image: slide3Java,
    },
    {
      title: 'Admin Dashboard - Financial Overview',
      description:
        'Displays a summary of sales, including the top-selling items (D3 Spicy Chicken, H2 Pork Sisig), the Total Qty Sold, and the Total Price. A Total Income: 270.00 indicator is shown at the bottom. The right panel is likely reserved for graphical reports or further details.',
      image: slide4Java,
    },
    {
      title: 'Admin Dashboard - User Management',
      description:
        'Allows administrators to view, add, update, and delete user accounts. Fields include ID, Name, User Name, Password, and Access Type (e.g., Owner, which is visible).',
      image: slide5Java,
    },
    {
      title: 'Admin Dashboard - Product Management',
      description:
        'This screen provides a way to manage the product catalog. Admins can view the full list and use the input panel on the right to Add, Update, or Delete products by entering the ID, Product Name, Price, and Stock.',
      image: slide6Java,
    },
  ];

  return (
    <section className='bg-linear-to-b from-gray-400 to-white px-6 py-20 transition-colors duration-300 md:px-20 dark:from-gray-900 dark:to-gray-800'>
      {/* ---------- Project Intro ---------- */}
      <motion.div
        className='mb-16 text-center'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='mb-4 text-4xl font-extrabold text-gray-800 md:text-5xl dark:text-white'>
          Toppings Express POS & Admin
        </h2>
        <p className='mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400'>
          First Java GUI Application Project as one of requirement from the
          System Analysis and Design(SAD) subject during my second year.
        </p>
      </motion.div>

      {/* ---------- Feature List ---------- */}
      <ShowcaseGenerator items={features} />
    </section>
  );
};

export default POSJavaProject;
