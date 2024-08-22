interface EventImageUrl {
  how: string;
  reward: string;
  description: string;
}
export interface DrawingLanding {
  bannerImgUrl: string;
  eventImgUrls: EventImageUrl;
  startAt: string;
  endAt: string;
  subEventId: number;
}
