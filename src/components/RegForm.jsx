import styles from "./RegForm.module.css";

const RegForm = () => {
  return (
    <div class={styles.container}>
      <div class={styles.header}>
        <h1>Create Account</h1>
        <p>Join our community today</p>
      </div>

      <div class={styles.form_container}>
        <form>
          <div class={styles.name_group}>
            <div class={styles.form_group}>
              <label for="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
              />
            </div>

            <div class={styles.form_group}>
              <label for="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div class={styles.form_group}>
            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div class={styles.form_group}>
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
            />
          </div>

          <div class={styles.form_group}>
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" class={styles.btn}>
            Create Account
          </button>

          <div class={styles.login_link}>
            Already have an account? <a href="#">Sign In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegForm;
