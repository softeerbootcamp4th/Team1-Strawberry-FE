import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import RenderOnViewportEntry from "./RenderOnViewportEntry";
import Footer from "../../layout/components/footer";

const NewCarPage: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      scrollToNextSection();
    } else if (event.key === "ArrowUp") {
      scrollToPreviousSection();
    }
  };

  const scrollToNextSection = () => {
    if (scrollerRef.current) {
      const currentScrollPosition = scrollerRef.current.scrollTop;
      const sectionHeight = window.innerHeight;
      const maxScroll = scrollerRef.current.scrollHeight - sectionHeight;

      scrollerRef.current.scrollTo({
        top: Math.min(currentScrollPosition + sectionHeight, maxScroll),
        behavior: "smooth",
      });
    }
  };

  const scrollToPreviousSection = () => {
    if (scrollerRef.current) {
      const currentScrollPosition = scrollerRef.current.scrollTop;
      const sectionHeight = window.innerHeight;

      scrollerRef.current.scrollTo({
        top: Math.max(currentScrollPosition - sectionHeight, 0),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Scroller ref={scrollerRef}>
      <RenderOnViewportEntry style={{ minHeight: "100vh" }}>
        <NewCarBanner />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry style={{ minHeight: "100vh" }}>
        <NewCarParts />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry style={{ minHeight: "100vh" }}>
        <DesignBanner />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry style={{ minHeight: "100vh" }}>
        <DesignDetail designType="EXTERIOR" />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry style={{ minHeight: "100vh" }}>
        <DesignCalligraphy designType="EXTERIOR" />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry style={{ minHeight: "100vh" }}>
        <DesignDetail designType="INTERIOR" />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry style={{ minHeight: "100vh" }}>
        <DesignCalligraphy designType="INTERIOR" />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry style={{ minHeight: "100vh" }}>
        <SpaceBanner />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry style={{ minHeight: "100vh" }}>
        <SpaceCarousel />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry style={{ minHeight: "100vh" }}>
        <DrivingBanner />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry style={{ minHeight: "100vh" }}>
        <DrivingCarousel />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry style={{ minHeight: "100vh" }}>
        <NewCarGallery />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry style={{ minHeight: "200px" }}>
        <NewCarBottom />
      </RenderOnViewportEntry>
      <Footer />
    </Scroller>
  );
};

export default NewCarPage;

const NewCarBanner = React.lazy(
  () => import("./components/banner/NewCarBanner"),
);
const NewCarParts = React.lazy(() => import("./components/part/NewCarParts"));
const DesignBanner = React.lazy(
  () => import("./components/design/DesignBanner"),
);
const DesignDetail = React.lazy(
  () => import("./components/design/DesignDetail"),
);
const DesignCalligraphy = React.lazy(
  () => import("./components/design/DesignCalligraphy"),
);
const SpaceBanner = React.lazy(() => import("./components/space/SpaceBanner"));
const SpaceCarousel = React.lazy(
  () => import("./components/space/SpaceCarousel"),
);
const DrivingBanner = React.lazy(
  () => import("./components/driving/DrivingBanner"),
);
const DrivingCarousel = React.lazy(
  () => import("./components/driving/DrivingCarousel"),
);
const NewCarGallery = React.lazy(
  () => import("./components/gallery/NewCarGallery"),
);
const NewCarBottom = React.lazy(
  () => import("./components/bottom/NewCarBottom"),
);

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Scroller component with sections
const Scroller = styled.div`
  height: 100vh;
  overflow-y: auto; /* Make sure it scrolls naturally */
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth; /* Ensure smooth scroll */

  section {
    scroll-snap-align: start;
    animation: ${fadeIn} 0.8s ease-out both;
  }

  :-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
