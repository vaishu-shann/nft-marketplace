import config from "../config";
const baseUrl = config.baseURL;

export const userRegister = async (data) => {
  const config = {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  };
  try {
    const response = await fetch(baseUrl + "user/register", config);
    let result = await response.json();
    console.log("register user", result);
    return result;
  } catch (err) {
    console.log(err, "error");
    return;
  }
};

export const userLogin = async (data) => {
  const config = {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  };
  try {
    const response = await fetch(baseUrl + "user/login", config);
    let result = await response.json();
    console.log("register login", result);
    return result;
  } catch (err) {
    console.log(err, "error - login");
    return;
  }
};

export const getTopCreators = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  try {
    const response = await fetch(baseUrl + "user/top", config);
    let result = await response.json();
    console.log("getTopCreators", result);

    return result;
  } catch (err) {
    console.log(err, "error - getTopCreators");
    return;
  }
};

const getAPIData = async (config, url) => {
  const response = await fetch(baseUrl + url, config);
  if (response.status == 401 || response.status == 403) {
    const ref_token = localStorage.getItem("refresh_token");
    let resp = await RefreshAuth({ "refresh_token": ref_token })
    // console.log("get API Data refresh", resp);
    if (resp.status) {
      let auth_token = resp.data.auth_token
      localStorage.setItem("auth_token", auth_token);
      config.headers.Authorization = `Bearer ${auth_token}`
      return getAPIData(config, url)
    } else {
      return response
    }
  }

  return response
}

export const RefreshAuth = async (data) => {
  const config = {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  };
  try {
    const response = await fetch(baseUrl + "user/token/refresh", config);
    let result = await response.json();
    console.log("RefreshAuth", result);
    return result;
  } catch (err) {
    console.log(err, "error - RefreshAuth");
    return;
  }
};

export const getUserData = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  try {
    let response;
    if (id) {
      response = await getAPIData(config, `user?id=${id}`)
    } else {
      response = await getAPIData(config, "user")
    }
    let result = await response.json();
    return result;
  } catch (err) {
    console.log(err, "error");
    return;
  }
};

export const getAppConfig = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  try {
    const response = await fetch(baseUrl + "app/config", config);
    let result = await response.json();
    return result;
  } catch (err) {
    console.log(err, "error");
    return;
  }
};

export const getTopAssets = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  try {
    const response = await fetch(baseUrl + "nft/top", config);
    let result = await response.json();
    console.log("getTopAssets", result);
    return result;
  } catch (err) {
    console.log(err, "error - getTopAssets");
    return;
  }
};

export const getS3UserUrl = async (address, name) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  try {
    const response = await fetch(baseUrl + `app/presigned-user-url?address=${address}&key=${name}`, config);
    let result = await response.json();
    return result;
  } catch (err) {
    console.log(err, "error");
    return;
  }
};

export const verifyUser = async (data) => {
  const config = {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  };
  try {
    const response = await fetch(baseUrl + `user/verify`, config);
    console.log("verifyUser", response);
    let result = await response.json();
    return result;
  } catch (err) {
    console.log(err, "verifyUser");
    return;
  }
};

export const getAllAssets = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  try {
    const response = await fetch(baseUrl + "nft/all", config);
    let result = await response.json();
    console.log("getAllAssets", result);
    return result;
  } catch (err) {
    console.log(err, "error - getAllAssets");
    return;
  }
};

export const sortData = async (tags, filter) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  try {
    const response = await fetch(
      baseUrl +
      `nft/all?limit=15&tags=${JSON.stringify(tags)}&created_sort=${filter}`,
      config
    );
    let result = await response.json();
    console.log("sortData", result);
    return result;
  } catch (err) {
    console.log(err, "error - sortData");
    return;
  }
};

export const getAssetByID = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  try {
    const response = await fetch(baseUrl + `nft?id=${id}`, config);
    let result = await response.json();
    console.log("get Asset By ID", result);
    return result;
  } catch (err) {
    console.log(err, "error - getAllAssets");
    return;
  }
};


export const getCreatedAssets = async (address) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  try {
    const response = await getAPIData(config, `nft/created?address=${address}`)
    let result = await response.json();
    console.log("get Created Assets", result);
    return result;
  } catch (err) {
    console.log(err, "error - getCreatedAssets");
    return;
  }
};

export const getOwnedAssets = async (address) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  try {
    const response = await getAPIData(config, `nft/owned?address=${address}`)
    let result = await response.json();
    console.log("get Owning Assets", result);
    return result;
  } catch (err) {
    console.log(err, "error - getOwnedAssets");
    return;
  }
};

export const getRelevantAssets = async (tags, asset_id, filter) => {
  console.log("****", tags);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  try {
    const response = await fetch(
      baseUrl +
      `nft/relevant?limit=15&&tags=${JSON.stringify(tags)}&created_sort=${filter}&asset_id=${asset_id}`,
      config
    );
    let result = await response.json();
    console.log("get Relevant Assets", result);
    return result;
  } catch (err) {
    console.log(err, "error - get Relevant Assets");
    return;
  }
};