/* eslint-disable no-unused-vars */
export interface IPagination {
  gamesPerPage: number,
  totalPosts: number,
  currentPage: number,
  paginate: (arg: number) => void
}
