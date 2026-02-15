const BASE_URL = "http://localhost:8001/api/v1/companies";

/**
 * Search Companies
 * Empty name -> returns all companies (as per backend behavior)
 */
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
    `${BASE_URL}/search?${params}`,
    { headers: { accept: "*/*" } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch companies");
  }

  const json = await response.json();
  return json.data;
}

/**
 * Create Company
 */
export async function createCompany({
  name,
  registrationNumber,
  email,
  phone,
  address,
  industry,
}) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
    body: JSON.stringify({
      name,
      registrationNumber,
      email,
      phone,
      address,
      industry,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create company");
  }

  const json = await response.json();
  return json.data;
}

export async function getCompanyById(id) {
  const response = await fetch(
    `http://localhost:8001/api/v1/companies/${id}`,
    { headers: { accept: "*/*" } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch company details");
  }

  const json = await response.json();
  return json.data;
}