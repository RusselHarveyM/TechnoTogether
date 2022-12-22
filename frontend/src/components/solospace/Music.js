import { Card, CardContent, Icon, Tooltip } from "@mui/material";
import React from "react";

const MusicSlide = ({ label }) => {
  return (
    <div className="slider_container">
      <Icon style={{ fontSize: "20px" }}>volume_off</Icon>
      <div className="slider_slide_container">
        <span style={{ fontSize: "15px" }}>{label}</span>
        <div className="slider_slide">
          <div className="slider_slide_ellipse" />
          <div className="slider_slide_line" />
        </div>
      </div>
    </div>
  );
};

const Music = ({ closeCard }) => {
  return (
    <Card className="photo_library_card_container">
      <CardContent
        style={{
          paddingBottom: "16px",
        }}
      >
        <div className="card_content_header_container">
          <div className="card_content_header">
            <Icon sx={{ fontSize: "15px", marginRight: "5px" }}>
              library_music
            </Icon>
            <strong>Music</strong>
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
              onClick={() => closeCard()}
            >
              close
            </Icon>
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <MusicSlide label="Lo-fi beats" />
          <MusicSlide label="Nature sounds" />
          <MusicSlide label="Rain sounds" />
          <MusicSlide label="Piano music" />
          <MusicSlide label="Jazz music" />
          <MusicSlide label="Classical music" />
        </div>
      </CardContent>
    </Card>
  );
};

export default Music;
