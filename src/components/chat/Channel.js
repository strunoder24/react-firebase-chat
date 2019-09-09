import React from 'react';
import Members from './channel/Members';
import ChannelInfo from './channel/ChannelInfo';
import Messages from './channel/Messages';
import ChatInputBox from './channel/ChatInputBox';

function Channel() {
  return (
    <div className="Channel">
      <div className="ChannelMain">
        <ChannelInfo />
        <Messages />
        <ChatInputBox />
      </div>
      <Members />
    </div>
  );
}

export default Channel;
