import { http } from "./httpClient";

export const searchCompanies = async ({
  name,
  pageNumber = 1,
  pageSize = 10,
  sortBy = "id",
  sortDirection = "ASC"
}) => {
  const response = await http.get("/companies/search", {
    params: {
      name,
      pageNumber,
      pageSize,
      sortBy,
      sortDirection
}
  });

  return response.data.data;
};
