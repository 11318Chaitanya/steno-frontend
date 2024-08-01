import axios from "axios";

const base_url = "https://rajasthan-steno-classes.onrender.com";

const getConfig = () => {
  const token = localStorage.getItem("authToken"); // Ensure the token is stored correctly after login
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  };
};

export async function addTypingTest(data) {
  try {
    const response = await axios.post(
      `${base_url}/api/v1/admin/add/typing-test`,
      data,
      getConfig()
    );
    console.log(response);
    if (response.data) {
      return {
        success: true,
        message: "Registration Success",
      };
    } else {
      return {
        success: false,
        message: "Registration Failed",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Registration Failed",
    };
  }
}

export async function addStenoTest(data) {
  try {
    const response = await axios.post(
      `${base_url}/api/v1/admin/add/steno-test`,
      data,
      getConfig()
    );

    console.log(response);
    if (response) {
      return {
        success: true,
        message: "Steno Test Added Successfully",
      };
    } else {
      return {
        success: false,
        message: "Failed to Add Steno Test",
      };
    }
  } catch (error) {
    console.log("Error in addStenoTest function:", error.response.data);
    return {
      success: false,
      message: "Failed to Add Steno Test",
    };
  }
}
