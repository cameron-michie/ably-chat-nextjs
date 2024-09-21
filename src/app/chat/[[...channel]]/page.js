'use client';
import { RoomOptionsDefaults } from '@ably/chat';
import ChannelList from "./components/channel-list";
import { ChatRoomProvider } from '@ably/chat/react';
import Chat from "./components/chat";
import AblyClient from "./components/ably-client";
import Rooms from "./components/rooms";
import { redirect } from 'next/navigation';

const Page = ({ params }) => {
  const channelName = `chat:${params.channel || 'general'}`;

  if (!params.channel) {
    redirect(`/chat/general`);
  }



  return (
    <AblyClient>
        <div className="grid grid-cols-4 h-[calc(100vh-72.8px)]">
          <div className="border-r border-gray-200 p-5">
            <Rooms/>
          </div>
        <div className="col-span-2 flex flex-col min-h-0">
        <ChatRoomProvider id={channelName} options={RoomOptionsDefaults}>
          {/* <Chat /> */}
        </ChatRoomProvider>
        </div>
        <div className="border-l border-gray-200 p-5">
          {/* Placeholder for other components like WhosOnlineList */}
        </div>
      </div>
    </AblyClient>
  );
};


export default Page;
