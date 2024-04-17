import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const showToastMessage = () => {
    const inputElement = document.querySelector("input"); // Get the input element
    const inputValue = inputElement.value.trim(); // Get the trimmed value of the input
    
    if (inputValue === "") {
      toast.error("Please enter your name.", {
        autoClose: 3000, // Close the error toast after 3 seconds
      });
    } else {
      toast.success("Success Notification !", {
        autoClose: 3000, // Close the success toast after 3 seconds
      });
    }
  };

  return (
    <div>
      <input placeholder="Write your name" />
      <button onClick={showToastMessage}>Notify</button>
      <ToastContainer />
    </div>
  );
}

export default App;
