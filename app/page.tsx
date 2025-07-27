import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <h1>安康診所</h1>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#about">關於我們</a></li>
            <li><a href="#services">服務項目</a></li>
            <li><a href="#doctors">醫師團隊</a></li>
            <li><a href="#contact">聯絡資訊</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h2>專業醫療服務，守護您的健康</h2>
            <p>安康診所提供全方位的醫療服務，擁有專業的醫師團隊與先進的醫療設備，為您和您的家人提供最優質的醫療照護。</p>
            <div className={styles.heroButtons}>
              <a href="#contact" className={styles.primaryBtn}>立即預約</a>
              <a href="tel:02-12345678" className={styles.secondaryBtn}>緊急掛號</a>
            </div>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <div className={styles.container}>
            <h2>關於安康診所</h2>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <p>安康診所成立於2010年，致力於提供社區居民優質的醫療服務。我們以病患為中心，提供全人醫療照護，包含預防保健、疾病治療及健康管理。</p>
                <div className={styles.features}>
                  <div className={styles.feature}>
                    <h3>專業團隊</h3>
                    <p>資深醫師與護理人員</p>
                  </div>
                  <div className={styles.feature}>
                    <h3>先進設備</h3>
                    <p>引進最新醫療儀器</p>
                  </div>
                  <div className={styles.feature}>
                    <h3>貼心服務</h3>
                    <p>溫馨舒適的就診環境</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className={styles.services}>
          <div className={styles.container}>
            <h2>服務項目</h2>
            <div className={styles.serviceGrid}>
              <div className={styles.serviceCard}>
                <h3>家庭醫學科</h3>
                <p>提供全家人的基礎醫療服務，包含一般內科、外科小手術等。</p>
              </div>
              <div className={styles.serviceCard}>
                <h3>健康檢查</h3>
                <p>定期健康檢查，早期發現疾病，預防勝於治療。</p>
              </div>
              <div className={styles.serviceCard}>
                <h3>慢性病管理</h3>
                <p>糖尿病、高血壓等慢性疾病的長期管理與追蹤。</p>
              </div>
              <div className={styles.serviceCard}>
                <h3>疫苗接種</h3>
                <p>提供各類疫苗接種服務，保護您和家人的健康。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="doctors" className={styles.doctors}>
          <div className={styles.container}>
            <h2>醫師團隊</h2>
            <div className={styles.doctorGrid}>
              <div className={styles.doctorCard}>
                <div className={styles.doctorInfo}>
                  <h3>王志明 醫師</h3>
                  <p className={styles.specialty}>家庭醫學科專科醫師</p>
                  <p>擁有20年臨床經驗，專精於家庭醫學及慢性病管理。</p>
                </div>
              </div>
              <div className={styles.doctorCard}>
                <div className={styles.doctorInfo}>
                  <h3>李美華 醫師</h3>
                  <p className={styles.specialty}>內科專科醫師</p>
                  <p>專長於內科疾病診治，致力於提供病患全人照護。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <div className={styles.container}>
            <h2>聯絡資訊</h2>
            <div className={styles.contactContent}>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <h3>門診時間</h3>
                  <p>週一至週五：09:00-12:00, 14:00-17:00, 18:00-21:00</p>
                  <p>週六：09:00-12:00, 14:00-17:00</p>
                  <p>週日：休診</p>
                </div>
                <div className={styles.contactItem}>
                  <h3>聯絡方式</h3>
                  <p>電話：02-12345678</p>
                  <p>地址：台北市中正區健康路123號</p>
                  <p>Email：info@ankang-clinic.com</p>
                </div>
              </div>
              <div className={styles.appointmentForm}>
                <h3>線上預約</h3>
                <form className={styles.form}>
                  <input type="text" placeholder="姓名" required />
                  <input type="tel" placeholder="電話" required />
                  <input type="date" placeholder="預約日期" required />
                  <select required>
                    <option value="">選擇科別</option>
                    <option value="family">家庭醫學科</option>
                    <option value="internal">內科</option>
                    <option value="checkup">健康檢查</option>
                  </select>
                  <textarea placeholder="備註"></textarea>
                  <button type="submit" className={styles.submitBtn}>送出預約</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; 2024 安康診所 All Rights Reserved.</p>
          <p>地址：台北市中正區健康路123號 | 電話：02-12345678</p>
        </div>
      </footer>
    </div>
  );
}
