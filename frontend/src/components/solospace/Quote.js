import { Card, CardContent, Icon, Tooltip } from "@mui/material";
import React from "react";

const Quote = ({ closeCard }) => {
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
              format_quote
            </Icon>
            <strong>Motivational Quote</strong>
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
        <div className="quote_container">
          <div className="quote">
            <Icon>shuffle</Icon>
            <span>Shuffle</span>
          </div>
          <div className="quote">
            <Icon>visibility_off</Icon>
            <span>Hide</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Quote;
