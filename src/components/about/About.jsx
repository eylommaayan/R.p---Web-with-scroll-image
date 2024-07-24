import "./about.css";
import Award from "../../img/Plumber.png";
import Plumber_side from "../../img/plumber-side.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Plumber_side} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">מי אני</h1>
        <p className="a-sub">מקצועיות, אמינות, מהירות</p>
        <p className="a-desc">
          עסק האינסטלציה שלני מספק שירותי תיקון, תחזוקה והתקנה של מערכות מים
          וביוב לבתים פרטיים ועסקים. אני מתמחה בזיהוי ותיקון נזילות, פתיחת
          סתימות, והתקנת מתקנים סניטריים כמו ברזים ואסלות. מקצועי ומנוסה, מספק
          שירות מהיר ואמין בכל שעות היממה. אני מחויב לשירות איכותי והוגן
          ללקוחותינו.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
