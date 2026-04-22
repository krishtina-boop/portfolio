type FormData = {
  name: string;
  email: string;
  message: string;
};

export const formSubmit = async (data: FormData) => {
  const payload = {
    ...data,
    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify(payload),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Submission error:", error);
    return { success: false, message: "A network error occurred." };
  }
};
