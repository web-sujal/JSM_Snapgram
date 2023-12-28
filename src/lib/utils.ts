import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTimeDifference(dateString: string): string {
  const postDate = new Date(dateString);
  const currentDate = new Date();

  const timeDifferenceInSeconds = Math.floor(
    (currentDate.getTime() - postDate.getTime()) / 1000
  );

  const secondsInMinute = 60;
  const secondsInHour = 60 * secondsInMinute;
  const secondsInDay = 24 * secondsInHour;
  const secondsInMonth = 30 * secondsInDay;
  const secondsInYear = 365 * secondsInDay;

  if (timeDifferenceInSeconds < secondsInMinute) {
    return `${timeDifferenceInSeconds} seconds ago`;
  } else if (timeDifferenceInSeconds < secondsInHour) {
    const minutes = Math.floor(timeDifferenceInSeconds / secondsInMinute);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (timeDifferenceInSeconds < secondsInDay) {
    const hours = Math.floor(timeDifferenceInSeconds / secondsInHour);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (timeDifferenceInSeconds < secondsInMonth) {
    const days = Math.floor(timeDifferenceInSeconds / secondsInDay);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (timeDifferenceInSeconds < secondsInYear) {
    const months = Math.floor(timeDifferenceInSeconds / secondsInMonth);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    const years = Math.floor(timeDifferenceInSeconds / secondsInYear);
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
}

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};
