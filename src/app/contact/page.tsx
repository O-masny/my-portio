import { motion } from "framer-motion";
import styles from "../../styles/contacts.module.css";

export default function ContactPage() {
  return (
    <div id="contact" className={styles.contactContainer}>
      <h1 className={styles.contactHeading}>Get in Touch</h1>

      <form className={styles.contactForm}>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Name" className={styles.input} />
        </div>

        <div className={styles.inputGroup}>
          <input type="email" placeholder="Email" className={styles.input} />
        </div>

        <div className={styles.inputGroup}>
          <input type="text" placeholder="Subject" className={styles.input} />
        </div>

        <div className={styles.inputGroup}>
          <textarea
            placeholder="Message"
            className={styles.textarea}
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className={styles.submitButton}
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
}
