import { useState } from "react";
import Hero from "./components/Hero";
import Opening from "./components/Opening";
import Profile from "./components/Profile";
import EventDetails from "./components/EventDetails";
import Rundown from "./components/Rundown";
import Gallery from "./components/Gallery";
import Wishes from "./components/Wishes";
import Footer from "./components/Footer";
import MusicToggle from "./components/MusicToggle";
import { INVITATION } from "./InvitationData";
// import { Toaster } from "sonner";

import { Toaster } from "sonner";



export default function Invitation() {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);

    setTimeout(() => {
      document
        .getElementById("opening")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <Toaster position="top-center" richColors />

      <main
        className="bg-cream text-ink"
        data-testid="invitation-page"
      >
        <Hero onOpenInvitation={handleOpen} />

        {opened && (
          <>
            <Opening />
            {/* <Profile /> */}
            <EventDetails />
            <Rundown />
            {/* <Gallery /> */}
            <Wishes />
            <Footer />
            <MusicToggle src={INVITATION.audioUrl} />
          </>
        )}
      </main>
    </>
  );
}