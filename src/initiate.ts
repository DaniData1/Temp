import * as pw from "playwright";
import { locations } from "./data";
import type { Locator } from "playwright";
// import type { Request, Response } from "express";

const userData = {
  cookies: [
    {
      name: "_ga",
      value: "GA1.2.762414500.1719301045",
      domain: ".melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
    {
      name: "_gid",
      value: "GA1.2.255144476.1719301045",
      domain: ".melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
    {
      name: "_gat",
      value: "1",
      domain: ".melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
    {
      name: "CLID",
      value: "4bef8c65cb8c4c3a91539f9a721185ec.20240625.20250625",
      domain: "www.clarity.ms",
      path: "/",
      expires: 2208988800,
      httpOnly: true,
      secure: true,
      sameSite: "None",
    },
    {
      name: "_gcl_au",
      value: "1.1.630010125.1719301047",
      domain: ".melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
    {
      name: "gearbox_ad_token",
      value: "cc81679a-a3e37-74e01-139e0-00c8ebdbdb7da",
      domain: ".yektanet.com",
      path: "/",
      expires: 2208988800,
      httpOnly: true,
      secure: true,
      sameSite: "None",
    },
    {
      name: "analytics_global_token",
      value: "cc81679a-a3e37-74e01-139e0-00c8ebdbdb7da",
      domain: ".yektanet.com",
      path: "/",
      expires: 2208988800,
      httpOnly: true,
      secure: true,
      sameSite: "None",
    },
    {
      name: "_hjSession_880670",
      value:
        "eyJpZCI6ImRkM2MyNWMzLWIxYmYtNDc2OS1iZjNmLWNhNDNlYWExZmRjZiIsImMiOjE3MTkzMDEwNDg3ODcsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjoxLCJzcCI6MH0=",
      domain: ".melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: true,
      sameSite: "None",
    },
    {
      name: "_clck",
      value: "ivgaat%7C2%7Cfmx%7C0%7C1637",
      domain: ".melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
    {
      name: "analytics_session_token",
      value: "d5e5cb8f-370e-2fb4-02f7-6a952ae50d34",
      domain: "melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
    {
      name: "yektanet_session_last_activity",
      value: "6/25/2024",
      domain: "melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
    {
      name: "_yngt_iframe",
      value: "1",
      domain: "melkradar.com",
      path: "/",
      expires: -1,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
    {
      name: "_yngt",
      value: "8adf4031-ef54-4de2-a33f-f588d73eba03",
      domain: "melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
    {
      name: "MUID",
      value: "24EEA275E7DE6B4C355BB6DCE6A76AEF",
      domain: ".bing.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: true,
      sameSite: "None",
    },
    {
      name: "MR",
      value: "0",
      domain: ".c.bing.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: true,
      sameSite: "None",
    },
    {
      name: "SRM_B",
      value: "24EEA275E7DE6B4C355BB6DCE6A76AEF",
      domain: ".c.bing.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: true,
      sameSite: "None",
    },
    {
      name: "SM",
      value: "C",
      domain: ".c.clarity.ms",
      path: "/",
      expires: -1,
      httpOnly: false,
      secure: true,
      sameSite: "None",
    },
    {
      name: "MUID",
      value: "24EEA275E7DE6B4C355BB6DCE6A76AEF",
      domain: ".clarity.ms",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: true,
      sameSite: "None",
    },
    {
      name: "MR",
      value: "0",
      domain: ".c.clarity.ms",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: true,
      sameSite: "None",
    },
    {
      name: "ANONCHK",
      value: "0",
      domain: ".c.clarity.ms",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: true,
      sameSite: "None",
    },
    {
      name: "IDE",
      value: "AHWqTUk1sb86JP65sm_gE0gyjvb9n-cpDs30KPB9XgIdvzn8Zje8ZTp61WVYvI8x",
      domain: ".doubleclick.net",
      path: "/",
      expires: 2208988800,
      httpOnly: true,
      secure: true,
      sameSite: "None",
    },
    {
      name: "access_token",
      value:
        "eyJhbGciOiJSUzI1NiIsImtpZCI6IkMwOTYyNEZGNUQ5OTkyNkJFQkM4RTgwNkMxMUFGQjVDQ0I0NEI0NTkiLCJ4NXQiOiJ3SllrXzEyWmttdnJ5T2dHd1JyN1hNdEV0RmsiLCJ0eXAiOiJKV1QifQ.eyJuYmYiOjE3MTkzMDEwNjgsImV4cCI6MTcxOTkwNTg2OCwiaXNzIjoiTWVsa1JhZGFyLkFwcC5QZW9wbGVQYW5lbCIsImF1ZCI6Ik1lbGtSYWRhci5BcHAuUGVvcGxlUGFuZWwvcmVzb3VyY2VzIiwiY2xpZW50X2lkIjoiTWVsa1JhZGFyUGVvcGxlQXBwIiwic2NvcGUiOltbXSxbXSxbXV0sInN1YiI6IjQ2NGNiN2JjLWVjYWEtNDI2ZS1hODQ2LTgwNmM5NGU1Mjg3NCIsImF1dGhfdGltZSI6MTcxOTMwMTA2OCwiaWRwIjoiaWRzcnYiLCJuYW1lIjoiNDY0Y2I3YmMtZWNhYS00MjZlLWE4NDYtODA2Yzk0ZTUyODc0IiwidG9rZW4iOiI0MjdmYmJmNC1hY2MzLTQzNzAtYThlYi1iOTk0NDljODVkMDUiLCJqdGkiOiJpOWtOVUtXaFZySUZWQURjU0V0UGtTTjJHZklyOTNjRFpndm5ZamtoNWVFIiwiYW1yIjpbW11dfQ.m39KJnsZgd-H-b1qDxePwbEzx60RqZL8NG2dXzVHwOft1kTOJLG5Q-uMS3o5AJ6sR42Llg8HOl40itFV5SwgpCPe885WDzyUVvicW2OKXIAgyxC4MGSv1cT0yjFWDFPx1YcYNEytAJYJIKEjtkz5uDPXSutgTMYuV-T1HJkBjp63CASFvw0Okpy4JJ6vpJ8dKHZUVd3oiBgDZWganYkxTaytr1JCGCF2m0JCQF4X33szy530ze7MNW_sqPWzP8PDb_mg4z0IeMr50FOCl_6vyrUJoqLqpttZ19Xt03-BxNmdZKUtrRi_x-OasLuD9EdevylmkYdlYn_TxrhdJNFTog",
      domain: "melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
    {
      name: "token_type",
      value: "Bearer",
      domain: "melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
    {
      name: "ai_user",
      value: "p5iLh|2024-06-25T07:37:52.883Z",
      domain: "peoplesetting.melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: true,
      sameSite: "None",
    },
    {
      name: "ai_session",
      value: "KWPkk|1719301072885.7|1719301072885.7",
      domain: "peoplesetting.melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: true,
      sameSite: "None",
    },
    {
      name: "_hjSessionUser_880670",
      value:
        "eyJpZCI6IjBhMWYwZWVkLTI5YWEtNTc3NC1hOTQwLTJkNjVlNTFkZWM2NiIsImNyZWF0ZWQiOjE3MTkzMDEwNDg3ODIsImV4aXN0aW5nIjp0cnVlfQ==",
      domain: ".melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: true,
      sameSite: "None",
    },
    {
      name: "_ga",
      value: "GA1.3.762414500.1719301045",
      domain: ".peoplesetting.melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
    {
      name: "_gid",
      value: "GA1.3.255144476.1719301045",
      domain: ".peoplesetting.melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
    {
      name: "_gat_UA-89031171-2",
      value: "1",
      domain: ".peoplesetting.melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
    {
      name: "_ga_5L7Y0TV041",
      value: "GS1.3.1719301046.1.1.1719301084.22.0.0",
      domain: ".peoplesetting.melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
    {
      name: "analytics_token",
      value: "0646ab2a-3d43-fd81-2aa9-0c3400c903ba",
      domain: "melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
    {
      name: "ai_user",
      value: "3rQ2a|2024-06-25T07:38:05.655Z",
      domain: "melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: true,
      sameSite: "None",
    },
    {
      name: "_ga_5L7Y0TV041",
      value: "GS1.2.1719301046.1.1.1719301085.21.0.0",
      domain: ".melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
    {
      name: "ai_session",
      value: "owMPh|1719301086182.8|1719301086182.8",
      domain: "melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: true,
      sameSite: "None",
    },
    {
      name: "_clsk",
      value: "t1598g%7C1719301086395%7C3%7C1%7Cx.clarity.ms%2Fcollect",
      domain: ".melkradar.com",
      path: "/",
      expires: 2208988800,
      httpOnly: false,
      secure: false,
      sameSite: "Lax",
    },
  ],
  origins: [
    {
      origin: "https://melkradar.com",
      localStorage: [
        {
          name: "_yngt",
          value: "8adf4031-ef54-4de2-a33f-f588d73eba03",
        },
        {
          name: "/login_date",
          value: "Tue Jun 25 2024 11:07:52 GMT+0330 (Iran Standard Time)",
        },
        {
          name: "/client_panel_token",
          value: '"427fbbf4-acc3-4370-a8eb-b99449c85d05"',
        },
        {
          name: "/access_token",
          value:
            "eyJhbGciOiJSUzI1NiIsImtpZCI6IkMwOTYyNEZGNUQ5OTkyNkJFQkM4RTgwNkMxMUFGQjVDQ0I0NEI0NTkiLCJ4NXQiOiJ3SllrXzEyWmttdnJ5T2dHd1JyN1hNdEV0RmsiLCJ0eXAiOiJKV1QifQ.eyJuYmYiOjE3MTkzMDEwNjgsImV4cCI6MTcxOTkwNTg2OCwiaXNzIjoiTWVsa1JhZGFyLkFwcC5QZW9wbGVQYW5lbCIsImF1ZCI6Ik1lbGtSYWRhci5BcHAuUGVvcGxlUGFuZWwvcmVzb3VyY2VzIiwiY2xpZW50X2lkIjoiTWVsa1JhZGFyUGVvcGxlQXBwIiwic2NvcGUiOltbXSxbXSxbXV0sInN1YiI6IjQ2NGNiN2JjLWVjYWEtNDI2ZS1hODQ2LTgwNmM5NGU1Mjg3NCIsImF1dGhfdGltZSI6MTcxOTMwMTA2OCwiaWRwIjoiaWRzcnYiLCJuYW1lIjoiNDY0Y2I3YmMtZWNhYS00MjZlLWE4NDYtODA2Yzk0ZTUyODc0IiwidG9rZW4iOiI0MjdmYmJmNC1hY2MzLTQzNzAtYThlYi1iOTk0NDljODVkMDUiLCJqdGkiOiJpOWtOVUtXaFZySUZWQURjU0V0UGtTTjJHZklyOTNjRFpndm5ZamtoNWVFIiwiYW1yIjpbW11dfQ.m39KJnsZgd-H-b1qDxePwbEzx60RqZL8NG2dXzVHwOft1kTOJLG5Q-uMS3o5AJ6sR42Llg8HOl40itFV5SwgpCPe885WDzyUVvicW2OKXIAgyxC4MGSv1cT0yjFWDFPx1YcYNEytAJYJIKEjtkz5uDPXSutgTMYuV-T1HJkBjp63CASFvw0Okpy4JJ6vpJ8dKHZUVd3oiBgDZWganYkxTaytr1JCGCF2m0JCQF4X33szy530ze7MNW_sqPWzP8PDb_mg4z0IeMr50FOCl_6vyrUJoqLqpttZ19Xt03-BxNmdZKUtrRi_x-OasLuD9EdevylmkYdlYn_TxrhdJNFTog",
        },
        {
          name: "analytics_token",
          value: "0646ab2a-3d43-fd81-2aa9-0c3400c903ba",
        },
        {
          name: "/token_type",
          value: "Bearer",
        },
        {
          name: "/expires_in",
          value: "3155695200",
        },
        {
          name: "/mobile_no",
          value: '"09034032676"',
        },
        {
          name: "yk_sstidsmap",
          value:
            '{"bf70e925-71ea-4912-bb0c-95a2984e5fef":"d5e5cb8f-370e-2fb4-02f7-6a952ae50d34","b70912d8-a7ea-4fc4-95c5-09e1c67db4cc":"d5e5cb8f-370e-2fb4-02f7-6a952ae50d34"}',
        },
        {
          name: "yk_spv",
          value: "d5e5cb8f-370e-2fb4-02f7-6a952ae50d34",
        },
        {
          name: "/scope",
          value: "openid%20profile%20user_info",
        },
        {
          name: "/people_client_id",
          value: '"464cb7bc-ecaa-426e-a846-806c94e52874"',
        },
      ],
    },
    {
      origin: "https://peoplesetting.melkradar.com",
      localStorage: [
        {
          name: "ai_session",
          value: "KWPkk|1719301072885.7|1719301072885.7",
        },
      ],
    },
  ],
};

export default async function initiate() {
  const browser = await pw.chromium.launch({ headless: false });
  const page = await browser.newPage({ storageState: userData as any });
  await page.goto("https://melkradar.com/p/search");
  await page.waitForLoadState("domcontentloaded");

  await page.locator(".area-selection").click();

  for (const location of locations) {
    const text = (await page
      .locator(".desktop-area-item .desktop-area-item-content")
      .waitFor({ timeout: 5000 })) as unknown as Locator;
    if (text && location) {
      text.evaluate((textEl) => {});
    }
  }

  // .desktop-area-item .check-box
  // .desktop-area-item-content

  await page.waitForTimeout(5 * 60 * 1000);

  // we have to return and error response so user can provide the right credentials
}
