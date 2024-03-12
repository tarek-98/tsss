import { Avatar, Button } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import "./VideoFooter.css";
// import Ticker from "react-ticker";

function VideoFooter({ likes, shares, channel, avatarSrc, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} .<Button>Follow</Button>
        </h3>
      </div>
      <div className="videoFooter_ticker"></div>
      {/* container for all the actions in every reel */}
      <div className="videoFooter_actions">
        <div className="videoFooter_actionsLeft">
          <FavoriteIcon />
          <ModeCommentIcon />
          <SendIcon />
          <MoreHorizIcon />
        </div>
        <div className="videoFooter_actionsRight">
          <div className="vidoeFooter_stat">
            <FavoriteIcon />
            <p>{likes}</p>
          </div>
          <div className="vidoeFooter_stat">
            <ModeCommentIcon />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
