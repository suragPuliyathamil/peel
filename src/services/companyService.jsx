export async function searchCompanies({
  name = "",
  pageNumber = 0,
  pageSize = 10,
  sortBy = "id",
  sortDirection = "ASC",
}) {
  const params = new URLSearchParams({
    name,
    pageNumber,
    pageSize,
    sortBy,
    sortDirection,
  });

  const response = await fetch(
    `http://localhost:8001/api/v1/companies/search?${params}`,
    { headers: { accept: "*/*" } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch companies");
  }

  const json = await response.json();
  return json.data;
}
