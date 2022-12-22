import {
  Card,
  CardContent,
  FormControlLabel,
  Icon,
  IconButton,
  Radio,
  TextField,
  Tooltip,
} from "@mui/material";
import React from "react";

const PersonalGoal = ({
  setOpenPersonalGoal,
  goalInput,
  setGoalInput,
  addGoal,
  goals,
  completeGoal,
  deleteGoal,
}) => {
  return (
    <Card className="goal_card_container">
      <CardContent
        style={{
          paddingBottom: "16px",
        }}
      >
        <div className="card_content_header_container">
          <div className="card_content_header">
            <Icon sx={{ fontSize: "15px", marginRight: "5px" }}>
              track_changes
            </Icon>
            <strong>Learning Goals</strong>
          </div>
          <div className="action_container">
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
              onClick={() => setOpenPersonalGoal(false)}
            >
              close
            </Icon>
          </div>
        </div>
        <div className="goal_card_content">
          <div className="goal_input_container">
            <TextField
              variant="outlined"
              placeholder="Type a goal..."
              size="small"
              value={goalInput}
              onChange={(e) => setGoalInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  addGoal(goalInput);
                }
              }}
              style={{ width: "195px !important" }}
            />
            <IconButton
              size="small"
              className="add_goal_btn"
              disabled={!goalInput}
              onClick={() => addGoal(goalInput)}
            >
              <Icon sx={{ fontSize: "30px" }}>add</Icon>
            </IconButton>
          </div>
          <Card className="goal_status_container">
            <CardContent>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <strong style={{ fontSize: "45px" }}>
                    {goals.filter((goal) => goal.status !== "completed").length}
                  </strong>
                  <span>Open</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    borderLeft: "2px solid #FFFFFF40",
                  }}
                >
                  <strong style={{ fontSize: "45px", color: "#63A34D" }}>
                    {goals.filter((goal) => goal.status === "completed").length}
                  </strong>
                  <span>Completed</span>
                </div>
              </div>
            </CardContent>
          </Card>
          {goals.map((goal) => (
            <Card className="goal_item_container" key={goal.id}>
              <FormControlLabel
                value={goal.id}
                control={<Radio onClick={() => completeGoal(goal.id)} />}
                label={goal.label}
              />
              <div style={{ display: "flex" }}>
                <Icon
                  sx={{
                    fontSize: "15px",
                    marginRight: "5px",
                    cursor: "pointer",
                  }}
                >
                  edit
                </Icon>
                <Icon
                  sx={{ fontSize: "15px", cursor: "pointer" }}
                  onClick={() => deleteGoal(goal.id)}
                >
                  delete
                </Icon>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalGoal;
