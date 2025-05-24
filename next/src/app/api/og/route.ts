import { ImageResponse } from "next/og";
import { NextResponse } from "next/server";
import React from "react";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Latest Blog";

    return new ImageResponse(
      React.createElement(
        "div",
        {
          style: {
            backgroundColor: "black",
            backgroundSize: "150px 150px",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
          },
        },
        // Vercel logo image
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            },
          },
          React.createElement("img", {
            alt: "Vercel",
            height: 200,
            width: 232,
            src: "data:image/svg+xml,%3Csvg width='116' height='100' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M57.5 0L115 100H0L57.5 0z' /%3E%3C/svg%3E",
            style: { margin: "0 30px" },
          }),
        ),
        // Title text
        React.createElement(
          "div",
          {
            style: {
              fontSize: 60,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              color: "white",
              marginTop: 30,
              padding: "0 120px",
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
            },
          },
          title,
        ),
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to generate the image", details: error },
      {
        status: 500,
      },
    );
  }
}
