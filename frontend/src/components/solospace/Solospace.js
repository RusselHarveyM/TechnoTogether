import React, { useEffect, useState } from "react";
import "../home/Home.css";
import logo from "../../images/logo.png";
import "./Solospace.css";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import PersonalGoal from "./PersonalGoal";
import Timer from "./Timer";
import PhotoLibrary from "./PhotoLibrary";
import Music from "./Music";
import Quote from "./Quote";

const TimeStatus = {
  STOP: "stop",
  PLAY: "play",
  PAUSE: "pause",
};

function Solospace() {
  // UI states
  const [openTimer, setOpenTimer] = useState(false);
  const [openPersonalGoal, setOpenPersonalGoal] = useState(false);
  const [openMinorCards, setOpenMinorCards] = useState("");

  // Timer states
  const [intervalId, setIntervalId] = useState();
  const [timeStatus, setTimeStatus] = useState(TimeStatus.STOP);
  const [focusTime, setFocusTime] = useState(3000);
  const [breakTime, setBreakTime] = useState(600);
  const [doBreak, setDoBreak] = useState(null);
  const [runningTime, setRunningTime] = useState(0);
  const [loop, setLoop] = useState(false);

  // Goal states
  const [goalInput, setGoalInput] = useState("");
  const [goals, setGoals] = useState([]);

  // Dialog states
  const [dialogOpen, setDialogOpen] = useState(false);
  const [breakDialogOpen, setBreakDialogOpen] = useState(false);

  useEffect(() => {
    let intervalId = "";
    if (timeStatus === TimeStatus.PLAY) {
      intervalId = setInterval(() => {
        if (runningTime.time !== 0) {
          setDoBreak(null);
          setRunningTime((t) => ({ ...t, time: t.time - 1 }));
        } else {
          if (runningTime.type === "focus") {
            if (doBreak !== null && doBreak === true) {
              setRunningTime({ type: "break", time: breakTime });
            } else if (doBreak !== null && doBreak === false) {
              setRunningTime({ type: "focus", time: focusTime });
            } else {
              setDialogOpen(true);
            }
          } else {
            if (doBreak === null) {
              setBreakDialogOpen(true);
            } else {
              if (doBreak !== null) {
                if (loop) {
                  setRunningTime({ type: "focus", time: focusTime });
                } else {
                  setTimeStatus(TimeStatus.STOP);
                  clearInterval(intervalId);
                }
              }
            }
          }
        }
      }, 1000);
      setIntervalId(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [
    timeStatus,
    runningTime,
    focusTime,
    breakTime,
    loop,
    doBreak,
    breakDialogOpen,
  ]);

  const toggleMinorCards = (minorCardTitle) => {
    if (openMinorCards === "" || openMinorCards !== minorCardTitle) {
      setOpenMinorCards(minorCardTitle);
    } else {
      setOpenMinorCards("");
    }
  };

  const startTimer = () => {
    setRunningTime({ type: "focus", time: focusTime });
    setTimeStatus(TimeStatus.PLAY);
  };

  const stopTimer = () => {
    setRunningTime({});
    setTimeStatus(TimeStatus.STOP);
    clearInterval(intervalId);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    time = time % 3600;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, 0)}:${minutes
      .toString()
      .padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`;
  };

  const addGoal = (goal) => {
    setGoals([...goals, { id: goals.length + 1, label: goal, status: "open" }]);
    setGoalInput("");
  };

  const completeGoal = (goalId) => {
    setGoals(
      goals.map((goal) => {
        if (goal.id === goalId) {
          goal.status = "completed";
        }
        return goal;
      })
    );
  };

  const deleteGoal = (goalId) => {
    setGoals(goals.filter((goal) => goal.id !== goalId));
  };

  return (
    <>
      <div className="gridHome_container">
        <nav className="grid_head_nav">
          <input type="search" name="" id="grid_head_nav" />
        </nav>
        <nav className="grid_home_nav">
          <img
            src={logo}
            height="100px"
            width="100px"
            alt="techno_together_logo"
          />
          <Link className="applyTutor_Btn">Apply as a Tutor</Link>
          <div className="grid_home_nav_items">
            <Link to="">Overview</Link>
            <Link>Study Area</Link>
            <Link style={{ color: "#FF914D" }}>Solo Space</Link>
            <Link>Learning Goals</Link>
            <Link>Chat Room</Link>
            <Link>Study Statistics</Link>
            <Link to="findtutor">Find Tutor</Link>
            <Link to="forum">Forum</Link>
            <Link>Settings</Link>
          </div>
          <div className="merchant">
            <h5>Get mobile app</h5>
          </div>
        </nav>
        <article className="grid_body">
          <div className="solospace_container">
            <div className="main_card_container">
              <div className="card_container">
                <Card
                  className="card card_margin"
                  onClick={() => setOpenTimer(!openTimer)}
                >
                  <CardContent className="card_content">
                    <div className="card_content_header">
                      <Icon sx={{ fontSize: "15px", marginRight: "5px" }}>
                        timer
                      </Icon>
                      Personal Timer
                    </div>
                    <span className="card_content_time">
                      {formatTime(runningTime.time ?? 0)}
                    </span>
                  </CardContent>
                </Card>
                <Card
                  className="card"
                  onClick={() => setOpenPersonalGoal(!openPersonalGoal)}
                >
                  <CardContent className="card_content">
                    <div className="card_content_header">
                      <Icon sx={{ fontSize: "15px", marginRight: "5px" }}>
                        track_changes
                      </Icon>
                      Learning Goals
                    </div>
                    <span className="card_content_time">{`${
                      goals.filter((goal) => goal.status === "completed").length
                    } / ${goals.length}`}</span>
                  </CardContent>
                </Card>
              </div>
              <div className="card_container">
                <Card
                  className="card icon_card card_margin"
                  onClick={() => toggleMinorCards("photo_library")}
                >
                  <Icon
                    style={{
                      color:
                        openMinorCards === "photo_library"
                          ? "#FF914D"
                          : "white",
                    }}
                  >
                    photo_library
                  </Icon>
                </Card>
                <Card
                  className="card icon_card card_margin"
                  onClick={() => toggleMinorCards("library_music")}
                >
                  <Icon
                    style={{
                      color:
                        openMinorCards === "library_music"
                          ? "#FF914D"
                          : "white",
                    }}
                  >
                    library_music
                  </Icon>
                </Card>
                <Card
                  className="card icon_card"
                  onClick={() => toggleMinorCards("format_quote")}
                >
                  <Icon
                    style={{
                      color:
                        openMinorCards === "format_quote" ? "#FF914D" : "white",
                    }}
                  >
                    format_quote
                  </Icon>
                </Card>
              </div>
            </div>
            <div className="main_card_container">
              <div style={{ display: "flex", flexDirection: "column" }}>
                {openTimer && (
                  <Timer
                    setOpenTimer={setOpenTimer}
                    timeStatus={timeStatus}
                    runningTime={runningTime}
                    formatTime={formatTime}
                    stopTimer={stopTimer}
                    setTimeStatus={setTimeStatus}
                    focusTime={focusTime}
                    setFocusTime={setFocusTime}
                    breakTime={breakTime}
                    setBreakTime={setBreakTime}
                    loop={loop}
                    setLoop={setLoop}
                    startTimer={startTimer}
                  />
                )}
                {openPersonalGoal && (
                  <PersonalGoal
                    setOpenPersonalGoal={setOpenPersonalGoal}
                    goalInput={goalInput}
                    setGoalInput={setGoalInput}
                    addGoal={addGoal}
                    goals={goals}
                    completeGoal={completeGoal}
                    deleteGoal={deleteGoal}
                  />
                )}
              </div>
              <div>
                {openMinorCards !== "" &&
                  openMinorCards === "photo_library" && (
                    <PhotoLibrary closeCard={() => setOpenMinorCards("")} />
                  )}
                {openMinorCards !== "" &&
                  openMinorCards === "library_music" && (
                    <Music closeCard={() => setOpenMinorCards("")} />
                  )}
                {openMinorCards !== "" && openMinorCards === "format_quote" && (
                  <Quote closeCard={() => setOpenMinorCards("")} />
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
      <Dialog id="focus_dialog" open={dialogOpen}>
        <DialogTitle>Well done!</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              setDoBreak(false);
              setDialogOpen(false);
            }}
          >
            Continue Studying
          </Button>
          <Button
            onClick={() => {
              setDoBreak(true);
              setDialogOpen(false);
            }}
            autoFocus
          >
            Start Break
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog id="break_dialog" open={breakDialogOpen}>
        <DialogTitle>Your break is over!</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              setDoBreak(true);
              setBreakDialogOpen(false);
            }}
            autoFocus
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Solospace;
