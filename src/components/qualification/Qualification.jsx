import "./qualification.css";

function Qualification() {
  return (
    <section className="qualification section">
      <h3 className="section-title">Qualification</h3>
      <span className="section-subtitle">My personal journey</span>

      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div className="qualification-button qualification-active-tab button--flex">
            <i className="uil uil-graduation-cap qualification-icon"></i>
            <span>Education</span>
          </div>
        </div>

        <div className="qualification-sections">
          <div className="qualification-content qualification-content-active">
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">B.Tech (CSE)</h3>
                <span className="qualification-subtitle">
                  Techno Main Saltlake
                </span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>

              <div>
                <h3 className="qualification-title">Intermediate</h3>
                <span className="qualification-subtitle">
                  J.L.N College, Dehri
                </span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>
            </div>

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Matric </h3>
                <span className="qualification-subtitle">
                  Sudama High School, Sidhauli
                </span>
                <div className="qualification-calender">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2018
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
