import { Card, CardContent, Icon, Tooltip } from "@mui/material";
import React from "react";
import Anime1 from "../../images/photo_library/anime1.jpg";
import Anime2 from "../../images/photo_library/anime2.jpg";
import Anime3 from "../../images/photo_library/anime3.jpg";
import Anime4 from "../../images/photo_library/anime4.jpg";
import Anime5 from "../../images/photo_library/anime5.jpg";
import Anime6 from "../../images/photo_library/anime6.jpg";
import Anime7 from "../../images/photo_library/anime7.jpg";
import Anime8 from "../../images/photo_library/anime8.jpg";
import Anime9 from "../../images/photo_library/anime9.png";

const PhotoLibrary = ({ closeCard }) => {
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
              photo_library
            </Icon>
            <strong>Background</strong>
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
        <div className="photo_library_categories">
          <div className="photo_library_category active">Anime</div>
          <div className="photo_library_category">Library</div>
          <div className="photo_library_category">Nature</div>
          <div className="photo_library_category">K-Pop</div>
          <div className="photo_library_category">Cafe</div>
          <div className="photo_library_category">Desk</div>
          <div className="photo_library_category">City</div>
        </div>
        <div className="photo_library_photos_container">
          {[
            Anime1,
            Anime2,
            Anime3,
            Anime4,
            Anime5,
            Anime6,
            Anime7,
            Anime8,
            Anime9,
          ].map((photo, index) => (
            <div className="photo_library_photo">
              <img
                src={photo}
                alt={`Anime${index}`}
                className="photo_library_photo"
              />
              {index === 0 && (
                <div className="active">
                  <Icon>check</Icon>
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          className="card_content_header_container"
          style={{ marginTop: "10px" }}
        >
          <div className="card_content_header">
            <Icon sx={{ fontSize: "15px", marginRight: "5px" }}>
              smart_display
            </Icon>
            <strong>Youtube Video</strong>
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
          </div>
        </div>
        <div className="youtube_link">
          <Icon>link</Icon>
          <span>Paste a Youtube link here</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhotoLibrary;
