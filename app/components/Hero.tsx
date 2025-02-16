import Image from "next/image";
import styles from "@styles/hero.module.css";
import "../styles/utils.css";
import Chatbot from "./Chatbot"; 

export default function Header() {
  return (
    <>
      <div className={`${styles.hero}`}>
        <div className={`${styles.hero__container}`}>
          <div className={`${styles.hero__promotion}`}>
            <h1>🚀 Empowering Startups, Connecting Investors</h1>
            <p className={`${styles.hero__description}`}>
              Invest Vault is the bridge between visionary startups and smart
              investors. Whether you're a founder seeking funding or an investor
              looking for the next big opportunity, we provide a seamless
              platform to match your goals. 💡 Discover startups. 🔍 Find
              investors. 💰 Grow together.
            </p>
          </div>
          <div className={`${styles.image}`}>
            <Image
              src="/l2.png" // Replace with your actual image name
              alt="Invest Vault Hero"
              width={500} // Adjust width
              height={500} // Adjust height
              priority
            />
          </div>
        </div>
      </div>

      <section className={styles.featuresSection}>
        <h2>Key Features</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <Image
              src="/fi.png"
              alt="Discover Startups"
              width={200}
              height={200}
            />
            <h3>Discover Startups</h3>
            <p>Explore innovative ideas and groundbreaking startups.</p>
          </div>
          <div className={styles.featureCard}>
            <Image
              src="/feature2.png"
              alt="Find Investors"
              width={300}
              height={300}
            />
            <h3>Find Investors</h3>
            <p>Connect with investors who align with your vision.</p>
          </div>
          <div className={styles.featureCard}>
            <Image
              src="/feature3.png"
              alt="Grow Together"
              width={300}
              height={300}
            />
            <h3>Grow Together</h3>
            <p>Collaborate and unlock new opportunities for success.</p>
          </div>
        </div>
      </section>

      <section className={styles.howItWorksSection}>
        <h2>How It Works</h2>
        <ul className={styles.stepsList}>
          <li>
            <Image src="/step1.png" alt="Step 1" width={200} height={200} />
            <div>
              <h4>Step 1: Sign Up</h4>
                <p><b>Create your profile and tell us about your goals.</b></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur excepturi facere ad reiciendis id, accusantium optio doloremque atque magnam quibusdam sint, eaque corporis quidem explicabo dicta vitae obcaecati ex! Nostrum?</p>
            </div>
          </li>
          <li>
            <Image src="/step2.png" alt="Step 2" width={200} height={200} />
            <div>
              <h4>Step 2: Explore</h4>
              <p>
                Browse through our curated lists of startups and investors.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur excepturi facere ad reiciendis id, accusantium optio doloremque atque magnam quibusdam sint, eaque corporis quidem explicabo dicta vitae obcaecati ex! Nostrum?</p>
            </div>
          </li>
          <li>
            <Image src="/step3.png" alt="Step 3" width={200} height={200} />
            <div>
              <h4>Step 3: Connect</h4>
              <p>Reach out, make connections, and start collaborating.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur excepturi facere ad reiciendis id, accusantium optio doloremque atque magnam quibusdam sint, eaque corporis quidem explicabo dicta vitae obcaecati ex! Nostrum?</p>
            </div>
          </li>
        </ul>
      </section>

      <section className={styles.testimonialsSection}>
  <h2>Testimonials</h2>
  <div className={styles.testimonialsGrid}>
    <div className={styles.testimonialCard}>
      <img src="profile1.png" alt="User Image" />
      <p>"This service has been amazing! It exceeded my expectations."</p>
      <div className={styles.testimonialName}>Manish Nagpal</div>
      <div className={styles.stars}>★★★★★</div>
    </div>

    <div className={styles.testimonialCard}>
      <img src="profile2.png" alt="User Image" />
      <p>"Absolutely wonderful experience. Highly recommended!"</p>
      <div className={styles.testimonialName}>Jane Smith</div>
      <div className={styles.stars}>★★★★</div>
    </div>
  </div>
</section>


      <section className={styles.contactSection}>
        <h2>Contact Us</h2>
        <p>
          Have questions? Reach out to us at{" "}
          <a href="mailto:info@investvault.com">info@investvault.com</a>
        </p>
      </section>
            {/* Chatbot Component */}
            <Chatbot />
    </>
  );
}
