import { Request } from "express";
import { validate } from "@tma.js/init-data-node";

export function userReqVerified(req: Request) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    // Split the Authorization header to separate the type and token
    const [authType, authToken] = authHeader.split(" ");

    if (authType === "tma" && authToken) {
      validate(authToken, process.env.BOT_TOKEN as string, { expiresIn: 0 });
    } else {
      throw new Error("Invalid Authorization header");
    }
  } else {
    throw new Error("Authorization header not found");
  }
}

export function needTodayNotif(reservationData: object) {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("fa-IR", {
    timeZone: "Asia/Tehran",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    numberingSystem: "latn",
  });
  const formattedDate = formatter.format(date);
  return Object.keys(reservationData).includes(formattedDate);
}

export function getCurrentJalaliDate() {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("fa-IR", {
    timeZone: "Asia/Tehran",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    numberingSystem: "latn",
  });
  const formattedDate = formatter.format(date);
  return formattedDate;
}

export async function fetchWithRetry(
  url: string,
  options: RequestInit,
  maxRetries = 3
) {
  let retryCount = 0;

  const fetchWithRetryRecursive: () => Promise<Response> = async () => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response;
    } catch (error) {
      retryCount++;
      if (retryCount <= maxRetries) {
        console.log(`Fetch failed, retrying (${retryCount}/${maxRetries})...`);
        return fetchWithRetryRecursive(); // Retry the request
      } else {
        console.error(`Fetch failed after ${maxRetries} retries.`);
        throw error;
      }
    }
  };

  return fetchWithRetryRecursive();
}
