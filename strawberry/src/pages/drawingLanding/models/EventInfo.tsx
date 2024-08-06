import { EventImageUrl } from "./EventmageUrl";

export interface EventInfo {
  bannerImgUrl: string;
  eventImgUrls: EventImageUrl;
  startAt: string;
  endAt: string;
}
