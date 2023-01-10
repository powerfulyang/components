export interface UserInfo {
  contributionCalendar: ContributionCalendar[];
  contributesLanguage: ContributesLanguage[];
  totalForkCount: number;
  totalStargazerCount: number;
  totalCommitContributions: number;
  totalIssueContributions: number;
  totalPullRequestContributions: number;
  totalPullRequestReviewContributions: number;
}

export interface ContributesLanguage {
  language: string;
  color: string;
  contributions: number;
}

export interface ContributionCalendar {
  contributionCount: number;
  contributionLevel: string;
  date: string;
}
