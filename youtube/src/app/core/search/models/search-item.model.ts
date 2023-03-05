export interface SearchItemModel {
  kind: string;
  etag: string;
  id: string;
  snippet: SnippetModel;
  statistics: StatisticsModel;
}

export interface SnippetModel {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ThumbnailsModel;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: LocalizedModel;
  defaultAudioLanguage: string;
}

export interface ThumbnailsModel {
  default: ThumbnailModel;
  medium: ThumbnailModel;
  high: ThumbnailModel;
  standart: ThumbnailModel;
  maxres: ThumbnailModel;
}

export interface ThumbnailModel {
  url: string;
  width: number;
  height: number;
}

export interface LocalizedModel {
  title: string;
  description: string;
}

export interface StatisticsModel {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
