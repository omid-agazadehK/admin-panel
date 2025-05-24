import toast from "react-hot-toast";

export const showSuccessToast = (message) =>
  toast.success(message, {
    duration: 3000,
    position: "top-center",
    style: {
      color: "#007c3c",
      fontWeight: "500",
      fontSize: "1rem",
      borderRadius: "10px",
      padding: "20px 40px",
    },
    icon: "✅",
  });

export const showErrorToast = (message) =>
  toast.error(message, {
    duration: 4000,
    position: "top-center",
    style: {
      color: "#c80000",
      fontWeight: "500",
      fontSize: "1rem",
      borderRadius: "10px",
      padding: "20px 40px",
    },
    icon: "❌",
  });
