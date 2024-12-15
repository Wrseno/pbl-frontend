import {API_BASE_URL} from "../../config.js";
import {getisLoggedIn, getQueryParam} from "../../utils.js";

const initializeLikeButton = async () => {
  const eventId = getQueryParam("id");
  const isLoggedIn = await getisLoggedIn();
  const likeButton = document.getElementById("like-button");

  if (!isLoggedIn) {
    likeButton.addEventListener("click", () => {
      notyf.error("Kamu harus login untuk menyukai event!");
    });
    return;
  }

  const userId = isLoggedIn.user_id;

  if (!likeButton) {
    console.error("Like button not found");
    return;
  }

  try {
    const checkResponse = await fetch(
      `${API_BASE_URL}/likes?event_id=${eventId}&user_id=${userId}`
    );

    const response = await checkResponse.json();

    if (response.data) {
      let {is_liked: isLiked, like_id} = response.data;

      if (isLiked) likeButton.classList.add("text-red-500");
      else likeButton.classList.add("text-gray-400");

      likeButton.addEventListener("click", async () => {
        try {
          if (isLiked) {
            const unlikeResponse = await fetch(
              `${API_BASE_URL}/likes/${like_id}`,
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            if (!unlikeResponse.ok) {
              throw new Error(`HTTP error! status: ${unlikeResponse.status}`);
            }

            likeButton.classList.remove("text-red-500");
            likeButton.classList.add("text-gray-400");
            isLiked = false;
          } else {
            const likeResponse = await fetch(`${API_BASE_URL}/likes`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                user_id: userId,
                event_id: eventId,
              }),
            });

            if (!likeResponse.ok) {
              throw new Error(`HTTP error! status: ${likeResponse.status}`);
            }

            likeButton.classList.add("text-red-500");
            likeButton.classList.remove("text-gray-400");

            const likeResponseData = await likeResponse.json();
            like_id = likeResponseData.data.like_id;
            isLiked = true;
          }
        } catch (error) {
          console.error("Error:", error);
        }
      });
    } else {
      console.error("Failed to get like status.");
    }
  } catch (error) {
    console.error("Error fetching like status:", error);
  }
};

export default initializeLikeButton;
