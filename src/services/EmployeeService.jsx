const BASE_URL = "http://localhost:8001/api/v1/employees";

/**
 * Search Employees by Company ID
 */
export async function searchEmployeesByCompanyId({
  companyId,
  pageNumber = 0,
  pageSize = 10,
  sortBy = "id",
  sortDirection = "ASC",
}) {
  const response = await fetch(`${BASE_URL}/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
    body: JSON.stringify({
      criteria: {
        companyId,
      },
      pageRequest: {
        pageNumber,
        pageSize,
        sortBy,
        sortDirection,
        validatedPageSize: pageSize,
      },
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  const json = await response.json();
  return json.data;
}
