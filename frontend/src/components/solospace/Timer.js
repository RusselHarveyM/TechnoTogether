import {
  Button,
  Card,
  CardContent,
  Icon,
  Switch,
  Tooltip,
} from "@mui/material";
import React from "react";

const TimeStatus = {
  STOP: "stop",
  PLAY: "play",
  PAUSE: "pause",
};

const Timer = ({
  setOpenTimer,
  timeStatus,
  runningTime,
  formatTime,
  stopTimer,
  setTimeStatus,
  focusTime,
  setFocusTime,
  breakTime,
  setBreakTime,
  loop,
  setLoop,
  startTimer,
}) => {
  return (
    <Card className="timer_card_container">
      <CardContent
        style={{
          paddingBottom: "16px",
        }}
      >
        <div className="card_content_header_container">
          <div className="card_content_header">
            <Icon sx={{ fontSize: "15px", marginRight: "5px" }}>timer</Icon>
            <strong>Personal Timer</strong>
          </div>
          <div className="action_container">
            <Icon
              sx={{
                fontSize: "15px",
                marginRight: "5px",
                cursor: "pointer",
              }}
            >
              volume_up
            </Icon>
            <Tooltip title="Info here...">
              <Icon
                sx={{
                  fontSize: "15px",
                  marginRight: "5px",
                  cursor: "pointer",
                }}
              >
                info_outline
              </Icon>
            </Tooltip>
            <Icon
              sx={{
                fontSize: "15px",
                marginRight: "5px",
                cursor: "pointer",
              }}
              onClick={() => setOpenTimer(false)}
            >
              close
            </Icon>
          </div>
        </div>
        {(timeStatus === TimeStatus.PLAY ||
          timeStatus === TimeStatus.PAUSE) && (
          <div className="timer_card_content_play">
            <h1>
              <strong
                style={{
                  color: runningTime.type === "break" ? "red" : "white",
                }}
              >
                {formatTime(runningTime.time)}
              </strong>
            </h1>
            <div className="action_container">
              <Icon
                sx={{ marginRight: "5px", cursor: "pointer" }}
                onClick={() => stopTimer()}
              >
                stop
              </Icon>
              <Icon
                sx={{ marginRight: "5px", cursor: "pointer" }}
                onClick={() =>
                  setTimeStatus(
                    timeStatus === TimeStatus.PAUSE
                      ? TimeStatus.PLAY
                      : TimeStatus.PAUSE
                  )
                }
              >
                {timeStatus === TimeStatus.PAUSE ? "play_arrow" : "pause"}
              </Icon>
            </div>
          </div>
        )}
        {timeStatus === TimeStatus.STOP && (
          <div className="timer_card_content_stop">
            <div className="timer_display_container">
              <span
                style={{
                  fontSize: "10px",
                  margin: "10px 0px 5px 0px",
                }}
              >
                Focus Time (mins.)
              </span>
              <div className="timer_display_content">
                <Icon
                  sx={{ fontWeight: "bold", cursor: "pointer" }}
                  onClick={() => setFocusTime(focusTime - 60)}
                >
                  remove
                </Icon>
                <Card className="timer_display">{formatTime(focusTime)}</Card>
                <Icon
                  sx={{ fontWeight: "bold", cursor: "pointer" }}
                  onClick={() => setFocusTime(focusTime + 60)}
                >
                  add
                </Icon>
              </div>
            </div>
            <div className="timer_display_container">
              <span
                style={{
                  fontSize: "10px",
                  margin: "10px 0px 5px 0px",
                }}
              >
                Break Time (mins.)
              </span>
              <div className="timer_display_content">
                <Icon
                  sx={{ fontWeight: "bold", cursor: "pointer" }}
                  onClick={() => setBreakTime(breakTime - 60)}
                >
                  remove
                </Icon>
                <Card className="timer_display">{formatTime(breakTime)}</Card>
                <Icon
                  sx={{ fontWeight: "bold", cursor: "pointer" }}
                  onClick={() => setBreakTime(breakTime + 60)}
                >
                  add
                </Icon>
              </div>
            </div>
            <div className="loop_container">
              <Switch
                size="small"
                checked={loop}
                onChange={() => setLoop(!loop)}
              />
              <span>Loop automatically</span>
              <Tooltip title="Info here...">
                <Icon sx={{ marginLeft: "5px", fontSize: "12px" }}>
                  info_outline
                </Icon>
              </Tooltip>
            </div>
            <Button
              variant="outlined"
              className="timer_start_btn"
              onClick={() => startTimer()}
            >
              Start Timer
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Timer;
