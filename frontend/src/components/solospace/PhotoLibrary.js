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
import Anime1Bg from "../../images/bg/anime1-bg.jpg";
import Anime2Bg from "../../images/bg/anime2-bg.jpg";
import Anime3Bg from "../../images/bg/anime3-bg.jpg";
import Anime4Bg from "../../images/bg/anime4-bg.jpg";
import Anime5Bg from "../../images/bg/anime5-bg.jpg";
import Anime6Bg from "../../images/bg/anime6-bg.jpg";
import Anime7Bg from "../../images/bg/anime7-bg.jpg";
import Anime8Bg from "../../images/bg/anime8-bg.jpg";
import Anime9Bg from "../../images/bg/anime9-bg.png";

const photos = [
  { id: 1, thumbnail: Anime1, bg: Anime1Bg },
  { id: 2, thumbnail: Anime2, bg: Anime2Bg },
  { id: 3, thumbnail: Anime3, bg: Anime3Bg },
  { id: 4, thumbnail: Anime4, bg: Anime4Bg },
  { id: 5, thumbnail: Anime5, bg: Anime5Bg },
  { id: 6, thumbnail: Anime6, bg: Anime6Bg },
  { id: 7, thumbnail: Anime7, bg: Anime7Bg },
  { id: 8, thumbnail: Anime8, bg: Anime8Bg },
  { id: 9, thumbnail: Anime9, bg: Anime9Bg },
];

const PhotoLibrary = ({ selectedPhoto, setSelectedPhoto, closeCard }) => {
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
          {photos.map((photo, index) => (
            <div
              className="photo_library_photo"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.thumbnail}
                alt={`Anime${index}`}
                className="photo_library_photo"
              />
              {selectedPhoto.id === photo.id && (
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
